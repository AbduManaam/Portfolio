/* ══ CUSTOM CURSOR ══ */
const cur=document.getElementById('cur'),
      ring=document.getElementById('cur-ring'),
      curH=document.getElementById('cur-h'),
      curV=document.getElementById('cur-v');
let mx=0,my=0,rx=0,ry=0,glowX=0,glowY=0;

document.addEventListener('mousemove',e=>{
  mx=e.clientX;my=e.clientY;
  // Dot snaps instantly
  gsap.set(cur,{left:mx,top:my});
  // Crosshairs follow instantly
  gsap.set(curH,{left:mx,top:my});
  gsap.set(curV,{left:mx,top:my});
});

(function tick(){
  // Glow blob lags behind
  glowX+=(mx-glowX)*.08;
  glowY+=(my-glowY)*.08;
  gsap.set(ring,{left:glowX,top:glowY});
  requestAnimationFrame(tick);
})();

document.querySelectorAll('a,button').forEach(el=>{
  el.addEventListener('mouseenter',()=>{
    gsap.to(cur,{width:4,height:4,duration:.15});
    gsap.to([curH,curV],{opacity:.7,duration:.15});
  });
  el.addEventListener('mouseleave',()=>{
    gsap.to(cur,{width:6,height:6,duration:.15});
    gsap.to([curH,curV],{opacity:.4,duration:.15});
  });
});
