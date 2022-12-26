import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
  }

  a {
    color: inherit;
    text-decoration: underline;

    &:hover {
      color: red;
      }
  }

  p {
    font-size: 20px;
    margin-top: 0;
    line-height: 1.65em;

  }    
  
  ::placeholder {
    font-size: 20px;
    line-height: 1.65em;
}
  
  li {
    font-size: 20px;
    line-height: 1.65em;
  }


  img {
    max-width: 95%;
    height: auto;
    border-radius: 8px; 
    display: block;
    margin: auto;
  }

  h1{
    line-height: 2.2rem;
    margin: 3rem auto 8px auto;
    padding
  }
  
  h2{
    font-size: 1.75em;
    margin: 3rem 0 0 0;
    }
  
  h3{
    font-size: 1.6em;
    margin: 2rem 0 0 0;

  }

  h4{
    font-size: 1.4em;
  }

  h5{
    font-size: 20px;
  }

  h6{
    font-size: 20px;
    margin-bottom: 5px;
    padding-bottom: 0;
    line-height: 1.65em;
  }

  * {
    font-family: "Noto Sans",sans-serif;
  }

  u {
    background-color: #26374a;
    border-color: #26374a;
    text-decoration: none;
    font-family: Lato,sans-serif;
    border-style: outset;
    height: auto;
    min-height: 36px;
    min-width: 36px;
    white-space: normal;
    color: #fff;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    padding: 10px 14px;
    font-size: 16px;
    line-height: 1.4375;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .coffee {
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

    &:hover {
      color: black;
      box-shadow: 5px 5px 10px grey;
      margin-top: -2px;
      margin-bottom: 2px;
    }
  }
`

export default GlobalStyle
