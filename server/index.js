
const fs = require('fs')
const express = require("express");
var path    = require('path');
const multer = require('multer')

const PORT = process.env.PORT || 3001;

const app = express();

const testImageURL = "///Users/sam/Downloads/mountain.jpeg";





const storage = multer.diskStorage({ // notice you are calling the multer.diskStorage() method here, not multer()
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + ".jpg")
    }
});
const upload = multer({storage});



app.get("/api", (req, res) => {
  return res.json( { message:"Hello from server!"} );
});



app.post('/api/images', upload.single('image'), (req, res) => {

  console.log("HEYYYYYY submit api called!")

  const imageName = req.file.filename
  const description = req.body.description

  console.log(description, imageName)
  res.send({description, imageName})

})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});