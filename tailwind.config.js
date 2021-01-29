module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                gray: {
                    DEFAULT: "hsl(0, 0%, 55%)",
                    dark: "hsl(0, 0%, 41%)",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
