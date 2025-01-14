const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

function calcularPercentual(faturamento) {
    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
    const percentuais = {};
    for (const [estado, valor] of Object.entries(faturamento)) {
        percentuais[estado] = (valor / total) * 100;
    }
    return percentuais;
}

const percentuais = calcularPercentual(faturamentoPorEstado);
for (const [estado, percentual] of Object.entries(percentuais)) {
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
