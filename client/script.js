var element = document.getElementById("info");
addText("Bienvenido al generador de personas!", "h1");
addText("Genera una persona", "p");
var btn =  document.getElementById("btn");
btn.addEventListener("click", generatePerson, false);

function generatePerson(){
    var req = new XMLHttpRequest();
    req.open('GET', 'http:localhost:5000/', false);
    req.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            var obj = JSON.parse(req.responseText);
            addText(obj.name + " " + obj.lastname, 'p');
        }
    }
    req.send();
}

//Metodo de ejemplo para facilitar la creación de texto html
function addText(text, type){
    //Al ser un ejemplo, solo permite tipos p y h1 y aqui se realiza la validación
    if(type != 'p' && type != 'h1')
    {
        console.error("Invalid text type! " + type);
        return null;
    }
    //Se crea y agrega elemento html al documento
    var tag = document.createElement("p");
    tag.className = type;
    tag.textContent = text;
    element.appendChild(tag);
}