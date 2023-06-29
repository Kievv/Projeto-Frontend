import { getFirestore, doc, collection, addDoc, getDocs, query, where, limit, deleteDoc } from 'firebase/firestore';
import { app, db } from './firebaseConfig';

export async function listConsultas() {
  const consultas = [];

  const resposta = await getDocs(collection(db, 'consultas'));
  resposta.forEach((doc) => {
    consultas.push({ key: doc.id, ...doc.data() });
  });

  return consultas;
}

export async function addConsulta(data, userId) {
  await addDoc(collection(db, 'consultas'), {
    especialidade: data.especialidade,
    clinica: data.clinica,
    local: data.local,
    dia: data.dia,
    horario: data.horario,
    userId: userId,
  });
}

export async function removeConsulta(key) {
  await deleteDoc(doc(db, 'consultas', key));
}
