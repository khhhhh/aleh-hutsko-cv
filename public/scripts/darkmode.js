//determines if the user has a set theme
function detectColorScheme() {
    let theme;
    //local storage is used to override OS theme settings
    if (localStorage.getItem("theme")) {
        theme = localStorage.getItem("theme");
    }
    else if (!window.matchMedia) {
        theme = "dark";
    }
    if(theme)
        document.documentElement.setAttribute("data-theme", theme);
}
detectColorScheme();
