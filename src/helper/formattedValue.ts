export const formattedValue = (value: number | undefined) => {
  if (value === undefined) return "R$0";

  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
};
