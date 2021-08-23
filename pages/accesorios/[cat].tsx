import Head from "next/head";
import {GetServerSideProps,GetServerSidePropsContext} from 'next'
import { get_categorias } from "../../api/get_categorias_controllers";
import { get_post, get_posts } from "../../api/get_posts_controllers";
import { TGetCategoria, TGetPost, TGetPosts } from "../../interfaces/interfaces";
import { useRouter } from "next/dist/client/router";
import Card_Item from "../../components/Card_item";
import AsideWidgetCats from "../../components/aside_widget_cats";

type Props={
    categorias:TGetCategoria
    pagina:TGetPost
    posts_data:TGetPosts
}
const Accesorios = ({categorias,pagina,posts_data}:Props) => {
    const {route} = useRouter()
    return (
        <main>
            <Head>
                <title>{pagina.post?pagina.post.titulo:''} - Cellunatic</title>
                <meta name="description" content={pagina.post?pagina.post.contenido:''} />
                <meta name="keywords" content={""}/>
                <link rel="canonical" href={process.env.DOMAIN+route} />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={pagina.post?pagina.post.titulo:'cellunatic'}/>
                <meta property="og:description" content={pagina.post?pagina.post.contenido:''} />
                <meta property="og:url" content={process.env.DOMAIN+route} />
                <meta property="og:site_name" content={process.env.DOMAIN} />
                <meta property="og:image" content={process.env.DOMAIN+"/logo512x512.png"} />
                <meta property="og:image:secure_url" content={process.env.DOMAIN+"/logo512x512.png"} />
                <meta property="og:image:width" content="32" />
                <meta property="og:image:height" content="32" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content={pagina.post?pagina.post.contenido:''} />
                <meta name="twitter:title" content={pagina.post?pagina.post.titulo+' - Cellunatic':'Cellunatic'} />
                <meta name="twitter:image" content={process.env.DOMAIN+"/logo512x512.png"} />
                <link rel="shortlink" href={process.env.DOMAIN+route} />
            </Head>
            <aside>
                <AsideWidgetCats categorias={categorias} pagina={pagina} />
            </aside>

            <section>
                <Card_Item posts_data={posts_data}/>
            </section>
        </main>
    )
}
export const getServerSideProps:GetServerSideProps = async ({params}:GetServerSidePropsContext)=>{
const {cat}:any = params
   const categorias =  await get_categorias({tipo_post:'accesorios'})
   const pagina:TGetPost =  await get_post({tipo:'pagina',url:'accesorios'})
   const meta = pagina.metas.find(meta=>meta.id_post==pagina.post?._id && meta.clave=='tipo de post')
   if(cat){
       const posts_data:TGetPosts =  await get_posts({tipo:meta?meta.contenido:'pagina',categoria:cat})

       return {props:{
                categorias,
                pagina,
                posts_data
            }}
   }
   return {props:{
        categorias,
        pagina,
        posts_data:[]
    }}
    
}
export default Accesorios