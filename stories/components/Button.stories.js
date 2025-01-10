import '../../global.css';

export default {
    title: "button",
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        SampleText: { control: "text" },
        onClick: { action: "clicked" },
        buttonColor: { options: ['primary-button', 'danger-button'], control: { type: 'radio' } },
        disabled: { control: "boolean" },
    }
}

export const Primary = {
    args: {
        SampleText: "Example de texte",
        onClick: () => console.log('Button clicked!'),
        buttonColor: 'primary-button',
        disabled: false,
    },
    render: ({ SampleText, onClick, buttonColor, disabled }) => `
        <style>
        button {
            background-color: ;
            cursor: ${disabled ? 'not-allowed' : 'pointer'};
        }
        </style>
        <button class="${buttonColor}" type="button" 
                ${disabled ? 'disabled' : ''} 
                onclick="${disabled ? '' : `(${onClick.toString()})();`}">
            ${SampleText}
        </button>
    `
};

