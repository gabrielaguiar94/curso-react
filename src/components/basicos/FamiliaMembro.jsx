import React from 'react';

export default function FamiliaMembro(props) {
    return (
        <div>
            {props.name} <strong>{props.lastName}</strong>
        </div>
    )
}