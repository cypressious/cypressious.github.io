// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Kirill Rakhman',
    siteDescription: 'Personal Website & Blog of Kirill Rakhman',
    siteUrl: 'https://rakhman.info',
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
        {
            use: 'gridsome-plugin-rss',
            options: {
                contentTypeName: 'Post',
                latest: true,
                feedOptions: {
                    title: 'Kirill Rakhman\'s Dev Blog',
                    feed_url: 'https://rakhman.info/rss.xml',
                    site_url: 'https://rakhman.info/blog'
                },
                feedItemOptions: node => ({
                    title: node.title,
                    description: node.description,
                    url: 'https://rakhman.info/blog/' + node.slug,
                    author: 'Kirill Rakhman',
                    date: node.date
                }),
                output: {
                    dir: './static',
                    name: 'rss.xml'
                }
            }
        },
        {
            use: '@gridsome/plugin-sitemap'
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
