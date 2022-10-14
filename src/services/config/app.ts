import express from "express";
import configMiddleware from './middleware.js'
import configRoutes from './middleware.js'

const porta = process.env.PORT || 3000;
const app = express();
app.set('port',porta);
//configurar middleware
configMiddleware(app);
//configurar as rotas
configRoutes(app);

export default app;