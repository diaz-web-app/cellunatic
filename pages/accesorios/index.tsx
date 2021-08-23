import Head from "next/head";
import {GetStaticProps,GetStaticPropsContext} from 'next'
import { get_categorias } from "../../api/get_categorias_controllers";
import { get_post } from "../../api/get_posts_controllers";
import { TGetCategoria, TGetPost } from "../../interfaces/interfaces";
import { useRouter } from "next/dist/client/router";
import AsideWidgetCats from "../../components/aside_widget_cats";

type Props={
    categorias:TGetCategoria
    pagina:TGetPost
}

const Accesorios = ({categorias,pagina}:Props) => {
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
                <section>
                    <h1>Los mejores accesorios para Celulares </h1>
                    <p>
                        La venta Smartphones sigue creciendo tanto en nuestro país
                        como en todo el planeta. 
                        <br/>
                        Es casi imprescindible contar con alguno de estos
                        complementos para poder disfrutar aún más de nuestro
                        móvil e incluso potenciar el uso del mismo con este tipo de
                        artículos. Cellunatic hace un repaso de los accesorios
                        más comprados, populares e innovadores del momento.
                    </p>
                    <article className="copy_article">
                        <h2>Cable USB y Cargador</h2>
                        <p>
                            son productos muy
                            importantes. Existen cargadores que se enchufan mediante el
                            encendedor del auto o vía USB al estéreo para salir de algún
                            apuro y darle una carga rápida al dispositivo. Son muy útiles
                            cuando se va a realizar un viaje largo.
                        </p>
                    </article>

                    <article className="copy_article">
                        <h2>Vidrio templado o protectores de pantalla</h2>
                        <p>
                            Estas delgadas láminas cubren y cuidan la pantalla de
                            nuestro teléfono contra los rayones. Existe una nueva
                            tecnología en estos lms llamados Gorilla Glass que es una
                            pequeña capa de vidrio que se coloca sobre la pantalla para
                            protegerla de los daños exteriores que podrían originarse.
                        </p>
                    </article>

                    <article className="copy_article">
                        <h2>Auriculares</h2>
                        <p>
                            Son artículos muy usados. Tienen un alto
                            nivel de ventas.También son muy
                            personales tenemos variedad segun la calidad de sonido y marcas,
                            por lo que es recomendable comprar
                            distintos audífonos y no utilizar los estándar que vienen
                            incluidos cuando comprás un celular.
                        </p>
                    </article>
                </section>
            </section>
        </main>
    )
}
export const getStaticProps:GetStaticProps = async (_:GetStaticPropsContext)=>{
   const categorias =  await get_categorias({tipo_post:'accesorios'})
   const pagina =  await get_post({tipo:'pagina',url:'accesorios'})
   
   return {props:{
            categorias,
            pagina
        },revalidate:1}
}
export default Accesorios