import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createTheme, responsiveFontSizes } from '@material-ui/core/styles';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import '../styles/layout.global.scss';

const overwrittenTheme = responsiveFontSizes(createTheme({
	typography: {
		fontSize: 14,
		fontFamily: '"Source Serif Pro", serif',
		h1: {
			fontFamily: '"Source Serif Pro", serif',
			fontSize: '3rem'
		},
		h2: {
			fontFamily: '"Source Serif Pro", serif',
			fontSize: '2.5rem'
		},
		h3: {
			fontFamily: '"Source Serif Pro", serif',
			fontSize: '2rem'
		},
		h4: {
			fontFamily: '"Source Serif Pro", serif',
			fontSize: '1.8rem'
		},
		h5: {
			fontFamily: '"Source Serif Pro", serif',
			fontSize: '1.5rem'
		},
		h6: {
			fontFamily: '"Source Serif Pro", serif',
			fontSize: '1.3rem'
		},
		body1: {
			fontFamily: '"Source Sans Pro", sans-serif',
			fontSize: '1em'
		},
		button: { fontFamily: '"Source Sans Pro", sans-serif' }
	},
	props: {
		MuiButtonBase: {
			disableRipple: true // remove all ripple effects
		}
	},
	shadows: ['none'], // remove box shadows
	overrides: {
		MuiDialog: {
			paper: {
				padding: '10px 20px',
				width: 600
			}
		}
	}
}));

export const Head = () =>
	<>
		<link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;600;700;800&display=swap" rel="stylesheet" />
		<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;800&display=swap" rel="stylesheet" />
	</>;
const Layout = ({ children }) => {
	return (
		<MuiThemeProvider theme={overwrittenTheme}>
			<Header />
			<main>{children}</main>
			<Footer />
		</MuiThemeProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
