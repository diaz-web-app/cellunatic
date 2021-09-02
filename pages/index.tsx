import Head from "next/head";
import Intro from "../components/Intro";
import { get_posts } from "../api/get_posts_controllers";
import { TGetPosts } from "../interfaces/interfaces";
import { GetStaticProps, GetStaticPropsContext } from "next";
import LastPosts from "../components/Last_Posts";

type Props={
    accesorios:TGetPosts
}
const Index = ({accesorios}:Props) => {
    return (
        <main>
            <Head>
                <title>Cellunatic</title>
                <meta name="description" content="Cellunatic, tienda de accesorios, repuestos y servicio técnico profesional en dispositivos móviles, computadores y laptops" />
                <meta name="keywords" content="cellunatic, servicio tecnico a domicilio carabobo, servicio tecnico domicilio valencia, repuestos para telefonos, accesorios para telefonos"/>
                <link rel="canonical" href={process.env.DOMAIN} />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Cellunatic" />
                <meta property="og:description" content="Cellunatic, tienda de accesorios, repuestos y servicio técnico profesional en dispositivos móviles, computadores y laptops" />
                <meta property="og:url" content={process.env.DOMAIN} />
                <meta property="og:site_name" content="cellunatic.store" />
                <meta property="og:image" content={process.env.DOMAIN+"/logo512x512.png"} />
                <meta property="og:image:secure_url" content={process.env.DOMAIN+"/logo512x512.png"} />
                <meta property="og:image:width" content="32" />
                <meta property="og:image:height" content="32" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content="Cellunatic, tienda de accesorios, repuestos y servicio técnico profesional en dispositivos móviles, computadores y laptops" />
                <meta name="twitter:title" content="Cellunatic" />
                <meta name="twitter:image" content={process.env.DOMAIN+"/logo512x512.png"} />
                <link rel="shortlink" href={process.env.DOMAIN} />

            </Head>
            <section className="full_width" style={{background:'transparent'}} >
                
                    <Intro />

                    <LastPosts request_posts={accesorios} 
                    title='Los accesorios mas populares en Cellunatic' 
                    text='Es casi imprescindible contar con alguno de estos
                    complementos para poder disfrutar aún más de nuestro
                    móvil e incluso potenciar el uso del mismo con este tipo de
                    artículos. Cellunatic hace un repaso de los accesorios
                    más comprados, populares e innovadores del momento.'
                    />
                    
            </section>
        </main>
    )
}
export const getStaticProps:GetStaticProps =async(_:GetStaticPropsContext)=>{
    const accesorios:TGetPosts = await get_posts({tipo:'accesorio',limite:6})
    return{
        props:{accesorios},
        revalidate:1
    }
}
export default Index