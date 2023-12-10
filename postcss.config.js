module.exports = {
    plugins: {
        "postcss-import": {
            path: ["assets/css"],
        },
        "tailwindcss/nesting": "postcss-nesting",
        autoprefixer: {},
        tailwindcss: {},
    },
};
