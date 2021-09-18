import React from "react";
import  Menus  from "./components/Menus";
import './App.css'

function App() {
  const data = [
    { name: "JOIN US", nameStyle: "joinus" },
    { name: "SETTINGS", nameStyle: "settings" },
    { name: "LOGIN", nameStyle: "login" },
    { name: "CONTACT US", nameStyle: "contactus" },
    { name: "SEARCH", nameStyle: "search" },
    { name: "HELP", nameStyle: "help" },
    { name: "HOME", nameStyle: "home" },
    { name: "DOWNLOAD", nameStyle: "download" },
  ]
  return (
    <div className="App Gridcontainer">
     
      {data.map(el => <Menus name={el.name} nameStyle={el.nameStyle} />
      )} 
    </div>
  ) 
}

export default App;
