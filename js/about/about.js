/* ══ ABOUT ANIMATIONS ══ */

/* ABOUT PHOTO REVEAL */
gsap.to('#ab-img',{opacity:1,scale:1,duration:1.2,ease:'power4.out',scrollTrigger:{trigger:'#ab-img',start:'top 80%'}});
gsap.to('#ab-badge',{opacity:1,y:0,duration:.7,ease:'power3.out',delay:.5,scrollTrigger:{trigger:'#ab-img',start:'top 78%'}});
document.querySelectorAll('.a-stat').forEach((s,i)=>{
  gsap.to(s,{opacity:1,y:0,duration:.7,ease:'power3.out',delay:i*.08,scrollTrigger:{trigger:s,start:'top 90%'}});
});

/* ABOUT TEXT */
gsap.to('#ab-intro',{opacity:1,x:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:'#ab-intro',start:'top 85%'}});
document.querySelectorAll('.about-body p').forEach((p,i)=>{
  gsap.to(p,{opacity:1,x:0,duration:.8,ease:'power3.out',delay:i*.1,scrollTrigger:{trigger:p,start:'top 87%'}});
});
gsap.to('.chips',{opacity:1,y:0,duration:.7,ease:'power3.out',scrollTrigger:{trigger:'.chips',start:'top 88%'}});
