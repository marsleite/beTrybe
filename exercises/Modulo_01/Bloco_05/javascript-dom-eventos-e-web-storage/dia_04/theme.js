window.onload = function() {
    function setTheme(theme) {
      let content = document.body;
      content.classList.toggle(theme);
      localStorage.setItem('tema', theme);
    }
  
    let themeBtn = document.querySelector('.btn-theme')
    themeBtn.addEventListener('click', function(event) {
      setTheme('dark-mode');
    })
  
    function initialize() {
      let currentTheme = localStorage.getItem('tema')
      if (currentTheme) setTheme(currentTheme)
    }
    initialize();
  }