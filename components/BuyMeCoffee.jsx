import React from 'react'
import styled from 'styled-components'

const BuyMeCoffee = () => {
  return (
    <a style={{textDecoration: "none"}} href="https://www.buymeacoffee.com/israelpanopio" target="_blank" >
    <MobileCoffee>
      Support this website. Buy me a coffee.
    </MobileCoffee>
    </a>
  )
}

export default BuyMeCoffee

const MobileCoffee = styled.div`
display: inline-block;
background: #FFDD00 url("/bmc-logo.svg") no-repeat;
background-position: 5%;
background-size: 25px;
background: fill;
padding: 15px 20px 15px 45px;
border-radius: 15px;
color: black;
font-family: Cookie,sans-serif;
font-size: 25px;
box-sizing: border-box;
margin-bottom: 10px;

&:hover {
  color: black;
  box-shadow: 5px 5px 10px grey;
  margin-top: -2px;
  margin-bottom: 12px;
}
`