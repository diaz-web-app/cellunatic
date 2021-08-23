import Head from "next/head";
import Intro from "../components/Intro";
import { useContext, useEffect, useMemo } from "react";
import GlobalAppContext from "../context/app/app_state";
import { get_posts } from "../api/get_posts_controllers";
import { TGetPosts } from "../interfaces/interfaces";
import Card_Item from "../components/Card_item";
import { GetStaticProps, GetStaticPropsContext } from "next";
type Props={
    accesorios:TGetPosts
}
const Index = ({accesorios}:Props) => {
    const {app,app_dispatch} = useContext(GlobalAppContext)
    const items = useMemo(()=>{
        if(app.accesorios_state && app.accesorios_state.total_posts > 0){

            return <Card_Item posts_data={app.accesorios_state} />
        }
    },[app.accesorios_state])

    const init = async ()=>{
        
        app_dispatch({
            type:'get_accesorios',
            payload:accesorios
        })
    }
    useEffect(()=>{
        init()
    },[])
    return (
        <main>
            <Head>
                <title>Cellunatic</title>
                <meta name="description" content="Cellunatic, tienda de accesorios, repuestos y servicio técnico profesional en dispositivos móviles, computadores y laptops" />
                <meta name="keywords" content="cellunatic, servicio tecnico a domicilio carabobo, servicio tecnico domicilio valencia, repuestos para telefonos, accesorios para telefonos"/>
                <link rel="canonical" href="https://online-store-cellunatic.vercel.app/" />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Cellunatic" />
                <meta property="og:description" content="Cellunatic, tienda de accesorios, repuestos y servicio técnico profesional en dispositivos móviles, computadores y laptops" />
                <meta property="og:url" content="https://online-store-cellunatic.vercel.app/" />
                <meta property="og:site_name" content="cellunatic.store" />
                <meta property="og:image" content="https://online-store-cellunatic.vercel.app/logo512x512.png" />
                <meta property="og:image:secure_url" content="https://online-store-cellunatic.vercel.app/logo512x512.png" />
                <meta property="og:image:width" content="32" />
                <meta property="og:image:height" content="32" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content="Cellunatic, tienda de accesorios, repuestos y servicio técnico profesional en dispositivos móviles, computadores y laptops" />
                <meta name="twitter:title" content="Cellunatic" />
                <meta name="twitter:image" content="https://online-store-cellunatic.vercel.app/logo512x512.png" />
                <link rel="shortlink" href="https://online-store-cellunatic.vercel.app/" />

            </Head>
            <section className="full_width" style={{background:'transparent'}} >
                
                    <Intro paginas={app.paginas_state} />

                    <article className="copy_article" >
                        <h2>Los accesorios mas populares en Cellunatic</h2>
                        <p>
                            Es casi imprescindible contar con alguno de estos
                            complementos para poder disfrutar aún más de nuestro
                            móvil e incluso potenciar el uso del mismo con este tipo de
                            artículos. Cellunatic hace un repaso de los accesorios
                            más comprados, populares e innovadores del momento.
                        </p>

                        <ul className="container_items">
                            {items}
                        </ul>

                        <footer>
                            
                        </footer>
                    </article>
                    
                    {/* <article className="copy_article" >
                        <h2>Los repuestos mas vendidos en Cellunatic</h2>
                        <p>
                            Estos son algunos de los repuestos más adquiridos por nuestros visitantes, podras encontrar forros, vidrios templados, audifonos y mucho más.
                        </p>

                        <ul className="container_items">
                            repuestos 
                        </ul>

                        <footer>
                            
                        </footer>
                    </article> */}
                   
                    
            </section>
        </main>
    )
}
export const getStaticProps:GetStaticProps =async(_:GetStaticPropsContext)=>{
    const accesorios:TGetPosts = await get_posts({tipo:'accesorios',limite:6})
    return{
        props:{accesorios},
        revalidate:1
    }
}
export default Index