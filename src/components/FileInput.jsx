import React, { useState } from 'react';
import Skinview3d from 'react-skinview3d';
import '../styles/styles.css';
import { Col } from 'react-bootstrap';

function FileInput() {
    // set default texture to load
    var [skin, setSkin] = useState('');

    // when new image is uploaded, change skin state to uploaded skin
    let onFileChange = (e) => {
        var skinFile = e.nativeEvent.target.files[0];
        let reader = new FileReader();
        reader.onloadend = function () {
            let theFileContents = reader.result;
            setSkin(theFileContents);
        };

        // handle error when someone doesn't select a file
        try {
            reader.readAsDataURL(skinFile);
            // console.log(e.target.value);
        } catch (err) {
            console.log('no file selected');
        }
    }; // end of skin preview

    return (
        <Col id="FileInput">
            <label htmlFor="image upload">*Image Upload</label>
            <input
                type="file"
                className="form-control"
                name="png"
                // multiple
                id="image-id"
                accept=".png"
                aria-describedby="helpId"
                placeholder=""
                onChange={onFileChange}
                required
            />
            <br></br>
            <Skinview3d skinUrl={skin} height="300" width="300" />
            <br></br>
        </Col>
    );
}
export default FileInput;
