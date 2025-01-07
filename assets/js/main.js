(function ($) {
  "use strict";

  const projects = {
    "NTF Soccer Store Metaverse": {
      category: "filter-metaverse",
      image: "./assets/img/project/soccer.png",
      description: "A metaverse store for soccer enthusiasts, built using Spatial.io. Explore and interact with NFTs in a virtual environment.",
      links: {
        live: "https://www.spatial.io/s/Metaverse-Futbol-Demo-64bfce7fed5f6cabe428b0ec?share=8533368695620602072",
        github: "https://github.com/EddieBorbon/ArduMetaverse"
      }
    },
    "ArduMetaverse": {
      category: "filter-metaverse filter-education filter-videogames",
      image: "./assets/img/project/ardumetaverse.png",
      description: "An interactive learning platform in the metaverse for Arduino. Designed with game-like tasks and challenges, it allows users to learn programming and electronics in a fun and practical way.",
      links: {
        live: "https://www.spatial.io/s/Metaverse-Arduino-Demo-64c0036948b752b70b8c59a1?share=8032429858933292906",
        github: "https://github.com/EddieBorbon/ArduMetaverse"
      }
    },
    "Dinosaur Museum Metaverse": {
      category: "filter-metaverse filter-education",
      image: "./assets/img/project/dinosaur.png",
      description: "Welcome to the incredible Dinosaur Museum Metaverse! Immerse yourself in a unique journey through time as you explore our fascinating virtual world, where dinosaurs come to life in an astonishing way.",
      links: {
        live: "https://www.spatial.io/s/Dinosaur-Museum-64b5767f1c1f96fd5ea6cf5e?share=2666560680176790650",
        github: "https://github.com/EddieBorbon/DinosaurMuseumMetaverse"
      }
    },
    "Vladivostok's fortress Metaverse": {
      category: "filter-metaverse",
      image: "./assets/img/project/vladivostok.png",
      description: "Through the meta fortress, we will unveil the historical value of Vladivostok's fortress. This project brings history to life in a virtual environment, offering an immersive and educational experience to explore the rich heritage of this iconic landmark.",
      links: {
        live: "https://www.spatial.io/s/Vladivostok-Fortress-Metaverse-Demo-64c0036948b752b70b8c59a1?share=8032429858933292906",
        github: "https://github.com/yourusername/vladivostok-fortress-metaverse"
      }
    },
    "Teacher's Meeting Room Metaverse": {
      category: "filter-education filter-metaverse",
      image: "./assets/img/project/roomsmeeting.png",
      description: "Welcome to the Teacher's Meeting Room Metaverse! Here, educators can connect from anywhere in the world to collaborate and share ideas. This virtual meeting room is equipped with all the tools needed for a productive session, from interactive whiteboards to private breakout rooms.",
      links: {
        live: "https://www.spatial.io/s/Sala-de-Reuniones-EduSTEAM-643ef20f61551030690f0c5b?share=7514180227630875353",
        github: "https://github.com/EddieBorbon/Meetings_Room_Metaverse/blob/main/README.md"
      }
    },
    "Biology and Chemistry Lab Metaverse": {
      category: "filter-metaverse filter-education",
      image: "./assets/img/project/quimica.png",
      description: "An educational metaverse for the biology and chemistry lab. Teachers can use this tool to customize their lessons and make learning more engaging and accessible for students. This metaverse offers an interactive and immersive experience that helps students better understand key concepts in chemistry and biology and develop practical skills in a safe environment.",
      links: {
        live: "https://www.spatial.io/s/Biology-and-Chemestry-Lab-64a3e285de14d8ee19fbe098a",
        github: "https://github.com/EddieBorbon/LabChemestryMetaverse"
      }
    },
    "Classroom Metaverse: Ancient Egypt": {
      category: "filter-metaverse filter-education",
      image: "./assets/img/project/egypt.png",
      description: "An immersive experience that brings the wonders of Ancient Egypt to life. Perfect for virtual classrooms and remote learning.",
      links: {
        live: "https://www.spatial.io/s/Classroom-Metaverse-Ancient-Egypt-643eaac32cdf0e61cc281c37?share=7314498494047418523",
        github: "https://github.com/EddieBorbon/AcientEgypy_ClassroomMetaverse"
      }
    },
    "Medieval Classroom Metaverse": {
      category: "filter-metaverse filter-education",
      image: "./assets/img/project/medieval.png",
      description: "Welcome to the Medieval Classroom Metaverse! This virtual space transports you to a medieval-themed classroom. Enjoy a fully immersive journey into the past while having fun learning.",
      links: {
        live: "https://www.spatial.io/s/Medieval-ClassRoom-643e946a2cdf0e61cc27eb8b?share=4459747518484916505",
        github: "https://github.com/EddieBorbon/AcientEgypy_ClassroomMetaverse"
      }
    },
    "Modern Apartment Metaverse": {
      category: "filter-metaverse",
      image: "./assets/img/project/apartment.png",
      description: "Step into the Modern Apartment Metaverse, a sleek and stylish virtual environment showcasing the latest in real estate design. Perfect for virtual property tours.",
      links: {
        live: "https://www.spatial.io/s/Apartament-2-With-Furniture-6437217e72293b2baad23ba3?share=8997365689898201649",
        github: "https://github.com/EddieBorbon/Apartment_Metaverse"
      }
    },
    "VR Room Interaction": {
      category: "filter-vr",
      image: "./assets/img/project/vr-room.png",
      description: "This VR project demonstrates the manipulation of objects in a virtual room. It covers beginner to intermediate VR development and design skills, including interactions, ergonomics, and optimization.",
      links: {
        live: "https://www.youtube.com/watch?v=zH_SEQHIoRQ",
        github: "https://github.com/EddieBorbon/VR-Room"
      }
    },
    "VR Escape Room": {
      category: "filter-vr",
      image: "./assets/img/project/scaperoom.png",
      description: "This VR Escape Room project challenges players to solve puzzles and find clues to escape a virtual room. It combines immersive VR experiences with interactive gameplay, making it perfect for both entertainment and educational purposes.",
      links: {
        live: "https://www.youtube.com/shorts/ZU3vCadPGsQ",
        github: "https://github.com/EddieBorbon/Escape-Room-VR"
      }
    },
    "Trans-Siberian Train Simulation": {
      category: "filter-vr filter-videogames",
      image: "./assets/img/project/VRTrain.png",
      description: "This VR project simulates the iconic Trans-Siberian train journey, offering an immersive experience, explore the train's cabins, interact with objects, and enjoy the breathtaking views along the way.",
      links: {
        live: "https://www.youtube.com/watch?v=tZpUqbuJ0ko&feature=youtu.be",
        github: "https://github.com/EddieBorbon/VRTrain"
      }
    },
    "Javascript Calculator": {
      category: "filter-webapp",
      image: "./assets/img/project/javascript-calculator.png",
      description: "A simple and interactive calculator built with React, featuring standard and scientific operations. The calculator includes a variety of mathematical functions like sin, cos, tan, logarithms, square roots, and more. Additionally, the app has sound effects that play when buttons are clicked.",
      links: {
        live: "https://eddieborbon.github.io/javascript-calculator/",
        github: "https://github.com/EddieBorbon/javascript-calculator"
      }
    },
    "Random Quote Machine": {
      category: "filter-webapp",
      image: "./assets/img/project/random-quote.gif",
      description: "Welcome to the Random Quote Generator! This is a simple yet powerful React application that provides you with inspiring quotes, allows you to save your favorites, and even share them on social media. 🚀",
      links: {
        live: "https://eddieborbon.github.io/Random-Quote-Machine/",
        github: "https://github.com/EddieBorbon/Random-Quote-Machine"
      }
    },
    "Drum Machine and Sequencer": {
      category: "filter-webapp",
      image: "./assets/img/project/drum-machine.png",
      description: "This project is an interactive drum machine built with React. It allows users to create and play drum sound sequences while adjusting the volume and BPM (beats per minute) of the music. The app also enables users to control the sound using the keyboard and make modifications to the sequence in real-time.",
      links: {
        live: "https://eddieborbon.github.io/drum-machine/",
        github: "https://github.com/EddieBorbon/drum-machine"
      }
    },
    "25+5 Clock": {
      category: "filter-webapp",
      image: "./assets/img/project/25+5clock.png",
      description: "Welcome to the 25 + 5 Clock! 🎉 This project is a timer application based on the concept of 25-minute focus sessions followed by 5-minute breaks, commonly known as the Pomodoro Technique.",
      links: {
        live: "https://eddieborbon.github.io/25-5-clock",
        github: "https://github.com/EddieBorbon/25-5-clock"
      }
    },
    "Markdown Previewer": {
      category: "filter-webapp",
      image: "./assets/img/project/markdown-prev.png",
      description: "Welcome to the 25 + 5 Clock! 🎉 This project is a timer application based on the concept of 25-minute focus sessions followed by 5-minute breaks, commonly known as the Pomodoro Technique.",
      links: {
        live: "https://eddieborbon.github.io/markdown-previewer/",
        github: "https://github.com/EddieBorbon/markdown-previewer"
      }
    },
    "Alien Video Game Shop": {
      category: "filter-videogames",
      image: "./assets/img/project/alienshop.jpg",
      description: "A vibrant 3D video game shop in outer space, featuring colorful cartoon-style materials, dynamic animations, sci-fi lighting, shooting stars, steam effects, multiple camera angles, and immersive audio. Designed for fans of narrative-driven adventure games and simulation RPGs.",
      links: {
        live: "https://play.unity.com/en/games/3d1c88a7-3ca2-42a2-87c8-06a70eeb2d38/alien-video-game-shop",
        github: "https://github.com/EddieBorbon/ProjectsCreativeCore"
      }
    },
    "Beach Side Town": {
      category: "filter-videogames",
      image: "./assets/img/project/beachside.jpg",
      description: "A peaceful 3D beachside town inspired by Brighton, England, featuring pastel-colored materials, dynamic animations (waves, flags, sharks), baked lighting for day/night modes, fire and smoke effects, multiple camera angles, and calming audio. Perfect for fans of exploration and simulation games.",
      links: {
        live: "https://play.unity.com/en/games/c3b95585-88c0-4fb9-88fe-9b7190ac6b62/beachside",
        github: "https://github.com/EddieBorbon/ProjectsCreativeCore"
      }
    },
    "Architectural Rendering": {
      category: "filter-videogames",
      image: "./assets/img/project/architectural.jpg",
      description: "A realistic 3D rendering of a brutalist modern building, featuring high-quality materials, dynamic animations (paper-like people, sculptures), baked lighting with adjustable daylight, fireflies, dust particles, multiple camera angles, and immersive audio. Ideal for architects and real estate developers using VR/AR tools.",
      links: {
        live: "https://play.unity.com/en/games/9bfc0070-19cd-4369-96d5-9519d7892d6c/architectural-rendering",
        github: "https://github.com/EddieBorbon/ProjectsCreativeCore"
      }
    },
    "Crate Ninja": {
      category: "filter-videogames",
      image: "./assets/img/project/crateninja.png",
      description: "CrateNinja is an interactive game where players must click on objects that randomly appear on the screen. The game features a set of objects that fall from the bottom of the screen, with three being 'good' and one being 'bad.' The goal is to click on the good objects to destroy them, while avoiding the bad one. The objects are launched with random forces and torques, creating unpredictable movement in the air.",
      links: {
        live: "https://play.unity.com/en/games/560387c2-cceb-4ebd-b2a2-6e7ea6a257cf/crate-ninja",
        github: "https://github.com/EddieBorbon/CrateNinja"
      }
    },
    "Whack a Food": {
      category: "filter-videogames",
      image: "./assets/img/project/whackafood.png",
      description: "The goal of the game is to click on the food items that appear on the screen to score points while avoiding the skulls.",
      links: {
        live: "https://play.unity.com/en/games/321ec3b4-5760-4133-8774-9fbbf0ba9342/whack-a-food",
        github: "https://github.com/EddieBorbon/CrateNinja"
      }
    },
    "Sumo Balls Battle": {
      category: "filter-videogames",
      image: "./assets/img/project/sumobattle.png",
      description: "Knock enemies off the island, use power-ups to survive, and face tougher waves to test your skills!",
      links: {
        live: "https://play.unity.com/en/games/b3efe3ca-3608-4689-9a40-b82e3e8b68c0/sumo-battle",
        github: "https://github.com/EddieBorbon/SumoBalls.git"
      }
    },
    "Crypto Match3": {
      category: "filter-videogames",
      image: "./assets/img/project/covercrypto.png",
      description: "Knock enemies off the island, use power-ups to survive, and face tougher waves to test your skills!",
      links: {
        live: "https://play.unity.com/en/games/f161aa90-0243-4ed2-940a-e351ed7d183b/crypyo-match3",
        github: "https://github.com/EddieBorbon/CryptoMatch3.git"
      }
    },
    "Infinity Runner": {
      category: "filter-videogames",
      image: "./assets/img/project/infinity.png",
      description: "This is a fast-paced side-scrolling game where the player controls a character that jumps over oncoming obstacles to avoid crashing. 🚶‍♂️💨 The game includes dynamic background scrolling, animations, sound effects, and particle effects to enhance the gaming experience. 🎶💥",
      links: {
        live: "https://play.unity.com/en/games/04452778-8b76-4393-9888-7df3c7828ae5/infinity-runner",
        github: "https://github.com/EddieBorbon/Infinity_Runner"
      }
    },
    "Digital Art Portraits": {
      category: "filter-digitalart",
      image: "./assets/img/project/coverportraits.png",
      description: `
        Welcome to the **Digital Art Portraits** project, an artistic exploration of the fusion between art and artificial intelligence. 
        This project showcases a collection of unique portraits generated using Stable Diffusion, an advanced AI model. 
        These portraits feature my fellow artists from the Master’s program in Digital Art at the Federal University of the Far East.
      `,
      links: {
        live: "https://eddieborbon.github.io/Digital_Portraits/",
        github: "https://github.com/EddieBorbon/Digital_Portraits"
      }
    },
    "Rocket Race: A Musical Learning Game": {
      category: "filter-videogames filter-education",
      image: "./assets/img/project/rocketrace.png",
      description: `
       Rocket Race is an interactive music game built with Unity 6 where players compete in teams to correctly identify musical chords or instruments based on audio clues. The game helps players learn music by engaging them in quick decision-making while enhancing their musical ear.
      `,
      links: {
        live: "https://play.unity.com/en/games/09fd063e-56a1-44a2-a653-6fa6864b28a4/rocket-race",
        github: "https://github.com/EddieBorbon/Rocket-Race"
      }
    },
    "Chinese Dance VFX": {
      category: "filter-videogames filter-digitalart",
      image: "./assets/img/project/chinesevfx.png",
      description: `
In this project, I explored particles and visual effects in Unity to enhance scenes with dynamic effects. I experimented with Unity’s Particle Systems and VFX Graph, learning how to choose and configure these tools to create both environmental and burst effects.      `,
      links: {
        live: "https://www.youtube.com/watch?v=DVIDNGGZlKQ",
        github: "https://github.com/EddieBorbon/CreativeCore_VFX_2022.3LTS"
      }
    },
    "Choropleth Map": {
      category: "filter-webapp",
      image: "./assets/img/project/choroplethmap.png",
      description: `
This project is a Choropleth Map that visualizes the educational attainment across the United States. It displays the percentage of the population aged 25 and older with a bachelor's degree or higher (2010-2014) by county. The map is interactive, allowing users to hover over counties to see detailed information.
`,
      links: {
        live: "https://eddieborbon.github.io/Choropleth-Map/",
        github: "https://github.com/EddieBorbon/Choropleth-Map"
      }
    },

    "Heat Map": {
      category: "filter-webapp",
      image: "./assets/img/project/heatmap.png",
      description: `
This project is an interactive heat map visualizing global land-surface temperature from 1753 to 2015. Using the D3.js library, it provides a stunning visual representation of data, featuring a modern and futuristic design with neon colors and tech-inspired typography.
`,
      links: {
        live: "https://eddieborbon.github.io/Heat-Map/",
        github: "https://github.com/EddieBorbon/Heat-Map"
      }
    },

    "Scatterplot Graph": {
      category: "filter-webapp",
      image: "./assets/img/project/scatterplot.png",
      description: `
This project is an interactive scatterplot visualization of the 35 Fastest Times Up Alpe d'Huez in professional bicycle racing, with a focus on doping allegations. Built using D3.js, the chart provides a modern and futuristic design with advanced features like zooming, filtering, and dynamic tooltips.`,
      links: {
        live: "https://eddieborbon.github.io/Scatterplot-Graph/",
        github: "https://github.com/EddieBorbon/Scatterplot-Graph"
      }
    },

    "Bar Chart": {
      category: "filter-webapp",
      image: "./assets/img/project/barchart.png",
      description: `
This project is an interactive visualization of the United States Gross Domestic Product (GDP) from 1947 to 2015. It uses the D3.js library to create a bar chart that displays the data in a clear and engaging way. The design is modern and futuristic, with visual effects that enhance the user experience.
`,
      links: {
        live: "https://eddieborbon.github.io/Visualize-Data-with-a-Bar-Chart/",
        github: "https://github.com/EddieBorbon/Visualize-Data-with-a-Bar-Chart"
      }
    },

    "Gesture Music Control": {
      category: "filter-digitalart",
      image: "./assets/img/project/gesturemusiccontrol.png",
      description: `
Gesture Music Control explores the intersection of gesture and music through digital musical instruments. By leveraging machine learning, particularly neural networks, this project aims to translate hand gestures into musical control parameters for a granular synthesizer programmed in Pure Data. This research-creation project embraces open-source and DIY methodologies to foster collaborative, experimental learning.`,
      links: {
        live: "https://www.youtube.com/watch?v=437lGx45HqU&t=171s",
        github: "https://github.com/EddieBorbon/Gesture_Music_Control?tab=readme-ov-file"
      }
    },

    "3D Cell Viewer": {
      category: "filter-education",
      image: "./assets/img/project/3dcell.png",
      description: `
3D Cell Viewer is an educational Unity project designed to help students visualize and explore different types of cells—animal, plant, bacterial, and fungal—along with their organelles in an immersive 3D environment. This interactive tool enhances learning by providing a detailed, hands-on experience with cell structures, making biology concepts easier to understand.
`,
      links: {
        live: "https://play.unity.com/en/games/11b0c0d0-e18f-42c1-b18d-065448c6cbc6/celulas-edusteam",
        github: "https://github.com/EddieBorbon/CellsUnity"
      }
    },

    "Animation Unity": {
      category: "filter-digitalart filter-videogames",
      image: "./assets/img/project/animation.png",
      description: `
The world around us is constantly in motion 🌍, and the same goes for digital worlds. Static environments can feel unfinished and lifeless, but animation brings everything to life ✨! This project is the culmination of my journey learning 3D animation in Unity, where I explored both native animations and imported animations from external software.`,
      links: {
        live: "https://www.youtube.com/watch?v=KtsYnBxnk08",
        github: "https://github.com/EddieBorbon/CreativeCore_Animation"
      }
    },
  };

  // Función para mezclar un array (Fisher-Yates shuffle)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Función para generar el HTML de los proyectos
  function generateProjectHTML(project, title) {
    return `
        <div div class= "col-lg-6 col-md-6 portfolio-item ${project.category}" >
        <center>
          <h4>${title}</h4>
        </center>
        <div class="portfolio-wrap" style="height: 250px">
          <img src="${project.image}" class="img-fluid" alt="${title}">
          <div class="portfolio-info">
            <p>${project.description}</p>
            <div class="portfolio-links">
              <a href="${project.links.live}" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Go to Project"><i class="bx bx-world"></i></a>
              ${project.links.github ? `<a href="${project.links.github}" target="_blank"><i class="bx bxl-github"></i></a>` : ''}
            </div>
          </div>
        </div>
      </div >
    `;
  }

  // Función para mostrar proyectos en el DOM
  function displayProjects(projectsToShow, portfolioContainer) {
    // Limpiar el contenedor antes de agregar los proyectos
    portfolioContainer.empty();

    // Insertar los proyectos en el DOM
    projectsToShow.forEach(([title, project]) => {
      const projectHTML = generateProjectHTML(project, title);
      portfolioContainer.append(projectHTML);
    });
  }

  // Función para filtrar y mezclar los proyectos
  function filterAndShuffleProjects(filter, portfolioContainer) {
    // Convertir el objeto de proyectos en un array
    const projectEntries = Object.entries(projects);

    // Filtrar los proyectos según el filtro seleccionado
    const filteredProjects = projectEntries.filter(([title, project]) => {
      if (filter === 'all') {
        return true; // Mostrar todos los proyectos si el filtro es 'all'
      }
      return project.category.includes(filter); // Verifica si el proyecto pertenece al filtro
    });

    // Mezclar los proyectos filtrados
    const shuffledProjects = shuffleArray(filteredProjects);

    // Mostrar los proyectos en el DOM
    displayProjects(shuffledProjects, portfolioContainer);
  }

  // Insertar proyectos en el DOM en orden aleatorio al cargar la página
  $(document).ready(function () {
    const portfolioContainer = $(".portfolio-container");

    // Mostrar todos los proyectos en orden aleatorio al cargar la página
    filterAndShuffleProjects('all', portfolioContainer);

    // Manejador de clic para los filtros
    $('#portfolio-flters li').on('click', function () {
      // Remueve la clase 'filter-active' de todos los filtros
      $("#portfolio-flters li").removeClass('filter-active');
      // Agrega la clase 'filter-active' al filtro clicado
      $(this).addClass('filter-active');

      // Obtener el filtro seleccionado
      const filter = $(this).data('filter');

      // Filtrar y mezclar los proyectos según el filtro seleccionado
      filterAndShuffleProjects(filter, portfolioContainer);
    });
  });

  // Nav Menu
  $(document).on('click', '.nav-menu a, .mobile-nav a', function (e) {
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
          setTimeout(function () {
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
      setTimeout(function () {
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

    $(document).on('click', '.mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function (e) {
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
  $('.skills-content').waypoint(function () {
    $('.progress .progress-bar').each(function () {
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

})(jQuery);