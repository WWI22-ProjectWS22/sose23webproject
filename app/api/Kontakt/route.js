import { handler } from '@/app/Kontakt/page';

export async function POST(request){
    const formData = await request.formData();
    const email = formData.get('email');
    const name = formData.get('name');
    const content = formData.get('content');

    const timestamp = new Date();
    const data ={
        name: name,
        email: email,
        content: content,
        timestamp: timestamp
    };

    const answer = await handler(data);

    return new Response(
        answer
    );

}