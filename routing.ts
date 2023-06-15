import { menuTree } from "./menuTree";

interface Route{
    id: string;
    label: string;
    link: string;
    menuSupId: string | null
  }
  
export const routing = (id:string): Route[] | null => {
   const rootRoute =  menuTree.find(route =>  id === route.id );
   if(!rootRoute){
     return null
   }
   const childrenRoute = menuTree.filter(route => route.menuSupId === id)
   return [rootRoute, ...childrenRoute]
  }