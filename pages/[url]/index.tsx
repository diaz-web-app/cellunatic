import Head from "next/head";
import {GetServerSideProps,GetServerSidePropsContext} from 'next'
import { get_post, get_posts } from "../../api/get_posts_controllers";
import { TGetPost, TGetPosts, TMeta } from "../../interfaces/interfaces";
import { useRouter } from "next/dist/client/router";
import { useMemo, useState } from "react";
import LastPosts from "../../components/Last_Posts";
import ModalCompra from "../../components/modal.compra";
import ModalCovers from "../../components/modal.covers";

type Props={
    pagina:TGetPost
    accesorios:TGetPosts
}
const The_post = ({pagina,accesorios}:Props) => {
    const {route} = useRouter()
    const [modalCovers,setModalCovers] = useState<boolean>(false)

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
                <h1>{pagina.post?.titulo}</h1>
                <article className="container_detalles_item" >
                    <div className="imgs">
                        <img onClick={()=>setModalCovers(true)} src={pagina.post && pagina.post.cover?process.env.API+pagina.post.cover:'/logo512x512.png'} alt=""/>
                    </div>
                    <div className="detalles">                        
                        <div className="caracteristicas">
                            {
                                pagina.metas.map((meta:TMeta,i:number)=>{
                                    return(
                                        <div className="post_metas" key={i} >
                                            <b>{meta.clave}: </b><label>{meta.contenido}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <p>{pagina.post?.contenido}</p>
                        <div className="actions">
                            <ModalCompra/>
                        </div>
                    </div>
                    <ModalCovers modal={modalCovers} setModal={setModalCovers} src={pagina.post && pagina.post.cover?process.env.API+pagina.post.cover:'/logo512x512.png'} />
                </article>

                {items}
            </section>
            <style jsx>
                {
                    `
                        h1{
                            margin:20px 0;
                        }
                        .container_detalles_item{
                            display:grid;
                            grid-template-columns:1fr;
                            gap:10px;
                        }
                        .imgs,.detalles{
                            background:var(--primary-color);
                            height:max-content;
                            border-radius:10px;
                        }
                        .imgs{
                            text-align:center;
                        }
                        .imgs img{
                            width:100%;
                            height:100%;
                            max-height:400px;
                            object-fit:contain;
                        }
                        .detalles{
                            padding:10px;
                        }
                        .post_metas{
                            margin-bottom:10px;
                        }
                        .post_metas label, .post_metas b{
                            border-bottom:2px solid var(--secondary-color);
                        }
                        .post_metas b{
                            text-transform:uppercase;
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