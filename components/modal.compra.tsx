import { useState } from "react"
import { Icon_Cart_Outlinet } from "./icons"


const ModalCompra = () => {
    const [modal,setModal] = useState<boolean>(false)

    return (
        <>
        <button className="buy_btn" onClick={()=>setModal(true)}> <Icon_Cart_Outlinet /> Comprar</button>
        <div onClick={()=>setModal(false)} style={{ position: 'fixed', width: '100vw', height: '100vh',top:0,left:0,right:0,bottom:0, zIndex: 1000, background:'var(--primary-color)' }} ></div>
            <div style={{ padding:'10px 5px', borderRadius:5, position: 'fixed',top:'5%',bottom:'5%',left:'calc(50% - 150px)',background:'var(--primary-color)', border:'1px solid var(--font-color)',width: '300px', overflowX: 'hidden', overflowY: 'auto', zIndex: 1001 }}>
                <h4 style={{margin:'5px 0',textAlign:'center',width:'100%'}}>Ofertar a travez de:</h4>

                
                    <a href={`tel:+584128439575`}>
                        <b>Telefono</b>
                        <button>+584128439575</button>
                    </a>                   

               
                    <a href={`tel:+584128439575`}>
                        <b>Whatsapp</b>
                        <button>+584128439575</button>
                    </a>

                    <button style={{margin:'20px auto'}} onClick={()=>setModal(false)} >Cerrar</button>
            </div>

            <style jsx>
                {
                    `
                    div{
                        display:${modal?'block':'none'};
                    }
                    .buy_btn{
                        width:100%;
                        margin:5px auto;
                        background:lightgreen;
                        color:black;
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
                    a:hover > b{
                        color:var(--secondary-color);
                    }
                    `
                }
            </style>
        </>
    )
}
export default ModalCompra