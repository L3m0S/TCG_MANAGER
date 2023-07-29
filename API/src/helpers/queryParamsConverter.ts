import { Repository } from "typeorm";

interface EntityFilter {
    [key: string]: any;
};

export class QueryParamsConverter<T extends EntityFilter> {
    private repository: Repository<T>;

    constructor(repository: Repository<T>) {
        this.repository = repository;
    };

    public async paramsConverter(params: { [key: string]: any }) {
        const page = params?.['page'] ?? 1;
        const pageSize = params?.['pageSize'] ?? 20;

        const filterKeys = Object.keys(params);

        const validKeys = filterKeys.filter((key) =>
            this.repository.metadata.columns.find((column) => column.propertyPath === key)
        );

        const filterObject: Partial<T> = validKeys.reduce((obj, key) => {
            obj[key as keyof T] = params[key];
            return obj;
        }, {} as Partial<T>);

        return await this.repository.findAndCount({
            where: filterObject,
            skip: ((+page - 1) * +pageSize),
            take: +pageSize
        });
    };
};