import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import SVGImg from '../components/SVGImg';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

import styles from '../styles/ProjectCard.module.scss';

function Project({ data }) {
	const { title, desc, tech, github, link, img, dim } = data.allProjectsJson.nodes[0];

	return (
		<Container maxWidth='sm'>
			<Box display='flex' justifyContent='space-between' alignItems='center'>
				<Typography variant='h4' style={{ fontSize: '2rem', fontWeight: 600 }}>
					{title}
				</Typography>
				<Box>
					<a href={github} className={styles.icon} target='_blank'
						rel='noopener noreferrer'>
						<GitHubIcon titleAccess='code'/>
					</a>
					<a href={link} className={styles.icon} target='_blank'
						rel='noopener noreferrer'>
						<LinkIcon titleAccess='project'/>
					</a>
				</Box>
			</Box>
			<Typography className={styles.tech}>{tech}</Typography>
			<Typography className={styles.desc}>{desc}</Typography>
			<SVGImg src={img.publicURL} width={dim.width} height={dim.height} />
		</Container>
	);
}

export const query = graphql`
	query ProjectData($id: String) {
		allProjectsJson(filter: {id: {eq: $id}}) {
			nodes {
				title
				desc
				tech
				github
				link
				dim {
					height
					width
				}
				img {
					publicURL
				}
			}
		}
	}
`;

Project.propTypes = {
	data: PropTypes.shape({
		allProjectsJson: PropTypes.shape({
			nodes: PropTypes.arrayOf(PropTypes.shape({
				desc: PropTypes.string.isRequired,
				dim: PropTypes.shape({
					height: PropTypes.number.isRequired,
					width: PropTypes.number.isRequired
				}).isRequired,
				github: PropTypes.string.isRequired,
				img: PropTypes.shape({
					publicURL: PropTypes.string.isRequired
				}).isRequired,
				link: PropTypes.string.isRequired,
				tech: PropTypes.string.isRequired,
				title: PropTypes.string.isRequired
			})).isRequired
		}).isRequired
	}).isRequired
};

export default Project;
