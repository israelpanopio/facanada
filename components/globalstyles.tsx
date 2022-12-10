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
  }
  
  h2{
    font-size: 1.75em;
    margin: 0 0 0 0;
    }
  
  h3{
    font-size: 1.6em;
    line-height: 2.2rem;

  }

  h4{
    font-size: 1.4em;
  }

  h5{
    font-size: 20px;
  }

  h6{
    font-size: 20px;
    margin-bottom: -12px;
    padding-bottom: 0;
    line-height: 15px;
  }

  * {
    font-family: "Noto Sans",sans-serif;
  }
`

export default GlobalStyle
