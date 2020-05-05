import React from 'react'
import styled from "styled-components";

const Overlay = styled.button`
    text-align: left;
    text-indent: -9999px;
    border: 0;
    height: inherit;
    width: 100%;
    z-index: 1000;
    position: fixed;
    background-color: rgba(47,86,166,.25);
    
    &:hover {
      background-color: rgba(47,86,166,0);
      cursor: pointer;
    }
    
    &:focus {
      background-color: rgba(47,86,166,0);
    }
`

const ExpandOverlay = ({onClick, expanded}) => {
    return ( !expanded ? <Overlay onClick={onClick} /> : null)
}

export default ExpandOverlay