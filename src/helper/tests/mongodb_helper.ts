import {MongoMemoryServer} from 'mongodb-memory-server';
import mongoose from 'mongoose';

class BdEmMemoria {
    private mongoServer?: MongoMemoryServer;
    private static intancia: BdEmMemoria;

    public static getInstancia() {
        if (!BdEmMemoria.intancia) {
            BdEmMemoria.intancia = new BdEmMemoria();
        }
        return BdEmMemoria.intancia;
    }

    public async abrir() {
        try {
            this.mongoServer = await MongoMemoryServer.create();
            const uri = this.mongoServer.getUri();
            await mongoose.connect(uri);
        } catch (error) {
            console.log('Falha de criação do BD em memória.');
            console.log(error);
            throw error;
        }
    }

    public async fechar() {
        try {
            await mongoose.connection.dropDatabase();
            await mongoose.disconnect();
            if (this.mongoServer) {
                await this.mongoServer.stop();
            }
        } catch (error) {
            console.log('Falha de encerramento do BD em memória.');
            console.log(error);
            throw error;
        }
    }

    public async limpar() {
        try {
            const colecoes = mongoose.connection.collections;
            for (const nomeColecao in colecoes) {
                const colecao = colecoes[nomeColecao];
                await colecao.deleteMany({});
            }
        } catch (error) {
            console.log('Falha de limpeza das coleções do BD em memória.');
            console.log(error);
            throw error;
        }
    }

    public async inicializarDados() {
        try {
            const passaros = mongoose.connection.collection('passaros');
            await passaros.insertMany([
                {
                    nomePortugues: 'ema',
                    nomeIngles: 'Greater Rhea',
                    nomeCientifico: 'Rhea americana',
                    cor: 'cinza',
                    habitat: 'campo',
                    tamanhoCm: 150  
                },
                {
                    nomePortugues: 'seriema',
                    nomeIngles: 'Red-legged Seriema',
                    nomeCientifico: 'Cariama cristata',
                    cor: 'cinza',
                    habitat: 'campo',
                    tamanhoCm: 70
                }
            ]);
        } catch (error) {
            console.log('Falha de inicialização das coleções do BD em memória.');
            console.log(error);
            throw error;
        }
    }
}

export default BdEmMemoria.getInstancia();
