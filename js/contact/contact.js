/* ══ CONTACT ANIMATIONS ══ */
gsap.to('.ct-intro',{opacity:1,x:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:'.ct-intro',start:'top 85%'}});
document.querySelectorAll('.ct-card').forEach((c,i)=>{
  gsap.to(c,{opacity:1,x:0,duration:.7,ease:'power3.out',delay:i*.08,scrollTrigger:{trigger:c,start:'top 90%'}});
});
gsap.to('#ctf',{opacity:1,x:0,duration:1,ease:'power4.out',scrollTrigger:{trigger:'#ctf',start:'top 82%'}});

function doSend(event) {
  event.preventDefault();

  const form = event.currentTarget;

  if (!form.reportValidity()) {
    return;
  }

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const subject =
    String(data.get("subject") || "").trim() ||
    "Portfolio enquiry";
  const message = String(data.get("message") || "").trim();

  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    message,
  ].join("\n");

  const mailto =
    "mailto:abdumanam.dev@gmail.com" +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
}
