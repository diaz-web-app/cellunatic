import { useState } from "react"
import { TPost } from "../interfaces/interfaces"

type Props={
    post?:TPost
}

const ModalShare = ({post}:Props) => {
    const [modal,setModal] = useState<boolean>(false)
    const share_handler = async()=>{
        const shareData = {
            title: post?.titulo,
            text: post?.contenido,
            url: process.env.DOMAIN+"/"+post?.url
          }
         
            try {
              await navigator.share(shareData)
            } catch(err) {
                setModal(true)
            }
         
        
    }
    return (
        <>
        <button onClick={share_handler}>Compartir</button>
        <div onClick={()=>setModal(false)} style={{ position: 'fixed', width: '100vw', height: '100vh',top:0,left:0,right:0,bottom:0, zIndex: 1000, background:'var(--primary-color)' }} ></div>
            <div style={{ padding:'10px 5px', borderRadius:5, position: 'fixed',top:'5%',bottom:'5%',left:'calc(50% - 150px)',background:'var(--primary-color)', border:'1px solid var(--font-color)',width: '300px', overflowX: 'hidden', overflowY: 'auto', zIndex: 1001 }}>
                <h4 style={{margin:'5px 0',textAlign:'center',width:'100%'}}>Ofertar a travez de:</h4>

                
                    <p>Copia y comparte la url: {process.env.DOMAIN+"/"+post?.url}</p>

                    <button style={{margin:'20px auto'}} onClick={()=>setModal(false)} >Cerrar</button>
            </div>

            <style jsx>
                {
                    `
                    div{
                        display:${modal?'block':'none'};
                    }
                    button{
                        border:unset;
                        border-radius:unset;
                        border-bottom:1px solid var(--secondary-color);
                        overflow:hidden;
                        width:150px;
                    }
                    button,p{
                        transition:all .3s linear;
                    }
                    a{
                        width:100%;
                        display:flex;
                        flex-flow: row wrap;
                        margin:10px 0;
                    }
                    b{
                        width:100px;
                        text-transfom:uppercase;
                        overflow:hidden;
                    }
                    a:hover > button{
                        width:100%;
                        border-color:var(--font-color);
                    }
                    a:hover > b{
                        width:100%;
                        color:var(--secondary-color);
                    }
                    `
                }
            </style>
        </>
    )
}
export default ModalShare