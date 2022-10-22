import { Date } from "mongoose";
import { Passaro } from "../entities/passaro.js";
import { PassaroRepository } from "../repositories/passarorepository.js";
import {PassaroRepositoryMongoose} from '../repositories/passarorepository_mongoose.js'


//teste com mock
const mockBuscarPorNome = jest.fn();
 jest.mock ('../repositories/passarorepository_mongoose.js'), () => {
    return {
        PassaroRepositoryMongoose: jest.fn (). mockImplementation(() => {
            return {buscarPorNomePT: mockBuscarPorNome};
        }),
        };
    
 }
 const passaroRepositoryMock = new PassaroRepositoryMongoose ();

test (
'deve buscar nome do passaro', async () => {
    const resultado = await passaroRepositoryMock.buscarPorNomePT ('ema');
 expect (mockBuscarPorNome).toHaveBeenCalled();
 expect (mockBuscarPorNome).toHaveBeenCalledWith ('ema');
}
);
