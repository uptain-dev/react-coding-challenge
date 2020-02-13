import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  :root{
    --dark: #111;
    --uptainGreen: #009AA3;
  }

  *{
    box-sizing: border-box;
    font-family: "Helvetica Neue",sans-serif;
  }

  body{
    margin: 0;
  }
  #root{
    max-width: 680px;
    display: grid;
    gap: 20px;
    padding: 20px;
    margin: 0 auto;
  }
`
