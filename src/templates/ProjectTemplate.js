import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';

function Project({ data }) {
	const node = data.allProjectsJson.nodes[0];

	return (
		<div>
			<Typography>{node.title}</Typography>
			<Typography>{node.desc}</Typography>
		</div>
	);
}

export const query = graphql`
	query ProjectData($id: String) {
		allProjectsJson(filter: {id: {eq: $id}}) {
			nodes {
				title
				desc
				tech
				github
				link
				dim {
					height
					width
				}
				img {
					publicURL
				}
			}
		}
	}
`;

Project.propTypes = {
	data: PropTypes.shape({
		allProjectsJson: PropTypes.shape({
			nodes: PropTypes.arrayOf(PropTypes.shape({
				desc: PropTypes.string.isRequired,
				dim: PropTypes.shape({
					height: PropTypes.number.isRequired,
					width: PropTypes.number.isRequired
				}).isRequired,
				github: PropTypes.string.isRequired,
				img: PropTypes.shape({
					publicURL: PropTypes.string.isRequired
				}).isRequired,
				link: PropTypes.string.isRequired,
				tech: PropTypes.string.isRequired,
				title: PropTypes.string.isRequired
			})).isRequired
		}).isRequired
	}).isRequired
};

export default Project;
