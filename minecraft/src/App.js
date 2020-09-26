import React from "react";
import UUID from "./Uuid";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

return (

<div className="App">
  <div className="container">
    <header className="App-header">
      <br />

      <div className="jumbotron">
        <h1 className="display-3" style={{ textAlign: "center" }}>
          Minecraft Skin Compiler
        </h1>
        <p className="lead" style={{ textAlign: "center" }}>
          Provide the name for your skin then drag and drop your png file
        </p>

        <hr className="my-2" />
      </div>
    </header>

    {/* test  asdf */}
    <p style={{ textAlign: "center" }}>
      You can edit Minecraft skins and download the PNG files
      <a href="https://www.minecraftskins.net/" target="_blank"> here </a>
    </p>
    <br></br>

  <UUID></UUID>


  </div>
</div>

  );
}

export default App;