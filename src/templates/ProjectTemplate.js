import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, navigate, PageRenderer, Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SVGImg from '../components/SVGImg';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Modal from 'react-modal';
import styles from '../styles/ProjectCard.module.scss';
import './style.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import CloseIcon from '@material-ui/icons/Close';

Modal.setAppElement(`#___gatsby`);

const modalStyles = {
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.58)'
	},
	content: {
		position: 'relative',
		top: 'auto',
		left: 'auto',
		right: 'auto',
		bottom: 'auto',
		maxWidth: '500px',
		margin: '32px auto',
		padding: '20px 40px',
		border: 0
	}
};

function Project({ data }) {
	const { title, desc, tech, github, link, img, dim } = data.allProjectsJson.nodes[0];
	const [modalOpen, setModalOpen] = useState(true);
	const modalCloseTimeout = 300;

	const closeModal = () => {
		setModalOpen(false);
		setTimeout(() => navigate(`/projects/`), modalCloseTimeout);
	};

	return (
		<Layout header={false}>
			<SEO title={title} />
			<PageRenderer key={'/projects/'} location={{ pathname: '/projects/' }} />
			<Modal
				isOpen={modalOpen}
				onRequestClose={closeModal}
				style={modalStyles}
				contentLabel='modal'
				closeTimeoutMS={modalCloseTimeout}
			>
				<Box display='flex' justifyContent='space-between' alignItems='center'>
					<Typography variant='h4' style={{ fontSize: '2rem', fontWeight: 600 }}>
						{title}
					</Typography>
					<Box>
						<a href={github} className={styles.icon} target='_blank'
							rel='noopener noreferrer'>
							<GitHubIcon titleAccess='code'/>
						</a>
						<a href={link} className={styles.icon} target='_blank'
							rel='noopener noreferrer'>
							<LinkIcon titleAccess='project'/>
						</a>
						<Link to='/projects/' aria-label='close modal' className={styles.icon}
							onClick={e => {
								e.preventDefault();
								closeModal();
							}}>
							<CloseIcon />
						</Link>
					</Box>
				</Box>
				<Typography className={styles.tech}>{tech}</Typography>
				<Typography className={styles.desc}>{desc}</Typography>
				<SVGImg src={img.publicURL} width={dim.width} height={dim.height} />
			</Modal>
		</Layout>
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
