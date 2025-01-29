'use client';

import { Box } from '@aspire/ui';

const RegisterError = () => {
  return (
    <Box
      data-testid="register-generic-error"
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

export default RegisterError;
