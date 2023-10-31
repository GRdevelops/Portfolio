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
