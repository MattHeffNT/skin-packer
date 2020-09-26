import React, { Component,useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { faDownload, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import FileUpload from "./fileupload";

export default class UUID extends Component {
  constructor() {
    super();
    this.state = {
      uuid: "hmm",
    };
  }

   handleButtonClick() {

    // api call to https://www.uuidgenerator.net/api

    axios.get("/getUUID").then(response => {

      let uuid1 = response.data.substr(0,36);
      let uuid2 = response.data.substr(37,76);

      sessionStorage.setItem("uuid1",`${uuid1}`);
      sessionStorage.setItem("uuid2",`${uuid2}`);

    })

    // axios.get("/upload").then(response => {

    //   console.log(response.data)
    // })

    let uuid1 = sessionStorage.getItem("uuid1");
    let uuid2 = sessionStorage.getItem("uuid2");

    let skin = document.querySelector('#skin-name').value;
    let temp = document.querySelector('#temp-name').value;
    let image = document.querySelector('#image-id').value;
    let version = document.querySelector('#version').value;
    
    // on button click try and export as json file
    let skinjson =    
      {
        "skins":[
           {
              "localization_name":`${temp}-${skin} name`,
              "geometry":"geometry.humanoid.custom",
              "texture":`${skin}.png`,
              "type":"free"
           }
        ], "serialize_name":`${temp}`,
        "localization_name":`${temp}`
    }

    let manifest = 
      {
        "format_version": 1,
        "header": {
            "name": `${temp}`,
            "uuid": `${uuid1}`,
            "version": [
                version,0,0
            ]
        },
        "modules": [
            {
                "type": "skin_pack",
                "uuid": `${uuid2}`,
                "version": [
                    1,0,0
                ]
            }
        ]
    }

    const fs = require('browserify-fs');

    fs.mkdir (`/${temp}`,function(err) {

    if (err) throw err;
    
    // write skin json file
    fs.writeFile(`/${temp}/skin.json`,JSON.stringify(skinjson), () => {
      
        fs.readFile(`/${temp}/skin.json`,'utf-8', function(err, data) {
 
              console.log(data);
          });
        }
     )

     // write manifest json file
     fs.writeFile(`${temp}/manifest.json`,JSON.stringify(manifest), () => {
      
      fs.readFile(`${temp}/manifest.json`,'utf-8', function(err, data) {
            console.log(data);
        });
      }  
     )

  // upload image maybe? who knows

  const fileSelector = document.getElementById('image-id');
  fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.readFile

    // event.target.readFile
    console.log(fileList);
  });

//   fs.appendFile(`${temp}/${name}.png`, , [options], callback)
//    fs.writeFile(`${temp}/${name}.png`,JSON.stringify(manifest), () => {
      
//     fs.readFile(`${temp}/manifest.json`,'utf-8', function(err, data) {
//           console.log(data);
//       });
//     }
//  )

    //   window.indexedDB.databases().then((r) => {
    //     for (var i = 0; i < r.length; i++) window.indexedDB.deleteDatabase(r[i].name);
    // }).then(() => {
    //     alert('All data cleared.');
    // });
  
  })

  let lang = "test"

  fs.mkdir (`/${temp}/texts`,function(err) {

      // write en_US lang file
      fs.writeFile(`/texts/en_US.lang`,lang, () => {

        fs.readFile(`${temp}/texts/en_US.lang`,'utf-8', function(err, data) {
              console.log(data);
          });
        }
      )
  })

        // make sure to reparse to JSON the saved files
        // write to files, compile into a zip
        // inject file download link into html
        // axios.post('/upload',stuff)

      document.querySelector('.form-group').innerHTML += `
        
        <br>
        <a href = "#" download = "#">
        <button type="button" className="btn btn-primary btn-lg" style = "margin-top:1em">
          Download
       
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
        <path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
        </svg>

         </button>
         </a>
        `
};

  render() {

    return (

      <div className="form-group">
      <label for="">Name for Skin</label>
      <input type="text" className="form-control" name="" id="skin-name" aria-describedby="helpId" placeholder="" />
      <label for="">Template Name</label>
      <input type="text" className="form-control" name="" id="temp-name" aria-describedby="helpId" placeholder="" />

      <label for="">Version Number</label>
      <input type="text" className="form-control" name="" id="version" aria-describedby="helpId" placeholder="" />
      <br></br>
      <label for="">Image Upload</label>
      <input type="file" className="form-control" name="png" id="image-id" aria-describedby="helpId" placeholder="" capture/> 

      <br></br>

      {/* <FileUpload></FileUpload> */}

      <br />

        <button type="submit" className="btn btn-primary" onClick={this.handleButtonClick}>
          Submit
        </button>

      </div>

    );
  }
}