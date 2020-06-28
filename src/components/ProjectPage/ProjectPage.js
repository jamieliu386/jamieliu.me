import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
	const data = useStaticQuery(graphql`
		{
			allProjectsJson {
				nodes {
					title
					desc
					tech
					github
					link
					img {
						publicURL
					}
					dim {
						height
						width
					}
				}
			}
		}
	`);

	const projectsList = data.allProjectsJson.nodes;
	const projectCards = projectsList.map(({ id, title, desc, tech, github, link, img, dim }) => {
		return <ProjectCard
			key={id}
			title={title}
			desc={desc}
			tech={tech}
			github={github}
			link={link}
			img={img.publicURL}
			dim={dim} />;
	});

	return (
		<Container maxWidth='sm'>
			<Typography variant='body1'>
				some of my projects!
			</Typography>
			{projectCards}
		</Container>
	);
};

export default Projects;
