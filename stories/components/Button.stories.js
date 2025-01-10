import '../../global.css';

export default {
    title: "button",
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        label: { control: "text" },
        onClick: { action: "clicked" },
        style: { options: ['primary', 'danger'], control: { type: 'radio' } },
        disabled: { control: "boolean" },
    }
}

export const Primary = {
    args: {
        label: "Example de texte",
        onClick: () => console.log('Button clicked!'),
        style: 'primary',
        disabled: false,
    },
    render: ({ label, onClick, style, disabled }) => `
        <style>
        button {
            background-color: ;
            cursor: ${disabled ? 'not-allowed' : 'pointer'};
        }
        </style>
        <button class="${style}" type="button" 
                ${disabled ? 'disabled' : ''} 
                onclick="${disabled ? '' : `(${onClick.toString()})();`}">
            ${label}
        </button>
    `
};

