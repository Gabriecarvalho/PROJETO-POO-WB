import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public genero: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private valorTotalConsumido: number = 0;

    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: string) {
        this.nome = nome
        this.genero = genero
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.valorTotalConsumido = 0
    }

    public adicionarProdutoConsumido(produto: Produto): void {
        this.produtosConsumidos.push(produto);
        this.valorTotalConsumido += produto.valor;
    }

    public adicionarServicoConsumido(servico: Servico): void {
        this.servicosConsumidos.push(servico);
        this.valorTotalConsumido += servico.valor;
    }


    public get getCpf(): CPF {
        return this.cpf
    }
    public get getGenreo(): string {
        return this.genero
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public getValorTotalConsumido(): number {
        return this.valorTotalConsumido;
    }


    public contarItensConsumidosPorGenero(genero: string): Map<string, number> {
        const itensConsumidosPorGenero = new Map<string, number>();
    
        
        const itensPorGeneroM = genero === "M" ? this.produtosConsumidos : this.servicosConsumidos;
        const itensPorGeneroF = genero === "F" ? this.produtosConsumidos : this.servicosConsumidos;

    
        
        for (const item of itensPorGeneroM) {
            const nomeItem = item.nome;
            if (itensConsumidosPorGenero.has(nomeItem)) {
                itensConsumidosPorGenero.set(nomeItem, itensConsumidosPorGenero.get(nomeItem)! + 1);
            } else {
                itensConsumidosPorGenero.set(nomeItem, 1);
            }
        }
        
        for (const item of itensPorGeneroF) {
            const nomeItem = item.nome;
            if (itensConsumidosPorGenero.has(nomeItem)) {
                itensConsumidosPorGenero.set(nomeItem, itensConsumidosPorGenero.get(nomeItem)! + 1);
            } else {
                itensConsumidosPorGenero.set(nomeItem, 1);
            }
        }
        return itensConsumidosPorGenero;        
    }
}