document.addEventListener("DOMContentLoaded", function() {
    const darkMode = document.querySelector(".darkMode");
    const body = document.body;
    const main = document.querySelector("main");
    const sidebar = document.querySelector(".sidebar");

    const actualTheme = localStorage.getItem("mode");

    if (actualTheme === "dark") {
        body.classList.add("body-dark");
        main.classList.add("main-dark");
        sidebar.classList.add("sidebar-dark");
        darkMode.checked = true;
    }

    darkMode.addEventListener("change", function() {
        if (darkMode.checked) {
            body.classList.add("body-dark");
            main.classList.add("main-dark");
            sidebar.classList.add("sidebar-dark");
            localStorage.setItem("mode", "dark");
        } else {
            body.classList.remove("body-dark");
            main.classList.remove("main-dark");
            sidebar.classList.remove("sidebar-dark");
            localStorage.setItem("mode", "light");
        }
    })
});

document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const eyePasswordIcon = document.getElementById("eyePasswordVisibility");
  
    eyePasswordIcon.addEventListener("click", () => {

      const IsPasswordHidden = passwordInput.type === "password";
      passwordInput.type = IsPasswordHidden ? "text" : "password";
  
      eyePasswordIcon.src = IsPasswordHidden ? "assets/eye-slash.svg" : "assets/eye.svg";
    });
  });
  