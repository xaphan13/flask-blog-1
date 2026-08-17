 
hljs.highlightAll();

function toggleTheme() {
    const themeLink = document.getElementById('theme-link');
    const currentHref = themeLink.getAttribute('href');
    
    if (currentHref.includes('light-theme.css')) {
        themeLink.setAttribute('href', '/static/art_css/dark-theme.css');
        localStorage.setItem('theme', 'dark');
    } else {
        themeLink.setAttribute('href', '/static/art_css/light-theme.css');
        localStorage.setItem('theme', 'light');
    }
}

// Восстанавливаем тему при загрузке страницы
(function() {
    const savedTheme = localStorage.getItem('theme');
    const themeLink = document.getElementById('theme-link');
    if (savedTheme === 'light') {
        themeLink.setAttribute('href', '/static/art_css/light-theme.css');
    } else {
        themeLink.setAttribute('href', '/static/art_css/dark-theme.css');
    }
})();


document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
