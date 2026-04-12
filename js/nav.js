/* ══ STICKY NAV ══ */
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('stuck',window.scrollY>60));
