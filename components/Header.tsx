import Link from 'next/link'
import { useContext, useMemo } from 'react'
import GlobalAppContext from '../context/app/app_state'
import SearchBar from './Search_bar'


const Header = () => {
    const {app, app_dispatch} = useContext(GlobalAppContext)
    const searchbar = useMemo(()=><SearchBar />,[])
    const menu_handler=()=>{
        app_dispatch(
            {
                type:'swich_menu',
                payload:!app.menu_state
            }
        )
    }
    return (
        <header>
            <div className="container header_barr">

                <Link href="/" >
                    <a className="logo">
                        <img style={{ margin: '0 5px' }} src="/favicon.ico" alt="cellunatic logo" width="32px" height="32px" />
                        <b>Cellunatic</b>
                    </a>
                </Link>
                {searchbar}
                <div className="nav_header">                    
                    <button onClick={menu_handler} >menu</button>
                </div>
            </div>

        </header>
    )
}
export default Header