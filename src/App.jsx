import React from 'react';
import './App.css'

import Familia from './components/basicos/Familia'
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
                <Card titulo="#05 Componente com Filhos" color="#00C8F8">
                    <Familia lastName="Oliveira" />
                </Card>
                <Card titulo="#04 Desafio Aleatorio" color="#FA6900">
                    <RandomNumber min={10} max={100} />
                </Card>
                <Card titulo="#03 Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>
                <Card titulo="#02 ComParametro" color="#E8B71A">
                    <ComParametro
                        título="Situação do Aluno"
                        aluno="Gabriel Aguiar"
                        nota={9.3} />
                </Card>
                <Card titulo="#01 Primeiro Componente" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    );
}