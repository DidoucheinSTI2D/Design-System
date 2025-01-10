import '../../global.css';

export default {
    title: "Toggle",
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        status : { control: "boolean" },
        disabled: { control: "boolean" },
    },
};

export const Primary = {
    args: {
        status: false,
        disabled: false,
    },
    render: ({ disabled, status }) => `
        <style>
        .slider {
            cursor: ${disabled ? "not-allowed" : "pointer"};
        }
        </style>

        <label class="switch" for="darkMode">
            <input type="checkbox" id="darkMode" class="darkMode" ${disabled ? "disabled" : ""} ${status ? "checked" : ""}>
            <span class="slider round"></span>
        </label>
    `,
};