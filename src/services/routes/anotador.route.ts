import { Router } from "express";
import { criarAnotadorController } from "../factories/anotador.factory.js";

const router = Router ();
const basePath = '/anotar';
//const controller = 

//GET /anotador
router.get(basePath, criarAnotadorController().tratador);

export {router, basePath};