import React from 'react';
import { Link } from 'gatsby';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/styles/useTheme';

const useStyles = makeStyles({
	links: {
		color: 'black',
		padding: '1px',
		margin: '3px',
		textDecoration: 'none',
		'&:hover': {
			color: 'black',
			textDecoration: 'underline'
		}
	},
	selected: {
		background: 'linear-gradient(0deg,rgba(255,255,255,0) 10%, #ffdbd9 10%)'
	}
});

const barLinks = [
	{
		link: '/',
		name: 'about'
	},
	{
		link: '/projects',
		name: 'projects'
	},
	{
		link: '/teaching',
		name: 'teaching'
	},
	{
		link: '/resume.pdf',
		name: 'resume',
		newTab: true
	}
];

export default function Header() {
	const classes = useStyles();
	const theme = useTheme();
	const xsScreen = useMediaQuery(theme.breakpoints.down('xs'));

	const buttonGroup = barLinks.map((item, i) => {
		if (item.name === 'resume') {
			return <a href={item.link} target='_blank' rel="noopener noreferrer" className={classes.links}>
				<Typography variant='h6'>
					{item.name}
				</Typography>
			</a>;
		}
		return (
			<Box key={i} display='flex' alignItems='center'>
				<Link
					to={item.link}
					activeClassName={classes.selected}
					className={classes.links}
				>
					<Typography variant='h6' >{item.name}</Typography>
				</Link>
				{i === barLinks.length - 1 ? null : <Typography variant='h6'>/</Typography>}
			</Box>
		);
	});

	return (
		<Container maxWidth='sm' style={{ padding: '40px 20px' }}>
			<Box
				display='flex'
				flexDirection={xsScreen ? 'column' : 'row'}
				justifyContent='space-between'
				alignItems={xsScreen ? 'flex-start' : 'flex-end'}
			>
				<Typography variant='h1'>
					<Link to='/' className={classes.links}>jamie liu</Link>
				</Typography>
				<Box
					display='flex'
					justifyContent={xsScreen ? 'flex-start' : 'flex-end'}
					alignItems={xsScreen ? 'flex-start' : 'center'}
					flexWrap={xsScreen ? 'wrap' : null}
				>
					{buttonGroup}
				</Box>
			</Box>
		</Container>
	);
}
