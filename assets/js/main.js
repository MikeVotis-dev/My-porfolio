/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/



(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
    // move the toggle button to the right when header is shown, back to left when hidden
    if (document.querySelector('#header').classList.contains('header-show')) {
      headerToggleBtn.classList.add('to-right');
      headerToggleBtn.classList.remove('to-left');
    } else {
      headerToggleBtn.classList.add('to-left');
      headerToggleBtn.classList.remove('to-right');
    }
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  // initialize toggle position: left when header hidden, right when shown
  if (headerToggleBtn) {
    if (document.querySelector('#header').classList.contains('header-show')) {
      headerToggleBtn.classList.add('to-right');
    } else {
      headerToggleBtn.classList.add('to-left');
    }
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Language toggle
   */
  const languageToggle = document.querySelector('#site-lang-toggle');
  let typedInstance = null;

  const translations = {
    en: {
      htmlLang: 'en',
      toggleText: 'EL',
      toggleLabel: 'Switch language to Greek',
      content: {
        '#navmenu a[href="#hero"]': `<i class="bi bi-house navicon"></i>Home`,
        '#navmenu a[href="#about"]': `<i class="bi bi-person navicon"></i> About`,
        '#navmenu a[href="#resume"]': `<i class="bi bi-file-earmark-text navicon"></i> Resume`,
        '#navmenu a[href="#projects"]': `<i class="bi bi-github navicon"></i> Projects`,
        '#navmenu a[href="#certifications"]': `<i class="bi bi-patch-check navicon"></i> Certifications`,
        '#navmenu a[href="#contact"]': `<i class="bi bi-envelope navicon"></i> Contact`,
        '#hero p': `I'm <span class="typed" data-typed-items="Youtuber,Developer,Designer,Editor">Designer</span>`,
        '#about h2': `About <span class="highlight-gold">me</span>`,
        '#about p': `I am <strong>Michail Votis</strong>, a twelve year old kid who has been involved in <span class="highlight-blue">robotics</span> and <span class="highlight-gold">programming</span> since I was 7 years old. I have created a small channel on <strong>YouTube</strong> which I am trying to develop. I really like programming and web development and my dream is to become a <span class="highlight-blue">programmer</span>.`,
        '.about-subtitle': `<span class="highlight-gold">Web developer</span> &amp; <span class="highlight-blue">Youtuber</span>`,
        '.about-info-box .col-lg-6:nth-child(1) .about-info-list li:nth-child(1) strong': `Birthday:`,
        '.about-info-box .col-lg-6:nth-child(1) .about-info-list li:nth-child(1) span': `7 January 2014`,
        '.about-info-box .col-lg-6:nth-child(1) .about-info-list li:nth-child(2) strong': `My channel:`,
        '.about-info-box .col-lg-6:nth-child(1) .about-info-list li:nth-child(3) strong': `City:`,
        '.about-info-box .col-lg-6:nth-child(1) .about-info-list li:nth-child(3) span': `Thessaloniki, Greece`,
        '.about-info-box .col-lg-6:nth-child(2) .about-info-list li:nth-child(1) strong': `Age:`,
        '.about-info-box .col-lg-6:nth-child(2) .about-info-list li:nth-child(3) strong': `School:`,
        '.about-description': `I am a developer and I have been learning programming languages such as <span class="highlight-gold">HTML</span>, <span class="highlight-blue">CSS</span>, JavaScript, Python, C++, and Java and I am taking courses in <a href="https://greece.alg.academy/" target="_blank">Algorithmics</a>. I also have knowledge of video editing software such as Davinci Resolve and Photoshop. I am constantly trying to learn new things and improve my <span class="highlight-gold">skills</span>.`,
        '#stats .col-lg-3:nth-child(1) strong': `Happy Clients`,
        '#stats .col-lg-3:nth-child(2) strong': `Projects`,
        '#stats .col-lg-3:nth-child(3) strong': `Hours Of Support`,
        '#stats .col-lg-3:nth-child(4) strong': `Hard Worker`,
        '#skills .section-title h2': `Skills`,
        '#skills .section-subtext': `Some of the skills and tools I use in programming, design, and content creation.`,
        '#skills .col-lg-6:nth-child(2) .skill-card:nth-child(4) .skill span:first-child': `Computers`,
        '#resume .section-title h2': `Resume`,
        '#resume .resume-box p:nth-child(1)': `Hi! I'm <strong>Michail Votis</strong>, and I'm <strong>12 years old</strong>. I have loved <span class="highlight-blue">robotics</span> and <span class="highlight-gold">programming</span> since I was 7 years old, and since then I have been trying to learn new things all the time.`,
        '#resume .resume-box p:nth-child(2)': `I created a small <strong>YouTube channel</strong>, which I continue to develop step by step. I really enjoy programming and web development, and my dream is to become a <span class="highlight-blue">programmer</span>.`,
        '#resume .resume-box p:nth-child(3)': `I am learning languages like <span class="highlight-gold">HTML</span>, <span class="highlight-blue">CSS</span>, JavaScript, Python, C++, and Java, while also experimenting with creative tools like <strong>DaVinci Resolve</strong>, <strong>Photoshop</strong>, and <strong>Canva</strong>.`,
        '#resume .resume-box p:nth-child(4)': `I am always trying to improve, create new projects, and share my ideas with others.`,
        '#projects .section-title h2': `Projects`,
        '#projects .section-subtext': `A space for my best work. Each project card links directly to my GitHub.`,
        '#projects .showcase-card .showcase-tag': `GitHub Project`,
        '#projects .col-lg-4:nth-child(1) .showcase-body p': `It is a Python project that allows users to design and customize their own T-shirts.`,
        '#projects .col-lg-4:nth-child(2) .showcase-body p': `A smart budget calculator that helps users decide whether they should buy an item, calculate monthly savings, and see when they can afford it.`,
        '#projects .col-lg-4:nth-child(3) .showcase-body p': `An interactive Python game using Turtle graphics, where the player clicks on the moving turtle and tries to complete 5 catches to win.`,
        '#projects .showcase-button': `Open on GitHub`,
        '#certifications .section-title h2': `Certifications`,
        '#certifications .section-subtext': `Courses, certificates, and learning achievements I want to highlight.`,
        '#certifications .col-lg-4:nth-child(1) h3': `CS50x: Introduction to Computer Science`,
        '#certifications .col-lg-4:nth-child(1) p': `Completed CS50x: Introduction to Computer Science, including computer science fundamentals, programming logic, problem sets, and a final project.`,
        '#certifications .col-lg-4:nth-child(2) h3': `Python Start: Python Basics`,
        '#certifications .col-lg-4:nth-child(2) p': `Completed the Algorithmics Python Start program, covering Python basics, control structures, functions, modules, OOP, and PyGame across 64 academic hours.`,
        '#certifications .showcase-button': `View Certificate`,
        '#contact .section-title h2': `Contact`,
        '#contact .section-subtext': `Feel free to send me a message for collaborations, projects, or anything you would like to ask.`,
        '#contact .info-item:nth-child(1) h3': `Address`,
        '#contact .info-item:nth-child(2) h3': `Email`,
        'label[for="name-field"]': `Your Name`,
        'label[for="email-field"]': `Your Email`,
        'label[for="subject-field"]': `Subject`,
        'label[for="message-field"]': `Message`,
        '.loading': `Loading`,
        '.sent-message': `Your message has been sent. Thank you!`,
        '.contact-btn': `Send Message`,
        '.footer .copyright p': `&copy; <span>Copyright</span> <strong class="px-1 sitename">MikeVotis</strong> <span>All Rights Reserved</span>`,
        '.footer .credits p:nth-child(1)': `Designed by <a href="https://bootstrapmade.com/" target="_blank">BootstrapMade</a> and distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a>.`,
        '.footer-made': `But programmed by <span class="highlight-blue">Mike Votis</span>`,
        '.footer .showcase-button': `<i class="bi bi-file-text"></i> Privacy Policy`
      }
    },
    el: {
      htmlLang: 'el',
      toggleText: 'EN',
      toggleLabel: 'Switch language to English',
      content: {
        '#navmenu a[href="#hero"]': `<i class="bi bi-house navicon"></i>Αρχική`,
        '#navmenu a[href="#about"]': `<i class="bi bi-person navicon"></i> Σχετικά`,
        '#navmenu a[href="#resume"]': `<i class="bi bi-file-earmark-text navicon"></i> Βιογραφικό`,
        '#navmenu a[href="#projects"]': `<i class="bi bi-github navicon"></i> Projects`,
        '#navmenu a[href="#contact"]': `<i class="bi bi-envelope navicon"></i> Επικοινωνία`,
        '#hero p': `Είμαι <span class="typed" data-typed-items="YouTuber,Προγραμματιστής,Designer,Editor">Designer</span>`,
        '#about h2': `Σχετικά με <span class="highlight-gold">εμένα</span>`,
        '#about p': `Είμαι ο <strong>Μιχαήλ Βότης</strong>, ένα παιδί δώδεκα χρονών που ασχολείται με τη <span class="highlight-blue">ρομποτική</span> και τον <span class="highlight-gold">προγραμματισμό</span> από τότε που ήμουν 7 χρονών. Έχω δημιουργήσει ένα μικρό κανάλι στο <strong>YouTube</strong>, το οποίο προσπαθώ να αναπτύξω. Μου αρέσει πολύ ο προγραμματισμός και το web development και το όνειρό μου είναι να γίνω <span class="highlight-blue">προγραμματιστής</span>.`,
        '.about-subtitle': `<span class="highlight-gold">Web developer</span> &amp; <span class="highlight-blue">YouTuber</span>`,
        '.about-info-box .col-lg-6:nth-child(1) .about-info-list li:nth-child(1) strong': `Γενέθλια:`,
        '.about-info-box .col-lg-6:nth-child(1) .about-info-list li:nth-child(1) span': `7 Ιανουαρίου 2014`,
        '.about-info-box .col-lg-6:nth-child(1) .about-info-list li:nth-child(2) strong': `Το κανάλι μου:`,
        '.about-info-box .col-lg-6:nth-child(1) .about-info-list li:nth-child(3) strong': `Πόλη:`,
        '.about-info-box .col-lg-6:nth-child(1) .about-info-list li:nth-child(3) span': `Θεσσαλονίκη, Ελλάδα`,
        '.about-info-box .col-lg-6:nth-child(2) .about-info-list li:nth-child(1) strong': `Ηλικία:`,
        '.about-info-box .col-lg-6:nth-child(2) .about-info-list li:nth-child(3) strong': `Σχολείο:`,
        '.about-description': `Είμαι developer και μαθαίνω γλώσσες προγραμματισμού όπως <span class="highlight-gold">HTML</span>, <span class="highlight-blue">CSS</span>, JavaScript, Python, C++ και Java, ενώ κάνω μαθήματα στην <a href="https://greece.alg.academy/" target="_blank">Algorithmics</a>. Επίσης γνωρίζω προγράμματα επεξεργασίας βίντεο και εικόνας, όπως το DaVinci Resolve και το Photoshop. Προσπαθώ συνεχώς να μαθαίνω νέα πράγματα και να βελτιώνω τις <span class="highlight-gold">δεξιότητές</span> μου.`,
        '#stats .col-lg-3:nth-child(1) strong': `Χαρούμενοι πελάτες`,
        '#stats .col-lg-3:nth-child(2) strong': `Projects`,
        '#stats .col-lg-3:nth-child(3) strong': `Ώρες υποστήριξης`,
        '#stats .col-lg-3:nth-child(4) strong': `Εργατικός`,
        '#skills .section-title h2': `Δεξιότητες`,
        '#skills .section-subtext': `Μερικές από τις δεξιότητες και τα εργαλεία που χρησιμοποιώ στον προγραμματισμό, τον σχεδιασμό και τη δημιουργία περιεχομένου.`,
        '#skills .col-lg-6:nth-child(2) .skill-card:nth-child(4) .skill span:first-child': `Υπολογιστές`,
        '#resume .section-title h2': `Βιογραφικό`,
        '#resume .resume-box p:nth-child(1)': `Γεια! Είμαι ο <strong>Μιχαήλ Βότης</strong> και είμαι <strong>12 χρονών</strong>. Αγαπώ τη <span class="highlight-blue">ρομποτική</span> και τον <span class="highlight-gold">προγραμματισμό</span> από τότε που ήμουν 7 χρονών, και από τότε προσπαθώ συνέχεια να μαθαίνω καινούρια πράγματα.`,
        '#resume .resume-box p:nth-child(2)': `Δημιούργησα ένα μικρό <strong>κανάλι στο YouTube</strong>, το οποίο συνεχίζω να αναπτύσσω βήμα βήμα. Μου αρέσει πολύ ο προγραμματισμός και το web development, και το όνειρό μου είναι να γίνω <span class="highlight-blue">προγραμματιστής</span>.`,
        '#resume .resume-box p:nth-child(3)': `Μαθαίνω γλώσσες όπως <span class="highlight-gold">HTML</span>, <span class="highlight-blue">CSS</span>, JavaScript, Python, C++ και Java, ενώ πειραματίζομαι και με δημιουργικά εργαλεία όπως το <strong>DaVinci Resolve</strong>, το <strong>Photoshop</strong> και το <strong>Canva</strong>.`,
        '#resume .resume-box p:nth-child(4)': `Προσπαθώ πάντα να βελτιώνομαι, να δημιουργώ νέα projects και να μοιράζομαι τις ιδέες μου με άλλους.`,
        '#projects .section-title h2': `Projects`,
        '#projects .section-subtext': `Ένας χώρος για τις καλύτερες δουλειές μου. Κάθε κάρτα project οδηγεί απευθείας στο GitHub μου.`,
        '#projects .showcase-card .showcase-tag': `GitHub Project`,
        '#projects .col-lg-4:nth-child(1) .showcase-body p': `Είναι ένα project σε Python που επιτρέπει στους χρήστες να σχεδιάζουν και να προσαρμόζουν τα δικά τους T-shirts.`,
        '#projects .col-lg-4:nth-child(2) .showcase-body p': `Ένας έξυπνος υπολογιστής budget που βοηθά τους χρήστες να αποφασίσουν αν πρέπει να αγοράσουν κάτι, να υπολογίσουν μηνιαίες αποταμιεύσεις και να δουν πότε μπορούν να το αποκτήσουν.`,
        '#projects .col-lg-4:nth-child(3) .showcase-body p': `Ένα διαδραστικό παιχνίδι Python με Turtle graphics, όπου ο παίκτης κάνει κλικ στην κινούμενη χελώνα και προσπαθεί να πετύχει 5 πιασίματα για να κερδίσει.`,
        '#projects .showcase-button': `Άνοιγμα στο GitHub`,
        '#contact .section-title h2': `Επικοινωνία`,
        '#contact .section-subtext': `Μπορείς να μου στείλεις μήνυμα για συνεργασίες, projects ή οτιδήποτε θέλεις να ρωτήσεις.`,
        '#contact .info-item:nth-child(1) h3': `Διεύθυνση`,
        '#contact .info-item:nth-child(2) h3': `Email`,
        'label[for="name-field"]': `Το όνομά σου`,
        'label[for="email-field"]': `Το email σου`,
        'label[for="subject-field"]': `Θέμα`,
        'label[for="message-field"]': `Μήνυμα`,
        '.loading': `Φόρτωση`,
        '.sent-message': `Το μήνυμά σου στάλθηκε. Ευχαριστώ!`,
        '.contact-btn': `Αποστολή μηνύματος`,
        '.footer .copyright p': `&copy; <span>Copyright</span> <strong class="px-1 sitename">MikeVotis</strong> <span>Με επιφύλαξη παντός δικαιώματος</span>`,
        '.footer .credits p:nth-child(1)': `Σχεδιασμένο από το <a href="https://bootstrapmade.com/" target="_blank">BootstrapMade</a> και διανεμημένο από το <a href="https://themewagon.com" target="_blank">ThemeWagon</a>.`,
        '.footer-made': `Αλλά προγραμματισμένο από τον <span class="highlight-blue">Mike Votis</span>`,
        '.footer .showcase-button': `<i class="bi bi-file-text"></i> Πολιτική απορρήτου`
      }
    }
  };

  Object.assign(translations.el.content, {
    '#navmenu a[href="#certifications"]': `<i class="bi bi-patch-check navicon"></i> Πιστοποιήσεις`,
    '#certifications .section-title h2': `Πιστοποιήσεις`,
    '#certifications .section-subtext': `Μαθήματα, πιστοποιητικά και εκπαιδευτικές επιτυχίες που θέλω να παρουσιάσω.`,
    '#certifications .col-lg-4:nth-child(1) h3': `CS50x: Εισαγωγή στην Επιστήμη Υπολογιστών`,
    '#certifications .col-lg-4:nth-child(1) p': `Ολοκλήρωσα το CS50x: Introduction to Computer Science, μαθαίνοντας βασικές αρχές επιστήμης υπολογιστών, προγραμματιστική λογική, problem sets και ένα τελικό project.`,
    '#certifications .col-lg-4:nth-child(2) h3': `Python Start: Βασικά Python`,
    '#certifications .col-lg-4:nth-child(2) p': `Ολοκλήρωσα το πρόγραμμα Python Start της Algorithmics, με Python basics, control structures, functions, modules, OOP και PyGame σε 64 ακαδημαϊκές ώρες.`,
    '#certifications .showcase-button': `Προβολή Πιστοποιητικού`
  });

  function initTyped() {
    const selectTyped = document.querySelector('.typed');

    if (typedInstance) {
      typedInstance.destroy();
      typedInstance = null;
    }

    if (selectTyped) {
      let typedStrings = selectTyped.getAttribute('data-typed-items');
      typedStrings = typedStrings.split(',');
      typedInstance = new Typed('.typed', {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  }

  function setLanguage(language) {
    const dictionary = translations[language] || translations.en;

    document.documentElement.lang = dictionary.htmlLang;

    if (typedInstance) {
      typedInstance.destroy();
      typedInstance = null;
    }

    Object.entries(dictionary.content).forEach(([selector, value]) => {
      document.querySelectorAll(selector).forEach(element => {
        element.innerHTML = value;
      });
    });

    if (languageToggle) {
      languageToggle.textContent = dictionary.toggleText;
      languageToggle.setAttribute('aria-label', dictionary.toggleLabel);
      languageToggle.setAttribute('title', dictionary.toggleLabel);
    }

    try {
      localStorage.setItem('siteLanguage', language);
    } catch (error) {
      // Ignore private browsing storage errors.
    }

    initTyped();
  }

  let savedLanguage = 'en';
  try {
    savedLanguage = localStorage.getItem('siteLanguage') || 'en';
  } catch (error) {
    savedLanguage = 'en';
  }

  setLanguage(savedLanguage === 'el' ? 'el' : 'en');

  if (languageToggle) {
    languageToggle.addEventListener('click', () => {
      const nextLanguage = document.documentElement.lang === 'el' ? 'en' : 'el';
      setLanguage(nextLanguage);
    });
  }

  function toggleLanguageContrast() {
    if (languageToggle) {
      languageToggle.classList.toggle('alt', window.scrollY > 100);
    }
  }

  window.addEventListener('load', toggleLanguageContrast);
  document.addEventListener('scroll', toggleLanguageContrast);
  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();
