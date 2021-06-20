import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MuiTypography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';
import Img from 'gatsby-image';

import * as styles from '../../styles/Home.module.scss';

const Typography = withStyles({
	root: {
		padding: '10px 0px',
		fontSize: '1.2rem'
	}
})(MuiTypography);

export default function Home() {
	const data = useStaticQuery(graphql`
		{
			catImages: allFile(filter: { relativePath: { glob: "cats/*" } }) {
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
		return (
			<Grid item xs={6} key={node.relativePath}>
				<Img fluid={{ ...node.childImageSharp.fluid, aspectRatio: 1 }} />
			</Grid>
		);
	});

	return (
		<Container maxWidth="sm" className={styles.home}>
			<Typography>
				Hi, my name is Jamie!
			</Typography>
			<Typography>
				I recently graduated 🎉 with my B.S. in Computer Science at{' '}
				<abbr title="University of California, Los Angeles">UCLA</abbr>, and
				I’m currently a software engineering intern at{' '}
				<a href="https://www.marqeta.com/">Marqeta</a>.
				I plan on continuing my studies at UCLA this fall, pursuing a Master’s
				degree in CS.
			</Typography>
			<Typography>
				I’m passionate about learning, building things, and helping other
				people. During my undergraduate experience at UCLA, I’ve been lucky
				enough to be explore these passions by being an officer for{' '}
				<a href="https://hack.uclaacm.com/">ACM Hack</a>{' '}
				and a lead developer for{' '}
				<a href="https://teachla.uclaacm.com/">ACM TeachLA</a>
				. I also had the opportunity to be a{' '}
				<a href="https://ceils.ucla.edu/learningassistants/">
					learning assistant
				</a>{' '}
				for undergraduate courses on{' '}
				<a href="https://polyarch.github.io/cs33/">
					computer organization
				</a>{' '}
				and{' '}
				<a href="https://web.cs.ucla.edu/classes/spring20/cs97-1/index.html">
					software construction
				</a>
				. If you have questions about any of these experiences, I’m happy to
				chat and answer them!
			</Typography>
			<Typography>
				In my free time, I love cooking, baking, watching shows, and{' '}
				<a
					href="https://open.spotify.com/user/jamieliu386"
					target="_blank"
					rel="noopener noreferrer"
				>
					listening to music
				</a>
				.
			</Typography>
			<Typography>
				Other assorted interests:{' '}
				<span
					title="[liŋˈɡwɪstɪks]"
					style={{
						textDecoration: 'underline dotted'
					}}
				>
					linguistics
				</span>
				, LaTeX, video games
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
