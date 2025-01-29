'use client';

import { Box } from '@aspire/ui';

const GlobalError = () => {
  return (
    <html lang="en-GB">
      <body>
        <Box
          data-testid="global-error"
          sx={{
            mt: {
              xs: 8,
              md: 20,
            },
          }}
        >
          Something went wrong
        </Box>
      </body>
    </html>
  );
};

export default GlobalError;
