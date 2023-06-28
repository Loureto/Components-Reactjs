function isValidCPF(cpf: string) {
  if (typeof cpf !== "string") return false;
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;

  const splitedCpf = cpf.split("").map((el) => +el);
  const rest = (count: number) =>
    ((splitedCpf
      .slice(0, count - 12)
      .reduce(
        (sum: number, el: number, index: number) => sum + el * (count - index),
        0
      ) *
      10) %
      11) %
    10;
  return rest(10) === splitedCpf[9] && rest(11) === splitedCpf[10];
}

export default isValidCPF;
