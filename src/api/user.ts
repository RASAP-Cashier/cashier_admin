import { UserType } from '@/stores/userStore';
import request from '@/utils/request';

export const fetchCurrentUser = () => {
  return request({
    url: '/users',
    method: 'get',
  });
};
