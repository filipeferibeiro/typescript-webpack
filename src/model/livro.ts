import IVendavel from "./iVendavel";

export default class Livro implements IVendavel {
	constructor(public nome: string, public readonly preco: number, public readonly desconto: number) {}

	precoComDesconto(): number {
		return this.preco * (1 - this.desconto);
	}
}
