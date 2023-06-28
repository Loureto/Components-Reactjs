const cpfMask = (value: string) => {
  value = value.replace(/^(\d{3})(\d)/, "$1.$2");
  value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
  value = value.replace(/\.(\d{3})(\d)/, ".$1-$2");

  return value;
};

const cnpjMask = (value: string) => {
  value = value.replace(/^(\d{2})(\d)/, "$1.$2");
  value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
  value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
  value = value.replace(/(\d{4})(\d)/, "$1-$2");

  return value;
};

const rgMask = (value: string) => {
  value = value.replace(/^(\d{3})(\d)/, "$1.$2");
  value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2-$3");

  return value;
};

const phoneMask = (value: string) => {
  value = value.replace(/^(\d{1})(\d)/, "($1$2)");
  value = value.replace(/(\d{5})(\d)/, `${" "}$1-$2`);

  return value;
};

export { cpfMask, cnpjMask, rgMask, phoneMask };
