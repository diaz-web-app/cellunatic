type GetPostsParams={
    tipo?:string
    estado?:string
    categoria?:string
    limite?:number
}
export const get_posts = async({tipo,estado,limite,categoria}:GetPostsParams)=>{
    const request = await fetch(`${process.env.API}/posts/${tipo?tipo:'any'}/${estado?estado:'any'}/${categoria?categoria:'any'}/${limite?limite:12}`)
    return await request.json()
}
type GetPostParams={
    tipo?:string
    estado?:string
    url:string
}
export const get_post = async({tipo,url,estado}:GetPostParams)=>{
    const request = await fetch(`${process.env.API}/post/${tipo?tipo:'any'}/${url}/${estado?estado:''}`)
    return await request.json()
}

type GetSearchParams={
    text:string,
    limite:number
}
export const get_search = async({text,limite}:GetSearchParams)=>{
    try {
        const request = await fetch(`${process.env.API}/search/${text}/${limite?limite:12}`)
        if(request.status === 404) return request.status
        return await request.json()
    } catch (error) {
        console.error(error)
        return false
    }
}