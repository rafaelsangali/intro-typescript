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