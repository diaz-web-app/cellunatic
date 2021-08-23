import {createContext, Dispatch, useEffect, useReducer} from 'react'
import { get_posts } from '../../api/get_posts_controllers'
import { AppActions, State } from '../../interfaces/interfaces'
import appReducer from './app_reducer'

export const initialApp:State={
    paginas_state:null,
    posts_state:null,
    accesorios_state:null,
    menu_state:false
}

const GlobalAppContext = createContext<{app:State;app_dispatch:Dispatch<AppActions>}>({app:initialApp,app_dispatch:()=>{}})

export const App_provider =({children}:any)=>{
  const [app,app_dispatch] = useReducer(appReducer,initialApp)
  const init_menu= async()=>{
      const response = await get_posts({tipo:'pagina'})
      app_dispatch(
          {
              type:'get_paginas',
              payload:response
          }
      )
  }
  useEffect(()=>{
      init_menu()
  },[])
  return <GlobalAppContext.Provider value={{
      app,app_dispatch
  }} >
      {children}
  </GlobalAppContext.Provider>
}

export default GlobalAppContext