import React from 'react';

import Layout, { Head as LayoutHead } from '../components/layout';
import SEO from '../components/seo';
import ProjectPage from '../components/ProjectPage/ProjectPage';

export const Head = () => <>
	<SEO title='Projects' />
	<LayoutHead />
</>;

const Projects = () =>
	<Layout>
		<ProjectPage />
	</Layout>;

export default Projects;
