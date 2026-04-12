/* ══ CONTACT ANIMATIONS ══ */
gsap.to('.ct-intro',{opacity:1,x:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:'.ct-intro',start:'top 85%'}});
document.querySelectorAll('.ct-card').forEach((c,i)=>{
  gsap.to(c,{opacity:1,x:0,duration:.7,ease:'power3.out',delay:i*.08,scrollTrigger:{trigger:c,start:'top 90%'}});
});
gsap.to('#ctf',{opacity:1,x:0,duration:1,ease:'power4.out',scrollTrigger:{trigger:'#ctf',start:'top 82%'}});
