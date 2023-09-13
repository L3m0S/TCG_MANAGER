
export interface IProducer {

    /*
        Metodo para enviar uma mensagem para a qeue.
    */
    produceMessage(message: string): Promise<void>;
};