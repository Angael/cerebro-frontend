import { createStore, createApi } from 'effector';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export enum AuthState {
  loggedOut = 'logged out',
  loggedIn = 'logged in',
}

interface IAuth {
  uid: string | null;
  email: string | null;
  token: string | null;
  state: AuthState;
}

export const $auth = createStore<IAuth>({
  uid: null,
  email: null,
  token: null,
  state: AuthState.loggedOut,
});

export const authApi = createApi($auth, {
  login: (_s, data: Partial<IAuth>) => ({
    ..._s,
    ...data,
    state: AuthState.loggedIn,
  }),
  logout: (_s) => ({
    uid: null,
    email: null,
    token: null,
    state: AuthState.loggedOut,
  }),
});

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const token = await user.getIdToken();

    const { uid, email } = user;
    authApi.login({
      uid,
      email,
      token,
    });
  } else {
    authApi.logout();
  }
});
