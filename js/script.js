let currentTheme = localStorage.getItem('data-theme');

const changeThemetoLight = () => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem("data-theme", "light");
}

const changeThemetoDark = () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem("data-theme", "dark");
}

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function() {
    let theme = localStorage.getItem('data-theme');

    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        this.ariaLabel = 'Switch to the light theme';
        localStorage.setItem("data-theme", "dark");
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        this.ariaLabel = 'Switch to the dark theme';
        localStorage.setItem("data-theme", "light");
    }
});
