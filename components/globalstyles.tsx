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
  

  
  li {
    font-size: 20px;
    line-height: 1.65em;
  }


  img {
    max-width: 95%;
    height: auto;
    border-radius: 8px; 
  }

  h2{
  margin: 0 0 0 0;
  }

  * {
    font-family: "Noto Sans",sans-serif;
  }
`

export default GlobalStyle
