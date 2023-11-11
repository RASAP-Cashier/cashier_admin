import { makeAutoObservable } from 'mobx';
import { RootStore } from '.';
import { auth } from '@/api';
import { authDto } from '@/hooks/useAuthForm';
import { getToken, removeToken, setToken } from '@/utils';

export class AuthStore {
  accessToken = '';

  private rootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  get isAuth() {
    return getToken() ? true : false;
  }

  setAccessToken(token: string) {
    this.accessToken = token;
  }
  async login(authDto: authDto) {
    try {
      const result = await auth(authDto);
      this.setAccessToken(result.data.access_token);
      setToken(result.data.access_token);
      return result.data.access_token;
    } catch (error) {}
  }

  logout() {
    removeToken();
    this.rootStore.userStore.currentUser.id = 0;
  }
}
