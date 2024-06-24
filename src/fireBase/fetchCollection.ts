import { ref, get } from 'firebase/database';

import { dataBase } from '.';

export const fetchCollection = async (collection: string) => {
  const collectionRef = ref(dataBase, collection);
  const data = await get(collectionRef);

  return Object.values(data.val());
};
