import { Date } from "mongoose";
import { Passaro } from "../entities/passaro.js";
import { PassaroRepository } from "../repositories/passarorepository.js";
import {PassaroRepositoryMongoose} from '../repositories/passarorepository_mongoose.js'
import { jest } from '@jest/globals';


//teste com mock
const mockBuscarPorNome = jest.fn().mockImplementation (() => 
new Promise<Passaro>((resolve, reject) => {
   resolve({
    nomePortugues: 'ema',
    nomeIngles: 'Greater Rhea',
    nomeCientifico: 'Rhea americana',
    cor: 'cinza',
    habitat: 'campo',
    tamanhoCm: 150  
})
})  );
 jest.mock ('../repositories/passarorepository_mongoose.js'), () => {
    return {
        PassaroRepositoryMongoose: jest.fn(). mockImplementation(() => {
            return {buscarPorNomePT: mockBuscarPorNome};
        }),
        };
    
 }
 const passaroRepositoryMock = new PassaroRepositoryMongoose ();

test ( 
'deve buscar nome do passaro', async () => {
 const resultado = await mockBuscarPorNome ('ema')
     expect (resultado).toStrictEqual({
        nomePortugues: 'ema',
        nomeIngles: 'Greater Rhea',
        nomeCientifico: 'Rhea americana',
        cor: 'cinza',
        habitat: 'campo',
        tamanhoCm: 150  
    })
    expect (mockBuscarPorNome).toBeCalled();
}
);
