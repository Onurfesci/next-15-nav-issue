'use client';

import { Box } from '@aspire/ui';

const ParentError = () => {
  return (
    <Box
      data-testid="parent-error"
      sx={{
        mt: {
          xs: 8,
          md: 20,
        },
      }}
    >
      Something went wrong
    </Box>
  );
};

export default ParentError;
