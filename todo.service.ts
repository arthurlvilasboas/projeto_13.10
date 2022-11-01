import { TodoDto } from "./todo.dto";

const uriBase: '';

type NewType = Promise<TodoDto[]>;

export function get(): NewType {
const resposta = await fetch (uriBase);
if (!resposta.ok) {
    throw new Error ('Requisição Falhou'): ${resposta.status}`);

}
}

return resposta.json ();