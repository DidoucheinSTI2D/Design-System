import '../../global.css';

export default {
    title: "Toggle",
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        toggleStatus : { control: "boolean" },
        disabled: { control: "boolean" },
    },
};

export const Primary = {
    args: {
        toggleStatus: false,
        disabled: false,
    },
    render: ({ disabled, toggleStatus }) => `
        <style>
        .slider {
            cursor: ${disabled ? "not-allowed" : "pointer"};
        }
        </style>

        <label class="switch" for="darkMode">
            <input type="checkbox" id="darkMode" class="darkMode" ${disabled ? "disabled" : ""} ${toggleStatus ? "checked" : ""}>
            <span class="slider round"></span>
        </label>
    `,
};