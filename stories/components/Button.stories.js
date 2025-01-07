import "../../global.css"

export default {
    title: "button",
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        buttonColor: { control: "color" },
        buttonHoverColor: { control: "color" },
        TextColor: { control: "color" },
        SampleText: { control: "text" },
        ButtonSize: { control: 'text' },
        TextSize: { control: 'text' },
        TextFont: { control: 'text' }
    }
}

export const Primary = {
    args: {
        SampleText: "Example de texte",
        buttonColor: "#BA966A",
        buttonHoverColor: "#71624B",
        TextColor: "#fff",
        ButtonSize: "10px",
        TextSize: "16px",
        TextFont: "'Kdam Thmor Pro', sans-serif",
    },
    render: ({ buttonColor, buttonHoverColor, TextColor, TextFont, TextSize, ButtonSize, SampleText }) => `
        <style>
        button {
            background-color: ${buttonColor};
            color: ${TextColor};
            border: none;
            padding: ${ButtonSize};
            border-radius: 5px;
            font-size: ${TextSize};
            font-family: ${TextFont};
            cursor: pointer;
        }
        button:hover {
            background-color: ${buttonHoverColor};
        }
        </style>
        <button type="submit">${SampleText}</button>
    `
}