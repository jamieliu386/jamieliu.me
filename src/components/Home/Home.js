import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MuiTypography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';
import Img from 'gatsby-image';

import styles from '../../styles/Home.module.scss';

const Typography = withStyles({
	root: {
		padding: '10px 0px',
		fontSize: '1.3rem'
	}
})(MuiTypography);

export default function Home() {
	const data = useStaticQuery(graphql`
		{
			catImages: allFile(filter: {relativePath: {glob:"cats/*"}}) {
				nodes {
					relativePath
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	`);

	const catImages = data.catImages.nodes.map(node => {
		return <Grid item xs={6} key={node.relativePath}>
			<Img fluid={{ ...node.childImageSharp.fluid, aspectRatio: 1 }} />
		</Grid>;
	});

	return (
		<Container maxWidth='sm'>
			<Typography variant='body1' component='p'>
				Hi, my name is Jamie!
			</Typography>
			<Typography variant='body1' component='p'>
				I’m a senior studying computer science at UCLA. I’m
				passionate about learning, building things, and helping other people.
			</Typography>
			<Typography variant='body1' component='p'>
				In my free time, I love cooking, baking, watching shows, and <a
					className={styles.link}
					href='https://open.spotify.com/user/jamieliu386'
					target='_blank' rel='noopener noreferrer'>listening to music</a>.
			</Typography>
			<Typography>
				Other assorted interests: <span title="[liŋˈɡwɪstɪks]" style={{
					textDecoration: 'underline dotted'
				}}>linguistics</span>, LaTeX, video games
			</Typography>
			<Typography>
				I also have two cats!
			</Typography>
			<Grid container spacing={4}>
				{catImages}
			</Grid>
		</Container>
	);
}
