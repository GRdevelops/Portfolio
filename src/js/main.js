// Check if there's a hash in the URL
window.onload = () => {
	if (window.location.hash) {
		history.replaceState('', document.title, window.location.pathname + window.location.search);
	}
};

// Control interval between a full square animation
const square = document.getElementById('square');
const squareWrapper = document.querySelector('.square-wrapper');

function startAnimationCycle() {
	square.classList.add('rotate');
	squareWrapper.classList.add('jump');

	setTimeout(() => {
		square.classList.remove('rotate');
		squareWrapper.classList.remove('jump');

		setTimeout(startAnimationCycle, 300);
	}, 1000);
}

startAnimationCycle();

// Case studies mini CMS
function loadWork() {
	const data = [
		{
			link: 'https://open-ai-workout-generator.vercel.app/',
			github: 'https://github.com/GRdevelops/openAI-Workout-Generator',
			imageUrl: './images/projects/ai-workout-generator-cover.webp',
			alt: '',
			title: 'OpenAI Workout Generator',
			subtitle: '- React state management, API calls & instructions, Server implementation & Auth0.',
			description:
				'OpenAI Workout Generator is a web app that lets you create a bespoke workout based on your level, equipment and goals. The challenges were: managing state flow, connecting data across components, maintaining high modularity and uncontaminated logic (which I could see becoming increasingly important). The backend is supported by Vercel serverless functions. Authentication is managed by Auth0. I enjoyed keeping the code clean with Emotion and minimal comments. Overall, this project was a major learning experience.',
			firstSkill: 'React',
			secondSkill: 'RESTful APIs',
		},
		{
			link: 'https://www.primopianovieste.it/',
			github: 'https://github.com/GRdevelops/Portfolio',
			imageUrl: './images/projects/primopiano-cover.webp',
			alt: '',
			title: 'PrimoPiano Luxury Accomodations',
			subtitle: '- Rental business in Vieste, Italy.',
			description:
				'A refurbished website for an accomodation rental business in Vieste. I used an envato template and modified it, creating additional pages and sections. I also implemented a new booking engine for online reservations, making this a fully functional official website. This was my first coding project.',
			firstSkill: 'CSS',
			secondSkill: 'HTML',
		},
		{
			link: 'https://grdevelops.github.io/Welcome-To-The-Blog/',
			github: 'https://github.com/GRdevelops/Welcome-To-The-Blog',
			imageUrl: './images/projects/blog-cover.webp',
			alt: '',
			title: 'Welcome to the blog',
			subtitle: '- Simple blog with javascript functionalities',
			description:
				'A user-friendly blog with practical JavaScript features including a persistent pop-up that stays closed upon page reload and a handy article sorting functionality that categorizes posts based on your selection. This was my second coding project.',
			firstSkill: 'Javascript',
			secondSkill: 'CSS',
		},
		{
			link: 'https://quote-generator-using-react.netlify.app/',
			github: 'https://github.com/GRdevelops/Quote-Machine',
			imageUrl: './images/projects/quote-machine.png',
			alt: '',
			title: 'Quote machine',
			subtitle: '- API connected quote generator using React',
			description:
				'A React-based quote generator that fetches and displays random quotes from an API, providing users with an interactive and inspirational experience. This was my third coding project.',
			firstSkill: 'React',
			secondSkill: 'CSS',
		},
	];

	const contentContainer = document.getElementById('work');
	const contentTemplate = document.getElementById('case-study').content;
	
	data.forEach((item) => {
	    const clone = document.importNode(contentTemplate, true);
			const visitButton = clone.querySelector('.btn-3');
			const seeOnGitHub = clone.querySelector('.btn-4');	
	    const imageWrapper = clone.querySelector('.image-wrapper');
	    const contentImage = clone.querySelector('.content-image');
	    const contentTitle = clone.querySelector('.content-title');
	    const contentSubtitle = clone.querySelector('.content-subtitle');
	    const contentDescription = clone.querySelector('.content-description');
	    const firstSkillElements = clone.querySelectorAll('.first.skill');
	    const secondSkillElements = clone.querySelectorAll('.second.skill');	

			visitButton.href = item.link;
			visitButton.title = item.link;
			seeOnGitHub.href = item.github;
			seeOnGitHub.title = item.github;	
	    imageWrapper.href = item.link;
			imageWrapper.title = item.link; 
	    contentImage.src = item.imageUrl;
	    contentImage.alt = item.title;
	    contentTitle.textContent = item.title;
	    contentSubtitle.textContent = item.subtitle;
	    contentDescription.textContent = item.description;	
	    firstSkillElements.forEach((element) => {
	        element.textContent = item.firstSkill;
	    });	
	    secondSkillElements.forEach((element) => {
	        element.textContent = item.secondSkill;
	    });
	    // Append the clone to the container
	    contentContainer.appendChild(clone);
	});
}

document.addEventListener('DOMContentLoaded', loadWork);

//Animate lines on scroll

const triggerAnimation = () => {
	const elements = document.querySelectorAll('.line, .wave-letters');
	const windowHeight = window.innerHeight;

	elements.forEach((element) => {
		const rect = element.getBoundingClientRect();

		if (rect.top <= windowHeight * 0.9) {
			element.classList.add('animate');
		}
	});
};

window.addEventListener('scroll', triggerAnimation);

// Parallax effect

const headings = document.querySelectorAll('.parallax-heading');

const setTranslateX = () => {
	const scrollValue = window.scrollY;
	const maxScrollValue = document.body.scrollHeight - window.innerHeight;

	const scrollPercentage = scrollValue / maxScrollValue;

	const maxTranslateX = window.innerWidth;

	headings.forEach((heading) => {
		const translateXValue = -(maxTranslateX - maxTranslateX * scrollPercentage);
		heading.style.transform = `translateX(${translateXValue}px)`;
	});
};

window.addEventListener('scroll', () => {
	requestAnimationFrame(setTranslateX);
});

// Navmenu animation OPEN

const menuOpenButton = document.querySelectorAll('.open-menu');
const menuCloseButton = document.getElementById('close-menu');
const layers = document.querySelectorAll('.layer');
const options = document.querySelectorAll('.option');
const navMenu = document.querySelector('.nav-menu');
const menuList = document.querySelector('.menu-list');

const openMenu = () => {
	navMenu.style.display = 'flex'; // Show the nav menu

	// Animate layers with Web Animations API
	layers.forEach((layer, index) => {
		layer.animate(
			[
				{ height: '0' },
				{ height: '110vh' }, // Assuming full height is desired
			],
			{
				duration: 700,
				fill: 'forwards',
				delay: index * 100,
				easing: 'ease',
			}
		);
	});

	// Animate options with Web Animations API
	options.forEach((option, index) => {
		menuList.style.display = '';
		option.animate([{ opacity: 0 }, { opacity: 1 }], {
			duration: 1000,
			fill: 'forwards',
			delay: index * 100 + 500,
			easing: 'ease',
		});
	});

	// Show and animate close button
	setTimeout(() => {
		menuCloseButton.style.display = 'flex';
		menuCloseButton.animate([{ transform: 'scale(0)' }, { transform: 'scale(1) rotate(270deg)' }], {
			duration: 500,
			fill: 'forwards',
			easing: 'ease',
		});
	}, 500);
};

// Navmenu animation CLOSE

const closeMenu = () => {
	let animationsCompleted = 0;

	// Reverse the animations for options
	options.forEach((option, index) => {
		const animation = option.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: 150,
			fill: 'forwards',
			delay: (options.length - index - 1) * 50,
			easing: 'ease',
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
		layer.animate([{ height: '110vh' }, { height: '0' }], {
			duration: 700,
			fill: 'forwards',
			delay: (layers.length - index - 1) * 100,
			easing: 'ease',
		});
	});

	// Hide and animate close button
	menuCloseButton.animate([{ transform: 'scale(1) rotate(270deg)' }, { transform: 'scale(0)' }], {
		duration: 500,
		fill: 'forwards',
		easing: 'ease',
	}).onfinish = () => {
		menuCloseButton.style.display = 'none';
	};
};

// Start closeMenu animation when clicking on menu options
options.forEach((option) => {
	option.querySelector('a').addEventListener('click', (event) => {
		closeMenu();
	});
});

menuOpenButton.forEach((element) => {
	element.addEventListener('click', openMenu);
});
menuCloseButton.addEventListener('click', closeMenu);


// Text animation (Using SplitType library)
document.addEventListener('DOMContentLoaded', function() {
	const myText = new SplitType('.my-text', {
			types: 'chars'
	});

	// Animate each character with GSAP
	gsap.to(myText.chars, {
			y: 0, 
			stagger: 0.05, 
			delay: 0.2, 
			duration: 0.1 
	});
});

