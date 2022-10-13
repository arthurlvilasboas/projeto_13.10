import { Passaro } from "../entities/passaro.js";
import {model, Schema} from 'mongoose';

const PassaroSchema = new Schema<Passaro>({
    nomePortugues: {type: String, required: false},
    nomeIngles: {type: String, required: false},
    nomeCientifico: {type: String, required: false},
    cor: {type: String, required: false},
    habitat: {type: String, required: false},
    tamanhoCm: {type: Number, required: false, min: 0}   
});

export const PassaroModel = model<Passaro>('Passaro', PassaroSchema,'passaros');