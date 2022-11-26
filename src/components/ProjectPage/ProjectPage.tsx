import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
	const data: Queries.ProjectPageQuery = useStaticQuery(graphql`
		query ProjectPage {
			allProjectsJson {
				nodes {
					id
					jsonId
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
	const projectCards = projectsList.map(({ id, jsonId, title, desc, tech, github, link, img, dim, info }) => {
		return <ProjectCard
			key={id}
			id={jsonId}
			title={title}
			desc={desc}
			tech={tech}
			github={github}
			link={link}
			img={img!.publicURL!}
			dim={dim}
			info={info} />;
	});

	return (
		<Container maxWidth='sm'>
			<Typography>
				some of my projects!
			</Typography>
			{projectCards}
		</Container>
	);
};

export default Projects;
