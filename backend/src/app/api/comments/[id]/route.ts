import { comments } from "../data";

export async function GET(_request: Request, {params}:{
    params:{
        id:string
    }
}){
    console.log("id params: ", params.id);
    const comment = comments.find(comment => comment.id === parseInt(params.id));
    console.log(comment);
    if(comment === undefined || comment == null){
        return new Response(`Comment of Id ${params.id} is not present!!`)
    }
    return Response.json(comment);
}

export async function PATCH(request: Request, {params}:{
    params:{
        id:string
    }
}){
    const body = await request.json();
    const index = comments.findIndex(comment => comment.id === parseInt(params.id));
    // console.log("index---",index);
    comments[index].text = body.text;
    return Response.json(comments[index]);
}