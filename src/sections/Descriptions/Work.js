import ScrollReveal from 'scrollreveal';

export const initScrollReveal = () => {
  const sr = ScrollReveal();

  if (window.innerWidth < 768) {
    document.querySelectorAll('.timeline-content').forEach((element) => {
      if (element.classList.contains('js--fadeInLeft')) {
        element.classList.remove('js--fadeInLeft');
        element.classList.add('js--fadeInRight');
      }
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });
  } else {
    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });
  }
};
