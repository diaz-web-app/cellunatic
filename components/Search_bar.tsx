import { useRouter } from 'next/dist/client/router'

const SearchBar = () => {
    const {push} = useRouter()
    const search_handler=(e:any)=>{
        e.preventDefault()
        const {search} = e.target
        if(search.value == '') return
        const path = "/search/"+search.value
        push(path)
    }
    return (<>
            <form onSubmit={search_handler} >
                <input type="search" name="search" placeholder="Buscar articulos" />
            </form>
            <style jsx>
                {
                    `
                    form{
                        width:100%;
                    }
                    form input{
                        width:100%;
                        display:block;
                        background:none;
                        margin-right:20px;
                    }
                    @media(min-width:960px){
                        form input{
                            width:400px;
                            margin: 0 15px;
                        }
                    }
                    `
                }
            </style>
        </>)
    }

export default SearchBar