import {Express, Router} from "express";
import * as RotaAnotar from '../../services/routes/anotador.route.js'

export default function routes(app : Express) {

const api = '/api';

app.use(`${api}/${RotaAnotar.basePath}`, RotaAnotar.router);

app.get('/', (request, response) => {
  response.send('Hello world!');
});
}