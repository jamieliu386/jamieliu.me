import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import SVGImg from '../../SVGImg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import styles from '../../../styles/Project.module.scss';

export default function ProjectCard(props) {
	const { title, desc, tech, github, link, img, dim } = props;

	// modal stuff
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const isSmall = useMediaQuery('(max-width:500px)');

	return (
		<Card variant='outlined' className={styles.card}>
			<CardActionArea onClick={handleClickOpen}>
				<CardContent>
					<Box
						display='flex'
						flexDirection={isSmall ? 'column' : 'row'}
						justifyContent='space-between'
						alignItems={isSmall ? 'flex-start' : 'center'}
					>
						<Typography variant='body1' style={{ fontSize: '1.5rem', fontWeight: 600 }}>
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
					<Typography variant='body1' className={styles.tech}>{tech}</Typography>
					<SVGImg src={img} width={dim.width} height={dim.height} />
					<Typography variant='body1' className={styles.desc}>{desc}</Typography>
				</CardContent>
			</CardActionArea>
			<ProjectInfo {...props} handleClose={handleClose} open={open} />
		</Card>
	);
}

ProjectCard.propTypes = {
	title: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
	tech: PropTypes.string.isRequired,
	github: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	dim: PropTypes.shape({
		height: PropTypes.number.isRequired,
		width: PropTypes.number.isRequired
	}).isRequired,
	info: PropTypes.arrayOf(PropTypes.string).isRequired
};
