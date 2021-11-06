const HEADER = document.getElementById('header')
const BUTTON = document.getElementById('nav-btn')

let isAnimating = false;

function toggleMenu() {
    if (isAnimating) return;

    isAnimating = true;

    HEADER.classList.toggle('open');

    // To ensure the user cannot interrupt the animation
    setTimeout(() => isAnimating = false, 750);
}

BUTTON.addEventListener('click', toggleMenu);

// Ensures animation does not trigger when resizing viewport
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});


// Remove 'open' styles when user resizes window above 736px
const mediaQuery = window.matchMedia('(max-width: 736px)')

function handleTabletChange(e) {
  if (e.matches) {
    if (HEADER.classList.contains('open')) HEADER.classList.remove('open');
  }
}

mediaQuery.addListener(handleTabletChange)

handleTabletChange(mediaQuery)