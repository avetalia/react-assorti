const myData = [
  { id: 1, parent: null, name: "Cozy Star" },
  { id: 2, parent: 3, name: "Sweet Moon" },
  { id: 3, parent: 1, name: "Red Galaxy" },
  { id: 4, parent: 2, name: "Milkyway" },
  { id: 5, parent: 2, name: "Sun System" },
  { id: 6, parent: 1, name: "Rocky Star" },
  { id: 7, parent: 4, name: "Soft Comet" },
  { id: 8, parent: 1, name: "Wet Moon" }
];
export const toTree = data => {
  const processChildren = (item, arr) => {
    item.children = arr
      .filter(e => e.parent === item.id)
      .map(item => processChildren(item, arr));

    if (item.children.length === 0) delete item.children;
    return item;
  };

  return processChildren(data.find(el => el.parent === null), data);
};

const result = toTree(myData);
console.log(result);
