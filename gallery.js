document.addEventListener('DOMContentLoaded', function() {
  // Tarkista ikkunan leveys (esim. desktop >= 1024px)
  if (window.innerWidth >= 1024) {
    const gallery = document.querySelector('.gallery');
    if (!gallery) return;

    const images = gallery.getElementsByTagName('img');
    Array.from(images).forEach((img) => {
      const p = img.nextElementSibling;
      if (!p || p.tagName.toLowerCase() !== 'p') return;

      const ul = p.nextElementSibling;
      if (!ul || ul.tagName.toLowerCase() !== 'ul') return;

      if (!img.parentElement.classList.contains('gallery-item')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'gallery-item';

        img.parentNode.insertBefore(wrapper, img);

        wrapper.appendChild(img);
        wrapper.appendChild(p);
        wrapper.appendChild(ul);
      }
    });

    gallery.classList.add('gallery-grid');
  }
});
