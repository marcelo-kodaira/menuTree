"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routing = void 0;
const menuTree_1 = require("./menuTree");
class TreeNode {
    constructor(route) {
        this.route = route;
        this.children = [];
    }
    toJSON() {
        return Object.assign(Object.assign({}, this.route), { children: this.children });
    }
}
const buildMenuTree = (routes) => {
    const routeMap = {};
    for (const route of routes) {
        routeMap[route.id] = new TreeNode(route);
    }
    const roots = [];
    for (const route of routes) {
        const currentNode = routeMap[route.id];
        const parentID = route.menuSupId;
        if (parentID) {
            const parentNode = routeMap[parentID];
            parentNode.children.push(currentNode);
        }
        else {
            roots.push(currentNode);
        }
    }
    return roots;
};
const routing = (id) => {
    const roots = buildMenuTree(menuTree_1.menuTree);
    const findNode = (node, targetId) => {
        if (node.route.id === targetId) {
            return node;
        }
        for (const childNode of node.children) {
            const foundNode = findNode(childNode, targetId);
            if (foundNode !== null) {
                return foundNode;
            }
        }
        return null;
    };
    for (const root of roots) {
        const targetNode = findNode(root, id);
        if (targetNode !== null) {
            return JSON.stringify(targetNode, null, 2);
        }
    }
    return [];
};
exports.routing = routing;
