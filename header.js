const availableLanguages = ['FR', 'EN', 'ES'];

function toggleDropdown() {
    const dropdown = document.getElementById('language-dropdown');
    const arrowIcon = document.querySelector('.arrow-icon');
    const currentLanguage = document.getElementById('current-language').textContent;

    // Toggle dropdown visibility
    if (dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
        dropdown.style.animation = 'dropdownClose 0.3s forwards';
        arrowIcon.classList.remove('rotate'); // Retirer la rotation
    } else {
        dropdown.innerHTML = availableLanguages
            .filter(lang => lang !== currentLanguage)
            .map(lang => `<li onclick="setLanguage('${lang}')">${lang}</li>`)
            .join('');
        dropdown.classList.add('open');
        dropdown.style.animation = 'dropdownOpen 0.3s forwards';
        arrowIcon.classList.add('rotate'); // Ajouter la rotation
    }
}

function setLanguage(lang) {
    const currentLanguageElement = document.getElementById('current-language');
    currentLanguageElement.textContent = lang;

    // Change the page's language attribute
    document.documentElement.lang = lang.toLowerCase();

    // Close the dropdown after selection
    const dropdown = document.getElementById('language-dropdown');
    dropdown.classList.remove('open');
    dropdown.style.animation = 'dropdownClose 0.3s forwards';
}
function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('show');
}
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('active');
  themeToggle.textContent = document.body.classList.contains('active') 
    ? 'Mode Clair' 
    : 'Mode Sombre';
  themeImage.src = document.body.classList.contains('active') 
    ? 'image2.jpg' // Image pour le mode sombre
    : 'image1.jpg'; // Image pour le mode clair
});