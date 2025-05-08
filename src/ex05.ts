import PromptSync from "prompt-sync";

var palavra1: string;
var palavra2: string;

const prompt = PromptSync();
palavra1 = prompt("primeira palavra: ").toLowerCase();
palavra2 = prompt("segunda palavra: ").toLowerCase();

function compararPalavras(palavra1: string, palavra2: string): string {
    let tamanho = Math.min(palavra1.length, palavra2.length);

    for (let i = 0; i< tamanho; i++){
        let char1 = palavra1.charCodeAt(i);
        let char2 = palavra2.charCodeAt(i);

        if (char1<char2) {
            return `A palavra "${palavra1}" vem antes no dicionário.`;
        } else if (char1 > char2) {
            return `A palavra "${palavra2}" vem antes no dicionário.`;
        } 
    }
    // Se todas as letras forem iguais até o tamanho mínimo, a menor palavra vem primeiro
    if (palavra1.length < palavra2.length) {
        return `A palavra "${palavra1}" vem antes no dicionário.`;
    } else if (palavra1.length > palavra2.length) {
        return `A palavra "${palavra2}" vem antes no dicionário.`;
    }

    return "As palavras são iguais.";
    }
console.log(compararPalavras(palavra1, palavra2));