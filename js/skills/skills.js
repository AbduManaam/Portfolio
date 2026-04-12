/* ══ SKILLS ANIMATIONS ══ */
document.querySelectorAll('.sk').forEach((sk,i)=>{
  gsap.fromTo(sk,
    {opacity:0,y:60,clipPath:'inset(100% 0 0 0)',scale:.97},
    {opacity:1,y:0,clipPath:'inset(0% 0 0 0)',scale:1,
     duration:1,ease:'power4.out',delay:i*.18,
     scrollTrigger:{trigger:sk,start:'top 87%'}}
  );
  // Animate category label
  gsap.fromTo(sk.querySelector('.sk-cat'),
    {opacity:0,x:-15},{opacity:1,x:0,duration:.6,ease:'power3.out',delay:i*.18+.3,
    scrollTrigger:{trigger:sk,start:'top 87%'}}
  );
  // Animate name
  gsap.fromTo(sk.querySelector('.sk-name'),
    {opacity:0,x:-20},{opacity:1,x:0,duration:.7,ease:'power3.out',delay:i*.18+.4,
    scrollTrigger:{trigger:sk,start:'top 87%'}}
  );
  // Animate tags one by one
  sk.querySelectorAll('.tag').forEach((t,j)=>{
    gsap.fromTo(t,
      {opacity:0,y:10,scale:.9},{opacity:1,y:0,scale:1,duration:.4,ease:'back.out(1.5)',
      delay:i*.18+.5+j*.07,scrollTrigger:{trigger:sk,start:'top 87%'}}
    );
  });
  // Bar fill with a special ease
  ScrollTrigger.create({trigger:sk,start:'top 78%',onEnter:()=>{
    sk.querySelectorAll('.br-fill').forEach((b,k)=>{
      setTimeout(()=>{b.style.width=b.dataset.w+'%';},i*180+k*120+200);
    });
  }});
});
