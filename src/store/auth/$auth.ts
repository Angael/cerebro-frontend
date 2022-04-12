import { createStore, createApi } from 'effector';
import {
  onAuthStateChanged,
  onIdTokenChanged,
  getIdToken,
  User,
} from 'firebase/auth';
import { auth } from '../firebase';

export enum AuthState {
  loggedOut = 'logged out',
  loggedIn = 'logged in',
}

interface IAuth {
  user: User | null;
  token: string | null;
  state: AuthState;
}

export const $auth = createStore<IAuth>({
  user: null, // uid and email are in user
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
    user: null,
    token: null,
    state: AuthState.loggedOut,
  }),
});

const updateAuthStore = async (user: User | null) => {
  if (user) {
    const token = await user.getIdToken();

    authApi.login({
      user,
      token,
    });
  } else {
    authApi.logout();
  }
};

onAuthStateChanged(auth, updateAuthStore);

onIdTokenChanged(auth, updateAuthStore);

const twentyMinutes = 20 * 60 * 1000;

// https://github.com/firebase/firebaseui-web/issues/142
setInterval(async () => {
  const user = $auth.getState().user;

  if (user) {
    try {
      const newToken = await getIdToken(user, true);

      authApi.login({
        user,
        token: newToken,
      });

      console.log('Refreshed token');
    } catch (e) {
      console.error('Failed to refresh token');
      authApi.logout();
      console.error(e);
    }
  }
}, twentyMinutes);
