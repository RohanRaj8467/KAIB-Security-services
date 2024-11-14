document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item img");

    galleryItems.forEach((item) => {
        item.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.classList.add("overlay");

            const popupImage = document.createElement("img");
            popupImage.src = item.src;
            popupImage.classList.add("popup-image");

            overlay.appendChild(popupImage);
            document.body.appendChild(overlay);

            overlay.addEventListener("click", () => {
                overlay.remove();
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Get the theme toggle buttons
    const themeButtons = document.querySelectorAll('[data-bs-theme-value]');
    
    // Function to set the theme based on the selected value
    function setTheme(theme) {
      // Remove any existing theme classes from the body
      document.body.classList.remove('light-theme', 'dark-theme');
      
      // Add the selected theme class to the body
      if (theme === 'dark') {
        document.body.classList.add('dark-theme');
      } else if (theme === 'light') {
        document.body.classList.add('light-theme');
      }
      
      // Update aria-pressed attributes
      themeButtons.forEach(button => {
        button.setAttribute('aria-pressed', button.getAttribute('data-bs-theme-value') === theme);
      });
    }
  
    // Set initial theme to light
    setTheme('light');
  
    // Add event listeners to theme buttons
    themeButtons.forEach(button => {
      button.addEventListener('click', function () {
        const theme = this.getAttribute('data-bs-theme-value');
        setTheme(theme);
      });
    });
  });
  
