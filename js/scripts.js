const square = document.getElementById('square');

const animate = () => { square.classList.add('jump');
};

// Function to handle the end of the animation
const handleAnimationEnd = () => {
    square.classList.remove('jump');

    setTimeout(animate, 1000);
}
  
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
          description: "A cutting-edge digital platform designed to revolutionize the way people interact with technology. Back in the beginning of the year, I downloaded a template from envato market.",
          firstSkill: "HTML",
          secondSkill: "CSS"
      },
      {
          imageUrl: "./images/2.webp",
          title: "Welcome to the blog",
          subtitle: "- Simple blog with javascript functionalities",
          description: "A cutting-edge digital platform designed to revolutionize the way people interact with technology. Back in the beginning of the year, I downloaded a template from envato market.",
          firstSkill: "Javascript",
          secondSkill: "CSS"
      },
      {
        imageUrl: "./images/5.webp",
        title: "Quote machine",
        subtitle: "- API connected quote generator using React",
        description: "A cutting-edge digital platform designed to revolutionize the way people interact with technology. Back in the beginning of the year, I downloaded a template from envato market.",
        firstSkill: "Javascript",
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

