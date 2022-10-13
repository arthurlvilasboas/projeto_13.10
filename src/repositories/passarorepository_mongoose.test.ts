import {Passaro} from '../entities/passaro.js'
import {PassaroRepository} from './passarorepository.js'
import {PassaroRepositoryMongoose} from './passarorepository_mongoose'

describe('PassaroRepositoryMongoose', () => {
    describe('buscaPorNomePT()', () => {
        test('deve retornar null para nome não encontrado', async () => {
            const repositorio: PassaroRepository = new PassaroRepositoryMongoose();
            const nomePortugues = 'XXXX';
            const passaro = await repositorio.buscarPorNomePT(nomePortugues);
            expect(passaro).toBeNull();
        });
    });
});