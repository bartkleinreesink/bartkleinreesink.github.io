module.exports = {
    content: [
        "./_drafts/**/*.html",
        "./_includes/**/*.html",
        "./_layouts/**/*.html",
        "./_projects/**/*.html",
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
