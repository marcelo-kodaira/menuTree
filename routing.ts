import { menuTree } from "./menuTree";

interface Route {
  id: string;
  label: string;
  link: string;
  menuSupId: string | null;
}

const findSubMenus = (id: string): Route[] => {
  const subMenus = menuTree.filter(route => route.menuSupId === id);
  return subMenus.reduce((acc: Route[], subMenu) => {
    return [...acc, subMenu, ...findSubMenus(subMenu.id)];
  }, []);
};

export const routing = (id: string): Route[] => {
  const rootRoute = menuTree.find(route => route.id === id);
  if (!rootRoute) {
    return [];
  }
  return [rootRoute, ...findSubMenus(id)];
};