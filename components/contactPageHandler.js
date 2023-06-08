'use server';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

export async function handler(data) {
    const form = JSON.stringify(data);
    const title = uuidv4();
    const filePath = path.join(process.cwd(), '/public/form',title+".json" );
    fs.writeFileSync(filePath, form, 'utf8');
  }