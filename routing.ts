import { menuTree } from "./menuTree";

interface Route {
  id: string;
  label: string;
  link: string;
  menuSupId: string | null;
}

export const routing = (id: string): Route[] => {
  const result: Set<Route> = new Set();
  const queue: string[] = [id];
  const visitedIds: Set<string> = new Set();

  while (queue.length > 0) {
    const currentId = queue.shift() ?? '';
    if (visitedIds.has(currentId)) {
      continue;
    }
    visitedIds.add(currentId);

    menuTree.reduce((acc: Set<Route>, item: Route) => {
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