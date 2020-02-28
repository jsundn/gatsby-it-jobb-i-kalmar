module.exports = {
	siteMetadata: {
		siteUrl: `https://www.itjobbikalmar.se`,
		title: 'IT-jobb i Kalmar',
		description: "IT-jobben finns i Kalmar",
		subheader: "IT-jobben finns i Kalmar",
		seo: {
			footer: `
			IT-jobb i Kalmar är till för att främja IT branschen i Kalmarregionen.
			En oberoende sida av utvecklare, för utvecklare.
			Vi vill hjälpa dig att hitta ditt nya jobb inom IT, eller bara ge dig en bättre bild av vilka IT-företag som finns i regionen.
			Samtidigt kan vi främja IT-branschen och hjälpa företag att synas och nå ut bättre.
			`
		},
		social: {
			facebook: "https://www.facebook.com/itjobbikalmar",
			linkedin: "https://www.linkedin.com/company/it-jobb-i-kalmar/",
			instagram: "https://www.instagram.com/itjobbikalmar/"
		},
		pageNotFound: {
			title: 'IT-jobb i Kalmar',
			description: "Den här sidan kunde inte hittas. Den kan har flyttats eller så fanns den aldrig :/",
			subheader: "Ojdå, nu blev något knas"
		},
		googleSiteVerification: '-_bpZt9vjpYa4rlGPb24yYkrM3XHFX-vRXbZYUHdwak'
	},
	plugins: [
		{
			resolve: `gatsby-plugin-compression-v2`,
			options: {
				asset: '[path].gz[query]',
				algorithm: 'gzip'
			},
		},
		'gatsby-plugin-netlify',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-remove-trailing-slashes',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-robots-txt',
		'gatsby-plugin-favicon',
		'gatsby-transformer-json',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'data',
				path: `${__dirname}/content/data/`,
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'img',
				path: `${__dirname}/content/img/`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'srcImg',
				path: `${__dirname}/src/img/`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: `${__dirname}/content/pages/`
			}
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-component',
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 2000,
							linkImagesToOriginal: false
						},
					},
					'gatsby-remark-copy-linked-files'
				]
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// The property ID; the tracking code won't be generated without it
				trackingId: "UA-113952690-1",
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				head: false,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true,
				// Delays sending pageview hits on route update (in milliseconds)
				pageTransitionDelay: 0,
				// Any additional optional fields
				sampleRate: 5,
				siteSpeedSampleRate: 10
			}
		}
	]
}