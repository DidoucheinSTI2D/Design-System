import "../../global.css";

export default {
    title: "Input",
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        placeholder: { control: "text" },
        variant: { options: ['classic', 'rounded'], control: { type: 'radio' } },
        type: { options: ['text', 'password', 'email'], control: { type: 'radio' } },
    }
}

export const Primary = {
    args: {
        placeholder: "Entrez votre texte ici...",
        variant: "classic",
        type: "text",
    },
    render: ({ placeholder, variant, type }) => `
        <style>
        .classic {
            border: 2px solid #000;
            border-radius: 5px;
            padding: 10px;
            width: 300px;
            outline: none;
        } 
        .rounded {
            border-radius: 50px;
            background-color: #f1f1f1;
            rounded: 5px
        }
        </style>
        <input type="${type}" class="${variant}"placeholder="${placeholder}" />
    `
};