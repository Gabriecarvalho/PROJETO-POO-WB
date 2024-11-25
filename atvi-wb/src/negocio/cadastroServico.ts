import Entrada from "../io/entrada";
import Cadastro from "./cadastro";
import Servico from "../modelo/servico";


export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    public quantidadeConsumida: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
        this.quantidadeConsumida = []
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do serviço`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
        let valor = parseFloat(this.entrada.receberTexto(`Por favor informe o valor do serviço: `));
        let servico = new Servico(nome, valor, 0);
        this.servicos.push(servico)
        console.log(`\nCadastro do serviço concluído :)\n`);
    }
    
    public get getQuantidadeConsumida(): Array<Servico> {
        return this.quantidadeConsumida
    }
    
    public adicionarConsumo(): void {
        this.quantidadeConsumida.push(); 
    }
}