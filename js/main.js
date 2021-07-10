// Inicia o carrossel (GliderJS) e suas configs

new Glider(document.querySelector('.glider'), {
  // Mobile-first defaults
  slidesToShow: 2.5,
  slidesToScroll: 2.5,
  scrollLock: true,
  draggable: true,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 768,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: '4.5',
        slidesToScroll: '4.5',
        itemWidth: 150,
        duration: 1.50
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 6.5,
        slidesToScroll: 6.5,
        itemWidth: 150,
        duration: 1.50
      }
    }
  ]
});