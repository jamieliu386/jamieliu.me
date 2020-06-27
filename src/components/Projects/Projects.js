import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
	const data = useStaticQuery(graphql`
	query ProjectsQuery {
		allProjectsJson {
			nodes {
				title
				desc
				tech
				github
				link
				img {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`);

	const projectsList = data.allProjectsJson.nodes;
	const projectCards = projectsList.map(({ title, desc, tech, github, link, img }) => {
		return <ProjectCard
			key={title}
			title={title}
			desc={desc}
			tech={tech}
			github={github}
			link={link}
			img={img.childImageSharp.fluid} />;
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
