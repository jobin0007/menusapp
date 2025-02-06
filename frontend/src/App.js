// App.js
import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import Router from '../src/Router'
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header/>
      <Router /> 
      <Footer /> 
    </>
  );
}

export default App;
