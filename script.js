document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const eyePasswordIcon = document.getElementById("eyePasswordVisibility");
  
    eyePasswordIcon.addEventListener("click", () => {

      const IsPasswordHidden = passwordInput.type === "password";
      passwordInput.type = IsPasswordHidden ? "text" : "password";
  
      eyePasswordIcon.src = IsPasswordHidden ? "assets/eye-slash.svg" : "assets/eye.svg";
    });
  });
  