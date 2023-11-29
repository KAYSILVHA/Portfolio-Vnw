import React from "react"
import Footer from './../../Components/Footer/Footer';
import GlobalStyle from "../../styles/GlobalStyle";
import Header from "../../Components/Header/Header";
import Main from "../../Components/Main/Main"

function App() {

  return (
    <>
      <GlobalStyle />   
      <Header/>  
      <Main/>
      <Footer />
    </>
  )
}

export default App
