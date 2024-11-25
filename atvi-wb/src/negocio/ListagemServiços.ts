import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os serviços 🫡:`);
        this.servicos .forEach(servico => {
            console.log(`Nome: ` + servico.nome);
            console.log(`Valor: ` + servico.getValor);
            console.log(`--------------------------------------📍`);
        });
        console.log(`\n`);
    }

    public listarServicosMaisConsumidos(): void {
        const servicosConsumidos = new Map<Servico, number>();
        for (const servico of this.servicos) {
            if (servicosConsumidos.has(servico)) {
                servicosConsumidos.set(servico, servicosConsumidos.get(servico)! + servico.quantidadeConsumida);
            } else {
                servicosConsumidos.set(servico, servico.quantidadeConsumida);
            }
        }

        const servicosOrdenados = Array.from(servicosConsumidos.entries())
            .sort(([, quantidadeA], [, quantidadeB]) => quantidadeB - quantidadeA)
            .map(([servicos]) => servicos);

        console.log("\nServiços mais consumidos:");
        console.log("--------------------------");
        for (let i = 0; i < Math.min(servicosOrdenados.length, 5); i++) {
            const servico = servicosOrdenados[i];
            console.log(`${servico.nome} - Quantidade Consumida: ${servicosConsumidos.get(servico)}`);
        }
        console.log("--------------------------\n");
    }
}