import React from 'react';
import { Navbar } from '../organisms';
import { Background } from '../atoms';

export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Background />
      <Navbar />
      {children}
    </>
  );
}
