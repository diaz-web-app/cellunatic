import Link from "next/link"
import { TCategoria, TGetPost } from "../interfaces/interfaces"

type ParamsCatWidget={
    categorias:TCategoria[]
    pagina:TGetPost
}
const AsideWidgetCats=({pagina,categorias}:ParamsCatWidget)=>{
    return(
        <ul className="aside_widget" >
            <p>Categorias</p>
            {
                categorias.map((categoria:TCategoria,i:number)=>{
                    const meta = pagina.metas.find(meta=>meta.clave == "tipo de post")
                        return (
                            <li key={i}>
                                <Link href={"/"+meta?.contenido+'/'+categoria.url} >
                                    <a href={"/"+meta?.contenido+'/'+categoria.url} >{categoria.titulo}</a>
                                </Link>
                            </li>
                    )
                })
            }
            <style jsx>
                {
                    `
                        ul{
                            border-radius:10px;
                            padding:8px 5px;
                            background:var(--primary-color);
                            margin-bottom:10px;
                        }
                        ul p{
                            font-weight:bold;
                            border-bottom:2px solid black;
                            padding-bottom:8px;
                        }
                        ul li a{
                            display:block;
                            margin:10px 0;
                        }
                        ul li a:hover{
                            color:var(--secondary-color);
                        }
                    `
                }
            </style>
        </ul>
    )
}
export default AsideWidgetCats