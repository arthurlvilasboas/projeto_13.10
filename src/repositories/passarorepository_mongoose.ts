import { Passaro } from "../entities/passaro.js";
import { PassaroRepository } from "./passarorepository.js";
import { PassaroModel } from "./passaromodel.js";

export class PassaroRepositoryMongoose implements PassaroRepository{
    buscarPorNomePT(nome: string): Promise<Passaro | null> {
        const consulta = PassaroModel.findOne().where('nomePortugues', nome);
        return consulta.exec()
    }
    
}