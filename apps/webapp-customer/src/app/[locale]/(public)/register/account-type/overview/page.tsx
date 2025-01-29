'use client';

import { Button } from '@aspire/ui';

import { RegistrationRoute } from '@/enums';

import { useRegistration } from '../../RegistrationProvider';

const AccountTypeOverviewPage = () => {
  const { setCurrentStep } = useRegistration();

  return (
    <Button onClick={() => setCurrentStep(RegistrationRoute.AccountTypeFees)}>
      Continue
    </Button>
  );
};

export default AccountTypeOverviewPage;
