type Props={
    src:string
    title:string
    text:string
}

const TSG_article = ({src,text,title}:Props)=>{
    
    return (
        <article>
            <h2>{title}</h2>
            <img loading="lazy" src={src} alt={title} />
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