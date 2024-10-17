export const getSavedFilter = () => {
  const savedFilter = localStorage.getItem("filter");
  const parsedFilter = savedFilter && JSON.parse(savedFilter);
  return parsedFilter || [];
};
