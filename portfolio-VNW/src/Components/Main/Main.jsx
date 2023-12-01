import React from "react";
import { MainSyled } from "./MainStyled";
import Banner from "./Components/Banner/Banner"
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contacts from './Components/Contacts/Contacts';
import Services from "./Components/Services/Services";

export default function Main() {
  return (
    <MainSyled>
      <Banner/>
      <About/>
      <Services/>
      <Projects/>
      <Contacts/>
    </MainSyled>
  );
}
