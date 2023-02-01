export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  const parseData = data !== null ? JSON.parse(data) : null;
  return parseData;
};
