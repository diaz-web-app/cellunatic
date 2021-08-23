import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { get_categorias } from "../api/get_categorias_controllers"
import GlobalAppContext from "../context/app/app_state"
import { TCategoria, TGetCategoria, TMeta } from "../interfaces/interfaces"

const Navigation = () => {
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
    },[app.paginas_state])
    return (
            <>
                <div onClick={menu_handler} className="effect_menu">.</div>
                <nav className="principal" >
                    <ul>
                        {
                           app.paginas_state?(
                            app.paginas_state.posts.map((pagina)=>{
                                const meta = app.paginas_state?.metas?.find((meta:TMeta)=>meta.clave=='tipo de post' && meta.id_post == pagina._id)
                                
                                return (
                                    <li onClick={menu_handler} key={pagina._id} ><Link href={"/"+pagina.url} ><a href={"/"+pagina.url} >{pagina.titulo}</a></Link>
                                        <ul>
                                            {
                                                pagina.categoria.map((cat)=>{
                                                const data =  categoriasMenu.filter(current=>current._id == cat)
                                                    return data.map(category=>{
                                                        return (
                                                            <li onClick={menu_handler} key={category._id} ><Link href={"/"+meta?.contenido+"/"+category.url}><a href={"/"+meta?.contenido+"/"+category.url}>{category.titulo}</a></Link></li>
                                                        )
                                                    })
                                                })
                                            }
                                        </ul>
                                    </li>
                                )
                            })
                           ):'loading...'
                        }
                    </ul>
                </nav>

                <style jsx>{
                    `
                    /*Nav */
                        nav.principal,.effect_menu{
                            width:250px;
                            position: fixed;
                            height:100vh;
                            left: 0;
                            bottom: 0;
                            overflow-y: auto;
                            overflow-x: hidden;
                            background: var(--primary-color);
                            transition:all .4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                        }
                        nav.principal,.effect_menu{
                            z-index: 13;
                        }
                        /* ul del nav*/
                        nav.principal ul{
                            padding:0;
                        }
                        
                        /* *********** */
                        nav.principal{
                            top:${app.menu_state?'0':'100vh'}
                        }
                        .effect_menu{
                            top:0;
                            width: 100vw;
                            left:${app.menu_state?'0':'-100%'};
                            background-color: rgba(0,0,0, .8);
                        }
                        
                        nav.principal > h3{
                            height: var(--height-header);
                            line-height: var(--height-header);
                            text-transform: uppercase;
                            border-bottom: 1px solid var(--darken);
                            padding: 0 3px;
                        }
                        
                       nav.principal a{
                            display:block;
                            padding:8px 3px;
                            border-bottom:1px solid var(--secondary-color);
                            text-transform: capitalize;
                        }
                        nav.principal > ul ul li a{
                            padding-left:15px;
                        }
                        nav.principal a:hover{
                            color:var(--secondary-color);
                        }
                        
                    `
                }
                </style>
            </>
        )
                
}
export default Navigation