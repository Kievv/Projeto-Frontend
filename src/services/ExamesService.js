import { collection, addDoc, getDocs, query, where, limit, deleteDoc } from 'firebase/firestore';
import { app, db } from './firebaseConfig';

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

export async function removerExame(key) {
  await deleteDoc(doc(db, 'exames', key));
}
