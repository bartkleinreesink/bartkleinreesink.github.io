module.exports = {
    content: [
        "./_drafts/**/*.html",
        "./_includes/**/*.html",
        "./_layouts/**/*.html",
        "./_posts/*.md",
        "./*.md",
        "./*.html",
        "_config.yml",
    ],
    theme: {
        theme: {
            extend: {},
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
