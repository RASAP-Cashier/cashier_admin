import { Login } from '@/types';
import request from '@/utils/request';

export const auth = (data: Login) => {
  return request({
    url: 'auth/login',
    method: 'post',
    data,
  });
};
