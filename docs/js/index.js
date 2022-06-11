"use strict";
//number
let x = 10;
//string
let y = 'Hello World';
//boolean
let z = false;
//array string
let a = ['João', 'Maria', 'Lucas'];
// Interface de array 
const b = ['Patrica', 'Adriano'];
// Tuple (define posições e quantidades além do tipo)
// Verifica a quantidade e o tipo
let c;
c = ['cachorro', 'gato', 14, true];
// Enum - Mapameamento de info, define valores como objetos
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao[StatusAprovacao["Aprovado"] = 0] = "Aprovado";
    StatusAprovacao[StatusAprovacao["Pendente"] = 1] = "Pendente";
    StatusAprovacao[StatusAprovacao["Reprovado"] = 2] = "Reprovado";
})(StatusAprovacao || (StatusAprovacao = {}));
const statusDaAprovacao = StatusAprovacao.Aprovado;
// Any - ignora a tipagem
const infosApi = [true, 'oasuidn', 234,];
// Void - função que não retorna nada
function teste(msg) {
    console.log(msg);
}
//Null e Undefined
const u = undefined;
const n = null;
// Objetc
function novaFuncao(object) {
}
novaFuncao({
    id: 2,
    nome: 'oaidunbaoisd',
});
// Never (looping)
function loop() {
    while (true) {
        console.log('infinito e além');
    }
}
// Union Types
function notas(nota) {
    console.log(`sua nota é ${nota}`);
}
notas(10);
notas('10');
const alunos = [
    {
        nome: 'Eduardo',
        sobrenome: 'Gobbato',
        idade: 40,
        solteiro: false,
    },
    { nome: 'Rafael',
        sobrenome: 'Sangali',
        idade: 23,
        solteiro: false,
    },
];
