window.onload = () => {
  // Check if there's a hash in the URL
  if (window.location.hash) {
    history.replaceState("", document.title, window.location.pathname + window.location.search);
  }
}



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

  data.forEach((item, index) => {
    const clone = document.importNode(contentTemplate, true);
    clone.querySelector('.content-image').src = item.imageUrl;
    clone.querySelector('.content-title').textContent = item.title;
    clone.querySelector('.content-subtitle').textContent = item.subtitle || '';
    clone.querySelector('.content-description').textContent = item.description;
    clone.querySelectorAll('.first.skill').forEach(element => element.textContent = item.firstSkill );
    clone.querySelectorAll('.second.skill').forEach(element => element.textContent = item.secondSkill );
    
    // Append the clone to the container
    contentContainer.appendChild(clone);

    // Do not add margin bottom if it's the last element
  });
};

document.addEventListener("DOMContentLoaded", loadWork);



//Animate lines on scroll

const triggerAnimation = () => {
  const elements = document.querySelectorAll('.line, .wave-letters');
  const windowHeight = window.innerHeight;
  
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    
    if (rect.top <= windowHeight * 0.9) {
      element.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', triggerAnimation);



// Parallax effect

const headings = document.querySelectorAll('.parallax-heading');

const setTranslateX = () => {
  const scrollValue = window.scrollY;
  const maxScrollValue = document.body.scrollHeight - window.innerHeight;

  const scrollPercentage = scrollValue / maxScrollValue;

  const maxTranslateX = window.innerWidth;
  
  headings.forEach(heading => {
    const translateXValue = -(maxTranslateX - (maxTranslateX * scrollPercentage));
    heading.style.transform = `translateX(${translateXValue}px)`;
  });
};

window.addEventListener('scroll', () => {
  requestAnimationFrame(setTranslateX);
});





// Navmenu animation OPEN

const menuButton = document.querySelectorAll('.menu-button');
const closeButton = document.getElementById('close-menu');
const layers = document.querySelectorAll('.layer');
const options = document.querySelectorAll('.option');
const navMenu = document.querySelector('.nav-menu');
const menuList = document.querySelector('.menu-list');

const openMenu = () => {
  navMenu.style.display = 'flex'; // Show the nav menu

  // Animate layers with Web Animations API
  layers.forEach((layer, index) => {
    layer.animate([
      { height: '0' },
      { height: '110vh' } // Assuming full height is desired
    ], {
      duration: 700,
      fill: 'forwards',
      delay: index * 100,
      easing: 'ease'
    });
  });

  // Animate options with Web Animations API
  options.forEach((option, index) => {
    menuList.style.display = '';
    option.animate([
      { opacity: 0 },
      { opacity: 1 }
    ], {
      duration: 1000,
      fill: 'forwards',
      delay: index * 100 + 500,
      easing: 'ease'
    });
  });

  // Show and animate close button
  setTimeout(() => {
    closeButton.style.display = 'flex';
    closeButton.animate([
      { transform: 'scale(0)' },
      { transform: 'scale(1) rotate(270deg)' }
    ], {
      duration: 500,
      fill: 'forwards',
      easing: 'ease'
    });
  }, 500);
}

// Navmenu animation CLOSE

const closeMenu = () => {
  let animationsCompleted = 0;

  // Reverse the animations for options
  options.forEach((option, index) => {
    const animation = option.animate([
      { opacity: 1 },
      { opacity: 0 }
    ], {
      duration: 150,
      fill: 'forwards',
      delay: (options.length - index - 1) * 50,
      easing: 'ease'
    });

    animation.onfinish = () => {
      animationsCompleted++;
      if (animationsCompleted === options.length) {
        menuList.style.display = 'none';
      }
    };
  });

  // Reverse the animations for layers
  layers.forEach((layer, index) => {
    layer.animate([
      { height: '110vh' },
      { height: '0' }
    ], {
      duration: 700,
      fill: 'forwards',
      delay: (layers.length - index - 1) * 100,
      easing: 'ease'
    });
  });
    

  // Hide and animate close button
  closeButton.animate([
    { transform: 'scale(1) rotate(270deg)' },
    { transform: 'scale(0)' }
  ], {
    duration: 500,
    fill: 'forwards',
    easing: 'ease'
  }).onfinish = () => {
    closeButton.style.display = 'none';
  };
};

// Start closeMenu animation when clicking on menu options
options.forEach(option => {
  option.querySelector('a').addEventListener('click', (event) => {
    closeMenu();
  });
});

menuButton.forEach(element => {
  element.addEventListener('click', openMenu);
});
closeButton.addEventListener('click', closeMenu);




