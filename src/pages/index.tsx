import React from 'react';

import Layout, { Head as LayoutHead } from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/Home/Home';

export const Head = () => <>
	<SEO title='Home' />
	<LayoutHead />
</>;

const IndexPage = () =>
	<Layout>
		<Home />
	</Layout>;

export default IndexPage;
