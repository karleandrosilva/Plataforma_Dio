//1 - Preço do combústivel;
const preco_combustivel = 5.50

//2 - Gasto médio de combústivel do carro por KM;
const gasto_porKm = 1

//3 - Distância em KM da viagem;
const distancia = 100

// quantos litros consumidos
const litrosConsumidos = distancia / gasto_porKm 

// o valor que será gasto 
const valorGasto = litrosConsumidos * preco_combustivel

console.log(valorGasto)