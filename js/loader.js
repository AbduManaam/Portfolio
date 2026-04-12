/* ══ PAGE LOADER ══ */
(function(){
  const fill=document.getElementById('lbf'),pct=document.getElementById('lpct'),ldr=document.getElementById('loader');
  let p=0;
  const iv=setInterval(()=>{
    p+=Math.random()*5+1.5;
    if(p>=100){p=100;clearInterval(iv);setTimeout(()=>ldr.classList.add('gone'),500);}
    fill.style.width=Math.min(p,100)+'%';
    pct.textContent=Math.floor(Math.min(p,100))+'%';
  },35);
})();
