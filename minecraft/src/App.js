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
            Skinpack creator for Minecraft 
          </h1>

          <hr className="my-2" />
        </div>
      </header>

      {/* test  asdf */}
      <p>Edit a custom skin, fill out the name for your skin, template, and version number then upload your custom skin image file as a .png then press submit.</p>
      <p style={{ textAlign: "center" }}>
        You can edit Minecraft skins and download the PNG files
        <a href="https://www.minecraftskins.net/" target="_blank"> here </a>.
      </p>
      <br></br>

      <UUID></UUID>

    <p>*This Web Application is not endorsed by or affiliated with Mojang, Microsoft or Minecraft</p>
    </div>
  </div>

  );
}

export default App;