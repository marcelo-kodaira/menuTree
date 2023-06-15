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
    }
    ]),
    "Test 2 failed"
    )
  
  console.log("-------------- Test 2 --------------")
  console.log(routing("register"))
  
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
    }
    ]),
    "Test 3 failed"
    )
  
  console.log("-------------- Test 3 --------------")
  console.log(routing("store"))
  
  console.assert(
    JSON.stringify(routing("nonValidId")) === JSON.stringify(null),
    "Test 4 failed"
    )
  
  console.log("-------------- Test 4 --------------")
  console.log(routing("nonValidId"))