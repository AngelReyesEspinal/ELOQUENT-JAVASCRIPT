function inventoryList() {
  // write your code here
  let names = new Set();
  return {
    add: (name) => { if (name) names.add(name); },
    remove: (name) => { if (name) names.delete(name); },
    getList: () => [...names]
  }
}
