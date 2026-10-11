/* ============================================
   CODJU WINTER FEST — Interactions & Modals
   ============================================ */

(function () {
  'use strict';

  // --- Navigation Scroll Effect ---
  const nav = document.getElementById('nav');
  const handleNavScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // --- Mobile Menu Toggle ---
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      const isOpen = mobileMenu.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        mobileMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    }, { passive: true });
  }

  // --- Smooth Scroll for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = nav ? nav.offsetHeight : 72;
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  // --- Intersection Observer for Reveal Animations ---
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('visible'));
  }

  // --- Animated Counter for Stats ---
  const animateCounter = (el, target, duration) => {
    const startTime = performance.now();
    const suffix = el.textContent.replace(/[\d.,]/g, '');

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      if (target >= 1000) {
        el.textContent = current.toLocaleString() + suffix;
      } else {
        el.textContent = current + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  const statNumbers = document.querySelectorAll('.stat-card__number');
  if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const text = el.textContent.trim();
            const numMatch = text.match(/[\d,]+/);
            if (numMatch) {
              const numVal = parseInt(numMatch[0].replace(/,/g, ''), 10);
              animateCounter(el, numVal, 1600);
            }
            statsObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    statNumbers.forEach((el) => statsObserver.observe(el));
  }

  // --- Stage Plan / Curriculum Interactive Tabs (Screenshot 5) ---
  const stageData = {
    1: {
      badge: 'STAGE 01',
      title: 'Visual Animation with ScratchJr',
      bullets: [
        'How digital animation and logic work in daily life',
        'Character movement, timing, events and speech bubbles',
        'Sound effects, interactive triggers and scene transitions',
        'Build and publish your first animated story project'
      ],
      tools: 'ScratchJr, Story Canvas, Sound FX',
      img: 'assets/day1.png',
      alt: 'Stage 1 ScratchJr Learning Visual'
    },
    2: {
      badge: 'STAGE 02',
      title: 'Game Logic & Mechanics with Scratch',
      bullets: [
        'Game loops, score counters and coordinate systems',
        'Sprite animations, jump physics and gravity simulations',
        'Collision detection, win/lose triggers and sound effects',
        'Create and test a playable 2D arcade platformer game'
      ],
      tools: 'Scratch 3.0, Physics Engine, Collision Detection',
      img: 'assets/day2.png',
      alt: 'Stage 2 Scratch Game Logic Learning Visual'
    },
    3: {
      badge: 'STAGE 03',
      title: 'Real Code & Logic with Python',
      bullets: [
        'Variables, data types and conditional branching (if/else)',
        'Interactive terminal input, score tracking and calculations',
        'While loops, functions and structured modular code',
        'Build a text adventure RPG and math quiz engine'
      ],
      tools: 'Python 3, Replit, Logic Loops',
      img: 'assets/day3.png',
      alt: 'Stage 3 Python Apps Learning Visual'
    },
    4: {
      badge: 'STAGE 04',
      title: 'Smart Creations with AI Studio',
      bullets: [
        'Prompt engineering structures with ChatGPT and Gemini',
        'Generate custom character visuals and story art via Canva AI',
        'Compose personalized theme songs and soundscapes using Suno',
        'Combine coding + AI to publish a complete creative portfolio'
      ],
      tools: 'ChatGPT, Gemini, Canva AI, Suno',
      img: 'assets/day4.png',
      alt: 'Stage 4 AI Studio Learning Visual'
    }
  };

  const stageButtons = document.querySelectorAll('.stage-tab-btn');
  const stageBadgeEl = document.getElementById('stageBadge');
  const stageTitleEl = document.getElementById('stageTitle');
  const stageBulletsEl = document.getElementById('stageBullets');
  const stageToolsStripEl = document.getElementById('stageToolsStrip');
  const stageIllustrationEl = document.getElementById('stageIllustration');
  const stageCard = document.getElementById('stageShowcaseCard');

  if (stageButtons.length > 0 && stageBadgeEl && stageTitleEl && stageBulletsEl && stageIllustrationEl) {
    stageButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const stageNum = btn.getAttribute('data-stage');
        const data = stageData[stageNum];
        if (!data) return;

        stageButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        // Smooth fade effect
        if (stageCard) {
          stageCard.style.opacity = '0.4';
          stageCard.style.transform = 'translateY(4px)';
          stageCard.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        }

        setTimeout(() => {
          stageBadgeEl.textContent = data.badge;
          stageTitleEl.textContent = data.title;
          stageBulletsEl.innerHTML = data.bullets.map((b) => `<li><span>•</span> ${b}</li>`).join('');
          if (stageToolsStripEl) {
            stageToolsStripEl.innerHTML = `<strong>Covering Creative Tools:</strong> ${data.tools}`;
          }
          stageIllustrationEl.src = data.img;
          stageIllustrationEl.alt = data.alt;

          if (stageCard) {
            stageCard.style.opacity = '1';
            stageCard.style.transform = 'translateY(0)';
          }
        }, 150);
      });
    });
  }

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const header = item.querySelector('.faq-item__header');
    const body = item.querySelector('.faq-item__body');

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      faqItems.forEach((other) => {
        other.classList.remove('active');
        const otherBody = other.querySelector('.faq-item__body');
        if (otherBody) otherBody.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // --- Student Projects Data & Modal Logic ---
  const studentProjects = [
    {
      title: 'Cosmic Explorer Storybook',
      student: 'Aarav S. · Grade 3',
      domain: 'ScratchJr',
      desc: 'A multi-scene animated adventure following an astronaut navigating deep space with voiceovers and sound effects.',
      howBuilt: 'Aarav programmed character movements using visual sequencing blocks in ScratchJr, mapped custom recorded voice lines for dialogues, and used trigger events to transition smoothly between 3 cosmic scenes.',
      features: [
        '3 Interactive Animated Story Scenes',
        'Custom Voice Recordings & Ambient Audio',
        'Event-Driven Motion Sequencing Blocks'
      ],
      tools: ['ScratchJr', 'Visual Blocks', 'Audio FX'],
      skills: ['Storyboarding', 'Event Logic', 'Creative Sequencing'],
      img: 'assets/day1.png'
    },
    {
      title: 'Neon Runner 2D Arcade',
      student: 'Ananya K. · Grade 6',
      domain: 'Scratch',
      desc: 'A playable side-scrolling platformer with jump physics, obstacle collision detection, and a live scoring system.',
      howBuilt: 'Ananya designed custom obstacle sprites in Scratch 3.0, scripted y-velocity jump gravity physics, and coded hit-box collision boundaries that reset player lives and trigger high-score updates.',
      features: [
        'Custom Jump Velocity & Gravity Physics',
        'Dynamic Hit-Box Collision Detection',
        'Live Score Multiplier & Player Lives System'
      ],
      tools: ['Scratch 3.0', 'Physics Engine', 'Game Logic'],
      skills: ['Coordinate Geometry', 'Variable Tracking', 'Game Mechanics'],
      img: 'assets/day2.png'
    },
    {
      title: 'Realm of Eldoria (Python RPG)',
      student: 'Rohan M. · Grade 8',
      domain: 'Python',
      desc: 'A text adventure built in Python with dynamic decision branching, character inventory, and combat logic loops.',
      howBuilt: 'Rohan structured a modular Python codebase using while loops, conditional if/elif branches, and dictionary structures to track player stats, items found, and random turn-based battle rolls.',
      features: [
        'Branching Narrative Decision Trees',
        'Dynamic Inventory Management System',
        'Turn-Based Battle Calculations & Logic Loops'
      ],
      tools: ['Python 3', 'Replit', 'Conditionals'],
      skills: ['Algorithmic Logic', 'Data Structures', 'Terminal UI'],
      img: 'assets/day3.png'
    },
    {
      title: 'StudyQuest AI Assistant',
      student: 'Diya P. · Grade 7',
      domain: 'AI',
      desc: 'A personalized study companion created using guided prompt chains, AI visual flashcards, and custom background music.',
      howBuilt: 'Diya engineered multi-step system prompts in ChatGPT to break down science concepts, synthesized custom character artwork in Canva AI, and prompted custom focus soundscapes in Suno.',
      features: [
        'Structured Multi-Step Prompt Chains',
        'Generated Visual Flashcard Art Assets',
        'Ambient Focus Soundtracks Prompted via Suno'
      ],
      tools: ['ChatGPT', 'Canva AI', 'Suno'],
      skills: ['Prompt Engineering', 'Multimodal Design', 'Audio Synthesis'],
      img: 'assets/day4.png'
    }
  ];

  const projectModal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');

  const openProjectModal = (index) => {
    const data = studentProjects[index];
    if (!data || !projectModal || !modalContent) return;

    modalContent.innerHTML = `
      <img src="${data.img}" alt="${data.title}" class="modal-project-img" />
      <div class="modal-project-header">
        <div class="modal-project-meta">${data.domain} · ${data.student}</div>
        <h3 class="modal-project-title" id="modalProjectTitle">${data.title}</h3>
      </div>
      <p class="modal-project-desc">${data.desc}</p>
      
      <h4 class="modal-section-title">How It Was Built:</h4>
      <p class="modal-project-desc" style="margin-bottom: 16px;">${data.howBuilt}</p>

      <h4 class="modal-section-title">Key Features:</h4>
      <ul class="modal-features-list">
        ${data.features.map(f => `<li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> <span>${f}</span></li>`).join('')}
      </ul>

      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        ${data.tools.map(t => `<span class="tool-chip">${t}</span>`).join('')}
      </div>
    `;

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    if (projectModal) {
      projectModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  document.querySelectorAll('.project-trigger').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-project'), 10);
      openProjectModal(idx);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

  // --- Video Modal Logic ---
  const videoModal = document.getElementById('videoModal');
  const videoPlayerIframe = document.getElementById('videoPlayerIframe');
  const videoModalCloseBtn = document.getElementById('videoModalCloseBtn');
  const videoModalBackdrop = document.getElementById('videoModalBackdrop');

  const openVideoModal = (url) => {
    if (!videoModal || !videoPlayerIframe) return;
    const cleanUrl = url.includes('autoplay') ? url : url + '?autoplay=1';
    videoPlayerIframe.src = cleanUrl;
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    if (videoModal && videoPlayerIframe) {
      videoPlayerIframe.src = '';
      videoModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  document.querySelectorAll('.video-card').forEach((card) => {
    card.addEventListener('click', () => {
      const url = card.getAttribute('data-video-url');
      if (url) openVideoModal(url);
    });
  });

  if (videoModalCloseBtn) videoModalCloseBtn.addEventListener('click', closeVideoModal);
  if (videoModalBackdrop) videoModalBackdrop.addEventListener('click', closeVideoModal);

  // Global ESC key for closing modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeVideoModal();
    }
  });

})();
