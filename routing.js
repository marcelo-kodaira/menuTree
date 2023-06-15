"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routing = void 0;
const menuTree_1 = require("./menuTree");
const routing = (id) => {
    const rootRoute = menuTree_1.menuTree.find(route => id === route.id);
    if (!rootRoute) {
        return null;
    }
    const childrenRoute = menuTree_1.menuTree.filter(route => route.menuSupId === id);
    return [rootRoute, ...childrenRoute];
};
exports.routing = routing;
