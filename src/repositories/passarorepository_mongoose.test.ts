import {Passaro} from '../entities/passaro.js'
import {PassaroRepository} from './passarorepository.js'
import {PassaroRepositoryMongoose} from './passarorepository_mongoose'
import baseDeDados from '../helper/tests/mongodb_helper.js'

describe('PassaroRepositoryMongoose', () => {
    beforeAll(async () => {
        await baseDeDados.abrir();
    });
    afterAll(async () => {
        baseDeDados.fechar();
    });
    afterEach(async () => {
        await baseDeDados.limpar();
    });
    describe('buscaPorNomePT()', () => {
        const repositorio: PassaroRepository = new PassaroRepositoryMongoose();
        test('deve retornar null para nome não encontrado', async () => {
            const nomePortugues = 'XXXX';
            const passaro = await repositorio.buscarPorNomePT(nomePortugues);
            expect(passaro).toBeNull();
        });
        test('deve retornar nome correto para passaro ema', async () => {
            const nomePortugues = 'ema';
            const passaros = await repositorio.buscarPorNomePT(nomePortugues);
            expect(passaros).toBeDefined();
            expect(passaros?.cor).toBe('cinza');
            expect(passaros?.habitat).toBe('campo');
            expect(passaros?.tamanhoCm).toBeGreaterThanOrEqual(130);
        });
    });
});