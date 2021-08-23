import Link from 'next/link'
import { TGetPosts, TPost } from '../interfaces/interfaces'

type Params={
    paginas:TGetPosts | null
}

const Intro = ({paginas}:Params)=>{
    
    return <article className="intro" >

                <img loading="lazy" src="/logo192x192.png" alt="Cellunatic logo" />

                <div>
                    <h1 className="coursive" >Cellunatic 2017 CG C.A</h1>
                    <p >Gente que Responde!</p>
                </div>

                <nav className="botonera" style={{ width: '100%', textAlign: 'center' }} >
                    {
                        paginas && paginas.total_posts > 0? (
                            paginas.posts.map((pagina:TPost,i:number)=><Link key={i} href={`/`+pagina.url} ><a>{pagina.titulo}</a></Link>)                            
                        ):<p>Loading...</p>
                    }
                </nav>
        </article>
}

export default Intro