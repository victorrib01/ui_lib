import React from 'react';
import Input from '../Input';
import { type InputProps } from '../Input.types';

interface PasswordInputProps extends InputProps {
  newPasswordProp?: string; // nova prop
  id: string; // sobrescrever uma prop existente
}

const PasswordInput: React.FC<PasswordInputProps> = (
  props: PasswordInputProps,
): JSX.Element => {
  return <Input {...props} type="password" />;
};

export default PasswordInput;
