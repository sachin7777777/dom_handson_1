let text = document.getElementById('topp');
function myfunc1(){
    console.log(text.innerHTML)
}
let paragraph = document.getElementsByTagName('p');
function myfunc2(){
    console.log(paragraph[0].innerHTML);
}
let eat = document.getElementsByClassName('list')
function myfunc3(){
    console.log(eat[0].innerHTML)
}
let top = document.getElementsByTagName('h2');
function myfunc4(){
    
  top[0].innerHTML = "Hello world"
}
let text2 = document.getElementById('my');
function myfunc5(){
    text2.innerHTML = "welcome to Elevation academy"
}
let hii = document.getElementById('helo')
helloo.addEventListener('click', ()=>{
    hii.setAttribute('style', 'color:red');
})
let yy = document.getElementById('flex')
let t = document.getElementsByClassName('button')
t[0].addEventListener('click',()=>{
    yy.setAttribute('style', 'display:block');
})
let t1 = document.querySelector('#timer')
 function time(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if (hours>12){
        hours = hours - 12
    }
    let timezone = `${hours}:${minutes}:${seconds}`;
    t1.innerHTML = timezone
}
setInterval(() => {
    time()
},1000);