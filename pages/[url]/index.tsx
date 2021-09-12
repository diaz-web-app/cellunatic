import Head from "next/head";
import {GetServerSideProps,GetServerSidePropsContext} from 'next'
import { get_post, get_search } from "../../api/get_posts_controllers";
import { TGetPost, TGetPosts, TMeta } from "../../interfaces/interfaces";
import { useRouter } from "next/dist/client/router";
import { useMemo, useState } from "react";
import LastPosts from "../../components/Last_Posts";
import ModalCompra from "../../components/modal.compra";
import ModalCovers from "../../components/modal.covers";

type Props={
    the_post:TGetPost
    similares:TGetPosts
}
const The_post = ({the_post,similares}:Props) => {
    const {asPath} = useRouter()
    const [modalCovers,setModalCovers] = useState<boolean>(false)
    const [thumb,setThumb] = useState<string>(the_post.post && the_post.post.cover?process.env.API+the_post.post.cover:'/logo512x512.png')

    const items = useMemo(()=>{
        if(similares && similares.total_posts > 0){

            return <LastPosts request_posts={similares} 
            title='Articulos similares' 
            text=''
            />
        }
    },[similares])

    return (
        <main>
            <Head>
                <title>{the_post.post?the_post.post.titulo:''} - Cellunatic</title>
                <meta name="description" content={the_post.post?the_post.post.contenido:''} />
                <meta name="keywords" content={the_post.post?the_post.post.keywords:''}/>
                <link rel="canonical" href={process.env.DOMAIN+asPath} />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={the_post.post?the_post.post.titulo:'cellunatic'}/>
                <meta property="og:description" content={the_post.post?the_post.post.contenido:''} />
                <meta property="og:url" content={process.env.DOMAIN+asPath} />
                <meta property="og:site_name" content={process.env.DOMAIN} />
                <meta property="og:image" content={the_post.post && the_post.post.cover?process.env.API+the_post.post.cover:process.env.DOMAIN+"/logo512x512.png"} />
                <meta property="og:image:secure_url" content={the_post.post && the_post.post.cover?process.env.API+the_post.post.cover:process.env.DOMAIN+"/logo512x512.png"} />
                <meta property="og:image:width" content="32" />
                <meta property="og:image:height" content="32" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content={the_post.post?the_post.post.contenido:''} />
                <meta name="twitter:title" content={the_post.post?the_post.post.titulo+' - Cellunatic':'Cellunatic'} />
                <meta name="twitter:image" content={the_post.post && the_post.post.cover?process.env.API+the_post.post.cover:process.env.DOMAIN+"/logo512x512.png"} />
                <link rel="shortlink" href={process.env.DOMAIN+asPath} />
            </Head>

            <section className="full_width">
                <article className="container_detalles_item" >
                <div className="thumbs" >
                        {
                        the_post.covers.length > 0?
                            the_post.covers.map(cover=>{
                                return(
                                    <div key={cover._id} onClick={()=>setThumb(process.env.API+cover.url)} >
                                        <img src={process.env.API+cover.url} alt={process.env.API+cover.url} />
                                    </div>
                                )
                            })
                        :null
                    }
                    </div>
                    <div className="imgs">
                        
                        <img loading="lazy" onClick={()=>setModalCovers(true)} src={thumb} alt=""/>
                    </div>
                    <div className="detalles">
                        <h1>{the_post.post?.titulo}</h1>                        
                        <div className="caracteristicas">
                            {
                                the_post.metas.map((meta:TMeta,i:number)=>{
                                    return(
                                        <div className="post_metas" key={i} >
                                            <b>{meta.clave}: </b><label>{meta.contenido}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <p><b>Retiro en tienda:</b> CC gran bazar centro, Valencia Edo. Carabobo, calle comercio entre montes de oca y Carabobo, Planta alta local ML-116</p>
                        <div className="actions">
                            <ModalCompra/>
                        </div>
                    </div>
                    <ModalCovers modal={modalCovers} setModal={setModalCovers} src={thumb} />
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
                            position:relative;
                        }
                        .container_detalles_item h1{
                            margin:0 auto;
                        }
                        .imgs,.detalles{
                            height:max-content;
                            border-radius:var(--radius);
                        }
                        .imgs{
                            text-align:center;
                            order:1;
                        }
                        .thumbs{
                            width:100%;
                            max-height:100px;
                            overflow:auto;
                            display:flex;
                            flex-flow:row nowrap;
                            order:2;
                        }
                        .thumbs div{
                            width:90px;
                            min-width:90px;
                            height:90px;
                            box-shadow:var(--shadow);
                            margin: 0 10px;
                        }
                        .imgs img,.thumbs img{
                            width:100%;
                            height:100%;
                            max-height:400px;
                            object-fit:contain;
                        }
                        .detalles{
                            order:3;
                            padding:10px;
                            background:var(--primary-color);
                            box-shadow:var(--shadow);
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
                        .actions{
                            width:100%;
                        }
                        @media(min-width:640px){
                            .container_detalles_item{
                                grid-template-columns:100px 1fr 300px;
                            }
                            .thumbs{
                                grid-template-columns:100px;
                                grid-auto-rows:100px;
                                gap:20px;
                            } 
                        }
                        @media(min-width:640px){
                            .container_detalles_item{
                                grid-template-columns:1fr 350px;
                            }
                            .thumbs{
                                order:1;
                                grid-column:1 / span 2;
                            } 
                            .imgs{
                                order:2;
                            }
                        }
                        @media(min-width:960px){
                            .container_detalles_item{
                                grid-template-columns:120px 1fr 350px;
                            } 
                            .thumbs{
                                grid-column:unset;
                                flex-flow:column;
                                height:100%;
                                max-height:400px;
                            }
                            .thumbs div{
                                margin:5px auto;
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
    const the_post =  await get_post({url})
    const similares:TGetPosts = await get_search({text:url.replace('-',' '),limite:6})
    return {props:{
            the_post,
            similares
        }}
}
export default The_post