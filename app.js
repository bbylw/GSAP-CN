// ========== GSAP 动画主脚本 ==========
gsap.registerPlugin(ScrollTrigger);

// ========== LOADER ==========
var loader = document.getElementById('loader');
var loaderFill = document.getElementById('loader-fill');

var loaderTl = gsap.timeline();
loaderTl.to(loaderFill, { width: '100%', duration: 1.2, ease: 'power2.inOut' })
        .to(loader, { opacity: 0, duration: 0.4, ease: 'power2.inOut', delay: 0.2 })
        .set(loader, { display: 'none' });

// ========== HERO INTRO TIMELINE ==========
var heroTl = gsap.timeline({ delay: 1.2 });

// Split hero lines into chars
document.querySelectorAll('.hero-line').forEach(function(line) {
  var text = line.dataset.text || line.textContent;
  var chars = text.split('').map(function(ch) {
    var span = document.createElement('span');
    span.className = 'char';
    span.textContent = ch === ' ' ? '\u00A0' : ch;
    return span;
  });
  line.innerHTML = '';
  chars.forEach(function(c) { line.appendChild(c); });
});

heroTl
  .from('.hero-tag', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' })
  .from('.hero-line .char', {
    yPercent: 120,
    opacity: 0,
    duration: 0.8,
    stagger: 0.04,
    ease: 'power4.out'
  }, '-=0.3')
  .from('.hero-sub', { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
  .from('.hero-cta > *', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' }, '-=0.3')
  .from('.hero-code', { x: 40, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
  .from('.hero-code .code-body > div', { x: 20, opacity: 0, duration: 0.3, stagger: 0.04, ease: 'power2.out' }, '-=0.4')
  .from('.hero-stats > *', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, '-=0.3')
  .from('.scroll-hint', { opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2');

// Hero decorative rings — continuous slow rotation
gsap.utils.toArray('.hero-ring').forEach(function(ring, i) {
  gsap.to(ring, {
    rotation: 360,
    duration: 40 + i * 20,
    ease: 'none',
    repeat: -1,
    transformOrigin: '50% 50%'
  });
});

// Hero code card subtle floating motion
gsap.to('.hero-code-card', {
  y: -8,
  duration: 3,
  ease: 'sine.inOut',
  yoyo: true,
  repeat: -1
});

// ========== COUNTER ANIMATION ==========
document.querySelectorAll('.counter-num').forEach(function(el) {
  var target = parseInt(el.dataset.target);
  var suffix = el.dataset.suffix || '';
  var obj = { val: 0 };

  heroTl.to(obj, {
    val: target,
    duration: 2,
    ease: 'power2.out',
    delay: 0.5,
    onUpdate: function() {
      if (target >= 1000000) {
        el.textContent = (obj.val / 1000000).toFixed(1) + 'M' + suffix;
      } else if (target >= 1000) {
        el.textContent = Math.floor(obj.val).toLocaleString() + suffix;
      } else {
        el.textContent = Math.floor(obj.val) + suffix;
      }
    }
  }, '-=1.5');
});

// ========== MARQUEE ==========
gsap.to('#marquee', {
  xPercent: -50,
  duration: 30,
  ease: 'none',
  repeat: -1
});

// ========== SCROLL PROGRESS BAR ==========
gsap.to('#scroll-progress', {
  width: '100%',
  ease: 'none',
  scrollTrigger: {
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0
  }
});

// ========== REVEAL ANIMATIONS ==========
gsap.utils.toArray('.reveal-up').forEach(function(el) {
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  });
});

// ========== PARALLAX SHAPES ==========
document.querySelectorAll('[data-parallax]').forEach(function(el) {
  var speed = parseFloat(el.dataset.parallax);
  gsap.to(el, {
    yPercent: -speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
});

// ========== PINNED HORIZONTAL SCROLL ==========
var pinTrack = document.getElementById('pin-track');
var pinContainer = document.getElementById('pin-container');
var pinWrapper = document.getElementById('pin-wrapper');

if (pinTrack && pinContainer && window.innerWidth > 768) {
  var scrollAmount = pinTrack.scrollWidth - window.innerWidth + 80;

  gsap.to(pinTrack, {
    x: -scrollAmount,
    ease: 'none',
    scrollTrigger: {
      trigger: pinWrapper,
      start: 'top top',
      end: function() { return '+=' + scrollAmount; },
      scrub: 1,
      pin: pinContainer,
      anticipatePin: 1,
      invalidateOnRefresh: true
    }
  });

  // Animate boxes in Scene 02
  gsap.utils.toArray('[id^="scroll-box-"]').forEach(function(box, i) {
    gsap.to(box, {
      rotation: 360,
      scale: 1.2,
      borderRadius: '50%',
      ease: 'none',
      scrollTrigger: {
        trigger: pinWrapper,
        start: 'top top',
        end: function() { return '+=' + scrollAmount; },
        scrub: true
      }
    });
  });

  // Parallax demo elements
  gsap.utils.toArray('[data-parallax-demo]').forEach(function(el) {
    var speed = parseFloat(el.dataset.parallaxDemo);
    gsap.to(el, {
      x: speed * 100,
      y: -speed * 60,
      ease: 'none',
      scrollTrigger: {
        trigger: pinWrapper,
        start: 'top top',
        end: function() { return '+=' + scrollAmount; },
        scrub: true
      }
    });
  });
}

// ========== PERFORMANCE BARS ==========
gsap.utils.toArray('#perf-bars > div').forEach(function(bar, i) {
  var originalHeight = bar.style.height;
  bar.style.height = '0%';
  gsap.to(bar, {
    height: originalHeight,
    duration: 1,
    ease: 'power3.out',
    delay: i * 0.1,
    scrollTrigger: {
      trigger: '#perf-bars',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
});

// ========== MAGNETIC BUTTONS ==========
document.querySelectorAll('.magnetic-btn').forEach(function(btn) {
  btn.addEventListener('mousemove', function(e) {
    var rect = btn.getBoundingClientRect();
    var x = e.clientX - rect.left - rect.width / 2;
    var y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.4,
      ease: 'power2.out'
    });
  });
  btn.addEventListener('mouseleave', function() {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.4)'
    });
  });
});

// ========== TILT CARDS ==========
document.querySelectorAll('[data-tilt]').forEach(function(card) {
  card.addEventListener('mousemove', function(e) {
    var rect = card.getBoundingClientRect();
    var x = (e.clientX - rect.left) / rect.width - 0.5;
    var y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(card, {
      rotationY: x * 8,
      rotationX: -y * 8,
      transformPerspective: 800,
      duration: 0.4,
      ease: 'power2.out'
    });
  });
  card.addEventListener('mouseleave', function() {
    gsap.to(card, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.6,
      ease: 'power3.out'
    });
  });
});

// ========== FOOTER TEXT REVEAL ==========
gsap.utils.toArray('.footer-text').forEach(function(line) {
  var text = line.textContent;
  var chars = text.split('').map(function(ch) {
    var span = document.createElement('span');
    span.className = 'char';
    span.textContent = ch === ' ' ? '\u00A0' : ch;
    span.style.display = 'inline-block';
    return span;
  });
  line.innerHTML = '';
  chars.forEach(function(c) { line.appendChild(c); });

  gsap.from(line.querySelectorAll('.char'), {
    yPercent: 120,
    opacity: 0,
    duration: 0.8,
    stagger: 0.03,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: line,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  });
});

// ========== NAV BACKGROUND ON SCROLL ==========
var nav = document.querySelector('nav');
ScrollTrigger.create({
  start: 'top -80',
  end: 99999,
  toggleClass: { className: 'nav-blur', targets: nav }
});

// ========== REFRESH ON RESIZE ==========
window.addEventListener('resize', function() {
  ScrollTrigger.refresh();
});

// ========== REDUCED MOTION ==========
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.globalTimeline.timeScale(0.01);
}
