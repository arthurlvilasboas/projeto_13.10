import { Date } from "mongoose";
import { Passaro } from "../entities/passaro.js";
import { PassaroRepository } from "../repositories/passarorepository.js";

export class Anotacao {
    constructor(private repositorio: PassaroRepository){}
    async anotarPassaro(nomePassaro: string, data: Date){
        const passaro = await this.repositorio.buscarPorNomePT(nomePassaro);
        if (!passaro) {
            throw new Error('Passaro nao encontrado');
        }
        return `No dia ${data}, foi avistado o passaro ${passaro}`;
    }
}