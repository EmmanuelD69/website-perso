document.addEventListener('DOMContentLoaded', function(){
    var paragraphe = document.querySelector('#presentation p');
    /* Intro texte anim */
    new TypeIt('#presentation p', {
        speed: 15,
        startDelay: 900
      })
      .type("Bonjour,<br> Je m'appelle Emmanuel DUROUGE.<br>Concevoir et intégrer des sites web sont<br> mes activités principales.<br>Mes compétences sont multiples: <br> HTML / CSS / Javascript / <br> JQuery / Wordpress / Prestashop...<br>Mon domaine de prédilection est le Front-End.<br> Bienvenue sur ma page personnelle :)")
      .go();

      particlesJS("particles-js", {
        particles: {
          number: { value: 160, density: { enable: true, value_area: 800 } },
          color: { value: "#d2d2d2" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
          },
          opacity: {
            value: 1,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 600 }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: false, mode: "repulse" },
            resize: true
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
            repulse: { distance: 400, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
          }
        },
        retina_detect: true
      });
      
      

    /* ******************************************************** */
    // const wrapperEl = document.querySelector('.wrapper');
    // const numberOfEls = 90;
    // const duration = 6000;
    // const delay = duration / numberOfEls;
    // var anime = []
    // let tl = anime.timeline({duration: delay, complete: function() { tl.restart(); }});

    // function createEl(i) {
    //     let el = document.createElement('div');
    //     const rotate = (360 / numberOfEls) * i;
    //     const translateY = -50;
    //     const hue = Math.round(360 / numberOfEls * i);
    //     el.classList.add('el');
    //     el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
    //     el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
    //     tl.add({
    //     begin: function() {
    //         anime({
    //         targets: el,
    //         backgroundColor: ['hsl(' + hue + ', 40%, 60%)', 'hsl(' + hue + ', 60%, 80%)'],
    //         rotate: [rotate + 'deg', rotate + 10 +'deg'],
    //         translateY: [translateY + '%', translateY + 10 + '%'],
    //         scale: [1, 1.25],
    //         easing: 'easeInOutSine',
    //         direction: 'alternate',
    //         duration: duration * .1
    //         });
    //     }
    //     });
    //     wrapperEl.appendChild(el);
    // };

    // for (let i = 0; i < numberOfEls; i++) createEl(i);
})

