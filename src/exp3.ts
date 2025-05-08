import * as fs from 'fs';
import * as path from 'path';

// Função para ler o conteúdo de um arquivo
function readFile(filePath: string): string {
    return fs.readFileSync(filePath, 'utf-8');
}

// Função para escrever em um arquivo
function writeFile(filePath: string, content: string): void {
    fs.writeFileSync(filePath, content, 'utf-8');
}

// Implementação do Quick Sort
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

    // Divide o conteúdo em palavras
    const words = content.split(/\s+/).filter(word => word.trim() !== '');

    // Ordena as palavras usando Quick Sort
    const sortedWords = quickSort(words);

    // Gera o nome do arquivo de saída
    const outputFilePath = path.basename(inputFilePath, path.extname(inputFilePath)) + '_ord.txt';

    // Escreve as palavras ordenadas no arquivo de saída
    writeFile(outputFilePath, sortedWords.join('\n'));

    console.log(`Arquivo processado com sucesso! Saída: ${outputFilePath}`);
}

// Exemplo de uso
const inputFilePath = 'arquivo.txt'; // Substitua pelo caminho do arquivo de entrada
processFile(inputFilePath);