import "../../global.css";

export default {
    title: "Input",
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        placeholderText: { control: "text" },
        inputType: { options: ['primary', 'small-rounded'], control: { type: 'radio' } },
        type: { control: "text" },
    }
}

export const Primary = {
    args: {
        placeholderText: "Entrez votre texte ici...",
        inputType: "primary",
        type: "text",
    },
    render: ({ placeholderText, inputType, type }) => `
        <style>
        .primary {
            border: 2px solid #000;
            border-radius: 5px;
            padding: 10px;
            width: 300px;
            outline: none;
        } 
        .small-rounded {
            border-radius: 50px;
            background-color: #f1f1f1;
            rounded: 5px
        }
        </style>
        <input type="${type}" class="${inputType}"placeholder="${placeholderText}" />
    `
};