import { Global } from '@emotion/react';

const Fonts = () => (
	<Global
		styles={`
      /* latin */
      @font-face {
        font-family: 'Avenir Medium';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./components/styles/fonts/AvenirLTStd-Medium.otf') format('otf'), url('./components/styles/fonts/AvenirLTStd-Medium.otf') format('otf');
        
      }
      /* latin */
      @font-face {
        font-family: 'Avenir Book';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./components/styles/fonts/AvenirLTStd-Book.otf') format('otf'), url('./components/styles/fonts/AvenirLTStd-Book.otf') format('otf');
        
      }
      `}
	/>
);

export default Fonts;
