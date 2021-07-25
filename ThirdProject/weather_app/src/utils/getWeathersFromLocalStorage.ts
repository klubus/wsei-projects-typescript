export const getWeathersFromLocalStorage = () =>
  localStorage.getItem("weathers")
    ? JSON.parse(localStorage.getItem("weathers") as string)
    : [];
