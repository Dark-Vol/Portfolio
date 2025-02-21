import {renderWebsiteLogo, renderMainPageContents } from "./render-contents.js";
import {headerFunctionality} from "./header.js";
import { autoScroller, glowingButtonsOnhoverAnimation, mainPageHeaderOnScrollAnimation, servicesCardOnScrollAnimation, projectsCardOnScrollAnimation ,elementUpwardAnimationOnScroll } from "./animations.js";
import { personalData } from "../data/personal-data.js";


renderMainPageContents();
headerFunctionality();


document.addEventListener('DOMContentLoaded', () => {
  const websiteLogo = personalData.websiteLogo;
  renderWebsiteLogo(websiteLogo);
  autoScroller();
  glowingButtonsOnhoverAnimation();
  mainPageHeaderOnScrollAnimation();
  servicesCardOnScrollAnimation();
  projectsCardOnScrollAnimation();
  elementUpwardAnimationOnScroll();
  scrollToSectionFromProjectFullView();

});







//-------------Scroll to a specific section smoothly after the page loads, if triggered from project fullview page----------//
function scrollToSectionFromProjectFullView(){
  const sectionId = sessionStorage.getItem('scrollToSection');  // Get the section ID from sessionStorage

  if (sectionId) {
    // Find the section and scroll to it smoothly
    const section = document.querySelector(sectionId);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
    
    sessionStorage.removeItem('scrollToSection');  // Clear the sessionStorage to prevent scrolling on future visits
  }
}



//----------------------Show project fullview-----------------//
const projectsCard = document.querySelectorAll('#projects-section .project-card');

projectsCard.forEach(projectCard => { 
  projectCard.addEventListener('click', () => {
  const projectId = projectCard.getAttribute('data-id');
  const url = `project-fullview.html?id=${projectId}`

  if(window.innerWidth >= 780){
    window.open(url, '_blank')
  }else{
    window.open(url, '_self');
  }
  });
});


//----------------------Copy contact details to clipboard-----------------//
const copyToClipboardBtns = document.querySelectorAll('.copy-to-clipboard-btn');

copyToClipboardBtns.forEach(button => {
  const detailCopy = button.querySelector('.copy-detail').innerText;

  button.addEventListener('click', ()=>{
    navigator.clipboard.writeText(detailCopy).
      then(() => alert(`"${detailCopy}" Copied to your clipboard`)).
      catch(err => alert(`"${err}" Failed to copy`));
  });
});


