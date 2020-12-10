const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json({ extended: true }));

let aplicantes = [
    {
        id: 1,
        nombre:"Luis"
        ,correo:"lufera25@hotamail.com"
        ,edad:31
    },
    {
        id: 2,
        nombre:"German"
        ,correo:"german@hotamail.com"
        ,edad:63

    }
]
app.get('/aplicantes', function (req, res) {
    res.send(aplicantes);
})

app.listen(3000);