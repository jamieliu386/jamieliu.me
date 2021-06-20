import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import SVGImg from '../../SVGImg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import * as styles from '../../../styles/Project.module.scss';

export default function ProjectInfo(props) {
	const { title, desc, tech, github, link, img, dim, handleClose, open, info } = props;

	const isSmall = useMediaQuery('(max-width:500px)');

	const details = info.map(item => {
		return <Typography variant='body1' key={item.line}><li>{item.line}</li></Typography>;
	});

	return (
		<Dialog onClose={handleClose}
			scroll='paper'
			aria-labelledby='modal-title'
			aria-describedby='modal-description'
			open={open}
		>
			<Box
				display='flex'
				flexDirection={isSmall ? 'column' : 'row'}
				justifyContent='space-between'
				alignItems={isSmall ? 'flex-start' : 'center'}
			>
				<Typography variant='body1' style={{ fontSize: '1.5rem', fontWeight: 600 }} id='modal-title'>
					{title}
				</Typography>
				<Box display='flex'>
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
			<Typography variant='body1' className={styles.desc} id='modal-description'>
				{desc}
			</Typography>
			<ul>
				{details}
			</ul>
			<SVGImg src={img} width={dim.width} height={dim.height} style={{ width: '100%' }}/>
			<span onClick={handleClose} style={{ cursor: 'pointer', textAlign: 'right' }}>
				<Typography>close</Typography>
			</span>
		</Dialog>
	);
}

ProjectInfo.propTypes = {
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
	info: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired
};
