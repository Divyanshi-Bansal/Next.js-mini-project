import { NextRequest } from "next/server";
import { comments } from "./data";

type RequestData = {
    text:string
}

// export async function GET(){
//     return Response.json(comments);
// }

// export async function POST(data: RequestData){
//     return new Response(`Request is successful data: ${data.text}`);
// }

export async function POST(request: Request){
    const req = await request.json();
    console.log("data: ", req.text);
    const newComment = {
        id:comments.length + 1,
        text:req.text
    }
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        headers:{
            "Content-Type": "application/json" 
        },
        status:201
    })
}

export async function GET(request: NextRequest){
    const searchParams = request.nextUrl.searchParams;
    const word = searchParams.get("word");
    if(word != undefined && word != null && word != ""){
        const filteredComments = comments.filter(comment => comment.text.includes(word));
        if(filteredComments.length > 0){
            return Response.json(filteredComments);
        }
    }else if(word == undefined || word == null){
        return Response.json(comments);
    }
    return new Response("no record found!");
}
