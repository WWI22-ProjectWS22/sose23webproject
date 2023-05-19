import {redirect} from "next/navigation";

export async function GET(request){
    return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
 
<channel>
  <title>Next.js Documentation</title>
  <link>https://nextjs.org/docs</link>
  <description>The React Framework for the Web</description>
</channel>
 
</rss>`);
}

export async function POST(request){
    const formData = await request.formData();
    const email = formData.get('email');
    console.log(email);

    return redirect('/');
}