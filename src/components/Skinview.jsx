import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { saveAs } from 'file-saver';
import FileInput from './FileInput';
import JSZip from 'jszip';
import '../styles/formError.css';
import '../styles/styles.css';

export default function Skinview() {

  // set empty skin array which is where we will push skin data into
  var skinjson = {
    skins: [],
  };

  var imageName = [];
  var zip = new JSZip();

  // watch inputs for changes (for error handle and user feedback)
  useEffect(() => {
    var input = document.querySelectorAll('input');

    for (let i = 0; i < input.length; i++) {
      var element = input[i];

      element.addEventListener('change', (event) => {
        event.target.classList.remove('error');
      });
    }
  });

  // function to handle both buttons, conditional in function to determine which button pushed and appropriate logic to implement. 
  let handleButtonClick = (e) => {

    var skin = document.querySelector('#skin-name');
    var pack = document.querySelector('#temp-name');
    var model = document.querySelector('#image-id');
    var vers = document.querySelector('#version');
    var temp = pack.value;
    var lang = [`skinpack.${temp}=${temp}`];

    // error handling (ui feedback)...for form, show red color if fields not filled out
    skin.value == ''
      ? skin.classList.add('error')
      : skin.classList.remove('error');

    pack.value == ''
      ? pack.classList.add('error')
      : pack.classList.remove('error');

    model.value == ''
      ? model.classList.add('error')
      : model.classList.remove('error');

    vers.value == ''
      ? vers.classList.add('error')
      : vers.classList.remove('error');

    const files = model.files;

    sessionStorage.setItem('skin','test')

    // loop through image file names, and image files
    for (let i = 0; i < files.length; i++) {
      let uuid1 = uuidv4();
      let uuid2 = uuidv4();
      let version = document.querySelector('#version').value;
      version = parseInt(version, 10);
      var image = document.querySelector('#image-id').files[i];
      var fileName = document.querySelector('#image-id').files[i].name;
      var skinName = document.querySelector('#skin-name').value;
      imageName.push(document.querySelector('#skin-name').value);

      " error check: if form inputs empty, don't push to array, else push to array"
      if (skinName != "" && temp != "" && fileName != "" && !Number.isNaN(version)  ) {

        // skin json push to array
        skinjson.skins.push({
         localization_name: `${skinName}`,
         geometry: `geometry.${temp}.${skinName}`,
         texture: `${fileName}`,
         type: 'free',
        });
      }

      skinjson['serialize_name'] = `${temp}`;
      skinjson['localization_name'] = `${temp}`;

      // for the manifest json
      var manifest = {
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

      // loop through and add image names to json
      for (let j = 0; j < imageName.length; j++) {
        const element = imageName[j];
        lang.push(`
                skin.${temp}.${element}=${element}
            `);
      }

      var skinjson_string = JSON.stringify(skinjson);
      var manifest_string = JSON.stringify(manifest);

      lang = lang.join('');

      // zip the image files to the temp (skin pack) folder
      zip.file(`${temp}/${fileName}`, image, {
        binary: true,
      });

      // zip the skin, manifest and lang JSON text files into skinpack folder
      zip.file(`${temp}/skins.json`, `${skinjson_string}`);
      zip.file(`${temp}/manifest.json`, `${manifest_string}`);
      zip.file(`${temp}/texts/en_US.lang`, `${lang}`);

      // if the download or add button was pressed and all of the fields are filled then call download function and or add skin
      if (
        e.nativeEvent.srcElement.id == 'download' &&
        skin.value != '' &&
        pack.value != '' &&
        model.value != '' &&
        vers.value != ''
      ) {
        // if download button pressed, call the download function
        download();

      } else if ( // if the add another skin button was pressed clear fields then add new data

        e.nativeEvent.srcElement.id == 'addSkin' &&
        skin.value != '' &&
        pack.value != '' &&
        model.value != '' &&
        vers.value != ''

      ) {

        // add another skin

        document.querySelector('#skin-name').value = null;
        document.querySelector('#image-id').value = null;
        document.querySelector('#temp-name').value = `${temp}`;
        document.querySelector('#temp-name').style = 'display:none';
        document.querySelector('#skinPackName').style = 'display:none';
        document.querySelector('#version').value = `${version}`;
        document.querySelector('#version').style = 'display:none;';
        document.querySelector('#version_label').style =
          'display:none;';

          "experimenting with sesh storage to change program operation where user presses addSkin, yet old skin doesn't disappear."
          sessionStorage.setItem('skin','noSkin')


      } // end of conditional
    } // end of loop
  }; // end of handle click function

  function download() {

    var temp = document.querySelector('#temp-name').value;
    zip.generateAsync({ type: 'blob' }).then(function(blob) {
      saveAs(blob, `${temp}.mcpack`);
    });

    // refresh back to main state
    window.location.reload(false);
  } // end of download function

  return (
    <div className="Skinview">
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <form>
              <label htmlFor="skin-name">
                *Name for the Skin
              </label>
              <input
                type="text"
                className="form-control"
                name=""
                id="skin-name"
                aria-describedby="helpId"
                placeholder=""
                required
              />
              <label htmlFor="skinPackName" id="skinPackName">
                *Skinpack Name
              </label>
              <input
                type="text"
                className="form-control"
                name=""
                id="temp-name"
                aria-describedby="helpId"
                placeholder=""
                required
              />
              <label htmlFor="version number" id="version_label">
                *Version Number
              </label>
              <input
                type="number"
                className="form-control"
                name=""
                id="version"
                aria-describedby="helpId"
                placeholder=""
                required
              />
              <FileInput></FileInput>
              <br></br>
              <Col>
                <Button
                  type="submit"
                  id="download"
                  className="btn btn-primary"
                  onClick={handleButtonClick}
                >
                  Download Pack
                </Button>
                <Button
                  type="submit"
                  id="addSkin"
                  variant="outline-primary"
                  onClick={handleButtonClick}
                >
                  Add another Skin
                </Button>
              </Col>
              <br></br>
            </form>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
