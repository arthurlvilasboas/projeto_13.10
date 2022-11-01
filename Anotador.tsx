import React, { useState } from "react";

export function Anotador() {
const [texto, setTexto] = useState ('teste');

const handleOnChange = (event: React.ChangeEvent = <HTMLInputElement>) => {
    setTexto(event.ChangeEvent.value);

};

return (
<>
<button>Clique Aqui</button>
<input value = {texto} onChange={handleOnChange}/>
<p> Sua Pesquisa foi </p>


</>
);
}