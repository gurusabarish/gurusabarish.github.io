const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: 'Guru Sabarish Portfolio',
    description:
      'Hi, I am Gurusabarish, a passionate web app developer. I tend to make use of modern web technologies to build websites that looks great, feels fantastic, and functions correctly.',
    siteUrl: 'https://gurusabarish.github.io',
    image: '/me.jpg',
    twitterUsername: '@gurusabarishh',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     query: `{
    //       site {
    //         siteMetadata {
    //           siteUrl
    //         }
    //       }
    //       allSitePage {
    //         edges {
    //           node {
    //             path
    //           }
    //         }
    //       }
    //       allMarkdownRemark {
    //         edges {
    //           node {
    //             fields {
    //               slug
    //             }
    //           }
    //         }
    //       }
    //     }`,
    //     serialize: ({ allSitePage, allMarkdownRemark }) => {
    //       const pages = [];
    //       allSitePage.edges.map(edge => {
    //         pages.push({
    //           url: config.siteUrl + edge.node.path,
    //           changefreq: `daily`,
    //           priority: 0.7,
    //         });
    //       });
    //       allMarkdownRemark.edges.map(edge => {
    //         pages.push({
    //           url: `${config.siteUrl}/${edge.node.fields.slug}`,
    //           changefreq: `daily`,
    //           priority: 0.7,
    //         });
    //       });

    //       return pages;
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/sitemap.xml',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: config.siteUrl,
        sitemap: `${config.siteUrl}/sitemap.xml`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gurusabarish',
        short_name: 'Gurusabarish',
        start_url: '/',
        background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-external-links
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-images
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
              tracedSVG: { color: config.colors.green },
            },
          },
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-code-titles/
            resolve: 'gatsby-remark-code-titles',
          }, // IMPORTANT: this must be ahead of other plugins that use code blocks
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-prismjs
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'G-69Z9740912',
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-69Z9740912'],
        gtagConfig: {
          optimize_id: 'GTM-PV2G9BR',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
  ],
};
