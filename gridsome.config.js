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
        }
    ],
    transformers: {
        remark: {
            plugins: [
                '@gridsome/remark-prismjs'
            ]
        }
    }
};
