
hljs.highlightAll();

function toggleTheme() {
    const themeLink = document.getElementById('theme-link');
    if (themeLink.getAttribute('href') === '/static/art_css/light-theme.css') {
        themeLink.setAttribute('href', '/static/art_css/dark-theme.css');
    } else {
        themeLink.setAttribute('href', '/static/art_css/light-theme.css');
    }
}


document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
