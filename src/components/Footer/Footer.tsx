import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import * as styles from '../../styles/Footer.module.scss';

export default function Footer() {
	return (
		<Container maxWidth='sm' style={{ padding: '40px 20px' }}>
			<Box
				display='flex'
				flexDirection='row'
				justifyContent='center'
				alignItems='center'
			>
				<a href='https://github.com/jamieliu386' className={styles.icon} target='_blank'
					rel='noopener noreferrer'>
					<GitHubIcon titleAccess='github'/>
				</a>
				<a href='https://www.linkedin.com/in/jamieliu386' className={styles.icon} target='_blank'
					rel='noopener noreferrer'>
					<LinkedInIcon titleAccess='linkedin'/>
				</a>
				<a href='mailto:jamieliu386@ucla.edu' className={styles.icon} target='_blank'
					rel='noopener noreferrer'>
					<MailOutlineIcon titleAccess='email'/>
				</a>
			</Box>
		</Container>
	);
}
