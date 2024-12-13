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
