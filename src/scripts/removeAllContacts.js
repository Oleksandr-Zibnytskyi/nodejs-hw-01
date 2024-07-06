import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, '[]');
        console.log('All contacts were removed successfully!');
    } catch (error) {
        console.error('Error writing file!', error);
        }
};

removeAllContacts();
