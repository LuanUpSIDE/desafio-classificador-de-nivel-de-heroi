/*# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"*/




let nameHero = "Luanb13";
let experience = 2000;

let nivel;

if (experience <= 1000) {
    nivel = "Ferro";
}else if(experience >= 1001 && experience <= 2000){
    nivel = "Bronze";
}else if(experience >= 2001 && experience <= 5000){
    nivel = "Prata";
}else if(experience >= 5001 && experience <= 6000){
    nivel = "Ouro";
}else if(experience >= 6001 && experience <= 7000){
    nivel = "Platina";
}else if(experience >= 7001 && experience <= 8000){
   nivel = "Ascendente";
}else if(experience >= 8001 && experience <= 9000){
    nivel = "Imortal";
}else if(experience >= 9001){
    nivel = "Radiante";
}

console.log(`O Herói de nome ${nameHero} está no nível de ${nivel} `);


/* Não vi a necessidade de fazer um laço de repetição*/