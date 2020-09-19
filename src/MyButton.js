import React, { useState } from 'react';

export default function MyButton() {
    const [titulo, setTitulo] = useState('Clique me');
    const [list, setList] = useState([]);

    const toggle = () => {
         setList([
             { nome: "Pessoa 1" },
             { nome: "Pessoa 2" },
             { nome: "Pessoa 3" },
             { nome: "Pessoa 4" },
             { nome: "Pessoa 5" }
         ]);

         setTitulo(titulo === 'Clique me' ? 'Desclique me' : 'Clique me');
    }

    return ( 
        <>
            <section>
                {list.map((pessoa, index) => <div key={index} data-testid="pessoa-id">{pessoa.nome}</div>)}
            </section>
            <button onClick={toggle} style={{padding: "20px"}}>{titulo}</button>
        </>
    );
}