"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routing = void 0;
const menuTree_1 = require("./menuTree");
const routing = (id) => {
    var _a;
    const result = new Set();
    const queue = [id];
    const visitedIds = new Set();
    while (queue.length > 0) {
        const currentId = (_a = queue.shift()) !== null && _a !== void 0 ? _a : '';
        if (visitedIds.has(currentId)) {
            continue;
        }
        visitedIds.add(currentId);
        menuTree_1.menuTree.reduce((acc, item) => {
            if (item.id === currentId || item.menuSupId === currentId) {
                acc.add(item);
                if (!visitedIds.has(item.id)) {
                    queue.push(item.id);
                }
            }
            return acc;
        }, result);
    }
    return [...result];
};
exports.routing = routing;
