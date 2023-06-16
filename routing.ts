import { menuTree } from "./menuTree";


interface Route {
  id: string;
  label: string;
  link: string;
  menuSupId: string | null;
}

class TreeNode {
  route: Route;
  children: TreeNode[];

  constructor(route: Route) {
    this.route = route;
    this.children = [];
  }

  toJSON() {
    return { ...this.route, children: this.children };
  }
}

const buildMenuTree = (routes: Route[]): TreeNode[] => {
  const routeMap: { [id: string]: TreeNode } = {};

  for (const route of routes) {
    routeMap[route.id] = new TreeNode(route);
  }

  const roots: TreeNode[] = [];
  for (const route of routes) {
    const currentNode = routeMap[route.id];
    const parentID = route.menuSupId;
    if (parentID) {
      const parentNode = routeMap[parentID];
      parentNode.children.push(currentNode);
    } else {
      roots.push(currentNode);
    }
  }

  return roots;
};

export const routing = (id: string): string | [] => {
  const roots = buildMenuTree(menuTree);

  const findNode = (node: TreeNode, targetId: string): TreeNode | null => {
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

