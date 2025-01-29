'use client';

import { Button } from '@aspire/ui';

import { RegistrationRoute } from '@/enums';

import { useRegistration } from '../../RegistrationProvider';

const AccountTypeChoosePage = () => {
  const { setCurrentStep } = useRegistration();

  return (
    <Button
      onClick={() => setCurrentStep(RegistrationRoute.AccountTypeOverview)}
    >
      Continue
    </Button>
  );
};

export default AccountTypeChoosePage;
