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
`

export default GlobalStyle
