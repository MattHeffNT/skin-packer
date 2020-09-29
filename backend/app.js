const express = require('express');
const {
    response
} = require('express');

const app = express()
const port = 5000;
var request = require ("request")
const cors = require('cors')
const fileUpload = require ('express-fileupload');


app.use (fileUpload());
app.use(cors());

//Upload Endpoint 
app.post('/upload',(req,res) => {

    if(req.files === null) {
        return res.status(400).json({msg:"no file uploaded"})
    }
    
    const myFile = req.files.file;

    myFile.mv(`../minecraft/public/uploads/${myFile.name}`,err =>{
        if(err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.json({fileName:myFile.name,filePath:`/uploads/${myFile.name}`});
    })


})


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/getUUID", (req, res) => {
    request("https://www.uuidgenerator.net/api/version4/2", function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body)
            }
        }
    );
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
