import "./style.css";

export default {
  title: "index",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    buttonColor: { control: "color" },
    buttonHoverColor: { control: "color" },
    title: { control: "text" },
    forgotPasswordText: { control: "text" },
  },
};

export const Default = {
  args: {
    title: "Se connecter",
    forgotPasswordText: "Mot de passe oublié ?",
    buttonColor: "#b08c5b",
    buttonHoverColor: "#967846",
  },
  render: ({ title, forgotPasswordText, buttonColor, buttonHoverColor }) => `
    <style>
      .login-button {
        background-color: ${buttonColor};
      }
      .login-button:hover {
        background-color: ${buttonHoverColor};
      }
    </style>
    <div class="login-container">
      <h2>${title}</h2>
      <form>
        <label for="username">Nom d'utilisateur:</label>
        <input type="text" id="username" placeholder="Entrez votre nom d'utilisateur">

        <label for="password">Mot de passe:</label>
        <input type="password" id="password" placeholder="Entrez votre mot de passe">

        <a href="#" class="forgot-password">${forgotPasswordText}</a>
        <button type="submit" class="login-button">Connexion</button>
      </form>
    </div>
  `,
};
