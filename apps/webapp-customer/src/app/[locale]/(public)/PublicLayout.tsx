'use client';

import { useEffect } from 'react';

import { removeLoader } from '@/splashScreen';

const PublicLayout = ({ children }) => {
  useEffect(() => {
    removeLoader();
  }, []);

  return children;
};

export default PublicLayout;
