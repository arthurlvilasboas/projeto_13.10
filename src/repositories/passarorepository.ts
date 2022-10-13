import { Passaro } from "../entities/passaro.js";

export interface PassaroRepository {
    buscarPorNomePT(nomePortugues: string): Promise<Passaro|null>;
}