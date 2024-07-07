import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    if (contacts.length > 0) {
    contacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('Last contact was removed successfully!');}
    else {
      console.log('No contacts to remove.');
    }
  } catch (error) {
    console.error('Error reading file!', error);
  }
};

removeLastContact();
