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

                <style>
                    {
                        `
                        /* Intro de la web*/
                    .intro{
                        width: 100%;
                        height: calc(100vmax - var(--height-header));
                        max-height: 512px;
                        display:flex;
                        flex-flow: row wrap;
                        justify-content: center;
                        align-items: center;
                        align-content: center;
                    }
                    .intro > img{
                        width:280px;
                        height:280px;
                    }
                    
                    .intro > div p, .intro > div > h1{
                        text-align: center;
                        margin: 5px auto;
                    }
                    .intro > div > h1{
                        font-size: 2.5em;
                    }
                    
                    .intro > div > p{
                        font-size: 1.5em;
                    }
                    nav.botonera{
                        margin: 10px auto;
                    }
                    nav.botonera > a{
                        background-color: var(--primary-color);
                        margin:10px;
                        box-shadow:var(--shadow);
                        padding:2px 5px;
                    }
                    /*//////*/
                    @media(min-width:480px){
                        /*Intro*/
                        .intro > img{
                            width:40vmin;
                            height:40vmin;
                        }
                        .intro > div:first-child{
                            width:50%;
                        }
                        /*/////////////*/
                    }
                    @media(min-width:512px){
                        /*intro*/
                        .intro > img{
                            width:250px;
                            height: 250px;
                        }
                        /*////////*/
                    }
                    @media(min-width:720px){
                        /*Intro*/
                        .intro > div > h1{
                            font-size: 3.5em;
                        }
                    }
                    `
                    }
                </style>
        </article>
}

export default Intro