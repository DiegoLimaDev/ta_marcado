export const handleNumberInput = (setter, e) => {
  const result = e.target.value.replace(/\D/g, '');
  setter(result);
};
