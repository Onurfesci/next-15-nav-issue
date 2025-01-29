'use client';

import { useRouter } from 'next/navigation';
import { createContext, useContext } from 'react';

import { RegistrationRoute } from '@/enums';

const RegistrationContext = createContext<{
  setCurrentStep: (step: RegistrationRoute) => void;
} | null>(null);

const RegistrationProvider = ({ children }: WithChildren) => {
  const { push } = useRouter();

  const setCurrentStep = (step: RegistrationRoute) => {
    push(step);
  };

  return (
    <RegistrationContext.Provider
      value={{
        setCurrentStep,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export default RegistrationProvider;

export const useRegistration = () => useContext(RegistrationContext);
