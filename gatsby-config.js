module.exports = {
	siteMetadata: {
		title: 'Jamie Liu',
		description: 'Jamie’s personal website.',
		author: '@jamieliu386'
	},
	plugins: [
		'gatsby-plugin-material-ui',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
			/* eslint-disable camelcase */
			options: {
				name: 'Jamie Liu',
				short_name: 'JL',
				start_url: '/',
				background_color: '#fff',
				theme_color: '#000',
				display: 'minimal-ui',
				icon: 'src/images/icon.png' // This path is relative to the root of the site.
			}
			/* eslint-enable camelcase */
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// 'gatsby-plugin-offline',
	]
};
