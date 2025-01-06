!(function($) {
  "use strict";

  // Nav Menu
  $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if (hash == '#header') {
          $('#header').removeClass('header-top');
          $("section").removeClass('section-show');
          return;
        }

        if (!$('#header').hasClass('header-top')) {
          $('#header').addClass('header-top');
          setTimeout(function() {
            $("section").removeClass('section-show');
            $(hash).addClass('section-show');
          }, 350);
        } else {
          $("section").removeClass('section-show');
          $(hash).addClass('section-show');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }

        // Shuffle projects when the "Projects" tab is clicked
        if (hash === '#portfolio') {
          shuffleProjects();
        }

        return false;

      }
    }
  });

  // Activate/show sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      $('#header').addClass('header-top');
      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
      setTimeout(function() {
        $("section").removeClass('section-show');
        $(initial_nav).addClass('section-show');
      }, 350);
    }
  }

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    // Inicializa Isotope
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item', // Selecciona los elementos a filtrar
      layoutMode: 'fitRows' // Modo de diseño
    });

    // Manejador de clic para los filtros
    $('#portfolio-flters li').on('click', function() {
      // Remueve la clase 'filter-active' de todos los filtros
      $("#portfolio-flters li").removeClass('filter-active');
      // Agrega la clase 'filter-active' al filtro clicado
      $(this).addClass('filter-active');

      // Aplica el filtro seleccionado
      portfolioIsotope.isotope({
        filter: $(this).data('filter') // Usa el valor del atributo data-filter
      });
    });
  });

  // Inicializa VenoBox (lightbox feature)
  $(document).ready(function() {
    $('.venobox').venobox();
  });

  // Función para reorganizar los proyectos aleatoriamente
  function shuffleProjects() {
    // Selecciona el contenedor de los proyectos
    const portfolioContainer = document.querySelector('.portfolio-container');

    // Verifica si el contenedor existe
    if (!portfolioContainer) {
      console.error('No se encontró el contenedor de proyectos con la clase "portfolio-container".');
      return;
    }

    // Obtén todos los elementos de los proyectos
    const portfolioItems = Array.from(portfolioContainer.children);

    // Función para reorganizar aleatoriamente un array
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambia los elementos
      }
      return array;
    }

    // Reorganiza los elementos de los proyectos
    const shuffledItems = shuffleArray(portfolioItems);

    // Limpia el contenedor
    portfolioContainer.innerHTML = '';

    // Agrega los elementos reorganizados al contenedor
    shuffledItems.forEach(item => {
      portfolioContainer.appendChild(item);
    });
  }

  // Llama a la función para reorganizar los proyectos cuando la página cargue
  $(document).ready(function() {
    shuffleProjects();
  });

})(jQuery);