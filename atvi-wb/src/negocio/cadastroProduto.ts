import Produto from "../modelo/produto"
import Entrada from "../io/entrada";
import Cadastro from "./cadastro";


export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    public quantidadeConsumida: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
        this.quantidadeConsumida = []
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        let valor = parseFloat(this.entrada.receberTexto(`Por favor informe o valor do produto: `));
        let produto = new Produto(nome, valor, 0);
        this.produtos.push(produto)
        console.log(`\nCadastro de produto concluído :)\n`);
    }
    
    public get getQuantidadeConsumida(): Array<Produto> {
        return this.quantidadeConsumida
    }
    
    public adicionarConsumo(): void {
        this.quantidadeConsumida.push(); 
    }
}