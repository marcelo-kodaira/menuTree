import { routing } from "./routing"

console.assert(
    JSON.stringify(routing("home")) ===
    JSON.stringify([
    {
       id: 'home',
       label: 'Página Inicial',
       link: '/',
       menuSupId: null
    }
    ]),
    "Test 1 failed"
    )
  
  console.log("-------------- Test 1 --------------")
  console.log(routing("home"))
  
  
  console.assert(
    JSON.stringify(routing("register")) ===
    JSON.stringify([
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
      }
    ]),
    "Test 2 failed"
    )
  
  console.log("-------------- Test 2 --------------")
  console.log(routing("register"))
  
  console.assert(
    JSON.stringify(routing("store")) ===
    JSON.stringify([
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
      }
    ]),
    "Test 3 failed"
    )
  
  console.log("-------------- Test 3 --------------")
  console.log(routing("store"))
  
  console.assert(
    JSON.stringify(routing("nonValidId")) === JSON.stringify([]),
    "Test 4 failed"
    )
  
  console.log("-------------- Test 4 --------------")
  console.log(routing("nonValidId"))