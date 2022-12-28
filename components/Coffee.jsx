import React from 'react'
import styled from 'styled-components'

const Coffee = () => {
  return (
    <a href="https://www.buymeacoffee.com/israelpanopio" target="_blank" >
    <MobileCoffee href="https://www.buymeacoffee.com/israelpanopio">
        <Br />
        <Icon src="/bmc-logo.svg" />
    </MobileCoffee>
    </a>
  )
}

export default Coffee

const MobileCoffee = styled.div`
    background-color: #ff813f;
    border: none;
    border-radius: 100px;
    right: 18px;
    width: 60px;
    height: 60px;
    position: fixed;
    bottom: 15px;
    z-index: 10;
    justify-content: center;
    box-shadow: 5px 5px 10px grey;

  @media screen and (max-width: 900px) {
    width: 45px;
    height: 45px;
}

&:hover {
  color: black;
  box-shadow: 8px 8px 20px grey;
  padding: 1px;
}
`
const Br = styled.div`
    height: 10px;

  @media screen and (max-width: 900px) {
    height: 5px;
}
`
const Icon = styled.img`
    height: 40px;
    width: auto;

@media screen and (max-width: 900px) {
    height: 35px;
    width: auto;
}
`