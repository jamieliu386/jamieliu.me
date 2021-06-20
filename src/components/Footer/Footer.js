import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import * as styles from '../../styles/Footer.module.scss';

export default function Header() {
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
