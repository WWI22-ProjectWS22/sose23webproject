import { handler } from '@/components/contactPageHandler';

export async function POST(request){
  
    const formData = await request.formData();
        const name = formData.get('name');
        const content = formData.get('content');
        const email = formData.get('email');

    const timestamp = new Date();
    const data ={
        name: name,
        email: email,
        content: content,
        timestamp: timestamp
    };

    await handler(data);
    
    return new Response('', {
        status: 200
      });


}