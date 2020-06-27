import React from 'react';
import { Link } from 'gatsby';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/styles/useTheme';

export default function Header() {
	const theme = useTheme();
	const xsScreen = useMediaQuery(theme.breakpoints.down('xs'));

	return (
		<Container maxWidth='sm' style={{ padding: '40px 20px' }}>
			<Box
				display='flex'
				flexDirection={xsScreen ? 'column' : 'row'}
				justifyContent='space-between'
				alignItems={xsScreen ? 'flex-start' : 'flex-end'}
			>
				<Link to='/' className='header-link'>
					<Typography variant='h1'>
						jamie liu
					</Typography>
				</Link>
				<Box
					display='flex'
					justifyContent={xsScreen ? 'flex-start' : 'flex-end'}
					alignItems={xsScreen ? 'flex-start' : 'center'}
					flexWrap={xsScreen ? 'wrap' : null}
				>
					<Link to='/' activeClassName='active-header-link' className='header-link'>
						<Typography variant='h6' >about</Typography>
					</Link>
					<Typography variant='h6'>/</Typography>
					<Link to='/projects' activeClassName='active-header-link' className='header-link'>
						<Typography variant='h6' >projects</Typography>
					</Link>
					<Typography variant='h6'>/</Typography>
					<Link to='/teaching' activeClassName='active-header-link' className='header-link'>
						<Typography variant='h6' >teaching</Typography>
					</Link>
					<Typography variant='h6'>/</Typography>
					<a href='/resume.pdf' target='_blank' rel="noopener noreferrer" className='header-link'>
						<Typography variant='h6'>résumé</Typography>
					</a>
				</Box>
			</Box>
		</Container>
	);
}
