import { app } from './firebaseConfig';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

export const auth = getAuth(app);

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('Usuário logado mesmo?');
    console.log(user);
  } else {
    console.log('Usuário deslogado mesmo?');
    console.log(user);
  }
});

export async function login(email, senha) {
  return await signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => userCredential.user.uid)
    .catch((error) => {
      if (error.code == 'auth/user-not-found') {
        throw Error('Usuário não encontrado');
      } else if (error.code == 'auth/wrong-password') {
        throw Error('Senha incorreta');
      }
    });
}

export async function register(email, senha) {
  return await createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => userCredential.user.uid)
    .catch((error) => {
      if (error.code == 'auth/email-already-in-use') {
        throw Error('E-mail já cadastrado');
      } else if (error.code == 'auth/invalid-email') {
        throw Error('E-mail inválido');
      } else if (error.code == 'auth/weak-password') {
        throw Error('Senha fraca');
      }
    });
}

export async function logout() {
  await signOut(auth);
}
