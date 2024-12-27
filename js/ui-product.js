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




// let span3 = document.createElement("span")
// let span4 = document.createElement("span")

// span3.className = "real";
// span4.className = "real";
// let span3Contant = span3.appendChild(document.createTextNode(firstdiscount))
// let span4Contant = span4.appendChild(document.createTextNode(seconddiscount))

span1.appendChild(document.createTextNode(`Discount between ${firstdiscount}% and ${seconddiscount}%`))
discount.appendChild(span1)
discount.appendChild(span2)


let a = document.createElement("a")
span2.appendChild(a)
a.className = "link-span-a"
a.appendChild(document.createTextNode("Go"))
a.href = "fashion.html";

}


// uiProduct ("Fashion" , "All of your Fashion is here" )
uiProduct ("Fashion" , "All of your Fashion is here" , "../images/fashion04.jpg" , "../images/fashion1.jpg" , "20" , "40");
uiProduct ("Make Up" , "All of your dream in plane is here ........" , "../images/make01.jpg" , "../images/make02.jpg" , "12" , "15");
uiProduct ("Baby" , "Improve your baby live with ReStorEm ...." , "../images/baby01.jpg" , "../images/baby02.jpg" , "2" , "9.9");
uiProduct ("Shoes" , "Beautiful color and a great designs........" , "../images/shoes01.jpg" , "../images/shoes02.jpg" , "10" , "13.54");
uiProduct ("iPhone" , "Latest verisions of phone apple product ........" , "../images/iphone1.jpg" , "../images/iphone3.jpg" , "2.44" , "5.88");
uiProduct ("Sport Cars" , "G Class / Firrari /Porsh / Lumbergeni ........" , "../images/car1.jpg" , "../images/car2.jpg" , "23" , "25");
uiProduct ("Planes" , "All of your dream in plane is here ........" , "../images/08.jpg" , "../images/09.jpg" , "1.99" , "2.99");
uiProduct ("Clothes" , "Alot of kind and alot of size ......." , "../images/clothes1.jpg" , "../images/clothes.jpg" , "20.54" , "35");
uiProduct ("Smart TV" , "To future TV with ReStorEm is differnt........" , "../images/tv01.jpg" , "../images/tv02.jpg" , "1.99" , "5.44");
uiProduct ("Head Phone" , "The best experience with apple head phone ...." , "../images/head-phone01.jpg" , "../images/head-phone02.jpg" , "6.45" , "8.65");
uiProduct ("Furniture" , "Amazing designs of furniture with us ...." , "../images/furnituer.jpg" , "../images/furniuer01.jpg" , "1.2" , "4.23");
uiProduct ("Net - Flex" , "A lot of amazing movies are here in ReStorEm .." , "../images/Netflex.jpg"  , "../images/Netflex.jpg"  , "32" , "56");