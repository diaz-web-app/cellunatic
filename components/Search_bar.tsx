import { useRouter } from 'next/dist/client/router'

const SearchBar = () => {
    const {push} = useRouter()
    const search_handler=(e:any)=>{
        e.preventDefault()
        const {search} = e.target
        if(search.value == '') return
        const path = "/search/"+search.value+"?limite=12"
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
                        background:none;
                        outline:none;
                    }
                    form input{
                        width:100%;
                        display:block;
                        background:none;
                        outline:none;
                        margin-right:20px;
                    }
                    form input:focus, form input:active, form input:hover{
                        background:none;
                        outline:none;
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