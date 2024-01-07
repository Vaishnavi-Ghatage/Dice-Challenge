var n=(Math.random()*6)+1;
var num1=Math.floor(n);

n=(Math.random()*6)+1;
var num2=Math.floor(n);

var image1='d'+num1+'.png';
var imge1 = document.querySelectorAll("img")[0];
imge1.setAttribute("src", image1);

var image2='d'+num2+'.png';
var imge2 = document.querySelectorAll("img")[1];
imge2.setAttribute("src", image2);

if (image1>image2){
    document.querySelector("h1").innerHTML="Winner : Player 1";
    document.querySelector(".one1").innerHTML="Winner";
    
}
else if (image1<image2){
    document.querySelector("h1").innerHTML="Winner : Player 2";
    document.querySelector(".two2").innerHTML="Winner";
}
else {
    document.querySelector("h1").innerHTML="Result : Draw"
}