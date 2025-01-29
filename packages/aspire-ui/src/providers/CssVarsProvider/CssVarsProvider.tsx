'use client';

import { extendTheme, CssVarsProvider as JoyCssVarsProvider } from '@mui/joy';

const theme = extendTheme();

const CssVarsProvider: typeof JoyCssVarsProvider = (props) => (
  <JoyCssVarsProvider theme={theme} {...props} />
);

export default CssVarsProvider;
