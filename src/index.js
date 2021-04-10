import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import Fonts from "./Fonts"
import { extendTheme } from '@chakra-ui/react';
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
	skin: {
		950: '#583101',
		900: '#603808',
		800: '#6F4518',
		700: '#8B5E34',
		600: '#A47148',
		500: '#BC8A5F',
		400: '#D4A276',
		300: '#E7BC91',
		200: '#F3D5B5',
		100: '#FFEDD8'
	}
};
const theme = extendTheme({
	fonts: {
		heading: 'Avenir Medium',
		body: 'Avenir Book'
	},
	colors
});
ReactDOM.render(
	<ChakraProvider theme={theme}>
    <Fonts />
		<App />
	</ChakraProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
