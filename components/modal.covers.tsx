import Image from 'next/image'
type Props ={
    src:string
    modal:boolean
    setModal:(params:boolean)=>void
}
const ModalCovers = ({src,modal,setModal}:Props) => {

    return (
        <>
        <div onClick={()=>setModal(false)} style={{ position: 'fixed', width: '100vw', height: '100vh',top:0,left:0,right:0,bottom:0, zIndex: 1000, background:'var(--primary-color)' }} ></div>
            <div className="img_box" style={{ padding:'10px 5px', borderRadius:5, position: 'fixed',background:'var(--primary-color)', border:'1px solid var(--font-color)', zIndex: 1001 }}>
                <Image layout="fill" src={src} alt="cover" />
                <button onClick={()=>setModal(false)}>Cerrar</button>
            </div>

            <style jsx>
                {
                    `
                    div{
                        display:${modal?'grid':'none'};
                        place-items:center;
                        place-content:center;
                    }
                    .img_box{
                        height: calc(100vh - 10%);
                        top:5%;bottom:5%;left:5%;right:5%;
                        overflow:hidden;
                        position:relative;
                    }
                    .img_box button{
                        position:absolute;
                        right:10px;top:10px;
                    }
                    img{
                        width:100%;
                        height:inherit;
                        object-fit:contain;
                    }
                    @media(min-width:960px){
                        .img_box{
                            height: calc(100vh - 20%);
                            top:10%;bottom:10%;left:10%;right:10%;
                        }
                    }                    
                    `
                }
            </style>
        </>
    )
}
export default ModalCovers