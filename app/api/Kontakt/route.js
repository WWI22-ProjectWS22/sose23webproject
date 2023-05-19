/*
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const fs = require('fs');*/
export async function POST(request){
    const formData = await request.formData();
    const email = formData.get('email');
    const name = formData.get('name');
    const content = formData.get('content');
    console.log(email);
    console.log(name);
    console.log(content);
/*
    const title = uuidv4();
    const data ={
        id: title,
        name: name,
        email: email,
        content: content
    };

    const form = JSON.stringify(data);

    const filePath = path.join(process.cwd(), '/public/form',title+".json" );
    await fs.writeFileSync(filePath, form, 'utf8');

*/

    return new Response(email, {
        status: 200
    });;
}