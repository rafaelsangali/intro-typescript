//number
let x:number = 10;
//string
let y:string = 'Hello World';

//boolean
let z:boolean = false;

//array string
let a:string[] = ['João','Maria','Lucas'];

// Interface de array 
const b: Array<string> = ['Patrica','Adriano'];

// Tuple (define posições e quantidades além do tipo)
// Verifica a quantidade e o tipo
let c: [string,string,number, boolean];
c = ['cachorro','gato', 14, true]

// Enum - Mapameamento de info, define valores como objetos
enum StatusAprovacao{
    Aprovado,
    Pendente,
    Reprovado,
}
 
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado

// Any - ignora a tipagem
const infosApi: any[] = [true, 'oasuidn', 234,];

// Void - função que não retorna nada
function teste(msg: string): void {
    console.log(msg);
}

//Null e Undefined
const u:undefined = undefined
const n:null = null

// Objetc
function novaFuncao(object: object){
}

novaFuncao({
    id: 2,
    nome: 'oaidunbaoisd',
})

// Never (looping)
function loop():never{
    while(true){
        console.log('infinito e além');
    }
}

// Union Types
function notas(nota: number | string){
    console.log(`sua nota é ${nota}`)
}
notas(10);
notas('10');

// Alias
type Aluno = {
    nome:string;
    sobrenome:string;
    idade: number;
    solteiro: boolean;
}

const alunos: Aluno[] = [
{
    nome:'Eduardo',
    sobrenome:'Gobbato',
    idade: 40,
    solteiro: false,
},
{   nome:'Rafael',
    sobrenome:'Sangali',
    idade: 23,
    solteiro: false,
},
] 

// type assertion - definir tipagem quando ela for usada
const quantidadeAlunos: any = 26;
(quantidadeAlunos as number).toString();
<number>quantidadeAlunos.toString() // outra forma de tipar

// interfaces

interface AlunoGama {
    nome:string,
    email:string,
    idade?:number,
}

function novoAluno():AlunoGama{
    return {
        nome: 'Rafael',
        email: 'email@email.com'
    }
}

function setAluno(aluno: AlunoGama){
    //...
}

interface EndAluno extends AlunoGama {
    endereço: string,
}

// Classes

class User {
    name: string;
    role: string;
    isApproved: boolean;

    constructor(name:string, role:string, isApproved:boolean){
        this.name =name;
        this.role =role;
        this.isApproved = isApproved;
    }
}

class User2 {   
    constructor(public name?:string, private role?:string,protected isApproved?:boolean){
    }
}
// public - pode ser acessado de fora da classe
 let q = new User2('Xulia', 'Admin', false);
console.log(q.name);

// private - não pode ser acessado fora da classe

// protected - só acessivel dentro e subclasses

class User3 extends User2 {
    constructor(public age:number, isApproved:string){
        super(isApproved);
        this.age = age
    }
}