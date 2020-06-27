import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import Img from 'gatsby-image';

import styles from '../../../styles/ProjectCard.module.scss';

export default function ProjectCard({
	title,
	desc,
	tech,
	github,
	link,
	img
}) {
	return (
		<Paper className={styles.card}>
			<Box display='flex' justifyContent='space-between' alignItems='center'>
				<div >
					<Typography variant='body1' style={{ fontSize: '1.5rem', fontWeight: 600 }}>
						{title}
					</Typography>
				</div>
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
			<Typography variant='body1' className={styles.tech}>{tech}</Typography>
			<Img fluid={img} />
			<Typography variant='body1' className={styles.desc}>{desc}</Typography>
		</Paper>
	);
}

ProjectCard.propTypes = {
	title: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
	tech: PropTypes.string.isRequired,
	github: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	img: PropTypes.object.isRequired
};
