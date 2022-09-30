const express = require('express');
const port = 8080;
const app = express();
const path = require('path');


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/index.html'))
})
app.listen(port, () => {
    console.log('html server running on port ' + port)
})
