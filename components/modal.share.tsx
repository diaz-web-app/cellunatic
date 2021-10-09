import { useRouter } from "next/dist/client/router"
import { useState } from "react"
import { TPost } from "../interfaces/interfaces"
import { Icon_Share_Social_Outlinet } from "./icons"

type Props={
    post?:TPost
    text?:string
}

const ModalShare = ({post,text}:Props) => {
    const [modal,setModal] = useState<boolean>(false)
    const {asPath} = useRouter()
    const share_handler = async()=>{
        const shareData = {
            title: post?post?.titulo:'Cellunatic',
            text: post?post?.meta_description:'',
            url: process.env.DOMAIN+asPath
          }
         
            try {
              await navigator.share(shareData)
              return
            } catch(err) {
                setModal(true)
            }
         
        
    }
    return (
        <>
        <button onClick={share_handler}><Icon_Share_Social_Outlinet color="var(--secondary-color)" /> {text?<b>{text}</b>:null}</button>
        <div onClick={()=>setModal(false)} style={{ position: 'fixed', width: '100vw', height: '100vh',top:0,left:0,right:0,bottom:0, zIndex: 1000, background:'var(--primary-color)' }} ></div>
            <div style={{ padding:'10px 5px', borderRadius:5, position: 'fixed',top:'calc(50% - 100px)',left:'calc(50% - 150px)',height:'200px',background:'var(--primary-color)', border:'1px solid var(--font-color)',width: '300px', overflowX: 'hidden', overflowY: 'auto', zIndex: 1001 }}>
                <h4 style={{margin:'5px 0',textAlign:'center',width:'100%'}}>Copia y comparte la url:</h4>

                
                    <p>{process.env.DOMAIN+asPath}</p>

                    <button style={{margin:'20px auto'}} onClick={()=>setModal(false)} >Cerrar</button>
            </div>

            <style jsx>
                {
                    `
                    div{
                        display:${modal?'block':'none'};
                    }
                    button,p{
                        transition:all .3s linear;
                    }
                    `
                }
            </style>
        </>
    )
}
export default ModalShare