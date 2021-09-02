import Head from "next/head";
import {GetServerSideProps,GetServerSidePropsContext} from 'next'
import { get_post, get_posts } from "../../api/get_posts_controllers";
import { TGetPost, TGetPosts, TMeta } from "../../interfaces/interfaces";
import { useRouter } from "next/dist/client/router";
import { useMemo } from "react";
import LastPosts from "../../components/Last_Posts";

type Props={
    pagina:TGetPost
    accesorios:TGetPosts
}
const The_post = ({pagina,accesorios}:Props) => {
    const {route} = useRouter()
    const items = useMemo(()=>{
        if(accesorios && accesorios.total_posts > 0){

            return <LastPosts request_posts={accesorios} 
            title='Articulos similares' 
            text=''
            />
        }
    },[accesorios])
    return (
        <main>
            <Head>
                <title>{pagina.post?pagina.post.titulo:''} - Cellunatic</title>
                <meta name="description" content={pagina.post?pagina.post.contenido:''} />
                <meta name="keywords" content={pagina.post?pagina.post.keywords:''}/>
                <link rel="canonical" href={process.env.DOMAIN+route} />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={pagina.post?pagina.post.titulo:'cellunatic'}/>
                <meta property="og:description" content={pagina.post?pagina.post.contenido:''} />
                <meta property="og:url" content={process.env.DOMAIN+route} />
                <meta property="og:site_name" content={process.env.DOMAIN} />
                <meta property="og:image" content={pagina.post && pagina.post.cover?pagina.post.cover:'/logo512x512.png'} />
                <meta property="og:image:secure_url" content={pagina.post && pagina.post.cover?pagina.post.cover:'/logo512x512.png'} />
                <meta property="og:image:width" content="32" />
                <meta property="og:image:height" content="32" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content={pagina.post?pagina.post.contenido:''} />
                <meta name="twitter:title" content={pagina.post?pagina.post.titulo+' - Cellunatic':'Cellunatic'} />
                <meta name="twitter:image" content={pagina.post && pagina.post.cover?pagina.post.cover:'/logo512x512.png'} />
                <link rel="shortlink" href={process.env.DOMAIN+route} />
            </Head>

            <section className="full_width">
                <article className="container_detalles_item" >
                    <div className="imgs">
                        <img src={pagina.post && pagina.post.cover?process.env.API+pagina.post.cover:'/logo512x512.png'} alt=""/>
                    </div>
                    <div className="detalles">
                        <h1>{pagina.post?.titulo}</h1>
                        <div className="caracteristicas">
                            {
                                pagina.metas.map((meta:TMeta,i:number)=>{
                                    return(
                                        <div className="post_metas" key={i} >
                                            <b>{meta.clave}: </b><small>{meta.contenido}</small>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </article>

                {items}
            </section>
            <style jsx>
                {
                    `
                        .container_detalles_item{
                            display:grid;
                            grid-template-columns:1fr;
                            gap:10px;
                        }
                        .container_detalles_item .imgs, .container_detalles_item .detalles{
                            background:var(--primary-color);
                            height:max-content;
                            border-radius:10px;
                        }
                        .container_detalles_item .imgs{
                            text-align:center;
                            height:unset;
                            max-height:200px;
                        }
                        .container_detalles_item .imgs img{
                            width:100%;
                            height:100%;
                            object-fit:contain;
                        }
                        .container_detalles_item .detalles{
                            padding:10px;
                        }
                        @media(min-width:760px){
                            .container_detalles_item{
                                grid-template-columns:1fr 1fr;
                            } 
                        }
                    `
                }
            </style>
        </main>
    )
}
export const getServerSideProps:GetServerSideProps = async ({params}:GetServerSidePropsContext)=>{
    const {url}:any = params
    const pagina =  await get_post({url})
    const accesorios:TGetPosts = await get_posts({tipo:pagina.post.tipo,limite:6})
    return {props:{
            pagina,
            accesorios
        }}
}
export default The_post