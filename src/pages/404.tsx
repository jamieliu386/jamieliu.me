import React from 'react';

import Layout, { Head as LayoutHead } from '../components/layout';
import SEO from '../components/seo';

export const Head = () => <>
	<SEO title='404: Not found' />
	<LayoutHead />
</>;

const NotFoundPage = () =>
	<Layout>
	</Layout>;

export default NotFoundPage;
