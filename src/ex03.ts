import prompt_sync from 'prompt-sync';

var n1: number;
var n2: number; 
var n3: number;

const prompt = prompt_sync();
n1 = parseFloat(prompt("primeiro numero: "));
n2 = parseFloat(prompt("segundo numero: "));
n3 = n1 + n2;
console.log(n3);
