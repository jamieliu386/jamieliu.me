/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, title }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;

	return <>
		<title>{title} | {site.siteMetadata.title}</title>
		<meta name="description" content={metaDescription} />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={metaDescription} />
		<meta property="og:type" content="website" />
		<meta property="twitter:card" content="summary" />
		<meta property="twitter:creator" content={site.siteMetadata.author} />
		<meta property="twitter:title" content={title} />
		<meta property="twitter:description" content={metaDescription} />
	</>;
}

SEO.defaultProps = {
	description: ``
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired
};

export default SEO;
