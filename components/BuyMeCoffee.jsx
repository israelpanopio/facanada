import React from 'react'
import styled from 'styled-components'

const BuyMeCoffee = () => {
  return (
    <A style={{textDecoration: "none"}} href="https://www.buymeacoffee.com/israelpanopio" target="_blank" >
    <>
    <Me src="/me.jpg" />
    <div><P>I hope you found valuable information in our website. 
      I've been investing a lot of my time to create this website and help as much as I can.</P><P>
      I want to do this for as long as I can! Your support in buying me a coffee can help me achieve this and help more people.
      </P>
    </div></>
    <MobileCoffee>
      Support this website. Buy me a coffee.
    </MobileCoffee>
    </A>
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
margin: 10px auto;

&:hover {
  color: black;
  box-shadow: 5px 5px 10px grey;
  margin-top: -2px;
  margin-bottom: 12px;
}
`

const Me = styled.img`
  height: 100px;
float: left; 
margin-right: 10px
`

const P = styled.p`
font-size: 15px;
line-height: 18px;

&:hover {
  color: black;
}
`

const A = styled.a`
&:hover {
  color: black;
}
`