const faturamentoMensal = {
    dias: [100, 200, 0, 300, 0, 0, 150, 0, 50, 100, 250, 400, 0, 0, 500]
};

function calcularFaturamento(faturamento) {
    const diasComFaturamento = faturamento.filter(valor => valor > 0);
    const menorValor = Math.min(...diasComFaturamento);
    const maiorValor = Math.max(...diasComFaturamento);
    const mediaMensal = diasComFaturamento.reduce((acc, valor) => acc + valor, 0) / diasComFaturamento.length;
    const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;

    return { menorValor, maiorValor, diasAcimaDaMedia };
}

// Processar os dados
const { menorValor, maiorValor, diasAcimaDaMedia } = calcularFaturamento(faturamentoMensal.dias);
console.log(`Menor valor: ${menorValor}`);
console.log(`Maior valor: ${maiorValor}`);
console.log(`Dias acima da média: ${diasAcimaDaMedia}`);
