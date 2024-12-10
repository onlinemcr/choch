window.addEventListener('load', function () {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3, // Show 3 images
        centeredSlides: true, // Keep the center slide active
        loop: true, // Loop the slides
        slideToClickedSlide: true, // Click on a slide to go to it
        breakpoints: {
            768: {
                slidesPerView: 2, // 2 images for tablets
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 1.5, // 1 image for mobile
                spaceBetween: 1, // Reduced space between slides for Mobile
            }
        },
        on: {
            slidePrevTransitionStart: function () {
                // Prevent swiping left (to the previous slide)
                swiper.slideNext(); // Force it back to the current slide
                // Show the button-container when trying to swipe left
                document.querySelector('.button-container').style.display = 'flex';
            },
            slideNextTransitionStart: function () {
                // Hide the button-container when sliding right
                document.querySelector('.button-container').style.display = 'none';
            }
        }
    });

    // Update swiper layout once images are loaded
    swiper.update(); // Ensure the Swiper layout is updated
});



// TYPIG TEXTS SECTION

window.addEventListener('load', function () {
    const desktopAndTabletTexts = [
        "Taste your Joy, taste your feelings.",
        "Is not just about taste, but memories.",
        "Always chochies, always chochying.."
    ];

    const mobileTexts = [
        "Taste your Joy.",
        "Create memories.",
        "Best moments.."
    ];

    const typingSpeed = 100; // Speed for typing (ms per character)
    const delayBetweenTexts = 3000; // Delay before typing the next text (ms)
    const typingTextElement = document.getElementById("typing-text");

    let currentTextIndex = 0;
    let currentCharIndex = 0;

    // Determine which text set to use
    const isMobile = window.innerWidth <= 480;
    const texts = isMobile ? mobileTexts : desktopAndTabletTexts;

    function typeText() {
        if (currentCharIndex < texts[currentTextIndex].length) {
            typingTextElement.textContent += texts[currentTextIndex][currentCharIndex];
            currentCharIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(() => {
                // Clear text and move to the next
                typingTextElement.textContent = "";
                currentCharIndex = 0;
                currentTextIndex = (currentTextIndex + 1) % texts.length; // Loop through texts
                typeText();
            }, delayBetweenTexts);
        }
    }

    // Start Typing Animation
    typeText();

    // Adjust for screen resize
    window.addEventListener('resize', function () {
        const isNowMobile = window.innerWidth <= 480;
        if (isNowMobile !== isMobile) {
            location.reload(); // Reload the page to apply the new text set
        }
    });
});

// WORD OF THE DAY SECTION

window.addEventListener('load', function () {
    const sayings = [
        "Word of the Day: Perseverance!",
        "Stay positive, stay productive.",
        "You're doing great today!",
        "Success is a journey, not a destination.",
        "Take a deep breath and smile. 😊",
    ];

    const balloonContainer = document.getElementById('balloon-container');

    function createBalloon(text) {
        // Create balloon element
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.textContent = text;

        // Append to container
        balloonContainer.appendChild(balloon);

        // Remove balloon after animation
        balloon.addEventListener('animationend', () => {
            balloon.remove();
        });
    }

    function generateRandomBalloon() {
        // Get a random saying
        const randomSaying = sayings[Math.floor(Math.random() * sayings.length)];

        // Create and animate the balloon
        createBalloon(randomSaying);
    }

    // Generate a balloon every 7 seconds
    setInterval(generateRandomBalloon, 7000);

    // Start with one balloon
    generateRandomBalloon();
});


