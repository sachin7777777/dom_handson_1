let po = document.querySelector('input');
let body = document.getElementsByClassName('top2');
let button = document.getElementById('oo');
let t2 = document.querySelector('p');
let para1 = document.querySelector('h2');
let random = Math.floor(Math.random()*100);
let countt = 100;
button.addEventListener('click', () => {
    console.log(random)
     if (random < parseInt(ckhnum.value)){  
        t2.innertext = 'Number is High';
        countt--;
     }
     else if (random > parseInt(ckhnum.value)){  
        t2.innertext = 'Number is Low';
        countt--;
     }
     else {
        body[0].setAttribute('style', 'background-color:green;')
        po.setAttribute('style', 'background-color:green;')
        console.log(`You guess the correct number ${randowno}`)
     }
     
})