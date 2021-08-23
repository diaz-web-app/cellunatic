import { AppActions, State } from "../../interfaces/interfaces"

function appReducer(state:State,action:AppActions){
    const {payload,type} = action

    switch (type) {
        case 'swich_menu':
            return{
                ...state,
                menu_state:payload
            }
        case 'get_posts':
            return{
                ...state,
                posts_state:payload
            }
        case 'get_paginas':
            return{
                ...state,
                paginas_state:payload
            }
        case 'get_accesorios':
            return{
                ...state,
                accesorios_state:payload
            }
        default:
            return state;
    }
}
export default appReducer