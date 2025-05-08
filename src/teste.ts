// a) Variável com anotação explícita de tipo numérico
let numero: number = 42;
console.log(`Valor: ${numero}, Tipo: ${typeof numero}`);

// b) Variável com anotação explícita de tipo string
let texto: string = "Olá, TypeScript!";
console.log(`Valor: ${texto}, Tipo: ${typeof texto}`);

// c) Variável sem anotação explícita de tipo, mas recebendo um valor lógico (boolean)
let logico = true;
console.log(`Valor: ${logico}, Tipo: ${typeof logico}`);

// d) Variável que seja um JSON contendo propriedades numéricas e string
let jsonObjeto = {
    idade: 30,
    nome: "Carlos"
};
console.log(`Valor: ${JSON.stringify(jsonObjeto)}, Tipo: ${typeof jsonObjeto}`);

// e) Um array numérico com anotação explícita de tipo
let numeros: number[] = [10, 20, 30, 40, 50];
console.log(`Valor: ${numeros}, Tipo: ${typeof numeros}`);
