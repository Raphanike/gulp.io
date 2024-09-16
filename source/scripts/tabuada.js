
function gerarTabuada(numero) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
const numero = 4;
gerarTabuada(numero);

module.exports = gerarTabuada;
