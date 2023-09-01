// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro');
    const mainContent = document.querySelector('.main-content');

    // Wait for 5 seconds (2s for delay + 3s for animation duration)
    setTimeout(() => {
        // Fade out the intro
        intro.style.opacity = '0';

        // After the fade out transition is done, hide the intro and show the main content
        intro.addEventListener('transitionend', () => {
            intro.style.display = 'none';
            mainContent.style.display = 'block';
        });
    }, 2000);
});
