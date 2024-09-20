import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest){
    const requestHeaders = new Headers(request.headers);
    const auth = requestHeaders.get("Authorization"); //1st way

    const requestSecHeaders = headers();//second way
    console.log("second way of auth: -", requestSecHeaders.get("Authorization"));
    console.log("auth--- of profile api--", auth);

    // cookies- 1st way
    const themeCookie = request.cookies.get("theme");
    console.log("theme cookie--:", themeCookie);

    cookies().set("resultsPerPage", "20");
    console.log(cookies().get("resultsPerPage"));
    // cookies().delete

    return new Response("Profile API GET data", {
        headers:{
            "Content-Type":"text/html",
            "Set-Cookie":"theme=dark"
        }
    });
}