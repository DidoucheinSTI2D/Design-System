import "../../global.css";

export default {
    title: "Input",
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        placeholderText: { control: "text" },
        rounded: { control: "text" },
        focusStyle: { control: "text" },
        type: { control: "text" },
    }
}

export const Primary = {
    args: {
        placeholderText: "Entrez votre texte ici...",
        rounded: "5px",
        focusStyle: "outline: none; border: 2px solid #000;",
        type: "text",
    },
    render: ({ placeholderText, rounded, focusStyle, type }) => `
        <style>
        input {
            border-radius: ${rounded};
        }
        input:focus {
            ${focusStyle}
        }
        </style>
        <input type="${type}" placeholder="${placeholderText}" />
    `
};