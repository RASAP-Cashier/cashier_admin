import { useRootStore } from '@/providers/RootStoreProvider';
import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export type authDto = {
  email: string;
  password: string;
};

export const useAuthForm = () => {
  const { authStore } = useRootStore();
  const navigate = useNavigate();
  const [formState, setFormState] = useState<authDto>({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authStore.login(formState).then(() => {
      navigate('/orders');
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState(prevProps => ({
      ...prevProps,
      [name]: value,
    }));
  };

  return { handleSubmit, handleInputChange, formState };
};
