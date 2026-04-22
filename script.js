// Intersection observer for .reveal
const revObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('up');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

// Stagger observer
const stagObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('up');
  });
}, { threshold: 0.08 });
document.querySelectorAll('.stagger').forEach(el => stagObs.observe(el));

// Skill bars
const skillObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar').forEach((bar, i) => {
        setTimeout(() => bar.classList.add('go'), i * 100);
      });
      skillObs.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
const sc = document.getElementById('skills-container');
if (sc) skillObs.observe(sc);

// Skill bar widths
document.querySelectorAll('.skill-bar').forEach(bar => {
  const w = bar.dataset.w || 0.5;
  bar.style.width = (parseFloat(w) * 100) + '%';
});