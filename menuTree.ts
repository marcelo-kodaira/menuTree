export const menuTree = [
    {
       id: 'home',
       label: 'Página Inicial',
       link: '/',
       menuSupId: null
    },
    {
       id: 'register',
       label: 'Cadastros',
       link: '/register',
       menuSupId: null
    },
    {
       id: 'people',
       label: 'Pessoa',
       link: '/register/people',
       menuSupId: 'register'
    },
    {
       id: 'car',
       label: 'Carro',
       link: '/register/car',
       menuSupId: 'register'
    },
    {
       id: 'store',
       label: 'Loja',
       link: '/register/store',
       menuSupId: 'register'
    },
    {
       id: 'internalStore',
       label: 'Loja Interna',
       link: '/register/store/internal',
       menuSupId: 'store'
    },
    {
       id: 'externalStore',
       label: 'Loja Externa',
       link: '/register/store/external',
       menuSupId: 'store'
    },
    {
       id: 'report',
       label: 'Relatórios',
       link: '/report',
       menuSupId: null
    },
  ]



 