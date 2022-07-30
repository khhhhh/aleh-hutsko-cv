//determines if the user has a set theme
function detectColorScheme() {
    let theme;
    //local storage is used to override OS theme settings
    if (localStorage.getItem("theme")) {
        console.log("theme setted");
        theme = localStorage.getItem("theme");
    }
    else if (!window.matchMedia) {
        theme = "dark";
        console.log("no support");
    }
    if(theme)
        document.documentElement.setAttribute("data-theme", theme);
}
detectColorScheme();
