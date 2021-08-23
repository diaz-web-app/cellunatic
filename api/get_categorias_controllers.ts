type GetCatParams={
    tipo_post?:string
}
export const get_categorias=async({tipo_post}:GetCatParams)=>{
    const request = await fetch(`${process.env.API}/categorias/${tipo_post?tipo_post:''}`)
    return await request.json()
}