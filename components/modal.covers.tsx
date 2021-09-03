
type Props ={
    src:string
    modal:boolean
    setModal:(params:boolean)=>void
}
const ModalCovers = ({src,modal,setModal}:Props) => {

    return (
        <>
        <div onClick={()=>setModal(false)} style={{ position: 'fixed', width: '100vw', height: '100vh',top:0,left:0,right:0,bottom:0, zIndex: 1000, background:'var(--primary-color)' }} ></div>
            <div style={{ padding:'10px 5px', borderRadius:5, position: 'fixed',top:'10%',bottom:'10%',left:'10%',right:'10%',background:'var(--primary-color)', border:'1px solid var(--font-color)', zIndex: 1001 }}>
                <img src={src} alt="cover" />
            </div>

            <style jsx>
                {
                    `
                    div{
                        display:${modal?'grid':'none'};
                        place-items:center;
                        place-content:center;
                    }
                    img{
                        width:100%;
                        height:inherit;
                        object-fit:contain;
                    }
                    
                    `
                }
            </style>
        </>
    )
}
export default ModalCovers