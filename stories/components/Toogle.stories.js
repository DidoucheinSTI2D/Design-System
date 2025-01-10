import '../../global.css';

export default {
    title: "Toogle",
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        circleColor: { control: "color" },
        colorOnToggle: { control: "color" },
        disabled: { control: "boolean" },
    },
};

export const Primary = {
    args: {
        circleColor: "#ffffff",
        colorOnToggle: "#4caf50",
        disabled: false,
    },
    render: ({ circleColor, colorOnToggle, disabled }) => `
        <style>
        .slider {
            cursor: ${disabled ? "not-allowed" : "pointer"};
        }
        .slider:before {
            background-color: ${circleColor};
        }
        input:checked + .slider {
            background-color: ${disabled ? "#ccc" : colorOnToggle};
        }
        </style>

        <label class="switch" for="darkMode">
            <input type="checkbox" id="darkMode" class="darkMode" ${disabled ? "disabled" : ""}>
            <span class="slider round"></span>
        </label>
    `,
};
