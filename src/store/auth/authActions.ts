import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../firebase';
import { API } from '../../utils/axios';

export const logout = () => signOut(auth);

export const logIn = async (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password).then(
    (userCredentials) => {
      const { uid, email } = userCredentials.user;
      return API.post('/account/register', { email, uid }).catch((err) => {
        return Promise.reject({ code: 'auth/failed_to_register_in_api' });
      });
    },
  );

export const sendPasswordReset = (email: string) =>
  sendPasswordResetEmail(auth, email);

// const data = {
//   email,
//   password,
//   returnSecureToken: true,
// };
//
// return (
//   API.post(
//     `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_KEY}`,
//     data,
//   )
//     // TODO check if error is 'account exists' then try to register in my backend again
//     .then((response) =>
//       API.post('/account/register', {
//         email,
//         uid: response.data.localId,
//       }),
//     )
//     .then((_res) => logIn(email, password))
//     .catch((e) => {
//       console.error('error with registration', e);
//       logout();
//       throw new Error();
//     })
// );
