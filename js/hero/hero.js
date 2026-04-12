/* ══ HERO ANIMATION ══ */
window.addEventListener('load',()=>{
  const tl=gsap.timeline({delay:1.2});
  tl.to('#hero-badge',{opacity:1,y:0,duration:.7,ease:'power3.out'});
  tl.to('.hero-h1 .word .inner',{y:'0%',duration:.9,ease:'power4.out',stagger:.1},'-=.3');
  tl.to('#hero-desc',{opacity:1,y:0,duration:.8,ease:'power3.out'},'-=.5');
  tl.to('#hero-btns',{opacity:1,y:0,duration:.7,ease:'power3.out'},'-=.6');
  tl.to('#hero-photo',{clipPath:'inset(0% 0 0 0)',duration:1.2,ease:'power4.inOut'},'-=1.1');
  tl.to('#hero-photo img',{scale:1,duration:1.4,ease:'power4.out'},'<');
  tl.to('#hero-card',{opacity:1,x:0,duration:.6,ease:'power3.out'},'-=.5');
  tl.to('#scroll-hint',{opacity:1,duration:.5},'-=.3');
});

/* SECTION LABELS SLIDE LEFT */
document.querySelectorAll('.sec-label').forEach(el=>{
  gsap.to(el,{opacity:1,x:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%'}});
});

/* SECTION HEADINGS WORD REVEAL */
document.querySelectorAll('.sec-h').forEach(h=>{
  const words=[];
  h.childNodes.forEach(n=>{
    if(n.nodeType===3&&n.textContent.trim()){
      const parts=n.textContent.split(' ').filter(w=>w);
      const spans=parts.map(w=>{
        const s=document.createElement('span');
        s.className='word-wrap';
        const i=document.createElement('span');
        i.className='word-inner';
        i.textContent=w+' ';
        s.appendChild(i);
        words.push(i);
        return s;
      });
      spans.forEach(s=>n.parentNode.insertBefore(s,n));
      n.parentNode.removeChild(n);
    } else if(n.nodeType===1&&n.tagName==='EM'){
      const wrap=document.createElement('span');
      wrap.className='word-wrap';
      wrap.style.fontStyle='italic';
      wrap.style.color='var(--lime)';
      const inner=document.createElement('span');
      inner.className='word-inner';
      inner.textContent=n.textContent+' ';
      wrap.appendChild(inner);
      words.push(inner);
      n.parentNode.replaceChild(wrap,n);
    }
  });
  if(words.length){
    gsap.to(words,{y:'0%',duration:.9,ease:'power4.out',stagger:.08,scrollTrigger:{trigger:h,start:'top 86%'}});
  }
});
