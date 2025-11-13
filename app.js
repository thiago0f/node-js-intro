
const { calcularSalario, criarCarro } = require('./funcionarioCarro');

console.log('=== Cálculo de Salário ===');
const horasTrabalhadas = 160; 
const valorPorHora = 25.50; 

const salarioTotal = calcularSalario(horasTrabalhadas, valorPorHora);
console.log(`Horas trabalhadas: ${horasTrabalhadas}h`);
console.log(`Valor por hora: R$ ${valorPorHora.toFixed(2)}`);
console.log(`Salário total: R$ ${salarioTotal.toFixed(2)}`);
console.log('');

console.log('=== Informações do Carro ===');
const meuCarro = criarCarro('Toyota', 'Corolla', 2023, 'Branco');
console.log('Atributos do carro:');
console.log(`Marca: ${meuCarro.marca}`);
console.log(`Modelo: ${meuCarro.modelo}`);
console.log(`Ano: ${meuCarro.ano}`);
console.log(`Cor: ${meuCarro.cor}`);
console.log('');
console.log('Descrição completa:');
console.log(meuCarro.obterDescricao());
console.log('');

const outroCarro = criarCarro('Honda', 'Civic', 2022, 'Preto');
console.log('Outro carro:');
console.log(outroCarro.obterDescricao());

