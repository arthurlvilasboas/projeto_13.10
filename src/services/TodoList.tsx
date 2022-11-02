import { useState, useEffect } from "react";
import { TodoDto } from "./todo.dto";
import * as TodoService from '../services/todo.service';

export function TodoList() {
    const [dados, setDados] = useState<TodoDto[]>([]);
    const [erro, setErro] = useState = ('');
    const [status, setStatus] = useState ('idle');

    useEffect (() => {
        const getTodos = async () => {
            try {
                const todos = await TodoService.get();
                setStatus('Resolved');
                setDados(todos);
                setErro('');
            } catch(error) {
                setStatus('Rejected');
                setErro((error as Error).message);
                setDados([]);

            }
        };
        setStatus ('pending');
        getTodos();
        } []);


}