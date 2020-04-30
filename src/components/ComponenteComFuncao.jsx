import React from "react";

const aprovados = ['Andrei', 'Ana', 'Julia', 'Camila']

export default props => {
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}