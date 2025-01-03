let shop = document.querySelector(".shop");




let uiProduct = function (h2contant , spancontant , picture1 , picture2 ,firstdiscount , seconddiscount){
let box = document.createElement("div")
box.className = "box";
shop.appendChild(box);

let h2 = document.createElement("h2")
box.appendChild(h2)
h2.appendChild(document.createTextNode(h2contant))
h2.className = "box-h2";

let boxSpan = document.createElement("span")
box.appendChild(boxSpan)
boxSpan.appendChild(document.createTextNode(spancontant))
boxSpan.className = "box-span"

let photoPart= document.createElement("div")
photoPart.className = "photo-part";
box.appendChild(photoPart);



let img1 = document.createElement("img");
photoPart.appendChild(img1)
img1.src = picture1 ;
img1.className = "photo-of-ui"

let img2 = document.createElement("img");
photoPart.appendChild(img2)
img2.src = picture2 ;
img2.className = "photo-of-ui"


let discount =  document.createElement("div")
box.appendChild(discount)
discount.className = "discount-part"

let span1 = document.createElement("span")
discount.appendChild(span1)
span1.className = "discount-span"


let span2 = document.createElement("span")
discount.appendChild(span2)
span1.className = "link-span"





span1.appendChild(document.createTextNode(`Discount ${firstdiscount}% & ${seconddiscount}%`))
discount.appendChild(span1)
discount.appendChild(span2)


let a = document.createElement("a")
span2.appendChild(a)
a.className = "link-span-a"
a.appendChild(document.createTextNode("Go"))
a.href = "fashion.html";

}


// uiProduct ("Fashion" , "All of your Fashion is here" )
uiProduct ("Fashion" , "All of your Fashion" , "../img 2/fashion04.jpg" , "../images/fashion1.jpg" , "2" , "4");
uiProduct ("Make Up" , "Make up girl  " , "../img 2/make01.jpg" , "../img 2/make02.jpg" , "1" , "5");
uiProduct ("Baby" , "Baby live with ReStorEm" , "../img 1/baby01.jpg" , "../img 1/baby02.jpg" , "2" , "9");
uiProduct ("Shoes" , "Great color and designs" , "../img 2/shoes01.jpg" , "../img 2/shoes02.jpg" , "1" , "3");
uiProduct ("iPhone" , "Apple phone product " , "../img 2/iphone1.jpg" , "../img 2/iphone3.jpg" , "2" , "5");
uiProduct ("Sport Cars" , "Beautiful Cars" , "../images/car1.jpg" , "../images/car2.jpg" , "2" , "5");
uiProduct ("Planes" , "All of your dream in plane" , "../images/08.jpg" , "../images/09.jpg" , "1" , "2");
uiProduct ("Clothes" , "Alot of kinds and sizes" , "../images/clothes1.jpg" , "../images/clothes.jpg" , "2" , "3");
uiProduct ("Smart TV" , "To future of TV" , "../img 2/tv01.jpg" , "../img 2/tv02.jpg" , "1" , "5");
uiProduct ("Head Phone" , "Best experience with head phone" , "../img 2/head-phone01.jpg" , "../img 2/head-phone02.jpg" , "6" , "8");
uiProduct ("Furniture" , "Amazing designs" , "../img 2/furnituer.jpg" , "../img 2/furniuer01.jpg" , "1" , "4");
uiProduct ("Net - Flex" , "amazing movies in ReStorEm " , "../img 2/Netflex.jpg"  , "../img 2/Netflex.jpg"  , "3" , "5");