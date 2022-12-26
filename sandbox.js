const clock = document.querySelector('.clock');

const tick = () =>{

  const now = new Date();

const h = now.getHours() % 12;
const m = now.getMinutes();
const s = now.getSeconds();
 
const html = `
<span>${h}</span> :
<span>${m}</span> :
<span>${s}</span>
`;

 clock.innerHTML = html;
};

setInterval(tick,1000);
function f1(){
const roll = document.querySelector('.roll');
const back = document.querySelector('body');
const rot = document.querySelector('#rot');
const name = document.querySelector('.name');
const clock = document.querySelector('.clock');
const sec = document.querySelector('.sec');
 roll.style.left = '30px';
 back.style.background = 'black';
 rot.style.top = '12px';
 name.style.color = 'white';
clock.style.background = 'black';
sec.style.color = 'white';
 }

function f2(){
    
    const roll = document.querySelector('.roll');
    const back = document.querySelector('body');
    const name = document.querySelector('.name');
    const clock = document.querySelector('.clock');
    const sec = document.querySelector('.sec');
    back.style.background = '#f9f2f2';
    roll.style.display = 'block';
    roll.style.left = '0px';
    name.style.color = 'black';
    clock.style.background = 'white';
    sec.style.color = 'black';
}