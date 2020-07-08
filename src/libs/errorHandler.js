const errorHandler = (error) => {
  const { extensions: { response: { body } } } = error;
  return body;
};

export { errorHandler };
