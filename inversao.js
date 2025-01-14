function inverterString(texto) {
    let invertida = "";
    for (let char of texto) {
        invertida = char + invertida;
    }
    return invertida;
}

// Entrada da string
const texto = prompt("Digite uma string para inverter:");
console.log(`String invertida: ${inverterString(texto)}`);
