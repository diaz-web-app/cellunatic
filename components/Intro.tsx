import Link from 'next/link'


const Intro = ()=>{
    
    return <article className="intro" >

                <img loading="lazy" src="/logo192x192.png" alt="Cellunatic logo" />

                <div>
                    <h1 className="coursive" >Cellunatic 2017 CG C.A</h1>
                    <p >Gente que Responde!</p>
                </div>

                <nav className="botonera" style={{ width: '100%', textAlign: 'center' }} >
                    
                    <Link href="/accesorios" ><a href="/accesorios" title="accesorios">Accesorios</a></Link>                           
                    <Link href="/servicio-tecnico" ><a href="/servicio-tecnico" title="servicio tecnico">Servicio Técnico</a></Link>                          
                       
                </nav>
        </article>
}

export default Intro