
import Image from 'next/image'

type Props={
    src:string
    title:string
    text:string
}

const TSG_article = ({src,text,title}:Props)=>{
    
    return (
        <article>
            <h2>{title}</h2>
            <Image width={150} height={80} placeholder="blur" blurDataURL="/loading.svg" layout="responsive" src={src} alt={title} />
            <p>
                {text}
            </p>

            <style jsx>
                {
                    `
                    img{
                        margin:20px auto;
                        width:100%;
                        height:250px;
                        object-fit:cover;
                        border-radius:var(--radius);
                    }
                    p{
                        padding:10px;
                    }
                    `
                }
            </style>
        </article>
    )
}

export default TSG_article