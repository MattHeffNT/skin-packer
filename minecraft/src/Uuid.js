import React, { Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from 'uuid';
import { saveAs } from 'file-saver';

 class UUID extends React.Component {

   handleButtonClick() {

    let JSZip = require("jszip");
    let zip = new JSZip();
    let uuid1 = uuidv4();
    let uuid2 = uuidv4();
    let skin = document.querySelector('#skin-name').value;
    let temp = document.querySelector('#temp-name').value;
    let image = document.querySelector('#image-id').files[0];
    let imageName = document.querySelector('#image-id').files[0].name; 
    let version = document.querySelector('#version').value;
    version = parseInt(version, 10);

    // on button click try and export as json file
    let skinjson =    
      {
        "skins":[
           {
              "localization_name":`${skin}`,
              "geometry":"geometry.humanoid.custom",
              "texture":`${imageName}`,
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
                  version,0,0
                ]
            }
        ]
    }

  let lang = `skinpack.${temp}=${temp}
  skin.${temp}.${skin} name=${skin}
  `
  skinjson = JSON.stringify(skinjson)
  manifest = JSON.stringify(manifest)

  // create a file and a folder
  zip.file(`${temp}/skins.json`, `${skinjson}`);
  zip.file(`${temp}/manifest.json`, `${manifest}`);
  zip.file(`${temp}/texts/en_US.lang`,`${lang}`)
  zip.file(`${temp}/${imageName}`,image,{binary:true});

  // zip then download
  zip.generateAsync({type:"blob"})
  .then(function (blob) {
      saveAs(blob, `${temp}.mcpack`);
  });

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

        {/* need to do some form validation stuff on this  */}
        <label for="">Image Upload</label>
        <input type="file" className="form-control" name="png" id="image-id" accept=".png" aria-describedby="helpId" placeholder="" /> 

        <br></br>
        <br />

        <button type="submit" className="btn btn-primary" onClick={this.handleButtonClick}>
          Submit
        </button>

      </div>

    );
  }
}

export default UUID;