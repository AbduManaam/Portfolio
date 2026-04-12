/* ══ PROJECTS ANIMATIONS ══ */
document.querySelectorAll('.pj').forEach((pj,i)=>{
  // Main row slides up + fades
  gsap.fromTo(pj,
    {opacity:0,y:55,clipPath:'inset(0 0 100% 0)'},
    {opacity:1,y:0,clipPath:'inset(0 0 0% 0)',duration:1,ease:'power4.out',delay:i*.14,
     scrollTrigger:{trigger:pj,start:'top 88%'}}
  );
  // Number counter anim
  const numEl=pj.querySelector('.pj-num');
  if(numEl){
    gsap.fromTo(numEl,
      {opacity:0,x:-30,scale:.85},
      {opacity:1,x:0,scale:1,duration:.7,ease:'back.out(1.5)',delay:i*.14+.25,
       scrollTrigger:{trigger:pj,start:'top 88%'}}
    );
  }
  // Badge + title stagger
  const badge=pj.querySelector('.pj-badge');
  const title=pj.querySelector('.pj-title');
  if(badge) gsap.fromTo(badge,{opacity:0,y:12},{opacity:1,y:0,duration:.5,ease:'power3.out',delay:i*.14+.35,scrollTrigger:{trigger:pj,start:'top 88%'}});
  if(title) gsap.fromTo(title,{opacity:0,y:18},{opacity:1,y:0,duration:.65,ease:'power3.out',delay:i*.14+.45,scrollTrigger:{trigger:pj,start:'top 88%'}});
  // Desc fade
  const desc=pj.querySelector('.pj-desc');
  if(desc) gsap.fromTo(desc,{opacity:0,x:20},{opacity:1,x:0,duration:.7,ease:'power3.out',delay:i*.14+.5,scrollTrigger:{trigger:pj,start:'top 88%'}});
  // Side (techs + link) slides from right
  const side=pj.querySelector('.pj-side');
  if(side) gsap.fromTo(side,{opacity:0,x:35},{opacity:1,x:0,duration:.7,ease:'power3.out',delay:i*.14+.55,scrollTrigger:{trigger:pj,start:'top 88%'}});
});
