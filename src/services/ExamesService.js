import { getFirestore, doc, collection, addDoc, getDocs, query, where, limit } from 'firebase/firestore';
import { app, db } from './firebaseConfig';
import { getAuth } from 'firebase/auth';

export async function listExames() {
  const exames = [];

  const resposta = await getDocs(collection(db, 'exames'));
  resposta.forEach((doc) => {
    exames.push({ key: doc.id, ...doc.data() });
  });

  return exames;
}

export async function addExame(data, userId) {
  await addDoc(collection(db, 'exames'), {
    exame: data.exame,
    clinica: data.clinica,
    local: data.local,
    dia: data.dia,
    horario: data.horario,
    userId: userId,
  });
}
