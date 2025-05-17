/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{jsx,tsx}", "./*.html"],
    theme: {
        extend: {
            colors: {
                dark: "#212429",
                darkHover: "#3D404A",
                light: "#f5f5f5",
                primary: "#39E079",
                danger: "#ef4444",

                vscodeBg: "#1e1e1e",
                vscodePanel: "#252526",
                vscodeBorder: "#3c3c3c",
                vscodePrimary: "#007acc",
                vscodeAccent: "#0e639c",
                vscodeAccentHover: "#1177bb",
                vscodeLink: "#569cd6",
                vscodeLinkHover: "#4fc1ff",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            animation: {
                "up-down": "up-down 2s ease-in-out infinite alternate",
            },
        },
    },
    plugins: [],
}
