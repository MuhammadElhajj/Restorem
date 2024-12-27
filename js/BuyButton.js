let columnTwo = document.querySelector(".column-two")

let fashionFunction = function (name , dis , discount)
{
  let information = document.createElement("div")
  columnTwo.appendChild(information);
  information.className = "information"


  let h2One = document.createElement("h2")
  information.appendChild(h2One)
  h2One.appendChild(document.createTextNode(name))


  let p = document.createElement("p")
  information.appendChild(p)
  p.appendChild(document.createTextNode(dis))

  let h2two = document.createElement("h2")
  information.appendChild(h2two)

  let span  = document.createElement("span")
  h2two.appendChild(span)
  span.appendChild(document.createTextNode(discount))
  h2two.appendChild(document.createTextNode(`% OFF`));
  // h2two.appendChild(document.createTextNode("% OFF"));

}


// fashionFunction("hi" , " iam muhammad al hajj" , 34)
























let oneBuyButton = document.querySelector(".one-buy-button-fashion");
let twoBuyButton = document.querySelector(".two-buy-button-fashion");
let threeBuyButton = document.querySelector(".three-buy-button-fashion");
let fourBuyButton = document.querySelector(".four-buy-button-fashion");
let fiveBuyButton = document.querySelector(".five-buy-button-fashion");
let sixBuyButton = document.querySelector(".six-buy-button-fashion");


let nameofproductone = document.querySelector(".fashion .container .column-two .information h2").innerHTML ;
let discountofproductone = document.querySelector(".fashion .container .column-two .information h2 span").innerHTML ;


// let showBuyPage = function (numberofbutton , ){

//     numberofbutton.onclick = function (){


//         buyPage(nameofproductone , , )
//     }
// }

// let buyPage = function ( nameofproduct , discount , note ) {

// }




oneBuyButton.onclick = function(){
    buyPage2();
}



let buyPage2 = function (){
let buyPage = document.createElement("div");
buyPage.className = "buy-page";
document.body.appendChild(buyPage);
let closeIcon = document.createElement("i");
closeIcon.className = "fa-solid fa-close close";
buyPage.appendChild(closeIcon);

buyPage.addEventListener(
    "click",
    (e) => {
   if (e.target.classList.contains("close"))
   {
  e.target.parentNode.remove()
   }
    }
  );
}