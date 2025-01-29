import React from 'react';
import logo from '../../../../public/images/Remove.png';

import { Container } from './container';


import { cn } from '@/lib/utils';



interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn(' border-gray-100', className)}>
      <Container className="flex items-center justify-center">
        <div className="flex items-center gap-3 py-3">
          <img src={logo} alt="logo" className="w-[100px]" />
          <div>
            <h1 className="text-xl uppercase font-black">Password Manager</h1>
            <p className="text-sm text-gray-400 leading-3">Create strong passwords with Password Generator</p>
          </div>
        </div>
      </Container>
    </header>
  );
};
