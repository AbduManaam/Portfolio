/* ══ EXPERIENCE ANIMATIONS ══ */
const expCard = document.querySelector('#exp-card');
if (expCard) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: expCard,
      start: 'top 82%',
      toggleActions: 'play none none none'
    },
    defaults: { ease: 'power3.out' }
  });

  tl.fromTo(
    expCard,
    {
      opacity: 0,
      y: 52,
      scale: 0.97,
      rotateX: 5,
      transformOrigin: '50% 0%',
      filter: 'blur(8px)'
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: 'blur(0px)',
      duration: 1.12,
      ease: 'power4.out',
      onComplete: () => gsap.set(expCard, { clearProps: 'transform' })
    }
  )
    .from(
      expCard.querySelector('.exp-role'),
      { opacity: 0, y: 36, duration: 0.78 },
      '-=0.7'
    )
    .from(
      expCard.querySelector('.exp-co'),
      { opacity: 0, y: 24, duration: 0.65 },
      '-=0.58'
    )
    .from(
      expCard.querySelector('.exp-period'),
      { opacity: 0, scale: 0.88, y: 14, duration: 0.58, ease: 'back.out(1.35)' },
      '-=0.52'
    )
    .from(
      expCard.querySelector('.exp-desc'),
      { opacity: 0, y: 26, duration: 0.92, ease: 'power2.out' },
      '-=0.52'
    );
}
