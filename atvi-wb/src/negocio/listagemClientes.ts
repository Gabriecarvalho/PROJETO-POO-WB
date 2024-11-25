import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------📍`);
        });
        console.log(`\n`);
    }
    public listarGeneroMasculino():void{
        console.log(`\nLista de todos os cliente do genero Masculino`); 
        const clientesMasculinos = this.clientes.filter(cliente => cliente.genero === "M" || cliente.genero === "m");
        clientesMasculinos.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------📍`);
        });
        console.log(`\n`);
    }
    public listarGeneroFeminino():void{
        console.log(`\nLista de todos os cliente do genero Feminino`); 
        const clientesFeminino = this.clientes.filter(cliente => cliente.genero === "F" || cliente.genero === "f");
        clientesFeminino.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------📍`);
        });
        console.log(`\n`);
    }


    public listarTop5ClientesPorValor(): void {
        const clientesOrdenados = this.clientes.sort((a, b) => 
            b.getValorTotalConsumido() - a.getValorTotalConsumido()
        );
        console.log(`\nTop 5 clientes que mais consumiram em valor:`);
        for (let i = 0; i < 5 && i < clientesOrdenados.length; i++) {
            const cliente = clientesOrdenados[i];
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Valor Total Consumido: ${cliente.getValorTotalConsumido()}`);
            console.log(`--------------------------------------📍`);
        }
        console.log(`\n`);
    }




    public listarItensMaisConsumidosPorGenero(genero: string): void {
        const clientesPorGenero = this.clientes.filter(cliente => cliente.getGenreo === genero);
    
        const itensMaisConsumidos = new Map<string, number>();
    
        for (const cliente of clientesPorGenero) {
            const itensConsumidosM = genero === "M" ? cliente.getProdutosConsumidos : cliente.getServicosConsumidos;
            const itensConsumidosF = genero === "F" ? cliente.getProdutosConsumidos : cliente.getServicosConsumidos;

            
            for (const item of itensConsumidosM) {
                const nomeItem = item.nome; 
                if (itensMaisConsumidos.has(nomeItem)) {
                    itensMaisConsumidos.set(nomeItem, itensMaisConsumidos.get(nomeItem)! + 1);
                } else {
                    itensMaisConsumidos.set(nomeItem, 1);
                }
            }
            for (const item of itensConsumidosF) {
                const nomeItem = item.nome; 
                if (itensMaisConsumidos.has(nomeItem)) {
                    itensMaisConsumidos.set(nomeItem, itensMaisConsumidos.get(nomeItem)! + 1);
                } else {
                    itensMaisConsumidos.set(nomeItem, 1);
                }
            }
        }
    
        const itensOrdenados = Array.from(itensMaisConsumidos.entries()).sort((a, b) => b[1] - a[1]);    
        console.log(`\nItens mais consumidos pelo gênero ${genero}: ⭐`);
        console.log("-------------------------------");
        console.log("Item\t\tQuantidade");
        console.log("-------------------------------");
        
        for (const [nomeItem, quantidade] of itensOrdenados) {
            console.log(`${nomeItem}\t\t${quantidade}`);
        }
    
        console.log("-------------------------------\n");
    }

    public listarTop5ClientesMenosConsumidores(): void {
        const clientesOrdenados = this.clientes.sort((a, b) =>
            (a.getProdutosConsumidos.length + a.getServicosConsumidos.length) -
            (b.getProdutosConsumidos.length + b.getServicosConsumidos.length)
        );

        console.log("\nTop 5 clientes menos consumidores:");
        console.log("----------------------------------📍");
        console.log("Cliente\t\t\tQuantidade Consumida");
        console.log("----------------------------------");
        for (let i = 0; i < Math.min(clientesOrdenados.length, 5); i++) {
            const cliente = clientesOrdenados[i];
            const totalConsumido = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
            console.log(`${cliente.nome}\t\t\t${totalConsumido}`);
        }
        console.log("----------------------------------📍\n");
    }
}