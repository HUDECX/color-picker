import React from 'react'
import styledComponents from 'styled-components'


const ColorBunka = styledComponents.div`
    position: relative;
    height: 5rem;
    background-color: ${props => props.color ? props.color : "red"};
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bolder;
    cursor: pointer;
    transition: filter .1s ease-in-out,transform .1s ease-in-out;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &:hover{
      transform: scale(1.05);
      filter: drop-shadow(0px 0px 7px ${props => props.color ? props.color : "black"});
    };
    &::after{
      opacity: .7;
      font-size: .9rem;
      content:"copy to clipboard";
      position: absolute;
      bottom: .5rem;
      right: 1rem;
    }
    `;


export default function Color({color}) {
  return (
    <>
      <div className="col-3 mb-2 color-container" onClick={() => navigator.clipboard.writeText(color)}>
          <ColorBunka color={color}>{color}</ColorBunka>
      </div>
    </>
  )
}
