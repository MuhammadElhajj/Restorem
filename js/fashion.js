// ! start picture control
let FashionCtrlOne = document.getElementsByClassName("control-one");
const FasionproductimageOne = document.getElementById("product-img-one");

let FashionCtrltwo = document.getElementsByClassName("control-two");
const Fasionproductimagetwo = document.getElementById("product-img-two");

let FashionCtrlthree = document.getElementsByClassName("control-three");
const Fasionproductimagethree = document.getElementById("product-img-three");

let FashionCtrlfour = document.getElementsByClassName("control-four");
const Fasionproductimagefour = document.getElementById("product-img-four");

let FashionCtrlfive = document.getElementsByClassName("control-five");
const Fasionproductimagefive = document.getElementById("product-img-five");

let FashionCtrlsix = document.getElementsByClassName("control-six");
const Fasionproductimagesix = document.getElementById("product-img-six");

let FashionCtrlseven = document.getElementsByClassName("control-seven");
const Fasionproductimageseven = document.getElementById("product-img-seven");


let FashionCtrleight = document.getElementsByClassName("control-eight");
const Fasionproductimageeight = document.getElementById("product-img-seven");




let muhammad = function (ctrl , pic , pic1 , pic2 , pic3){

  ctrl[0].onclick = function () {
    pic.src = pic1;
  for (let i = 0; i <= 2 ; i++) {
    ctrl[i].classList.remove("active");
  }
  this.classList.add("active");
};
ctrl[1].onclick = function () {
  pic.src = pic2;
  for (let i = 0; i <= 2; i++) {
    ctrl[i].classList.remove("active");
  }
  this.classList.add("active");
};

ctrl[2].onclick = function () {
  pic.src = pic3;
  for (let i = 0; i <= 2 ; i++) {
    ctrl[i].classList.remove("active");
  }
  this.classList.add("active");
};


}

muhammad(FashionCtrlOne , FasionproductimageOne , "../images/fashion01.jpg" ,"../img 2/fashion02.jpg" ,"../img 2/fashion03.jpg");
muhammad(FashionCtrltwo , Fasionproductimagetwo ,"../images/02.jpg" ,"../images/01.jpg" , "../images/03.jpg" );
muhammad(FashionCtrlthree , Fasionproductimagethree , "../img 2/head-phone01.jpg" , "../img 2/head-phone02.jpg" , "../images/05721e25853a8d17e0b21f120514802d.jpg");
muhammad(FashionCtrlfour , Fasionproductimagefour , "../images/04.jpg" , "../images/05.jpg" , "../images/06.jpg");
muhammad(FashionCtrlfive , Fasionproductimagefive , "../img 2/b68bc30ea37467dc9228954764df5cd9.jpg " ,"../images/08.jpg" ,"../images/09.jpg");
muhammad(FashionCtrlsix , Fasionproductimagesix , "../images/04.jpg" ,"../images/08.jpg" ,"../images/09.jpg");
muhammad(FashionCtrlseven , Fasionproductimageseven , "../img 2/b68bc30ea37467dc9228954764df5cd9.jpg " ,"../images/08.jpg" ,"../images/09.jpg");
muhammad(FashionCtrleight , Fasionproductimageeight , "../images/04.jpg" ,"../images/08.jpg" ,"../images/09.jpg");
// ! end picture control
