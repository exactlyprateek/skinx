const express = require("express");
const app = express();
const path = require("path");
const PORT = 80;

app.use(express.static(path.join(__dirname,"build")))

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../', 'skinx', 'build', 'index.html'));
  });