import { TCategoria, TGetPost } from "../interfaces/interfaces"

const AsideWidgetAds=()=>{
    return(
        <ul className="aside_widget" >
            <p>Categorias</p>
            <li>
                anuncio
            </li>
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
export default AsideWidgetAds