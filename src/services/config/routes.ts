import { Express } from "express";
import * as RotaConversao from '../../services/routes/anotador.route.js'

export default function routes(app: Express) {
    const api = process.env.API_VERSION ? `/api/${process.env.API_VERSION}`
                                        : '/api';
    //Rota de conversão
    app.use(`${api}/${RotaConversao.basePath}`,RotaConversao.router);
}