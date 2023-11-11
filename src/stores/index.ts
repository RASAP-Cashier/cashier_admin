import { AuthStore } from './authStore';
import { UserStore } from './userStore';

export class RootStore {
  authStore: AuthStore;
  userStore: UserStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore(this);
  }
}
