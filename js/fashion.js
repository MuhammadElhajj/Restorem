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

muhammad(FashionCtrlOne , FasionproductimageOne , "../images/fashion01.jpg" ,"../images/fashion02.jpg" ,"../images/fashion03.jpg");
muhammad(FashionCtrltwo , Fasionproductimagetwo ,"../images/02.jpg" ,"../images/01.jpg" , "../images/03.jpg" );
muhammad(FashionCtrlthree , Fasionproductimagethree , "../images/head-phone01.jpg" , "../images/head-phone02.jpg" , "../images/05721e25853a8d17e0b21f120514802d.jpg");
muhammad(FashionCtrlfour , Fasionproductimagefour , "../images/04.jpg" , "../images/05.jpg" , "../images/06.jpg");
muhammad(FashionCtrlfive , Fasionproductimagefive , "../images/b68bc30ea37467dc9228954764df5cd9.jpg " ,"../images/08.jpg" ,"../images/09.jpg");
muhammad(FashionCtrlsix , Fasionproductimagesix , "../images/b68bc30ea37467dc9228954764df5cd9.jpg " ,"../images/08.jpg" ,"../images/09.jpg");
// ! end picture control
