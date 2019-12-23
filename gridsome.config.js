// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Kirill Rakhman',
    plugins: [
        {
            use: 'gridsome-plugin-typescript',
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'content/posts/**/*.md',
                typeName: 'Post',
                route: '/blog/:slug'
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'content/cv/**/*.md',
                typeName: 'Cv'
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'content/publications/**/*.md',
                typeName: 'Publication'
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'content/talks/**/*.md',
                typeName: 'Talk'
            }
        },
    ],
    transformers: {
        remark: {
            autolinkClassName: 'hashtag',
            plugins: [
                '@gridsome/remark-prismjs'
            ]
        }
    }
};
