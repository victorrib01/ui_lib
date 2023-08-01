import React from 'react';
import Input from '../Input';
import { type InputProps } from '../Input.types';

interface CEPInputProps extends InputProps {
  id: string; // sobrescrever uma prop existente
}

const CEPInput: React.FC<CEPInputProps> = (
  props: CEPInputProps,
): JSX.Element => {
  return <Input {...props} />;
};

export default CEPInput;
