import * as fs from 'fs';
import * as path from 'path';

// Ler arquivo
function readFile(filePath: string): string {
    return fs.readFileSync(filePath, 'utf-8');
}

// escrever 
function writeFile(filePath: string, content: string): void {
    fs.writeFileSync(filePath, content, 'utf-8');
}

// Quick Sort
function quickSort(arr: string[]): string[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left: string[] = [];
    const right: string[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].localeCompare(pivot) < 0) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Função principal
function processFile(inputFilePath: string): void {
    // Lê o conteúdo do arquivo de entrada
    const content = readFile(inputFilePath);0

    // Divide o conteudo
    const words = content.split(/\s+/).filter(word => word.trim() !== '');

    // Ordena as palavrast
    const sortedWords = quickSort(words);

    // Gera o nome do arquivo
    const outputFilePath = path.basename(inputFilePath, path.extname(inputFilePath)) + '_ord.txt';

    // Escreve as palavras ordenadas no arquivo
    writeFile(outputFilePath, sortedWords.join('\n'));

    console.log(`Arquivo processado com sucesso! Saída: ${outputFilePath}`);
}

// uso
const inputFilePath = 'arquivo.txt'; // Substitua pelo caminho do arquivo de entrada
processFile(inputFilePath);
