"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routing = void 0;
const menuTree_1 = require("./menuTree");
const findSubMenus = (id) => {
    const subMenus = menuTree_1.menuTree.filter(route => route.menuSupId === id);
    return subMenus.reduce((acc, subMenu) => {
        return [...acc, subMenu, ...findSubMenus(subMenu.id)];
    }, []);
};
const routing = (id) => {
    const rootRoute = menuTree_1.menuTree.find(route => route.id === id);
    if (!rootRoute) {
        return [];
    }
    return [rootRoute, ...findSubMenus(id)];
};
exports.routing = routing;
