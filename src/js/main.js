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
			subtitle: '- Web App featuring State management, OpenAI API integration, Serverless & Auth0.',
			description:
				"OpenAI Workout Generator is a web app that lets you create a tailored workout based on your level, equipment and goals. The challenges were: <span style='font-weight: 600'>managing state</span> flow, <span style='font-weight: 600'>connecting data</span> across components, maintaining <span style='font-weight: 600'>high modularity</span> and uncontaminated logic. From a UI/UX standpoint, the workout section <span style='font-weight: 600'>dinamically displays data</span> based on the output — data is converted into an object, which then is used to populate UI elements incrementally. The backend is supported by Vercel <span style='font-weight: 600'>serverless</span> functions. <span style='font-weight: 600'>Authentication</span> is managed by Auth0. I enjoyed keeping the code clean with <span style='font-weight: 600'>Emotion</span> and minimal comments. Overall, this project was a major learning experience.",
			firstSkill: 'React',
			secondSkill: 'OpenAI API',
		},
		{
			link: 'https://www.primopianovieste.it/',
			github: 'https://github.com/GRdevelops/Primo-Piano-Luxury-Accomodations',
			imageUrl: './images/projects/primopiano-cover.webp',
			alt: '',
			title: 'PrimoPiano Luxury Accommodations',
			subtitle: '- Rental business in Vieste, Italy.',
			description:
				"PrimoPiano Luxury Accommodations is an accommodation rental business in Vieste. They asked for my help to refurbish their website. Being my first serious project, I used an Envato template and modified it, creating tailored <span style='font-weight: 600'>additional pages</span> and sections. I then <span style='font-weight: 600'>integrated</span> their <span style='font-weight: 600'>booking engine</span> to keep online reservation functionality. It is a fully functional website. Some challenges encountered were: hosting, migration, metadata, 301 redirects and .htaccess, accessibility, performance optimization.",
			firstSkill: 'Migration',
			secondSkill: 'CSS',
		},
		{
			link: 'https://grdevelops.github.io/Welcome-To-The-Blog/',
			github: 'https://github.com/GRdevelops/Welcome-To-The-Blog',
			imageUrl: './images/projects/blog-cover.webp',
			alt: '',
			title: 'Welcome to the blog',
			subtitle: '- A responsive blog homepage featuring JavaScript functionalities.',
			description:
				"Welcome to the Blog was conceived as a straightforward yet robust blog homepage, marking my second coding project. I meticulously chose <span style='font-weight: 600'>descriptive names</span> for CSS classes and JavaScript functions to ensure code clarity and maintainability. In terms of layout, I made sure to keep an overall <span style='font-weight: 600'>consistent design</span> with flexbox/grids. A key feature was integrating Mailchimp for email collection. Utilizing <span style='font-weight: 600'>vanilla JavaScript</span>, I implemented a pop-up that stays closed if you reload the page and a sorting functionality that shows posts relative to the selected category.",
			firstSkill: 'Javascript',
			secondSkill: 'CSS',
		},
		{
			link: 'https://quote-generator-using-react.netlify.app/',
			github: 'https://github.com/GRdevelops/Quote-Machine',
			imageUrl: './images/projects/quote-machine.png',
			alt: '',
			title: 'InspirQuote',
			subtitle: '- API connected quote generator using React',
			description:
				"InspirQuote is a <span style='font-weight: 600'>React-based</span> quote generator that dynamically fetches and displays a diverse range of quotes from an <span style='font-weight: 600'>external API</span>. Each new quote triggers a fresh change in the app's background and icon colors. Building this as my third coding project, I honed my foundational skills in React and API integration.",
			firstSkill: 'React',
			secondSkill: 'RESTful APIs',
		},
	];

	const contentContainer = document.getElementById('work');
	const contentTemplate = document.getElementById('case-study').content;

	data.forEach(item => {
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
		contentSubtitle.innerHTML = item.subtitle;
		contentDescription.innerHTML = item.description;
		firstSkillElements.forEach(element => {
			element.textContent = item.firstSkill;
		});
		secondSkillElements.forEach(element => {
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

	elements.forEach(element => {
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

	headings.forEach(heading => {
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
options.forEach(option => {
	option.querySelector('a').addEventListener('click', event => {
		closeMenu();
	});
});

menuOpenButton.forEach(element => {
	element.addEventListener('click', openMenu);
});
menuCloseButton.addEventListener('click', closeMenu);

// Text animation (Using SplitType library)
document.addEventListener('DOMContentLoaded', function () {
	const myText = new SplitType('.my-text', {
		types: 'chars',
	});

	// Animate each character with GSAP
	gsap.to(myText.chars, {
		y: 0,
		stagger: 0.05,
		delay: 0.2,
		duration: 0.1,
	});
});


// Dark Mode + keep dark mode on reload
const darkModeButton = document.getElementById('dark-mode');

let debounceTimer;
darkModeButton.addEventListener('click', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        document.body.classList.toggle('dark');
        // Update preference on toggle
        const isDarkMode = document.body.classList.contains('dark');
        localStorage.setItem('darkMode', isDarkMode);
    }, 100);
});

// Check and apply user's preference on page load
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'true') {
        darkModeButton.click(); // Simulate a click if the stored preference is dark mode
    }
});
