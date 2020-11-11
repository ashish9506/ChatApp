import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100vh;
    width: 100%;
    
  }

  body {
   font-family: 'Roboto', sans-serif;
   margin:0
   padding:0

  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Source Sans Pro', sans-serif;
    line-height: 1.5em;
  }
  .heading{
    color:red
  }
 
  .container-fluid{
    margin:0,
    padding:0

  }
  .sidebar{
    background-color:#2d3436
    color:ghostwhite
    height:100vh
    overflow-y:auto
    padding:0
    margin:0
  }
  .main{
    background-color:#1a191b
    color:ghostwhite
    height:100vh
    padding:1rem
  }
  .contactDiv{
    padding:0.1rem 2rem 0 2rem
    height:auto

    transition:0.5s
  
  }
  .contactDiv:hover{
    background-color:#1a191b
    cursor:pointer
  }
  .profilePic{
   
    object-fit: cover;
    background-size:cover
  }


  
`;

export default GlobalStyle;
