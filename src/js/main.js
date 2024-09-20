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
			link: 'https://app.reai.it/',
			imageUrl: '/images/projects/reai-banner.webp',
			alt: 'REAI',
			title: 'REAI',
			subtitle: "AI-powered full-stack app that streamlines document review for real estate agents, saving time and enhancing efficiency.",
			description: "REAI is an <span style='font-weight: 600'>AI-powered tool</span> designed to streamline document review for real estate professionals. It uses advanced AI models to <span style='font-weight: 600'>extract and analyze</span> information from property documents with high precision. REAI maintains context across uploaded files, ensuring no details are missed. The tool offers <span style='font-weight: 600'>automatic analysis</span> and interactive chat features, allowing users to query document specifics effortlessly. With its focus on accuracy and efficiency, REAI significantly <span style='font-weight: 600'>reduces time and errors</span> in property document processing, making it an invaluable asset for both junior and senior real estate agents.",
			firstSkill: 'AI Engineering',
			secondSkill: 'Next.js',
		},
		{
			link: 'https://open-ai-workout-generator.vercel.app/',
			github: 'https://github.com/GRdevelops/openAI-Workout-Generator',
			imageUrl: '/images/projects/ai-workout-generator-cover.webp',
			alt: '',
			title: 'OpenAI Workout Generator',
			subtitle: 'Web App featuring React, OpenAI API integration, Serverless & Auth0.',
			description:
				"OpenAI Workout Generator is a web app that lets you create a <span style='font-weight: 600'>tailored workout</span> based on your level, equipment and goals. Whether you need to plan your next gym program or a quick home workout on the fly, this app will tell you which exercises to do (sets, reps and rest included). The backend is supported by Vercel <span style='font-weight: 600'>serverless</span> functions. <span style='font-weight: 600'>Authentication</span> is managed by Auth0. I tried to keep the code clean and understandable with <span style='font-weight: 600'>Emotion</span> and descriptive comments.",
			firstSkill: 'React',
			secondSkill: 'OpenAI API',
		},
		{
			link: 'https://www.primopianovieste.it/',
			github: 'https://github.com/GRdevelops/Primo-Piano-Luxury-Accomodations',
			imageUrl: '/images/projects/primopiano-cover.webp',
			alt: '',
			title: 'PrimoPiano Luxury Accommodations',
			subtitle: 'Rental business in Vieste, Italy.',
			description:
				"PrimoPiano Luxury Accommodations is an accommodation rental business in Vieste. I picked a code base template and improved it, creating tailored <span style='font-weight: 600'>additional pages</span> and sections. I then <span style='font-weight: 600'>integrated</span> their <span style='font-weight: 600'>booking engine</span> on the website to allow users to book a room or check availability. I also took care of: hosting, migration, metadata and 301 redirects to preserve google rankings.",
			firstSkill: 'Migration',
			secondSkill: 'CSS',
		},
		{
			link: 'https://grdevelops.github.io/Welcome-To-The-Blog/',
			github: 'https://github.com/GRdevelops/Welcome-To-The-Blog',
			imageUrl: '/images/projects/welcome-to-the-blog-cover.webp',
			alt: '',
			title: 'Welcome To The Blog',
			subtitle: 'A responsive blog homepage featuring JavaScript functionalities.',
			description:
				"Welcome to the Blog is a straightforward blog homepage. The design is <span style='font-weight: 600'>responsive</span> and the images are optimized. I used <span style='font-weight: 600'>Mailchimp</span> to collect emails in the form. I used some <span style='font-weight: 600'>JavaScript</span> to allow sorting articles by category. During develpment I always try to use <span style='font-weight: 600'>descriptive names</span>, both for CSS classes and JavaScript functions.",
			firstSkill: 'JavaScript',
			secondSkill: 'CSS',
		},
		{
			link: 'https://quote-generator-using-react.netlify.app/',
			github: 'https://github.com/GRdevelops/Quote-Machine',
			imageUrl: '/images/projects/quote-machine-cover.webp',
			alt: '',
			title: 'InspirQuote',
			subtitle: 'API connected quote generator using React',
			description:
				"InspirQuote is a <span style='font-weight: 600'>React-based</span> quote generator that dynamically fetches and displays a diverse range of quotes from an <span style='font-weight: 600'>external API</span>. Each new quote triggers a fresh change in the app's background and icon colors.",
			firstSkill: 'React',
			secondSkill: 'RESTful APIs',
		},
		{
			link: 'https://myquicklist.vercel.app/',
			github: 'https://github.com/GRdevelops/to-do-list-with-vannilla-js',
			imageUrl: '/images/projects/my-quick-list-cover.webp',
			alt: '',
			title: 'My Quick List',
			subtitle: 'A simple to-do app that remembers your tasks',
			description:
				"My Quick List is a simple to-do app, designed to be intuitive and easy to use. It's a complete full-stack application with a <span style='font-weight: 600'>Database</span> (MongoDB), a <span style='font-weight: 600'>backend</span> (Java), and a frontend using <span style='font-weight: 600'>vanilla HTML, CSS and JavaScript</span> (with Vite as the build tool). Additional features: <span style='font-weight: 600'>dark mode</span>, <span style='font-weight: 600'>responsiveness</span> and <span style='font-weight: 600'>environment variables</span>.",
			firstSkill: 'JavaScript',
			secondSkill: 'Backend',
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
		if (item.github) {
			seeOnGitHub.href = item.github;
			seeOnGitHub.title = item.github;
		} else {
			seeOnGitHub.style.display = 'none';
		}
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
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.line-container').forEach(wrapper => {
	gsap.to(wrapper.querySelectorAll('.line'), {
		scrollTrigger: {
			trigger: wrapper,
			start: 'top 90%', // Animation starts when the top of wrapper is at 90% of the viewport height
			toggleActions: 'play none none none',
		},

		x: 0,
		y: 0,
		duration: 3,
		ease: 'power1.out',
	});
});

// Marquee effect
document.querySelectorAll('.marquee-container').forEach(container => {
	const marqueeChunk = container.querySelectorAll('.marquee-chunk');
	const chunkWidth = marqueeChunk[0].offsetWidth;

	gsap.to(marqueeChunk, {
		x: -chunkWidth,
		ease: 'linear',
		duration: 6,
		repeat: -1, // Infinite loop
		modifiers: {
			x: gsap.utils.unitize(x => parseFloat(x) % chunkWidth),
		},
	});
});

// Parallax effect
// const headings = document.querySelectorAll('.parallax-heading');
// const setTranslateX = () => {
// 	const scrollValue = window.scrollY;
// 	const maxScrollValue = document.body.scrollHeight - window.innerHeight;
// 	const scrollPercentage = scrollValue / maxScrollValue;
// 	const maxTranslateX = window.innerWidth;
// 	headings.forEach(heading => {
// 		const translateXValue = -(maxTranslateX - maxTranslateX * scrollPercentage);
// 		heading.style.transform = `translateX(${translateXValue}px)`;
// 	});
// };
// window.addEventListener('scroll', () => {
// 	requestAnimationFrame(setTranslateX);
// });

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
		layer.animate([{ height: '0' }, { height: '110vh' }], {
			duration: 700,
			fill: 'forwards',
			delay: index * 100,
			easing: 'ease',
		});
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
	const myText = new SplitType('.my-text', { types: 'chars' });

	// Animate each character with GSAP
	gsap.to(myText.chars, {
		y: 0,
		stagger: 0.05,
		delay: 0.2,
		duration: 0.1,
	});
});

// Paragraph Text Reveal
const textToApplyRevealEffectOn = document.querySelectorAll('.reveal-type');

textToApplyRevealEffectOn.forEach((char, i) => {
	const text = new SplitType(char, { types: 'words' });

	gsap.from(text.words, {
		scrollTrigger: {
			trigger: char,
			start: 'top 80%',
			// end: 'top 20%',
			scrub: false,
			markers: false,
		},
		opacity: 0.2,
		stagger: 0.07,
		duration: 0.15,
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
