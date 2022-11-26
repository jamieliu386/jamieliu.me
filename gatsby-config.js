module.exports = {
	siteMetadata: {
		title: 'Jamie Liu',
		description: 'Jamie’s personal website.',
		author: '@jamieliu386'
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-transformer-json',
		'gatsby-plugin-material-ui',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'data',
				path: `${__dirname}/src/data/`
			}
		},
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				// Override the file regex for SASS
				sassRuleTest: /\.global\.s(a|c)ss$/,
				// Override the file regex for CSS modules
				sassRuleModulesTest: /\.module\.s(a|c)ss$/
			}
		},
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
