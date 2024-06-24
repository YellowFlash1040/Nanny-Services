import { push, ref, set } from 'firebase/database';

import { dataBase } from '../fireBase';

export const addFile = async (collection: string, file: object) => {
  const collectionRef = push(ref(dataBase, collection));
  await set(collectionRef, file);
};
