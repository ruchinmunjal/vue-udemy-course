export const currentMaxId = (arr) => {
  const existingIds = arr.map(r => r.id);
  return Math.max(...existingIds);
};