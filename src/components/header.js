import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
	links: {
		color: 'black',
		padding: '1px',
		margin: '3px',
		lineHeight: '1rem'
	},
	selected: {
		background: 'linear-gradient(0deg,rgba(255,255,255,0) 0%, #ffdbd9 0%)'
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
		link: '/resume.pdf',
		name: 'resume',
		newTab: true
	},
	{
		link: '/teaching',
		name: 'teaching'
	}
];

export default function Header(props) {
	const classes = useStyles();

	const buttonGroup = barLinks.map((item, i) => {
		return (
			<Box key={i} display='flex' alignItems='center'>
				<Link
					variant='h6'
					href={item.link}
					className={props.selected === barLinks[i].name ?
						classNames(classes.selected, classes.links) :
						classes.links }
					target={item.name === 'resume' ? '_blank' : null}
				>
					{item.name}
				</Link>
				{i === barLinks.length - 1 ? null : <Typography variant='h6'>/</Typography>}
			</Box>
		);
	});

	return (
		<Container maxWidth='md' style={{ paddingTop: '40px' }}>
			<Box display='flex' justifyContent='space-between' alignItems='flex-end'>
				<Link variant='h1' style={{ color: 'black' }} href='/'>jamie liu</Link>
				<Box display='flex' justifyContent='flex-end' alignItems='center'>
					{buttonGroup}
				</Box>
			</Box>
		</Container>
	);
}

Header.propTypes = {
	selected: PropTypes.string.isRequired
};
