
export const formatValue = (value: number) => {

    const params = { maximumFractionDigits: 2, minimumFractionDigits: 2 };

    return new Intl.NumberFormat('pt-BR', params).format(value);
}