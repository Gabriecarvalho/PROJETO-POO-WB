export default class Servico {
    public nome!: string;
    public valor: number;
    public quantidadeConsumida: number;
    constructor(nome: string, valor: number, quantidadeConsumida: number) {
        this.nome = nome
        this.valor = valor
        this.quantidadeConsumida = 0
    }
    public get getNome(): string {
        return this.nome
    }
    public get getValor(): number {
        return this.valor
    }

    public get getQuantidadeConsumida(): number {
        return this.quantidadeConsumida;
    }

    public adicionarConsumo(): void {
        this.quantidadeConsumida++;
    }
}