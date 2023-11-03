const square = document.getElementById('square');

const animate = () => { square.classList.add('jump');
};

// Function to handle the end of the animation
const handleAnimationEnd = () => {
    square.classList.remove('jump');

    setTimeout(animate, 1000);
};
  
square.addEventListener('animationend', handleAnimationEnd);

// Start the initial animation
animate();






// Case studies mini CMS
function loadWork() {
  const data = [
      {
          imageUrl: "./images/1.webp",
          title: "PrimoPiano Luxury Accomodations",
          subtitle: "- B&B in Vieste, Italy.",
          description: "This live luxury room renting website combines a sleek Envato template with custom-added pages and a seamless booking feature, providing a modern and user-friendly interface that significantly improves upon the previous WordPress-based website.",
          firstSkill: "HTML",
          secondSkill: "CSS"
      },
      {
          imageUrl: "./images/2.webp",
          title: "Welcome to the blog",
          subtitle: "- Simple blog with javascript functionalities",
          description: "A user-friendly blog with practical JavaScript features including a persistent pop-up that stays closed upon page reload and a handy article sorting functionality that categorizes posts for streamlined navigation and improved reader experience.",
          firstSkill: "Javascript",
          secondSkill: "CSS"
      },
      {
        imageUrl: "./images/5.webp",
        title: "Quote machine",
        subtitle: "- API connected quote generator using React",
        description: "A React-based quote generator that fetches and displays random quotes from an API, providing users with an interactive and inspirational experience.",
        firstSkill: "React",
        secondSkill: "CSS"
    }
  ];

  const contentContainer = document.getElementById('work');
  const contentTemplate = document.getElementById('case-study').content;

  data.forEach(item => {
    const clone = document.importNode(contentTemplate, true);
      clone.getElementById('content-image').src = item.imageUrl;
      clone.getElementById('content-title').textContent = item.title;
      clone.getElementById('content-subtitle').textContent =item.subtitle || '';
      clone.getElementById('content-description').textContent = item.description;
      clone.getElementById('first-skill').textContent = item.firstSkill;
      clone.getElementById('second-skill').textContent = item.secondSkill;
      contentContainer.appendChild(clone);
  });
};

document.addEventListener("DOMContentLoaded", loadWork);



//Animate lines on scroll

const triggerAnimation = () => {
  const elements = document.querySelectorAll('.line');
  const windowHeight = window.innerHeight;
  
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    
    if (rect.top <= windowHeight * 0.9) {
      element.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', triggerAnimation);



const headings = document.querySelectorAll('.repeated-heading');

const setTranslateX = () => {
  const scrollValue = window.scrollY;
  const maxScrollValue = document.body.scrollHeight - window.innerHeight;

  // Convert vertical scroll to a horizontal percentage
  const scrollPercentage = scrollValue / maxScrollValue;

  // Assuming your content is 100% wider than the viewport
  const maxTranslateX = window.innerWidth;
  
  headings.forEach(heading => {
    const translateXValue = -(maxTranslateX - (maxTranslateX * scrollPercentage));
    heading.style.transform = `translateX(${translateXValue}px)`;
  });
};

window.addEventListener('scroll', () => {
  requestAnimationFrame(setTranslateX);
});



