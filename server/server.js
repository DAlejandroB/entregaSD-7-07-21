const express = require("express");
const app = express();
const port  = 5000;
const cors = require('cors');

const names = ["Adriana" , "Alejandro",  "Andres", "Camilo", "Camila", "Daniel"];
const lastNames = ["Hernandez",  "Rey", "Acero", "Vargas", "Blanco"]

app.listen(port, () => console.log("Listening at " + port));
app.use(cors());

app.get('/', (request, response) =>{
    response.send(createPerson());
});

function createPerson(){
    var person = {name: names[randomInt(names.length)], lastname: lastNames[randomInt(lastNames.length)]}
    return JSON.stringify(person);
}

function randomInt(top){
    return(Math.floor(Math.random()*(top)));
}