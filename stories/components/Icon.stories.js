export default {
    title: "Icon",
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        disabled: { control: "boolean" },
        size: { options: ['s', 'm', 'l', 'xl'], control: { type: 'radio' } },
    }
  }
  
  export const PasswordButton = {
    args: {
        disabled: false,
        size: "m",
    },
    render: ({ disabled, size }) => `
        <style>
        .svg {
            cursor: ${disabled ? 'none' : 'pointer'};
            pointer-events: ${disabled ? 'none' : 'auto'};
        }
        .hiddenPassword {
            display: none;
        }
        .shownPassword {
            display: block;
        }
  
      .s {
          width: 20px;
          height: 20px;
      }
  
      .m {
          width: 30px;
          height: 30px;
      }
  
      .l {
          width: 40px;
          height: 40px;
      }
  
      .xl {
          width: 50px;
          height: 50px;
      }
      
        </style>
        <div class="svg" id="svg">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="shownPassword ${size}">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
            </svg>
  
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="hiddenPassword ${size}">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <path d="M14.53 9.47004L9.47004 14.53C8.82004 13.88 8.42004 12.99 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C12.99 8.42004 13.88 8.82004 14.53 9.47004Z" stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998C8.46997 3.72998 5.17997 5.80998 2.88997 9.40998C1.98997 10.82 1.98997 13.19 2.88997 14.6C3.67997 15.84 4.59997 16.91 5.59997 17.77" stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M8.42004 19.5301C9.56004 20.0101 10.77 20.2701 12 20.2701C15.53 20.2701 18.82 18.1901 21.11 14.5901C22.01 13.1801 22.01 10.8101 21.11 9.40005C20.78 8.88005 20.42 8.39005 20.05 7.93005" stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52" stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M9.47 14.53L2 22" stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M22 2L14.53 9.47" stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
            </svg>
        </div>
        <script>
            document.addEventListener("DOMContentLoaded", () => {
                const svgContainer = document.getElementById("svg");
                const shownPassword = svgContainer.querySelector(".shownPassword");
                const hiddenPassword = svgContainer.querySelector(".hiddenPassword");
  
                let isPasswordShown = true;
  
                svgContainer.addEventListener("click", () => {
                    if (!${disabled}) {
                        isPasswordShown = !isPasswordShown;
                        shownPassword.style.display = isPasswordShown ? "block" : "none";
                        hiddenPassword.style.display = isPasswordShown ? "none" : "block";
                    }
                });
            });
        </script>
    `
  };

export const unshowPassword = {
    args: {
        size: '50'
    },
    render: ({ size }) => {
        return `
            <svg class="unshowPassword" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier">  <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
            </svg>
        `;
    },
};

export const showPassword = {
    args: {
        size: '50'
    },
    render: ({ size }) => {
        return `
            <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <path d="M14.53 9.47004L9.47004 14.53C8.82004 13.88 8.42004 12.99 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C12.99 8.42004 13.88 8.82004 14.53 9.47004Z" stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998C8.46997 3.72998 5.17997 5.80998 2.88997 9.40998C1.98997 10.82 1.98997 13.19 2.88997 14.6C3.67997 15.84 4.59997 16.91 5.59997 17.77" stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M8.42004 19.5301C9.56004 20.0101 10.77 20.2701 12 20.2701C15.53 20.2701 18.82 18.1901 21.11 14.5901C22.01 13.1801 22.01 10.8101 21.11 9.40005C20.78 8.88005 20.42 8.39005 20.05 7.93005" stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52" stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M9.47 14.53L2 22" stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M22 2L14.53 9.47" stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
            </svg>
        `;
    },
};
