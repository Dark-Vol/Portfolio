import { personalData } from "../data/personal-data.js";
import { services } from "../data/services-data.js";
import { projects } from "../data/projects-data.js"


// Dynamic Website Logo Rendering
function renderWebsiteLogo(logo) {
  const websiteLogo = document.createElement("link");
  websiteLogo.rel = "icon";
  websiteLogo.type = "image/png";
  websiteLogo.href = `images-and-icons/icons/${logo}`;

  if (window.location.pathname.includes('project-fullview.html')) {
    websiteLogo.href = `images-and-icons/projects-logos/${logo}`;
  }

  document.head.appendChild(websiteLogo);
}


//------------------Render Main Page-----------------//
function renderMainPageContents() {
  renderHeaderNameAndSkills();
  renderHomeSectionContents();
  renderServicesSectionContents();
  renderProjectsSectionContents();
  renderContactSectionContents();
  renderFooterContents();
}





//------------------Render Header Name And Main Skills-----------------//
function renderHeaderNameAndSkills() {
  const name = personalData.name;
  const mainSkills = personalData.mainSkills.map(skill => `<p class="skill">${skill}</p>`).join('');

  const nameAndSkillHTML = `
    <p class="name reload-animation">${name}</p>        
    <div class="scroller">
      <div class="main-skills scroller__inner reload-animation">${mainSkills}</div>
    </div>
    `;

  const nameAndSkillsContainer = document.querySelector('.name-and-skills-container').innerHTML = nameAndSkillHTML;
}


//------------------Render Home Section Contents-----------------//
function renderHomeSectionContents() {
  const profilePic = personalData.profilePic;
  const bioWithoutLastThreeWords = personalData.bio.trim().split(/\s+/).slice(0, -3).join(" ");
  const bioHighlightedWords = personalData.bio.trim().split(/\s+/).slice(-3, -1).join(" ");
  const bioFinalWord = personalData.bio.trim().split(/\s+/).pop();
  const resume = personalData.resume;
  const techStacks = personalData.techStacks;


  const techStackSkills = techStacks.map(techStack =>
    `  <div class="skill-card" title="${techStack.name}">
          <img src="images-and-icons/icons/${techStack.icon}" alt="skill-icon" class="skill-icon">
      </div>
    `
  ).join('');


  let homeSectionHTML = `
     <div class="profilePic-and-skills-container reload-animation">
          <div class="profile-photo-container">
            <img src="images-and-icons/images/${profilePic}" alt="profile-photo" class="profile-photo">
          </div>
          
          <div class="scroller">
            <div class="skills-card-container scroller__inner d-flex">${techStackSkills}</div>
          </div>         
        </div>

        <p class="bio reload-animation">${bioWithoutLastThreeWords} <span class="unique-font">${bioHighlightedWords}<br>${bioFinalWord}.</span></p>

        <a href="data/${resume}"  download="${resume}" class="download-resume-btn glowing-button reload-animation">
          <img src="images-and-icons/icons/download icon.png" alt="" class="download-icon">
          <p class="label">Download Resume</p>
        </a>
  `;

  const homeSection = document.querySelector('#home-section').innerHTML = homeSectionHTML;
}


//------------------Render Services Section Contents-----------------//
function renderServicesSectionContents() {
  let servicesCardHTML = '';

  services.forEach(service => {
    servicesCardHTML += `
      <div class="service-card">
        <img src="images-and-icons/images/${service.image}" alt="${service.image}" class="services-img">
        <p class="services-label">Web Development</p>
      </div>
    `
  });

  const servicesCardContainer = document.querySelector('.services-card-container').innerHTML = servicesCardHTML;
}


//------------------Render Projects Section Contents-----------------//
function renderProjectsSectionContents() {
  let projectCardHTML = '';

  projects.forEach(project => {
    projectCardHTML += `
      <div class="project-card" data-id="${project.id}" >
              <div class="blur-img-container">
                <div class="img-wrapper">
                  <img src="images-and-icons/images/${project.image}">
                </div>
              </div>
              <img  class="project-image" src="images-and-icons/images/${project.image}" alt="project-image">
              <div class="project-details">
                <p class="project-type">${project.type}</p>
                <h3 class="project-name">${project.title}</h3>
                <p class="project-description">${project.projectGoal}</p>
                <img class="project-logo" src="images-and-icons/projects-logos/${project.logo}">
              </div>
      </div>
    `
  });

  const projectsCardContainer = document.querySelector('.projects-card-container').innerHTML = projectCardHTML;
}


//------------------Render Contact Section Contents-----------------//
function renderContactSectionContents() {
  const contactSectionHTML = `
  <h1 class="heading scroll-animate--upward">Get in touch</h1>

  <div class="copy-to-clipboard-btn glowing-button  number scroll-animate--upward">
    <img class="copy-icon" src="images-and-icons/icons/copy icon.png" alt="copy-icon">
    <p class="copy-detail">${personalData.contactNumber}</p>
  </div>
  
  <div class="copy-to-clipboard-btn glowing-button email scroll-animate--upward">
    <img class="copy-icon" src="images-and-icons/icons/copy icon.png" alt="copy-icon">
    <p class="copy-detail">${personalData.email.replace('@gmail.com', '')}<wbr>@gmail.com</wbr></p>
  </div>`;

  const contactSection = document.querySelector('#contact-section').innerHTML = contactSectionHTML;
}


//------------------Render Footer Contents-----------------//
function renderFooterContents() {
  const name = personalData.name
  const currentYear = new Date().getFullYear();
  const copyright = `${name} &copy; ${currentYear}`

  const footerHTML = `
    <nav class="socmed-nav scroll-animate--upward">
      <ul>
        <li>
          <a href="${personalData.tiktokLink}" target="_blank">
            <img src="images-and-icons/icons/tiktok-icon.png" alt="tiktok-icon" class="socmed-icon">
          </a>
        </li>
        <li><a href="${personalData.githubLink}" target="_blank"><img src="images-and-icons/icons/github-icon.png" alt="github-icon" class="socmed-icon"></a></li>
        <li><a href="${personalData.facebookLink}"  target="_blank"><img src="images-and-icons/icons/facebook-icon.png" alt="fb-icon" class="socmed-icon"></a></li>
      </ul>
    </nav>
    <p class="copyright-txt scroll-animate--upward">${copyright}</p>

    <a href="#" class="scroll-to-top-btn glowing-button scroll-animate--upward">
      <p class="label">Scroll to Top</p> 
      <img class="scroll-top-icon" src="images-and-icons/icons/arrow to top.png" alt="scroll-top-icon">
    </a>`;

  const footer = document.querySelector('footer').innerHTML = footerHTML;
}



//------------------Render ProjectFullView Page-----------------//
function renderProjectFullView(project, nextProjectTitle) {
  // change the title of projectFullView Page
  document.title = `${project.title} Project`

  // Render techStacks of project
  const techStacksHTML = project.techStacks.map(techStack => `
    <div class="tech-stack-card">
      <img class="tech-stack-icon" src="images-and-icons/icons/${techStack.icon}" alt="html-icon">
      <div class="tech-stack__name-and-type">
        <p class="tech-stack-name">${techStack.name}</p>
        <p class="teck-stack-type">${techStack.type}</p>
      </div>
    </div>`
  ).join('');

  // Render project fullview
  const projectFullViewHTML = `
    <div class="wrapper">
        <div class="progress-bar"></div>
        <div class="project-logo-title-type" id="project-title-section">
          <div class="project-logo reload-animation">
            <img src="images-and-icons/projects-logos/${project.logo}" alt="project-logo">
          </div>

          <div class="title-and-type">
            <h1 class="project-title reload-animation">${project.title}</h1>
            <p class="project-type reload-animation">${project.type}</p>
          </div>
        </div>

        <div class="project-img-container reload-animation">
          <img class="project-img"
            decoding="async" 
            src="images-and-icons/images/${project.image}" 
            srcset="images-and-icons/images/${project.image} 512w, 
                    images-and-icons/images/${project.image} 1024w
                    images-and-icons/images/${project.image} 1920w"
            alt="project-image"  width="1080" height="771">
        </div>
        

        <div class="project-info">
          <div class="left-column">
            <div class="overview-container container scroll-animate--upward">
              <h1 class="heading">Overview</h1>
              <p class="overview-txt">${project.overview}</p>
            </div>  
          </div>

          <div class="right-column">
            <div class="tech-stack-container container scroll-animate--upward">
              <h1 class="heading">Tech Stack</h1>
                ${techStacksHTML}
            </div>
            
            <div class="year-card container scroll-animate--upward">
              <h1 class="heading">Created</h1>
              <p class="year">${project.yearCreated}</p>
            </div>

            <button class="visit-project-btn container scroll-animate--upward">
              <a href="${project.projectLink}" class="project-link">View Project</a>
            </button>
            <button class="visit-project-btn container scroll-animate--upward">
              <a href="${project.projectLinkGit}" class="project-link">View GitHub</a>
            </button>
          </div>
        </div>

        <div class="next-project">
          <h2 class="heading scroll-animate--upward">Next Project</h2>
          <div class="proj-name-and-arrow-container next-project-btn scroll-animate--upward">
            <p class="next-project-name">${nextProjectTitle}</p>
            <img class="arrow-icon" src="images-and-icons/icons/white-arrow.png" alt="arrow-icon">
          </div>
        </div>
      </div>
  `;

  const projectFullViewContainer = document.querySelector('.project-fullview');

  projectFullViewContainer.innerHTML = projectFullViewHTML;
  projectFullViewContainer.style.setProperty('--accent-color', project.mainColor)
}


export { renderWebsiteLogo, renderMainPageContents, renderProjectFullView, renderHeaderNameAndSkills, renderFooterContents }