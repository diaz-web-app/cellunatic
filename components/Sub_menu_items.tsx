import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { get_categorias } from "../api/get_categorias_controllers"
import GlobalAppContext from "../context/app/app_state"
import { TCategoria, TGetCategoria, TPost } from "../interfaces/interfaces"

type TCategories={
    pagina:TPost
}

const SubMenuItems = ({pagina}:TCategories) => {
    const {app,app_dispatch} = useContext(GlobalAppContext)
    const [categoriasMenu,setCategoriasMenu] = useState<TCategoria[]>([])

    const get_cats = async()=>{
        const response_cats:TGetCategoria = await get_categorias({})
         setCategoriasMenu(response_cats)
    }

    const menu_handler=()=>{
        app_dispatch(
            {
                type:'swich_menu',
                payload:!app.menu_state
            }
        )
    }

    useEffect(()=>{
        get_cats()
    },[])

    return (
            <>
                <ul>
                    {
                        pagina.categoria.map((cat)=>{
                        const data =  categoriasMenu.filter(current=>current.url == cat)
                            return data.map(category=>{
                                return (
                                    <li onClick={menu_handler} key={category._id} ><Link href={"/"+pagina.url+"/"+category.url+'?limite=12'}><a href={"/"+pagina.url+"/"+category.url+'?limite=12'}>{category.titulo}</a></Link></li>
                                )
                            })
                        })
                    }
                </ul>
                <style jsx>
                    {
                        `                        
                        ul{
                            padding:0;
                        }
                        ul li a{
                            padding: 3px 0px 6px 15px;
                            display:block;
                            border-bottom:1px solid var(--secondary-color);
                            text-transform: lowercase;
                        }
                        a:hover{
                            color:var(--secondary-color);
                        }`
                    }
                </style>
            </>
        )
                
}
export default SubMenuItems