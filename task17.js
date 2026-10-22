function cache(func) {
  const cacheStore = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cacheStore) {
      return cacheStore[key];
    }
    const result = func(...args);
    cacheStore[key] = result;
    return result;
  };
}
