import { AnotadorController } from "../../controllers/anotador.controller.js";
import { Anotacao } from "../../usecases/anotador.js";
import { PassaroRepositoryMongoose } from "../../repositories/passarorepository_mongoose.js";

export function criarAnotadorController() {
    const passaroRepositoryMongoose = new PassaroRepositoryMongoose;
    const anotador = new Anotacao(passaroRepositoryMongoose);
    const anotadorController = new AnotadorController(anotador);
    return anotadorController;
}
