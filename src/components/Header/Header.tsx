import React from 'react';
import { Link } from 'gatsby';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';

import * as styles from '../../styles/Header.module.scss';

export default function Header() {
	const theme = useTheme();
	const xsScreen = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Container component='header' maxWidth='sm' style={{ padding: '40px 20px' }}>
			<Box
				component='nav'
				display='flex'
				flexDirection={xsScreen ? 'column' : 'row'}
				justifyContent='space-between'
				alignItems={xsScreen ? 'flex-start' : 'baseline'}
			>
				<Link to='/' title='about' className={styles.link}>
					<Typography variant='h1'>
						jamie liu
					</Typography>
				</Link>
				<Box
					display='flex'
					justifyContent={xsScreen ? 'flex-start' : 'flex-end'}
					alignItems='center'
					flexWrap={xsScreen ? 'wrap' : undefined}
				>
					<Typography component='div' variant='h6'>
						<Link to='/' activeClassName={styles.active} className={styles.link}>
							about
						</Link>
						/
						<Link to='/projects/' activeClassName={styles.active} className={styles.link}>
							projects
						</Link>
						/
						<a href='/resume.pdf' target='_blank' rel="noopener noreferrer" className={styles.link}>
							résumé
						</a>
					</Typography>
				</Box>
			</Box>
		</Container>
	);
}
