import '../../global.css';

export default {
    title: "button",
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        SampleText: { control: "text" },
        buttonColor: { control: "color" },
        buttonHoverColor: { control: "color" },
        buttonFocus: { control: "text" },
        onClick: { action: "clicked" },
        disabled: { control: "boolean" },
    }
}

export const Primary = {
    args: {
        SampleText: "Example de texte",
        buttonColor: "#BA966A",
        buttonHoverColor: "#71624B",
        buttonFocus: 'color: blue;',
        onClick: () => console.log('Button clicked!'),
        disabled: false,
    },
    render: ({ SampleText, onClick, buttonFocus, buttonHoverColor, buttonColor, disabled }) => `
        <style>
        button {
            background-color: ${buttonColor};
            cursor: ${disabled ? 'not-allowed' : 'pointer'};
        }
        button:hover {
            background-color: ${buttonHoverColor};
        }
        button:focus {
            ${buttonFocus}
        }
        </style>
        <button class="primary-button" type="button" 
                ${disabled ? 'disabled' : ''} 
                onclick="${disabled ? '' : `(${onClick.toString()})();`}">
            ${SampleText}
        </button>
    `
};

