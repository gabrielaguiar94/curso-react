import React from 'react';
import FamiliaMembro from './FamiliaMembro';

export default function Familia(props) {
    return (
        <div>
            <FamiliaMembro name="Gabriel" lastName="Aguiar" />
            <FamiliaMembro name="Cida" {...props} />
            <FamiliaMembro name="Renan" lastName={props.lastName} />
        </div>
    )
}