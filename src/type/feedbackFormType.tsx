import { BaseSyntheticEvent } from 'react';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  theme: string;
  message: string;
  agree: boolean;
};

type Item = {
  id: number;
  name: string;
  email: string;
  phone: string;
  theme: string;
  message: string;
  agree: boolean;
};

type SubmitFunctionType = (data: FormValues, e: BaseSyntheticEvent | undefined) => Promise<void>;
export type { FormValues, Item, SubmitFunctionType };
