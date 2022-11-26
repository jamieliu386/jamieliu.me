/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export type SEOProps = {
	title: string,
	description?: string,
};

function SEO({ title, description = '' }: SEOProps) {
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

export default SEO;
