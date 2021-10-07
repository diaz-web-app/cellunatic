import Link from "next/link"
import { TGetPosts } from "../interfaces/interfaces"
import Image from 'next/image'

//blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNksPh/GQADgwIMleRwwAAAAABJRU5ErkJggg=="
type Params={
    posts_data:TGetPosts
}
const Card_Item = ({posts_data}:Params) => {
    return (
        <>
            <article className="container_cards">
                {
                    posts_data.total_posts > 0?(
                        posts_data.posts.map((post)=>{
                            const post_meta:any = {}
                            for(let meta of posts_data.metas){
                                if(meta.id_post == post._id){
                                    post_meta[meta.clave] = meta.valor
                                }
                            }
                            
                            return(
                                <Link href={"/"+post.url} key={post._id}>
                                <a href={"/"+post.url} className="post_card">
                                    <div className="post_card_container_cover">
                                        <Image width={100} height={100} blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNksPh/GQADgwIMleRwwAAAAABJRU5ErkJggg==" placeholder="blur" layout="responsive" src={post.cover?post.cover:'/favicon.ico'} alt={post.titulo}/>
                                    </div>
                                    <div className="post_card_data">
                                        <h4>{post.titulo}</h4>                                        
                                        <div className="post_metas">
                                            <b>precio: </b> <small>$ {post_meta['precio']}</small>
                                        </div>                              
                                    </div>
                                </a>
                                </Link>
                            )
                        })
                    ):'no hay datos'
                }                
            </article>
            <style jsx>
                {
                    `
                    .container_cards{
                        display:grid;
                        grid-template-columns:repeat(2,1fr);
                        gap:1px;
                    }
                    .container_cards .post_card{
                        width:100%;
                        height:100%;
                        overflow:hidden;
                        background:var(--primary-color);
                    }
                    .container_cards .post_card .post_card_container_cover{
                        width:100%;
                        height:200px;
                        text-align:center;
                        overflow:hidden;
                    }
                    .container_cards .post_card .post_card_container_cover img{
                        width:100%;
                        height:100%;
                        object-fit:contain;
                    }
                    .container_cards .post_card .post_card_data{
                        padding:7px;
                    }
                    @media(min-width:640px){
                        .container_cards{
                            grid-template-columns:repeat(3,1fr)
                        }
                    }
                    `
                }
            </style>
        </>
    )
}

export default Card_Item