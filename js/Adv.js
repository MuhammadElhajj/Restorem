let adv = document.querySelector(".adv");

let okButton = document.querySelector(".adv button");





setInterval(()=> {
adv.classList.add("showadv");
} , 50000);


okButton.onclick = function (){
    adv.classList.remove("showadv");
}