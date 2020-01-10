import React from 'react';
import {NavLink} from 'react-router-dom';

const Hei = (props) => {
    return (
        <div>
            <h1>Hei, {props.name}</h1>
            <NavLink to="/sivu2" >Tästä toiselle sivulle!</NavLink>
        </div>
    )
}
export default Hei