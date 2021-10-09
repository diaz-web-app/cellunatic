import { TGetPosts } from "../interfaces/interfaces"
import Card_Item from "./Card_item"

type Props={
    request_posts:TGetPosts
    title:string
    text:string
}
const LastPosts = ({request_posts,text,title}:Props)=>{
    
    return (
        <article>
            <h2>{title}</h2>
            <p>
                {text}
            </p>

            <Card_Item posts_data={request_posts} />

            <style jsx>
                {
                    `
                    p{
                        padding:10px;
                        margin-bottom:20px;
                    }
                    h2{
                        text-align:center;
                    }
                    `
                }
            </style>
        </article>
    )
}

export default LastPosts