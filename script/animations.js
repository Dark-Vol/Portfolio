
gsap.registerPlugin(ScrollTrigger);

//---------------------All auto scrollers--------------------//
function autoScroller(){
  const scrollers = document.querySelectorAll('.scroller');

  if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
  }

  function addAnimation(){
    scrollers.forEach(scroller => {
      scroller.setAttribute('data-animated', true);
    });
  
    const scrollersInner = document.querySelectorAll('.scroller__inner');
  
    scrollersInner.forEach(scrollerInner => {
      const scrollerItems = Array.from(scrollerInner.children);
    
      scrollerItems.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
}


//---------------------Glowing buttons onhover animation--------------------//
function glowingButtonsOnhoverAnimation(){
  const glowingButtons = document.querySelectorAll('.glowing-button:not(.download-resume-btn.glowing-button)');

  glowingButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.animation = 'add-glow 0.3s ease forwards'
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.animation = 'remove-glow 0.3s ease forwards'
    });
  });
}


//---------------------Main page header onscroll animation--------------------//
function mainPageHeaderOnScrollAnimation(){
  const header = document.querySelector('header');
  const servicesContainer = document.querySelector('#services-section .visibility-based');

  const headerAnimation = gsap.to(header, {
    opacity: 0,
    scale: 0.9,
    ease: 'ease',
    scrollTrigger:{
      trigger: servicesContainer,
      start: '-20% bottom',
      end: "bottom 90%",
      scrub: 0.5,
    } 
  });
}


//---------------------Project fullview page header onscroll animation--------------------//
function projectFullviewHeaderOnScrollAnimation(){
  const header = document.querySelector('header');

  const projectLogo = document.querySelector('.project-fullview .project-logo');  
  const headerAnimation = gsap.to(header, {
    opacity: 0,
    scale: 0.9,
    ease: 'ease',
    scrollTrigger: {
      trigger: projectLogo,
      start: 'top 23%',
      end: "200px 40%",
      scrub: 0.5,
    }
  });
}


//---------------------Services section onscroll animation--------------------//
function servicesCardOnScrollAnimation(){
  const servicesContainer = document.querySelector('#services-section .visibility-based');

  gsap.to(servicesContainer, {
    opacity: 1,
    scale: 1,
    ease: 'ease-out',
    scrollTrigger: {
      trigger:'#services-section',
      scrub: 2.8,
      start: 'top 99%',
      end:  'bottom 98%',
      // markers: true,
    }
  });
}


//---------------------Projects card onscroll animation--------------------//
function projectsCardOnScrollAnimation(){
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    const projectsImage = card.querySelector('.project-image');

    gsap.to(projectsImage, {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: card,
        scrub: 2.8,
        start: 'top bottom', 
        end: 'bottom 97%',
        // markers: true,
      }
    });
  });
}


//---------------------All elements with class of ".scroll-animate--upward" animate upward on scroll--------------------//
function elementUpwardAnimationOnScroll(){
  const elementsAnimateUpward = document.querySelectorAll('.scroll-animate--upward');

  elementsAnimateUpward.forEach(element => {
    gsap.from (element, {
      scale: 0.98,
      ease: 'ease',
      duration: 0.6,
      y: 55,
      scrollTrigger: {
        trigger: element, 
        start: 'top bottom',
        toggleActions: "play none play reverse",
      }
    });
  });
}


export {autoScroller, glowingButtonsOnhoverAnimation, mainPageHeaderOnScrollAnimation, projectFullviewHeaderOnScrollAnimation, servicesCardOnScrollAnimation, projectsCardOnScrollAnimation, elementUpwardAnimationOnScroll}

