import React from 'react'
import styled from 'styled-components'

const SNappi = styled.a`
    background-color: #00bbff;
    border: none;
    font-size: 1.2rem;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    transition: background-color 0.2s, box-shadow 0.4s;

    :hover {
        background-color: #00eeff;
        box-shadow: 2px 2px 6px rgba(0,0,0,0.25)
    }
`;
const Nappi = props => {
    return (
        <SNappi
        href={props.href}
        onClick={props.onclick}
        >
            {props.children}
        </SNappi>
    )
}
export default Nappi