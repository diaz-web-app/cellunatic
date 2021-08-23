type TGetTiposParams={
    tipo_post?:string
}
export const get_tipos_post=async({tipo_post}:TGetTiposParams)=>{
    const request = await fetch(`${process.env.API}/tipos/${tipo_post?tipo_post:''}`)
    return await request.json()
}