import Link from "next/link"
import { TGetPosts } from "../interfaces/interfaces"
import Image from 'next/image'


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
                                    <Image width={100} height={100} blurDataURL='/loading.svg' placeholder="blur" layout="responsive" src={post.cover?post.cover:'/favicon.ico'} alt={post.titulo} quality={40} />
                                    
                                    <div className="post_card_data">
                                        <h4>{post.titulo}</h4>                              
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
                        grid-auto-rows:200px;
                        gap:1px;
                    }
                    .post_card{
                        width:100%;
                        height:100%;
                        background:var(--primary-color);
                        position:relative;
                        overflow:hidden;
                    }
                    .post_card_container_cover{
                        position:relative;
                    }
                    .post_card_data{
                        padding:2px 7px;
                        position:absolute;
                        width:100%;
                        z-index:2;
                        background:var(--alfa);
                        bottom:0;
                        height:60px;
                        overflow:hidden;
                    }
                    .post_card_data h4{
                        text-shadow:1px 1px black;
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