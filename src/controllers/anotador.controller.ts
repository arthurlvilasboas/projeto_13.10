import { PassaroRepository } from "../repositories/passarorepository.js";
import { Anotacao } from "../usecases/anotador.js";
import { NextFunction, Request, Response } from "express";
import { AnotadorDTO } from "./anotadordto.js";

export class AnotadorController {
    constructor(
        private anotador: Anotacao
    ){}
    
    //GET /anotador
    async tratador(req:Request, res:Response, next:NextFunction) {
        try {
            const queryNomePT = req.query.passaro;
            const queryData = req.query.data;
            if (queryNomePT && queryData) {
                const nomePT = queryNomePT.toString();
                const data = queryData.toString();
                const registro = await this.anotador.anotarPassaro(nomePT, data);
                const registroDTO: AnotadorDTO = {
                    nomeDoPassaro: nomePT,
                    dataDoAvistamento: data,
                    anotacao: registro
                };
                res.json(registroDTO);
            } else {
                res.status(400).send('Parâmetros inválidos');
            }
        } catch (error) {
            next(error);
        }
    }
}