import { nanniesData } from '.';
import { dataCollectionName } from '../constants';
import { addFile } from '../fireBase';

export const createNanniesCollection = async (): Promise<void> => {
  try {
    await Promise.all(nanniesData.map((n) => addFile(dataCollectionName, n)));
  } catch (error) {
    console.error('Error creating nannies collection:', (error as Error).message);
  }
};
