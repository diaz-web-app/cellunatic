type GetCatParams={
    url_post?:string
}
export const get_categorias=async({url_post}:GetCatParams)=>{
    const request = await fetch(`${process.env.API}/categorias/${url_post?url_post:''}`)
    return await request.json()
}