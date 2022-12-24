export const updateObjectInArray = (
  items: Array<any>,
  itemID: number,
  objPropName: string,
  newObjProps: any
) => {
  return items.map((u) => {
    if (u[objPropName] === itemID) {
      return { ...u, ...newObjProps };
    }
    return u;
  });
};
