---

title : "GatsbyJs"
date : "2020-03-26"
description : "This is all about gatsbyJs. How to generate static website using gatsbyJs."

---


Gatsby.js allows us to outsource a lot of the configuration that goes along with building a front-end in JavaScript in 2018. It handles setting up Webpack, React.js, HTML, and CSS for us so we can just focus on building new features, while providing the option to customize.

Because Gatsby is a static site generator, we get to write code in React.js instead of writing HTML, CSS, and JS. Gatsby docs describe this process well; during the build process, Gatsby performs an “optimized production build” that generates “static HTML and per-route JavaScript code bundles.”

A Gatsby plugin called gatsby-source-contentful makes it straightforward to pull content and assets from Contentful into Gatsby. We query for that content using GraphQL.

We deploy and host our static files in S3, and serve a cached version of those files from Fastly, further reducing latency and thereby improving user experience.

