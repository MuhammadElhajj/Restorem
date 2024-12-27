let passwordicon = document.getElementsByClassName("password-icon");

let passwordbox = document.getElementById("password");



function hiddenShow (){

    if (passwordbox.type == "password")
    {
        passwordbox.type = "text";
    }
    else {
        passwordbox.type = "password" ;
    }
}

