import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach(produto => {
            console.log(`Nome: ` + produto.nome);
            console.log(`Valor: ` + produto.getValor);
            console.log(`--------------------------------------📍`);
        });
        console.log(`\n`);
    }

    public listarProdutosMaisConsumidos(): void {
        const produtosConsumidos = new Map<Produto, number>();
        for (const produto of this.produtos) {
            if (produtosConsumidos.has(produto)) {
                produtosConsumidos.set(produto, produtosConsumidos.get(produto)! + produto.quantidadeConsumida);
            } else {
                produtosConsumidos.set(produto, produto.quantidadeConsumida);
            }
        }

        const produtosOrdenados = Array.from(produtosConsumidos.entries())
            .sort(([, quantidadeA], [, quantidadeB]) => quantidadeB - quantidadeA)
            .map(([produto]) => produto);

        console.log("\nProdutos mais consumidos:");
        console.log("--------------------------");
        for (let i = 0; i < Math.min(produtosOrdenados.length, 5); i++) {
            const produto = produtosOrdenados[i];
            console.log(`${produto.nome} - Quantidade Consumida: ${produtosConsumidos.get(produto)}`);
        }
        console.log("--------------------------\n");
    }
}