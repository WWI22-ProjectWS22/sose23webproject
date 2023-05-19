'use client'
import {POST} from "@/app/api/Kontakt/route";

export default function Herstellung() {
    /*const makeAPICall = async () =>{
        await fetch('/api',
            {
                method: 'POST',
                body: JSON.stringify({email: "test"})
        })
    }*/
    return (
            <div className="container mx-auto">
                <h1>Sign up to our newsletter!</h1>
                <h1>Sign up to our newsletter!</h1>
                <form method="POST" action="/api/Test">
                    <input placeholder="Enter your email" name="email" type={"text"} id={"email"}/>
                    <button type="submit" >Sign Up</button>
                </form>

            </div>
        //  https://www.youtube.com/watch?v=vrR4MlB7nBI
        //  https://www.youtube.com/watch?v=xirQ7AMyTM8
        );

}