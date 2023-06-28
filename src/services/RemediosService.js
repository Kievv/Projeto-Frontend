import { getFirestore, doc, collection, addDoc, getDocs, query, where, limit } from 'firebase/firestore';
import { app, db } from './firebaseConfig';

export async function listRemedios() {
  let remedios = [];

  const remediosRef = collection(db, 'remedios');
  const q = query(remediosRef, limit(10));

  getDocs(q)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        remedios.push({ id: doc.id, ...doc.data() });
      });
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });
  console.log(remedios, 'Remedios');
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
