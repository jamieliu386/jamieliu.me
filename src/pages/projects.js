import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Projects from '../components/Projects/Projects';

const ProjectPage = () =>
	<Layout>
		<SEO title='Projects' />
		<Projects />
	</Layout>;

export default ProjectPage;
