export const handleTextInput = (setter, e) => {
  const result = e.target.value.replace(/\d/g, '');
  setter(result);
};
