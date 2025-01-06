!(function($) {
  "use strict";

  // Arreglo de proyectos
  const projects = [
    {
      title: "NTF Soccer Store Metaverse",
      image: "./assets/img/project/soccer.png",
      description: "A metaverse store for soccer enthusiasts, built using Spatial.io.",
      links: [
        { type: "web", url: "https://www.spatial.io/s/Metaverse-Futbol-Demo-64bfce7fed5f6cabe428b0ec?share=8533368695620602072" }
      ],
      category: "filter-metaverse"
    },
    {
      title: "ArduMetaverse",
      image: "./assets/img/project/ardumetaverse.png",
      description: "An interactive learning platform in the metaverse for Arduino.",
      links: [
        { type: "web", url: "https://www.spatial.io/s/Metaverse-Arduino-Demo-64c0036948b752b70b8c59a1?share=8032429858933292906" },
        { type: "github", url: "https://github.com/EddieBorbon/ArduMetaverse" }
      ],
      category: "filter-metaverse filter-education filter-videogames"
    },
    // Agrega más proyectos aquí...
  ];

  // Función para mezclar y renderizar proyectos
  function shuffleProjects() {
    const portfolioContainer = document.querySelector('.portfolio-container');

    if (!portfolioContainer) {
      console.error('No se encontró el contenedor de proyectos con la clase "portfolio-container".');
      return;
    }

    // Mezcla el arreglo de proyectos
    const shuffledProjects = shuffleArray(projects);

    // Limpia el contenedor
    portfolioContainer.innerHTML = '';

    // Renderiza los proyectos mezclados
    shuffledProjects.forEach(project => {
      const projectHTML = `
        <div class="col-lg-6 col-md-6 portfolio-item ${project.category}">
          <center><h4>${project.title}</h4></center>
          <div class="portfolio-wrap" style="height: 250px">
            <img src="${project.image}" class="img-fluid" alt="${project.title}">
            <div class="portfolio-info">
              <p>${project.description}</p>
              <div class="portfolio-links">
                ${project.links.map(link => `
                  <a href="${link.url}" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Go to Project">
                    <i class="bx ${link.type === 'web' ? 'bx-world' : 'bxl-github'}"></i>
                  </a>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
      portfolioContainer.innerHTML += projectHTML;
    });

    // Inicializa VenoBox para los nuevos elementos
    $('.venobox').venobox();
  }

  // Función para mezclar un arreglo
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

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
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
  });

  // Inicializa VenoBox (lightbox feature)
  $(document).ready(function() {
    $('.venobox').venobox();
  });

  // Llama a la función para reorganizar los proyectos cuando la página cargue
  $(document).ready(function() {
    shuffleProjects();
  });

})(jQuery);