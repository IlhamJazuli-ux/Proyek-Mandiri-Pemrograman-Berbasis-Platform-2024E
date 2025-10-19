
// Preloader hide on load
window.addEventListener('load', function(){ const pre = document.getElementById('preloader'); if(pre) pre.style.display='none'; revealAll(); });

// reveal on scroll
function revealAll(){ document.querySelectorAll('.reveal').forEach((el,i)=>{ setTimeout(()=>el.classList.add('show'), 120*i) }); }
window.addEventListener('scroll', function(){ document.querySelectorAll('.reveal').forEach(el=>{ const r=el.getBoundingClientRect(); if(r.top < window.innerHeight - 60) el.classList.add('show'); }); });

// smooth anchor scroll
document.addEventListener('click', function(e){ if(e.target.matches('a[href^="#"]')){ e.preventDefault(); const t=document.querySelector(e.target.getAttribute('href')); if(t) t.scrollIntoView({behavior:'smooth'}); } });

// contact form simple validation
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const n=document.getElementById('nama'), c=document.getElementById('email'), m=document.getElementById('pesan');
      let ok=true;
      [n,c,m].forEach(x=>{ if(!x.value || x.value.trim()===''){ x.classList.add('is-invalid'); ok=false } else x.classList.remove('is-invalid') });
      const alertBox = document.getElementById('formAlert');
      if(ok){ alertBox.classList.remove('d-none'); alertBox.classList.remove('alert-danger'); alertBox.classList.add('alert-success'); alertBox.innerText='Terima kasih! Permintaan Anda telah dikirim. Kami akan menghubungi via WA/Email.'; form.reset(); } else { alertBox.classList.remove('d-none'); alertBox.classList.remove('alert-success'); alertBox.classList.add('alert-danger'); alertBox.innerText='Harap lengkapi semua field.'; }
    });
  }
  // prefill quote from localStorage
  const msg = localStorage.getItem('prefillQuote'); if(msg){ const el=document.getElementById('pesan'); if(el) el.value=msg; localStorage.removeItem('prefillQuote'); }
});

function openQuote(name){ localStorage.setItem('prefillQuote','Permintaan penawaran untuk: '+name); window.location.href='kontak.html'; }
