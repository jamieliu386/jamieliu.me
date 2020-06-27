import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ProjectPage from '../components/ProjectPage/ProjectPage';

const Projects = () =>
	<Layout>
		<SEO title='Projects' />
		<ProjectPage />
	</Layout>;

export default Projects;
