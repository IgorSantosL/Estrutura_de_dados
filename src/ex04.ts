import PromptSync from "prompt-sync";

var letra1: string;
var letra2: string;

const prompt = PromptSync();
letra1 = prompt("primeira letra: ").toLowerCase();
letra2 = prompt("segunda letra: ").toLowerCase();

if (letra1 < letra2) {
    console.log(`a letra 1 vem antes da letra 2`)
}
else{
    console.log(`a letra 2 vem antes da letra 1`)
}
