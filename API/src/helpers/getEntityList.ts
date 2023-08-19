import { EntityMetadata, Repository } from "typeorm";
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';

interface EntityFilter {
    [key: string]: any;
};

interface IRelations {
    [key: string]: (boolean | { [key: string]: boolean })
}

export class GetEntityList<T extends EntityFilter> {
    private repository: Repository<T>;

    constructor(repository: Repository<T>) {
        this.repository = repository;
    };

    public async getEntityList(params: { [key: string]: any }) {
        const page = params?.['page'] ?? 1;
        const pageSize = params?.['pageSize'] ?? 20;

        const searchParameters = this.getValidSearchParameters(params);

        searchParameters.skip = ((+page - 1) * +pageSize);
        searchParameters.take = +pageSize;

        return await this.repository.findAndCount(searchParameters);
    };

    private getValidSearchParameters(params: { [key: string]: any }): FindManyOptions {

        const validWhereKeys = this.getValidFilterKeys(params);
        const validRelationsKeys = this.getValidRelations(params);

        const parameters: FindManyOptions = {};

        if (validWhereKeys) {
            parameters.where = validWhereKeys;
        };

        if (validRelationsKeys) {
            parameters.relations = validRelationsKeys;
        };

        return parameters;
    };

    private getValidFilterKeys(params: { [key: string]: any }): { [key: string]: any } {
        this.getValidRelations((params));
        const filterKeys = Object.keys(params);

        const validKeys = filterKeys?.filter((key) =>
            this.repository?.metadata?.columns?.find((column) => column?.propertyPath === key)
        );

        const filterObject: Partial<T> = validKeys.reduce((obj, key) => {
            obj[key as keyof T] = params[key];
            return obj;
        }, {} as Partial<T>);

        return filterObject;
    };

    private getValidRelations(params: { [key: string]: any }): IRelations {
        const relationsKeys: string[] = params?.relations?.split(',');

        const validRelationPaths: string[] = [];

        const metadata = this.repository.metadata;

        for (const relation of relationsKeys) {
            const pathSegments = relation?.split('.');
            if (this.validateRelationPath(metadata, pathSegments)) {
                validRelationPaths.push(relation);
            };
        };

        const relationsObject = this.constructRelationsPathObject(validRelationPaths);

        return relationsObject;
    };

    private validateRelationPath(entityMetadata: EntityMetadata, segments: string[]): boolean {

        if (segments.length === 0) {
            return true;
        };

        const relationMetas = entityMetadata.relations;

        const currentSegment = segments[0];
        const relationMeta = relationMetas.find(meta => meta.propertyName === currentSegment);

        if (relationMeta) {
            const relatedEntityMetadata = relationMeta.inverseEntityMetadata;
            return this.validateRelationPath(relatedEntityMetadata, segments.slice(1));
        } else {
            return false;
        };
    };

    private constructRelationsPathObject(paths: string[]) {
        const result: IRelations = {};

        for (const string of paths) {
            const segments = string.split('.');
            let currentObj: IRelations = result;

            for (let i = 0; i < segments.length; i++) {
                const segment = segments[i];
                if (!currentObj[segment]) {
                    if (i === segments.length - 1) {
                        currentObj[segment] = true;
                    } else {
                        currentObj[segment] = {};
                    }
                }
                currentObj = currentObj[segment] as IRelations;
            };
        };

        return result;
    };
};