import React from 'react';
import Container from '@material-ui/core/Container';
import MuiTypography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';

const Typography = withStyles({
	root: {
		padding: '10px 0px'
	}
})(MuiTypography);

export default function Home() {
	return (
		<Container maxWidth='sm'>
			<Typography variant='body1' component='p'>
				Hey, my name is Jamie.
			</Typography>
			<Typography variant='body1' component='p'>
				I&rsquo;m a rising senior studying computer science at UCLA. I&rsquo;m
				passionate about learning, building things, and helping other people.
			</Typography>
			<Typography variant='body1' component='p'>
				In my free time, I love to cook, watch shows, and <a
					href='https://open.spotify.com/user/jamieliu386'>listen to music</a>.
			</Typography>
		</Container>
	);
}