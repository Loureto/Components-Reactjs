const cpfMask = (value: string) => {
  return value
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1-$2");
};

const cnpjMask = (value: string) => {
  return value
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
};

const rgMask = (value: string) => {
  return value
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2-$3");
};

const phoneMask = (value: string) => {
  return value
    .replace(/^(\d{1,})(\d)/, "($1$2)")
    .replace(/(\d{5})(\d)/, `${" "}$1-$2`);
};

export { cpfMask, cnpjMask, rgMask, phoneMask };
