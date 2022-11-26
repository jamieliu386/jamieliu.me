import React from 'react';
import Box from '@mui/material/Box';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

import SVGImg from '../../SVGImg';
import * as styles from '../../../styles/Project.module.scss';
import type { Project } from '../projects';

export type ProjectInfoProps = Project & {
	open: DialogProps['open'],
	handleClose?: () => void,
};

export default function ProjectInfo(props: ProjectInfoProps) {
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
