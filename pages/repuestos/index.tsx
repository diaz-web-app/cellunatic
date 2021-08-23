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

const Repuestos = ({categorias,pagina}:Props) => {
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
                    <h1>Los mejores repuestos para Celulares </h1>
                    <p>
                        La venta Smartphones sigue creciendo tanto en nuestro país
                        como en todo el planeta. 
                        <br/>
                        Los problemas de los teléfonos móviles a veces pueden parecer los más invasivos y las
                        soluciones no siempre son fáciles de encontrar. Dependemos de nuestros teléfonos
                        móviles cada vez más cada día, así que cuando nos encontramos con dificultades con
                        ellos y tenemos que llevarlos a algún lugar para arreglarlos, puede ser un verdadero
                        dolor. Afortunadamente, tenemos para ti una variedad de repuestos y servicio tecnico profesional para cada caso.
                    </p>
                    <article className="copy_article">
                        <h2>La batería no funciona</h2>
                        <p>
                            ¿Cómo puedes usar tu teléfono si no se mantiene vivo el tiempo suficiente?
                            Los
                            <b> problemas de batería son una de las fallas más comunes en los teléfonos</b>,
                            generalmente causados por el abuso del usuario.
                        </p>
                    </article>

                    <article className="copy_article">
                        <h2>Pantalla está rota</h2>
                        <p>
                            Como las pantallas de nuestros teléfonos son de vidrio, no es sorprendente que a veces un fuerte impacto con el suelo pueda hacer que se rompan. Las grietas pueden
                            causar problemas en la respuesta de la pantalla táctil o dejar entrar la humedad, por lo que es importante reparar el teléfono después de que la pantalla se
                            dañe.
                        </p>
                    </article>

                    <article className="copy_article">
                        <h2>Teléfono no carga (El puerto de carga dejó de funcionar)</h2>
                        <p>
                            Al igual que con las baterías de los teléfonos, con el tiempo los cables de carga y el
                            puerto se desgastarán. En el teléfono, las pequeñas lengüetas metálicas alrededor de
                            la abertura donde enchufas el cargador pueden dañarse o ensuciarse, lo que puede
                            complicar o ralentizar su capacidad de carga.
                        </p>
                    </article>
            </section>
        </main>
    )
}
export const getStaticProps:GetStaticProps = async (_:GetStaticPropsContext)=>{
   const categorias =  await get_categorias({tipo_post:'repuestos'})
   const pagina =  await get_post({tipo:'pagina',url:'repuestos'})
   
   return {props:{
            categorias,
            pagina
        },revalidate:1}
}
export default Repuestos