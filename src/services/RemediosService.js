import { getFirestore, doc, collection, addDoc, getDocs, deleteDoc, query, where, limit } from 'firebase/firestore';
import { app, db } from './firebaseConfig';

export async function listRemedios() {
  const remedios = [];

  const resposta = await getDocs(collection(db, 'remedios'));
  resposta.forEach((doc) => {
    remedios.push({ key: doc.id, ...doc.data() });
  });

  return remedios;
}

export async function addRemedio(data, userId) {
  await addDoc(collection(db, 'remedios'), {
    medicamento: data.medicamento,
    dosagem: data.dosagem,
    miligramagem: data.miligramagem,
    horario: data.horario,
    userId: userId,
  });
}

export async function removeRemedio(key) {
  await deleteDoc(doc(db, 'remedios', key));
}
