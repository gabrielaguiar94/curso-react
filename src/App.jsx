import React from 'react';
import './App.css'

import Card from './components/layout/Card'
import RandomNumber from './components/basicos/RandomNumber';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

export default function App(props) {
    return (
        <div className="app">
            <h1>Fundamentos React</h1>

            <div className="cards">
                <Card titulo="#04 Desafio Aleatorio">
                    <RandomNumber min={10} max={100} />
                </Card>
                <Card titulo="#03 Fragmento">
                    <Fragmento />
                </Card>
                <Card titulo="#02 ComParametro">
                    <ComParametro
                        título="Situação do Aluno"
                        aluno="Gabriel Aguiar"
                        nota={9.3} />
                </Card>
                <Card titulo="#01 Primeiro Componente">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    );
}