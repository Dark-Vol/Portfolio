
export function headerFunctionality(){
  const header = document.querySelector('header');
  const topNav = document.querySelector('header .top-nav');
  const topNavLinks = document.querySelectorAll('.top-nav a')
  const topNavIcon = document.querySelector('header .nav-icon');

  //
  //----------------------Show and hide top-nav-----------------//
  //
  topNavIcon.addEventListener('click', ()=>{
    if(topNavIcon.classList.contains('show-nav-icon')){
      showNav();
    }else{
      hideNav();
    }
  });

  function showNav(){
    header.classList.add('background');
    topNav.style.display = 'inline-block';
    topNavIcon.classList.add('hide-nav-icon');
    topNavIcon.classList.remove('show-nav-icon');
    topNavLinks.forEach(link => {
      link.style.animation = 'fade-in 1.5s forwards'
    });
  }

  function hideNav(){
    header.style.animation =  'remove-background 0.32s forwards ease-in-out';
    topNav.style.display = 'none';
    topNavIcon.classList.add('show-nav-icon');
    topNavIcon.classList.remove('hide-nav-icon');
    setTimeout(()=>{
      header.classList.remove('background');
      header.style.animation = '';
    }, 220);
  }


  //
  //----------------topNav hide when click a link to go another section, work only if window width is less than 780px-------//
  //
  topNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if(window.innerWidth < 780){
        hideNav();
      }
    });
  });


  //
  //---------------The top-nav force to show and the hamburger icon hide when the screen size is greater than 780px------------//
  //
  window.addEventListener('resize', ()=>{
    if(window.innerWidth > 780){
      topNavIcon.style.display = 'none';
      topNav.style.display = 'flow';
      topNavLinks.forEach(link => {
        link.style.opacity = '1'
      });
    }else{
      topNavIcon.style.display = 'flex';
      topNav.style.display = 'none'
      topNavIcon.classList.remove('hide-nav-icon');
      topNavIcon.classList.add('show-nav-icon');
      header.classList.remove('background');
    }
  });

  
  //
  //----------------------This code runs only on project-fullview.html page-----------------//
  //
  if (window.location.pathname.includes('project-fullview.html')) {
    topNavLinks.forEach(link => {
      link.addEventListener('click', (event) => {       
        const section = link.getAttribute('href'); // Get the target section  
        event.preventDefault();          
        sessionStorage.setItem('scrollToSection', section);  // Store the target section in sessionStorage to use later in anothe page
        window.location.href = 'page.html'; 
      });
    });
  }

}