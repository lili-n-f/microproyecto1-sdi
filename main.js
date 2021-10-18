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
