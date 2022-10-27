import mongoose from "mongoose";

const urlMongoDb = process.env.MONGO_URL || 'mongodb://localhost:21017';
try {
    console.log('Conectando com o MongoDB...');
    await mongoose.connect(urlMongoDb);
    console.log('Conectado ao MongoDB');
    console.log('Inicializando o Express...');
    const app = (await import('./services/config/app.js')).default;
    app.listen(app.get('port'), () => {
        console.log(`Rota ativa: ${app.get('routes')}`);
        console.log(`Express na porta: ${app.get('port')}`);
        console.log(`Express no modo: ${app.get('env')}`);
    });
} catch (error) {
    console.log('Falha de inicialização do servidor!');
    console.log(error);
}

