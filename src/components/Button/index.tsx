import {PropsWithChildren} from 'react';

interface ButtonProps {
  className?: string;
}

const Button = ({children, className}: PropsWithChildren<ButtonProps>) => (
  <button
    type="button"
    className={`bg-blue text-white hover:bg-slate shadow-md shadow-blue px-4 py-2 rounded-md ${className}`}
  >
    {children}
  </button>
);

export default Button;
