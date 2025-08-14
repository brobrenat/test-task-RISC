// Image modal logic for gallery
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('img-modal');
  const modalImg = document.getElementById('modal-img');
  const modalClose = document.getElementById('modal-close');
  const galleryBtns = document.querySelectorAll('section.grid button');

  galleryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const img = btn.querySelector('img');
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modal.classList.remove('hidden');
      setTimeout(() => modal.classList.add('opacity-100'), 10);
    });
  });

  // Close modal on button click or background click
  modalClose.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('opacity-100');
    modalImg.src = '';
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      modal.classList.remove('opacity-100');
      modalImg.src = '';
    }
  });

  // Optional: Close modal on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      modal.classList.remove('opacity-100');
      modalImg.src = '';
    }
  });
});
