import React from 'react';
import './card.css';

export default function Card(props) {

    return (
        <div className="card" style={{
            backgroundColor: props.color || '#008',
            borderColor: props.color || '#008',
        }}>
            <div className="title">{props.titulo}</div>
            <div className="content">{props.children}</div>
        </div>
    )
}