import { ItemInterface } from '../types';

export const getItems = async (): Promise<ItemInterface[]> => {
  return fetch('https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json')
    .then((response) => response.json())
    .then((response) => response.items);
};
