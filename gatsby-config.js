module.exports = {
	siteMetadata: {
		title: 'IT-jobb i Kalmar',
		description: "IT-jobben finns i Kalmar",
		subheader: "IT-jobben finns i Kalmar",
		seo: {
			footer: "IT-jobb i Kalmar är till för att boosta IT i Kalmarregionen. Vi vill hjälpa dig att hitta ditt nya jobb inom IT, eller bara ge dig en bättre bild av vilka IT-företag som finns i regionen. Samtidigt kan vi främja IT-branschen och hjälpa företag att synas bättre utåt."
		},
		social: {
			facebook: "https://www.facebook.com/itjobbikalmar"
		}
	},
	plugins: [
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-remove-trailing-slashes',
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
	]
}