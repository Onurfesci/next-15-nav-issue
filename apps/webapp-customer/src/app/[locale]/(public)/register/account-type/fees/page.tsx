'use client';

import { Button } from '@aspire/ui';

import { RegistrationRoute } from '@/enums';

import { useRegistration } from '../../RegistrationProvider';

const AccountTypeFeesPage = () => {
  const { setCurrentStep } = useRegistration();

  return (
    <Button
      onClick={() => setCurrentStep(RegistrationRoute.AccountConfirmation)}
    >
      Continue
    </Button>
  );
};

export default AccountTypeFeesPage;
