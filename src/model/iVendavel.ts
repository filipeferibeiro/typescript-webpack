export default interface IVendavel {
	nome: string;
	preco: number;
	desconto: number;
	precoComDesconto(): number;
}
