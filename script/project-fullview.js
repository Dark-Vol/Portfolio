import { headerFunctionality } from "./header.js";
import { projects } from "../data/projects-data.js";
import {renderWebsiteLogo,  renderProjectFullView, renderHeaderNameAndSkills, renderFooterContents } from "./render-contents.js"
import { autoScroller, glowingButtonsOnhoverAnimation, projectFullviewHeaderOnScrollAnimation, elementUpwardAnimationOnScroll } from "./animations.js";


headerFunctionality();
renderHeaderNameAndSkills();
renderFooterContents();


document.addEventListener('DOMContentLoaded', ()=> {
  autoScroller();
  projectFullviewHeaderOnScrollAnimation();
  elementUpwardAnimationOnScroll();
  glowingButtonsOnhoverAnimation();

});


function getProjectId(){
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

let projectId = parseInt(getProjectId() || 0);

//
//----------------------Display Project Fullview-----------------//
//
function displayProjectFullView(){
  const project = projects[projectId];
  const nextProjectTitle = projects[(projectId + 1) % projects.length].title;
  
  if(project){
    renderProjectFullView(project, nextProjectTitle);
    renderWebsiteLogo(project.logo);
  }else{
    alert("Project not found")
  }
}

displayProjectFullView();


//
//----------------------Next Project Feature-----------------//
//
const nextProjectBtn = document.querySelector('.next-project-btn');
nextProjectBtn.addEventListener('click', () => {
  const nextProjectId = (projectId + 1) % projects.length;
  const url = `project-fullview.html?id=${nextProjectId}`

  window.open(url, '_self');
});

//
//----------------------Progress bar-----------------//
//
window.addEventListener('scroll', ()=>{
  let documentHeight = document.documentElement.scrollHeight;
  let viewportHeight = window.innerHeight;
  let scrollPosition = window.scrollY;

  let percentageScrolled = (scrollPosition / (documentHeight - viewportHeight) * 100).toFixed(5);

  const progressBar = document.querySelector('.project-fullview .progress-bar');
  progressBar.style.width = `${percentageScrolled}%`
});
