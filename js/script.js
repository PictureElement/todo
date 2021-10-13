const changeThemetoLight = () => {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById('themeToggle').ariaLabel = 'Switch to the dark theme';
    localStorage.setItem("data-theme", "light");
}

const changeThemetoDark = () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('themeToggle').ariaLabel = 'Switch to the light theme';
    localStorage.setItem("data-theme", "dark");
}

themeToggle.addEventListener('click', function() {
    let theme = localStorage.getItem('data-theme');

    if (theme === 'light') {
        changeThemetoDark();
    } else {
        changeThemetoLight();
    }
});

let currentTheme = localStorage.getItem('data-theme');

if (currentTheme === 'light') {
    changeThemetoLight();
} else {
    changeThemetoDark();
}