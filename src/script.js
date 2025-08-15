document.addEventListener('DOMContentLoaded', () => {
  // modal elements
  const modal = document.getElementById('img-modal');
  const modalImg = document.getElementById('modal-img');
  const modalClose = document.getElementById('modal-close');
  const galleryBtns = document.querySelectorAll('section.grid button');

  // open modal on gallery image click
  galleryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const img = btn.querySelector('img');
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modal.classList.remove('hidden');
      setTimeout(() => modal.classList.add('opacity-100'), 10);
    });
  });

  // close modal on close button
  modalClose.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('opacity-100');
    modalImg.src = '';
  });

  // close modal on background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      modal.classList.remove('opacity-100');
      modalImg.src = '';
    }
  });

  // close modal on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      modal.classList.remove('opacity-100');
      modalImg.src = '';
    }
  });

  // --- scroll-to-top button logic ---
  const scrollBtn = document.getElementById('scrollToTopBtn');
  // Show button after scrolling down 200px
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollBtn.classList.remove('opacity-0');
      scrollBtn.classList.add('opacity-100');
    } else {
      scrollBtn.classList.add('opacity-0');
      scrollBtn.classList.remove('opacity-100');
    }
  });
  // Scroll to top on button click
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- Dark mode toggle logic ---
  const btn = document.getElementById('darkModeToggle');
  const html = document.documentElement;
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');
  function updateIcons() {
    if (html.classList.contains('dark')) {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'inline-block';
    } else {
      sunIcon.style.display = 'inline-block';
      moonIcon.style.display = 'none';
    }
  }
  btn.addEventListener('click', () => {
    html.classList.toggle('dark');
    updateIcons();
  });
  updateIcons();
});
