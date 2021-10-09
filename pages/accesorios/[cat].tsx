import Head from "next/head";
import {GetServerSideProps,GetServerSidePropsContext} from 'next'
import { get_categorias } from "../../api/get_categorias_controllers";
import { get_post, get_posts } from "../../api/get_posts_controllers";
import { TGetCategoria, TGetPost, TGetPosts } from "../../interfaces/interfaces";
import { useRouter } from "next/dist/client/router";
import Card_Item from "../../components/Card_item";
import AsideWidgetCats from "../../components/aside_widget_cats";
import { useMemo } from "react";

type Props={
    categorias:TGetCategoria
    pagina:TGetPost
    posts_data:TGetPosts
    query:any
}
const Accesorios = ({categorias,pagina,posts_data,query}:Props) => {
    const {asPath,push} = useRouter()
    const widget_categorias = useMemo(()=><AsideWidgetCats categorias={categorias} pagina={pagina} />,[])
    
    const more = ()=>{
        let limite = parseInt(query.limite) + 4
        if(limite <= posts_data.total_posts){            
            push("/accesorios/"+query.cat+"?limite="+limite+"#more")
        }
        if(limite > posts_data.total_posts){            
            push("/accesorios/"+query.cat+"?limite="+posts_data.total_posts+"#more")
        }
    }
    
    return (
        <main>
            <Head>
                <title>{pagina.post?pagina.post.titulo:''} - Cellunatic</title>
                <meta name="description" content={pagina.post?pagina.post.meta_description:''} />
                <meta name="keywords" content={""}/>
                <link rel="canonical" href={process.env.DOMAIN+asPath} />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={pagina.post?pagina.post.titulo:'cellunatic'}/>
                <meta property="og:description" content={pagina.post?pagina.post.meta_description:''} />
                <meta property="og:url" content={process.env.DOMAIN+asPath} />
                <meta property="og:site_name" content={process.env.DOMAIN} />
                <meta property="og:image" content={pagina.post && pagina.post.cover?pagina.post.cover:process.env.DOMAIN+"/logo512x512.png"} />
                <meta property="og:image:secure_url" content={pagina.post && pagina.post.cover?pagina.post.cover:process.env.DOMAIN+"/logo512x512.png"} />
                <meta property="og:image:width" content="32" />
                <meta property="og:image:height" content="32" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content={pagina.post?pagina.post.meta_description:''} />
                <meta name="twitter:title" content={pagina.post?pagina.post.titulo+' - Cellunatic':'Cellunatic'} />
                <meta name="twitter:image" content={pagina.post && pagina.post.cover?pagina.post.cover:process.env.DOMAIN+"/logo512x512.png"} />
                <link rel="shortlink" href={process.env.DOMAIN+asPath} />
            </Head>
            <aside>
                {widget_categorias}
            </aside>

            <section>
                <Card_Item posts_data={posts_data}/>

                <div id="more" >
                    {
                        query.limite < posts_data.total_posts?(
                            <button onClick={more} >Mas items</button>
                        ):null
                    }
                </div>
            </section>
        </main>
    )
}
export const getServerSideProps:GetServerSideProps = async ({query}:GetServerSidePropsContext)=>{
const {cat,limite}:any = query
    parseInt(limite)
    const categorias =  await get_categorias({url_post:'accesorios'})
    const pagina:TGetPost =  await get_post({tipo:'pagina',url:'accesorios'})
    const posts_data:TGetPosts =  await get_posts({tipo:'accesorio',categoria:cat,limite:limite?limite:12})

    return {props:{
            categorias,
            pagina,
            posts_data,
            query
        }}
    
}
export default Accesorios