import Link from "next/link"
import { useContext } from "react"
import GlobalAppContext from "../context/app/app_state"
import SubMenuItems from "./Sub_menu_items"

const Navigation = () => {
    const {app,app_dispatch} = useContext(GlobalAppContext)

    const menu_handler=()=>{
        app_dispatch(
            {
                type:'swich_menu',
                payload:!app.menu_state
            }
        )
    }
    return (
            <>
                <div onClick={menu_handler} className="effect_menu"></div>
                <nav className="principal" >
                    <div style={{display:'flex',flexFlow:'row nowrap',justifyContent:'flex-start',alignItems:'center',padding:'10px 3px'}} className="logo">
                        <img style={{ margin: '0 5px' }} src="/favicon.ico" alt="cellunatic logo" width="32px" height="32px" />
                        <b>Cellunatic</b>
                    </div>
                    <ul>
                        {
                           app.paginas_state?(
                            app.paginas_state.posts.map((pagina)=>{
                                
                                return (
                                    <li onClick={menu_handler} key={pagina._id} ><Link href={"/"+pagina.url} ><a href={"/"+pagina.url} >{pagina.titulo}</a></Link>
                                        <SubMenuItems pagina={pagina} />
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