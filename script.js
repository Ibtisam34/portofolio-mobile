const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('#overlay');
const closeImage = document.querySelector('.closeImg');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('visible');
  navMenu.classList.toggle('visible');
});

closeImage.addEventListener('click', () => {
  navMenu.classList.remove('visible');
});

document.querySelectorAll('.overlay_link').forEach((l) => l.addEventListener('click', () => {
  navMenu.classList.remove('visible');
}));

const projectSection = document.querySelector('.work-cards');
let render = '';

const projectCard = [
  {
    title: 'Profesional Art Printing Data More',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://ibtisam34.github.io/My-Portfolio',
    sourceLink: 'https://github.com/ibtisam34/My-Portfolio',
  },
  {
    title: 'Data Dashboard Healthcare',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://ibtisam34.github.io/My-Portfolio',
    sourceLink: 'https://github.com/ibtisam34/My-Portfolio',
  },
  {
    title: 'Website Protfolio',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://ibtisam.github.io/My-Portfolio',
    sourceLink: 'https://github.com/ibtisam34/My-Portfolio',
  },
  {
    title: 'Profesional Art Printing Data More',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://ibtisam34.github.io/My-Portfolio',
    sourceLink: 'https://github.com/ibtisam34/My-Portfolio',
  },
  {
    title: 'Data Dashboard Healthcare',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://ibtisam34.github.io/My-Portfolio',
    sourceLink: 'https://github.com/ibtisam34/My-Portfolio',
  },
  {
    title: 'Website Protfolio',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://ibtisam34.github.io/My-Portfolio',
    sourceLink: 'https://github.com/ibtisam34/My-Portfolio',
  },
];

projectCard.forEach((data) => {
  render += `<div id="w2" class="work1">
  <div class="work1Discription" id="w2work1Discription">
    <h2
      <span id="w2d">${data.title}</span>
    </h2>
    <p>
    ${data.description}
    </p>
    <ul class="category">
      <li>${data.technology[0]}</li>
      <li>${data.technology[1]}</li>
      <li>${data.technology[2]}</li>
    </ul>
  </div>
  <p class="title" hidden>${data.title}</p>
  <p class="description" hidden>${data.description}</p>
  <p class="livelink" hidden>${data.liveLink}</p>
  <p class="sourcelink" hidden>${data.sourceLink}</p>
  <a href="#" class="btn1" id="w2button">See Project</a>
</div>`;
  projectSection.innerHTML = render;
});

const container = document.querySelector('.work-cards');
const recent = document.querySelector('.Recentwork1');
const closeIcon = document.querySelector('.crossimg');
const css = document.querySelector('.css-display');
const multiProject = document.querySelector('.button');
const title = document.querySelector('.recent-title');
const description = document.querySelector('.recent-description');
const liveLink = document.querySelector('.live');
const sourceLink = document.querySelector('.source');

const button = container.querySelectorAll('.btn1');
const recentTitle = container.querySelectorAll('.title');
const recentDescription = container.querySelectorAll('.description');
const recentlivelink = container.querySelectorAll('.livelink');
const recentsourcelink = container.querySelectorAll('.sourcelink');

for (let i = 0; i < button.length; i += 1) {
  button[i].addEventListener('click', () => {
    title.textContent = recentTitle[i].innerHTML;
    description.textContent = recentDescription[i].innerHTML;
    liveLink.sourceLink = recentlivelink[i].outerHTML;
    sourceLink.sourceLink = recentsourcelink[i].outerHTML;

    recent.classList.add('active');
  });
}
closeIcon.addEventListener('click', () => {
  css.classList.remove('show');
  recent.classList.remove('active');
});

multiProject.addEventListener('click', () => {
  css.classList.add('show');
  recent.classList.add('active');
});
