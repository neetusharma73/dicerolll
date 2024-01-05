let img=document.getElementsByClassName('img')[0]
let btn=document.getElementById('btn')
let dnum=document.getElementById('dnum')
let num1;
btn.addEventListener("click",function(e){
    num1=Math.floor(Math.random()*6+1)
    if(num1 == 1){
        img.innerHTML='<img src="images/1.png">'
    }
    if(num1 == 2){
        img.innerHTML='<img src="images/2.png">'
    }
    if(num1 == 3){
        img.innerHTML='<img src="images/3.png">'
    }
    if(num1 == 4){
        img.innerHTML='<img src="images/4.png">'
    }
    if(num1 == 5){
        img.innerHTML='<img src="images/5.png">'
    }
    if(num1 == 6){
        img.innerHTML='<img src="images/6.png">'
    }
    dnum.innerHTML=num1;

})