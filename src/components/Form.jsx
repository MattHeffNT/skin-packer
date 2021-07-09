/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import { saveAs } from 'file-saver';
import '../styles/form.css';
// import { RMIUploader } from 'react-multiple-image-uploader';

function Form() {
    // let [images, setImages] = useState(null);
    // let [imageName, setImageName] = useState(null);
    // let images = document.querySelector('#image-id').files;
    // let imageName = document.querySelector('#image-id').files.name;
    var insert = require('../index'),
        prepend = insert.prepend,
        append = insert.append,
        after = insert.after,
        before = insert.before,
        remove = insert.remove,
        replace = insert.replace,
        list = document.getElementById('list'),
        textList = document.getElementById('textList');

    // template name on "Download Pack action"

    let AddAnother = () => {
        console.log('hello');
        let filesInput = document.querySelector('#image-id');

        // let output = document.querySelector('#result');

        // on each click append to file list
        let files = filesInput.files;

        console.log(files);

        for (let i = 0; i < files.length; i++) {
            var file = files[i];
            console.log(files);
            if (!file.type.match('image')) {
                continue;
            }
            var picReader = new FileReader();
            picReader.addEventListener('load', function (event) {
                var picFile = event.target;
                let row = document.querySelector('.row.display');

                let add = `<div className="col-sm" ><img class = "thumbnail" src="${picFile.result}" title="${picFile.name}" /></div>`;

                row.innerHTML += add;
            });
            // from here need to pass this to the zip packing
            picReader.readAsDataURL(file);
        }
    };

    // read image

    let handleButtonClick = () => {
        // e.preventDefault();
        let JSZip = require('jszip');
        let zip = new JSZip();
        let uuid1 = uuidv4();
        let uuid2 = uuidv4();

        // skin pack name and template name value
        let skin = document.querySelector('#skin-name').value;
        let temp = document.querySelector('#temp-name').value;

        // images
        // let images = document.querySelector('#image-id').files[0];
        let imageName = document.querySelector('#image-id').files[0].name;

        // version number input value
        let version = document.querySelector('#version').value;
        version = parseInt(version, 10);

        // on button click try and export as json file
        let skinjson = {
            skins: [
                {
                    localization_name: `${skin}`,
                    geometry: 'geometry.humanoid.custom',
                    texture: `${imageName}`,
                    type: 'free',
                },
            ],
            serialize_name: `${temp}`,
            localization_name: `${temp}`,
        };

        let manifest = {
            format_version: 1,
            header: {
                name: `${temp}`,
                uuid: `${uuid1}`,
                version: [version, 0, 0],
            },
            modules: [
                {
                    type: 'skin_pack',
                    uuid: `${uuid2}`,
                    version: [version, 0, 0],
                },
            ],
        };

        let lang = `skinpack.${temp}=${temp}
  skin.${temp}.${skin} name=${skin}
  `;
        skinjson = JSON.stringify(skinjson);
        manifest = JSON.stringify(manifest);

        // create a file and a folder
        zip.file(`${temp}/skins.json`, `${skinjson}`);
        zip.file(`${temp}/manifest.json`, `${manifest}`);
        zip.file(`${temp}/texts/en_US.lang`, `${lang}`);
        // zip.file(`${temp}/${imageName}`, images, { binary: true });

        // zip then download
        zip.generateAsync({ type: 'blob' }).then(function (blob) {
            saveAs(blob, `${temp}.mcpack`);
        });
    };

    return (
        <div className="container">
            <div className="row one">
                {/* This is where skins are displayed */}
                <div className="col-sm">
                    <div className="row display"></div>
                </div>

                <div className="col-sm">
                    <div className="form-group">
                        <label htmlFor="skin">Name for Skin</label>
                        <input
                            type="text"
                            className="form-control"
                            name=""
                            id="skin-name"
                            aria-describedby="helpId"
                            placeholder=""
                        />
                        <label htmlFor="template">Template Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name=""
                            id="temp-name"
                            aria-describedby="helpId"
                            placeholder=""
                        />
                        <label htmlFor="version number">Version Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name=""
                            id="version"
                            aria-describedby="helpId"
                            placeholder=""
                        />
                        <br></br>
                        <label htmlFor="drop down">Skin Type</label>
                        <br></br>
                        <select name="dropdown" id="dropdown">
                            <option value="normal">Normal</option>
                            <option value="slim">Slim</option>
                        </select>
                        <br></br>
                        <br></br>

                        {/* need to do some form validation stuff on this  */}
                        <label htmlFor="image upload">Image Upload </label>
                        <input
                            type="file"
                            className="form-control"
                            name="png"
                            id="image-id"
                            accept=".png"
                            aria-describedby="helpId"
                            placeholder=""
                            // multiple
                        />

                        {/* <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleButtonClick}
                >
                    Submit
                </button> */}

                        <button
                            type="submit"
                            className="btn btn-secondary"
                            onClick={AddAnother}
                        >
                            Add Another Skin
                        </button>
                        <button
                            type="submit"
                            className="btn btn-secondary"
                            onClick={handleButtonClick}
                        >
                            Download Pack
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
