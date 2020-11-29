import React from 'react';

export default function RandomNumber(props) {

    const { min, max } = props;

    const random =
        parseInt(Math.random() * (max - min)) + min;

    return (
        <>
            <h2>Função Número Aletório</h2>
            <p>O número menor é: <strong> {min} </strong></p>
            <p> O número menor é: <strong> {max} </strong> </p>
            <p> O número escolhido: <strong>{random}</strong> </p>
        </>
    )
}