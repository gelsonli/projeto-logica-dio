// Desafio Classificador de Nível de Heróis

// Importa o módulo 'readline-sync' para entrada de dados no console
const readline = require('readline-sync');

// Entrada de dados
let nomeHeroi = readline.question("Digite o nome do herói: ");
let experiencia = parseInt(readline.question("Digite a quantidade de experiência (XP) do herói: "));

// Validação para entrada válida de XP
while (isNaN(experiencia) || experiencia < 0) {
  console.log("Por favor, insira um valor numérico válido para a experiência (XP).");
  experiencia = parseInt(readline.question("Digite a quantidade de experiência (XP) do herói: "));
}

// Classificação por níveis
let nivel;

if (experiencia < 1000) {
  nivel = "Ferro";
} else if (experiencia <= 2000) {
  nivel = "Bronze";
} else if (experiencia <= 5000) {
  nivel = "Ouro";
} else if (experiencia <= 8000) {
  nivel = "Diamante";
} else if (experiencia <= 9000) {
  nivel = "Ascendente";
} else if (experiencia >= 10001) {
  nivel = "Radiante";
}

// Saída
console.log(`O Herói de nome **${nomeHeroi}** está no nível **${nivel}**.`);
