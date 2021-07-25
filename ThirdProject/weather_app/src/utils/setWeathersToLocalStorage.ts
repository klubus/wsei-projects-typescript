export const setWeathersToLocalStorage = (newWeathers: any) => {
  localStorage.setItem("weathers", JSON.stringify(newWeathers));
};
