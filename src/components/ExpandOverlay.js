import React from "react";
import styled from "styled-components";


const Overlay = styled.button`
  position: absolute;
  z-index: 1001;
  text-align: left;
  text-indent: -9999px;
  border: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(47, 86, 166, 0.25);

  &:hover {
    background-color: rgba(47, 86, 166, 0);
    cursor: pointer;
  }

  &:focus {
    background-color: rgba(47, 86, 166, 0);
  }
`;

const Condense = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 1em;
  border-color: rgb(238, 238, 238);
  background-color: rgb(203,203,203);
  border-style: solid none;
  border-width: 1px 0px;
  border-radius: 2px;
  padding: 4px 14px 6px;
  text-align: center;
  text-decoration: none;
  color: rgb(97, 97, 97);
  font-weight: 800;
  z-index: 1001;

  &:hover {
    background-color: rgb(255, 255, 255);
  }
`;

const ExpandOverlay = ({onClick, expanded}) => {
    return !expanded ? (
        <Overlay onClick={onClick}>Expand map</Overlay>
    ) : (
        <Condense onClick={onClick}>Condense map</Condense>
    );
};

export default ExpandOverlay;
