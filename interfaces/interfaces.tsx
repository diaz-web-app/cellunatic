//****** */ posts ******//
export type TPost={
      categoria: string[]
      estado: string
      _id:string
      titulo:string
      meta_description:string
      meta_keywords:string
      html?: string
      tipo:string
      hijo:string
      url:string
      cover?:string
      createdAt:string
      updatedAt:string
}

export type TGetPosts= {
    posts:TPost[] 
    metas:TMeta[]
    total_posts:number
}
export type TGetPost= {
    post:TPost | null
    metas:TMeta[]
    covers:TGetMediaFile[]
}
//****** post metas ******//
export type TMeta={
    _id: string
    id_post: string
    clave: string
    valor: string
    createdAt: string
    updatedAt: string
}
//****** post categorias ******//
export type TCategoria={
    tipo_post: string
    _id: string
    titulo: string
    url: string
    createdAt: string
    updatedAt: string
}
export type TGetCategoria = TCategoria[] | []
export type TTipoPost={
    _id: string
    titulo: string
    url: string
    createdAt: Date
    updatedAt: Date
}
//****** Media files *****/
export type TMediaFile={
    fieldname: string
    originalname: string
    encoding: string
    mimetype: string
    destination: string
    filename: string
    path: string
    size:number
  }

export type TGetMediaFile={
    _id: string
    fieldname: string
    originalname: string
    encoding: string
    mimetype: string
    destination: string
    filename: string
    path: string
    size:number
    url: string
    createdAt: string
    updatedAt: string
    id_post: string
  }
//****** Estado de la app ******//
export type State = {
    paginas_state:TGetPosts | null
    accesorios_state:TGetPosts | null
    posts_state:TGetPosts | null
    menu_state:boolean
} 

export type AppActions =
    | { type: 'swich_menu',payload:any}
    | { type: 'get_posts',payload:TGetPosts | null}
    | { type: 'get_paginas',payload:TGetPosts | null}
    | { type: 'get_accesorios',payload:TGetPosts | null}