'use client';

import { Button } from '@aspire/ui';

import { RegistrationRoute } from '@/enums';

import { useRegistration } from '../RegistrationProvider';

const AccountConfirmationPage = () => {
  const { setCurrentStep } = useRegistration();

  return (
    <Button onClick={() => setCurrentStep(RegistrationRoute.ChooseAccountType)}>
      Back to start
    </Button>
  );
};

export default AccountConfirmationPage;
