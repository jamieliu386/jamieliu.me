import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

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
			}
		}
	}
`);

	const projectsList = data.allProjectsJson.nodes;
	const projectCards = projectsList.map(({ title, desc, tech, github, link }) => {
		return <>
			<Typography variant='h5'>{title}</Typography>
			<Typography variant='h6'>{desc}</Typography>
			<Typography variant='h6'>{tech}</Typography>
			<Typography variant='h6'>{github}</Typography>
			<Typography variant='h6'>{link}</Typography>
		</>;
	});

	return (
		<Container maxWidth='sm'>
			<Typography variant='body1'>
				hello
			</Typography>
			{projectCards}
		</Container>
	);
};

export default Projects;
