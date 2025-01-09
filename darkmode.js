document.addEventListener("DOMContentLoaded", function() {
    const darkMode = document.querySelector(".darkMode");
    const body = document.body;
    const main = document.querySelector("main");

    const actualTheme = localStorage.getItem("mode");

    if (actualTheme === "dark") {
        body.classList.add("body-dark");
        main.classList.add("main-dark");
        darkMode.checked = true;
    }

    darkMode.addEventListener("change", function() {
        if (darkMode.checked) {
            body.classList.add("body-dark");
            main.classList.add("main-dark");
            localStorage.setItem("mode", "dark");
        } else {
            body.classList.remove("body-dark");
            main.classList.remove("main-dark");
            localStorage.setItem("mode", "light");
        }
    })
})