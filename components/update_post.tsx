import { FormEvent } from "react"
import { TCategoria, TGetPost, TMeta } from "../interfaces/interfaces"

type Params={
    categorias:TCategoria[]
    tipos: {
        _id: string
        titulo: string
        url: string
        createdAt: Date
        updatedAt: Date
    }[]
    current_post:TGetPost
}
type UpdateParams={
    post:any
    post_metas:any[]
    _id:string
}

const http_update_post=async({post,post_metas,_id}:UpdateParams)=>{
    const request = await fetch(`${process.env.API}/posts`,{
        method:'put',
        body:JSON.stringify({post,post_metas,_id}),
        headers:{
            "content-type":"application/json"
        }
    })
    if(request.status == 500) return false
    return true
}
type DeleteParams={
    _id:string
}
const http_delete_post=async({_id}:DeleteParams)=>{
    const request = await fetch(`${process.env.API}/posts`,{
        method:'delete',
        body:JSON.stringify({_id}),
        headers:{
            "content-type":"application/json"
        }
    })
    if(request.status == 500) return false
    return true
}

const addMeta=(e:FormEvent)=>{
    e.preventDefault()
    const div_parent = document.getElementById('inputs_metas')
    const new_div = document.createElement('div')
    const input_clave = document.createElement('input')
    const input_contenido = document.createElement('input')
    const span = document.createElement('span')
    const span_2 = document.createElement('span')

    const label_1 = document.createElement('label')
    const label_2 = document.createElement('label_2')

    label_1.textContent='Clave'
    label_2.textContent='Contenido'
    span_2.textContent=''


    input_clave.name = 'clave'
    input_clave.placeholder = 'Clave'
    input_contenido.name = 'contenido'
    input_contenido.placeholder = 'contenido'
    span.onclick = delete_meta
    span.textContent = '-'

    input_clave.style.background='var(--primary-color)'
    input_clave.style.width='95%'
    input_clave.style.borderRadius='5px'
    input_clave.style.border='2px solid var(--secondary-color)'
    input_clave.style.padding='5px 10px'
    input_clave.style.margin='5px 0px'

    input_contenido.style.background='var(--primary-color)'
    input_contenido.style.width='95%'
    input_contenido.style.borderRadius='5px'
    input_contenido.style.border='2px solid var(--secondary-color)'
    input_contenido.style.padding='5px 10px'
    input_contenido.style.margin='5px 0px'

    span.style.width='20px'
    span.style.height='20px'
    span.style.cursor='pointer'
    span.style.border='2px solid darkorange'
    span.style.textAlign='center'
    span.style.lineHeight='1'
    span.style.borderRadius='50%'

    new_div.style.display='grid'
    new_div.style.gridTemplateColumns = '1fr 1fr 50px'

    if(div_parent){
        new_div.appendChild(label_1)
        new_div.appendChild(label_2)
        new_div.appendChild(span_2)
        new_div.appendChild(input_clave)
        new_div.appendChild(input_contenido)
        new_div.appendChild(span)

        div_parent.appendChild(new_div)
    }
    
}
const delete_meta = (e:any)=>{
    e.target.parentElement.remove()
}
const prepare_post=(e:any)=>{
    e.preventDefault()
    const {meta_desc,titulo,keywords,tipo,cover}:any = e.target 
    
    //Seleccionamos los matas
    const post_metas:any[] = []
    let div_metas = e.target.querySelector('#inputs_metas').querySelectorAll('div')
    for(let div of div_metas){
        const clave = div.querySelector('input[name=clave]')
        const contenido = div.querySelector('input[name=contenido]')
        post_metas.push({clave:clave.value,contenido:contenido.value})
    }
    //Seleccionamos las categorias
    const categoria:any[] = []
    let inputs_categoria:HTMLInputElement[] = e.target.querySelectorAll('input[name=categoria]')
    for(let input of inputs_categoria){
        if(input.checked){
            categoria.push(input.value)
        }
    }
    const post={
        categoria,
        titulo:titulo.value,
        contenido:meta_desc.value,
        keywords:keywords.value,
        tipo:tipo.value,
        cover:cover?.value
    }
    return {post,post_metas}
}
export const UpdatePost = ({tipos,categorias,current_post}:Params) => {
    const update_post_handler=async(e:any)=>{
        e.preventDefault()
        
        const {post,post_metas}:any = prepare_post(e)
        if(!post || !post_metas) return
        if(!current_post.post) return alert('no hay id de post')
        const res = await http_update_post({_id:current_post.post._id,post,post_metas})
        if(!res) return alert('error')
        alert('ok')
    }
    const delete_post= async ()=>{
        const deleted = await http_delete_post({_id:current_post.post?current_post.post._id:''})
        if(deleted) return alert('post eliminado')
    }
    return (
        <div>
            <form onSubmit={(e:any)=>update_post_handler(e)} >
                {/** titulo y Tipo de post */}
                <div>
                    {/** titulo requerido*/}
                    <div>
                        <label>Titulo</label>
                        <input type="text" name="titulo" required placeholder="titulo" defaultValue={current_post.post?.titulo}/>
                    </div>
                    {/** tipo de post requerido*/}
                    <div>
                        <label>Tipo de post</label>
                        <select name="tipo" required >
                            <option defaultValue={current_post.post?.tipo}>{current_post.post?.tipo}</option>
                            {
                                tipos.length > 0?(
                                    tipos.map((tipo)=>(
                                        <option key={tipo._id} defaultValue={tipo.url}>{tipo.titulo}</option>
                                    ))
                                ):null
                            }
                        </select>
                    </div>
                </div>

                <div>
                    {/** Meta content */}
                    <div>
                        <label>Meta decription</label>
                        <input type="text" name="meta_desc" required placeholder="meta description" defaultValue={current_post.post?.contenido} />
                    </div>
                    {/** Meta keywords*/}
                    <div>
                        <label>Meta keywords</label>
                        <input type="text" name="keywords" required placeholder="cellunatic,forros,items..." defaultValue={current_post.post?.keywords}/>
                    </div>
                </div>

                {/** categorias y metas del post*/}
                <div>
                    {/** post metas se van anadiendo inputs virtualmente segun se necesiten*/}
                    <div id="inputs_metas" >
                        <label> Meta info del post <button onClick={addMeta}>+</button></label>
                        {
                            current_post.metas.length > 0?(
                                current_post.metas.map((meta:TMeta)=>(
                                    <div key={meta._id}>
                                        <label>Clave</label><label>Contenido</label><span></span>
                                        <input name="clave" placeholder="Clave" defaultValue={meta.clave}/>
                                        
                                        <input name="contenido" placeholder="contenido" defaultValue={meta.contenido} />
                                        <span onClick={delete_meta} >-</span>
                                    </div>
                                ))
                            ):null
                        }
                                          
                    </div>
                    {/** categorias del post*/}
                    <div id="inputs_categorias" >
                        <label>Categorias</label>
                        <div>
                            {
                                categorias.length > 0?(
                                    categorias.map((categoria)=>{
                                        const checked = current_post.post?.categoria.find(cat=>cat==categoria.url)
                                        return (
                                        <span key={categoria._id} >
                                            <label htmlFor={categoria._id}>{categoria.titulo}</label>
                                            <input id={categoria._id} type="checkbox" name="categoria" defaultChecked={checked==categoria.url?true:false} value={categoria.url}/>
                                        </span>
                                    )})
                                ):null
                            }                    
                        </div>
                    </div>
                </div>
                <div>
                    <button>Crear post</button> <span onClick={delete_post} >Delete</span>
                </div>
            </form>
            <style jsx>
                {
                    `
                    form > div{
                        display:grid;
                        grid-template-columns:1fr;
                        gap:20px;
                    }
                    
                    input,select{
                        width:95%;
                        border-radius:6px;
                        padding:2px 4px;
                        border:2px solid var(--secondary-color);
                        background:var(--primary-color);
                        color:white;
                        padding:5px 10px;
                        margin:5px 0;
                    }
                    
                    #inputs_categorias > div{
                        display:flex;
                        flex-flow:rows wrap;
                        align-items:flex-start;
                        align-content:flex-start;
                    }
                    
                    #inputs_categorias span,#inputs_categorias span input{
                        margin:2px;
                    }
                    @media(min-width:960px){
                        form > div{
                            grid-template-columns:repeat(2,1fr);
                        }
                    }
                    `
                }
            </style>
        </div>
    )
}

