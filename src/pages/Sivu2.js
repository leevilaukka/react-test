import React from 'react'
import {NavLink} from 'react-router-dom';
import Nappi from '../components/Nappi';


const Sivu2 = () => {
    return (
        <div>
           <h1>Tässä on sivu 2!</h1> 
           <NavLink to="/sivu2" activeClassName="active">Tästä toiselle sivulle!</NavLink>
            <Nappi href="/">Moi</Nappi>
            <Nappi>Hei</Nappi>
        </div>
    )
}
export default Sivu2