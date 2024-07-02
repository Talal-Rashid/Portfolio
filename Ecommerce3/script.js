document.addEventListener('DOMContentLoaded', function() {
    const tagline = document.querySelector('.tagline');
    
    function animateTyping() {
        tagline.style.animation = 'typing 3s steps(20, end), blink-caret 0.75s step-end infinite';
    }

    animateTyping(); // Initial animation

    tagline.addEventListener('animationiteration', () => {
        setTimeout(animateTyping, 2000); // Restart animation after 2 seconds
    });
});
