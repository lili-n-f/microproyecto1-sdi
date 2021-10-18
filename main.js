const carouselImgs = [
        'img/pic.jpg',
        'img/pyproj.png', 
        'img/pyproj2.png', 
        'img/javaproj.png', 
        'img/javaproj2.png'
    ];

let carouselIndex = 0;

function nextImage() {
    if (carouselIndex<carouselImgs.length-1){
        carouselIndex++;
    }else{
        carouselIndex=0;
    }
    renderImage();
}

function pastImage() {
    if (carouselIndex===0){
        carouselIndex=carouselImgs.length-1;
    }else{
        carouselIndex--;
    }
    renderImage();
}

function renderImage() {
    document.getElementById("carouselImage").style.backgroundImage = `url(${carouselImgs[carouselIndex]})`;
}

window.onload = renderImage();

//lo hice así porque en las instrucciones pedían sólo un json. 
const skillPercent = { //los números representan porcentajes
    "python": new Array("progPy",90), //array: id,progreso de python
    "java": new Array("progJ",80), //array: id,progreso de java
    "html": new Array("progHTML",65), //array: id,progreso de html
    "css": new Array("progCSS",65), //array: id,progreso de css
    "javascript": new Array("progJS",55) //id,progreso de javascript
};

//barra de python
document.getElementById(skillPercent["python"][0]).style.width = `${skillPercent["python"][1]}%`

//barra de java
document.getElementById(skillPercent["java"][0]).style.width = `${skillPercent["java"][1]}%`

//barra de html
document.getElementById(skillPercent["html"][0]).style.width = `${skillPercent["html"][1]}%`

//barra de css
document.getElementById(skillPercent["css"][0]).style.width = `${skillPercent["css"][1]}%`

//barra de javascript
document.getElementById(skillPercent["javascript"][0]).style.width = `${skillPercent["javascript"][1]}%`

function validateForm() {
    let name = document.forms["form"]["name"].value;
    let email = document.forms["form"]["email"].value;
    let msg = document.forms["form"]["msg"].value;
    var hasNumber = /\d/;
    var hasLetter = /[a-zA-Z]/;

    if(name==="" || hasNumber.test(name)){ //si el nombre tiene algún número o es un string vacío, el nombre es inválido
        alert("Error: se introdujo un nombre inválido");
    }else if(email==="" || (!email.match(/@/g) || email.match(/@/g).length!==1) || !email.includes(".") || !(hasNumber.test(email.charAt(0)) || hasLetter.test(email.charAt(0)))){ //si el email es un string vacío, o no tiene un @, o no contiene al menos un punto, o su primer caracter es un caracter especial, es inválido
        alert("Error: se introdujo un email inválido.");
    }else if(msg===""){ //si el mensaje es un string vacío es inválido
        alert("Error: se debe rellenar el campo de mensaje.");
    }else{ //si no, se puede enviar la información, es decir, se pueden imprimir en la consola
        console.log(`\nNombre: ${name}\nEmail: ${email}\nMensaje: ${msg}`);
        alert("¡Su solicitud ha sido enviada!");
    }

}
