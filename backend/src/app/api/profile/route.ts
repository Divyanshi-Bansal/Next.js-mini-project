import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest){
    const requestHeaders = new Headers(request.headers);
    const auth = requestHeaders.get("Authorization"); //1st way

    const requestSecHeaders = headers();//second way
    console.log("second way of auth: -", requestSecHeaders.get("Authorization"));
    console.log("auth--- of profile api--", auth);
    return new Response("Profile API GET data");
}