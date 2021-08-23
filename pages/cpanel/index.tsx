import { useEffect, useState } from "react"
import { get_categorias } from "../../api/get_categorias_controllers"
import { get_posts } from "../../api/get_posts_controllers"
import { get_post_metas } from "../../api/get_post_metas_controllers"
import { get_tipos_post } from "../../api/get_tipos_post_controllers"
import {NewPost} from "../../components/new_post"
import { UpdatePost } from "../../components/update_post"
import { TCategoria, TGetPost, TGetPosts, TMeta, TTipoPost } from "../../interfaces/interfaces"

type TCpanelData={
    metas:TMeta[]
    categorias:TCategoria[]
    tipos:TTipoPost[]
}
type ListParams={
    posts?:TGetPosts
    setPost:(params:TGetPost)=>void
    setVista:(param:string)=>void
}

const TablePosts = ({posts,setPost,setVista}:ListParams)=>{
    const set_current=({metas,post}:TGetPost)=>{
        setPost({metas,post})
        setVista('update_post')
    }
    return(
        <table>
            <thead>
                <tr>
                    <td>titulo</td>
                    <td>tipo</td>
                    <td>opciones</td>
                </tr>
            </thead>
            <tbody>
            {
                posts?.posts?.map((post,i:number)=>{
                    const the_metas = posts?.metas?.filter(meta=>meta.id_post==post._id)
                        return (
                            <tr key={i}>
                                <td>{post.titulo}</td>
                                <td>{post.tipo}</td>
                                <td><button onClick={()=>set_current({metas:the_metas,post})} >Editar</button></td>
                            </tr>
                        )}
                    )
            }
            </tbody>
        </table>
    )
}
const Cpanel = () => {
    const [cpanelData,setPanelData] = useState<TCpanelData>({metas:[],categorias:[],tipos:[]})
    const [vista,setVista] = useState<string>('posts')
    const [current_post,setCurrent_post] = useState<TGetPost>({post:null,metas:[]})
    const [posts,setPosts] = useState<TGetPosts>()

    const prepare_posts=async()=>{
        const posts = await get_posts({})
        setPosts(posts)
    }
    const prepare_cpanel=async()=>{
        const res_cats = await get_categorias({})
        const res_tipos = await get_tipos_post({})
        const res_metas = await get_post_metas({})
        setPanelData({metas:res_metas,categorias:res_cats,tipos:res_tipos})
    }
    useEffect(()=>{
        prepare_cpanel()
    },[])
    useEffect(()=>{
        prepare_posts()
    },[vista])

    return (
        <main>
            <aside>
                <h3>CPanel</h3>
                <ul>
                    <li>
                        <button onClick={()=>setVista(`posts`)} >Dashboard</button>
                    </li>
                    <li>
                        <button onClick={()=>setVista(`new_post`)} >crear post</button>
                    </li>

                </ul>
            </aside>
            <section>
                <h1>Este es el cpanel</h1>
                {
                    vista=='update_post'?(
                        <>
                            <UpdatePost current_post={current_post} categorias={cpanelData.categorias} tipos={cpanelData.tipos} />
                            <div>
                                <button onClick={()=>setVista('posts')}>Cerrar</button>
                            </div>
                        </>
                    ):vista=='new_post'?(
                        <>
                            <NewPost metas={cpanelData.metas} categorias={cpanelData.categorias} tipos={cpanelData.tipos} />
                            <div>
                                <button onClick={()=>setVista('posts')}>Cerrar</button>
                            </div>
                        </>
                    ):posts?.posts?(
                        <TablePosts posts={posts} setPost={setCurrent_post} setVista={setVista}/>
                    ):null
                }
            </section>
        </main>
    )
}

export default Cpanel