import React from "react";
import "./App.css";
import { Header, About, Services, Contact, Footer } from "../src/components";

const App = () => {
  return( 
  <div className="App">
    <Header />
    <About />
    <Services />
    <Contact />
    <Footer />
  </div>
  );
};

export default App;