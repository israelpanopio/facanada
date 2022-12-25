import React from 'react'
import styled from 'styled-components'

const BuyMeCoffee = () => {
  return (
    <a href="https://www.buymeacoffee.com/israelpanopio" >
    <MobileCoffee href="https://www.buymeacoffee.com/israelpanopio">
        <Br />
        <Icon src="/bmc-logo.svg" />
    </MobileCoffee>
    </a>
  )
}

export default BuyMeCoffee

const MobileCoffee = styled.div`
    background-color: #ff813f;
    border: none;
    border-radius: 100px;
    margin: auto 10px auto auto;
    width: 60px;
    height: 60px;
    position: sticky;
    bottom: 15px;
    z-index: 10;
    justify-content: center;
  box-shadow: 5px 5px 10px grey;

  @media screen and (max-width: 900px) {
    width: 45px;
    height: 45px;
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