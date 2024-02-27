import React from 'react';
import { Navbar } from '../organisms';

export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
