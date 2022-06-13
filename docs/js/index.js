"use strict";
//number
var x = 10;
//string
var y = 'Hello World';
//boolean
var z = false;
//array string
var a = ['João', 'Maria', 'Lucas'];
// Interface de array 
var b = ['Patrica', 'Adriano'];
// Tuple (define posições e quantidades além do tipo)
// Verifica a quantidade e o tipo
var c;
c = ['cachorro', 'gato', 14, true];
// Enum - Mapameamento de info, define valores como objetos
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao[StatusAprovacao["Aprovado"] = 0] = "Aprovado";
    StatusAprovacao[StatusAprovacao["Pendente"] = 1] = "Pendente";
    StatusAprovacao[StatusAprovacao["Reprovado"] = 2] = "Reprovado";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any - ignora a tipagem
var infosApi = [true, 'oasuidn', 234,];
// Void - função que não retorna nada
function teste(msg) {
    console.log(msg);
}
//Null e Undefined
var u = undefined;
var n = null;
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
    console.log("sua nota \u00E9 ".concat(nota));
}
notas(10);
notas('10');
var alunos = [
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
// type assertion - definir tipagem quando ela for usada
var quantidadeAlunos = 26;
quantidadeAlunos.toString();
quantidadeAlunos.toString(); // outra forma de tipar
function novoAluno() {
    return {
        nome: 'Rafael',
        email: 'email@email.com'
    };
}
function setAluno(aluno) {
    //...
}
// Classes
var User = /** @class */ (function () {
    function User(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    return User;
}());
var User2 = /** @class */ (function () {
    function User2(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    return User2;
}());
// public - pode ser acessado de fora da classe
// private - não pode ser acessado fora da classe
// protected - só acessivel dentro e subclasses
