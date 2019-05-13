const logger = store => next => action => {
  console.group(action.type);
  console.log("Ação performada: ", action);
  const returnValue = next(action);
  console.log("Novo estado da Aplicação: ", store.getState());
  console.groupEnd();
  return returnValue;
};

export default logger;
