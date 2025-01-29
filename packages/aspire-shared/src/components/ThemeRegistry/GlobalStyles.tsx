import { GlobalStyles as JoyGlobalStyles } from '@aspire/ui';

const GlobalStyles = () => (
  <JoyGlobalStyles
    styles={{
      ':root': {
        '--focus-outline-offset': '0px',
        '--joy-spacing': '4px',
      },
    }}
  />
);

export default GlobalStyles;
