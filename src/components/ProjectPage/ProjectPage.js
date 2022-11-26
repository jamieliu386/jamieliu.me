import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

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
					info {
						line
					}
				}
			}
		}
	`);

	const projectsList = data.allProjectsJson.nodes;
	const projectCards = projectsList.map(({ title, desc, tech, github, link, img, dim, info }) => {
		return <ProjectCard
			key={title}
			title={title}
			desc={desc}
			tech={tech}
			github={github}
			link={link}
			img={img.publicURL}
			dim={dim}
			info={info} />;
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
