import React, { ReactNode } from 'react';
import {
	ThemeProvider,
	StyledEngineProvider,
	createTheme,
	responsiveFontSizes
} from '@mui/material/styles';

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
	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true
			}
		},
		MuiDialog: {
			styleOverrides: {
				paper: {
					padding: '10px 20px',
					width: 600
				}
			}
		}
	}
	// shadows: ['none'], // remove box shadows
}));

export const Head = () =>
	<>
		<link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;600;700;800&display=swap" rel="stylesheet" />
		<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;800&display=swap" rel="stylesheet" />
	</>;

export type LayoutProps = {
	children: ReactNode,
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={overwrittenTheme}>
				<Header />
				<main>{children}</main>
				<Footer />
			</ThemeProvider>
		</StyledEngineProvider>
	);
};

export default Layout;
