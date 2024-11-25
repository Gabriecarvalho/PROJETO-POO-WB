import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/ListagemServiços";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`\nOpções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log("3 - Listar todos os clientes masculinos");
    console.log("4 - Listar todos os clientes femininos");
    console.log("5 - Cadastrar produto");
    console.log("6 - Cadastrar serviço");
    console.log("7 - registrar compra/consumo de produto do cliente"); 
    console.log("8 - Listar todos os produtos e serviços"); 
    console.log("9 - Listar serviços e produtos mais consumidos por gênero"); 
    console.log("10 - Clientes com menos consumo em quantidade"); 
    console.log("11 - Clientes com mais consumo em valor"); 
    console.log("12 - Produtos e Serviços mais consumidos");

    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
            
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;

        case 3:
            let listagemGeneroMasculino = new ListagemClientes(empresa.getClientes);
            listagemGeneroMasculino.listarGeneroMasculino();
            break;

        case 4:
            let listagemGeneroFeminino = new ListagemClientes(empresa.getClientes);
            listagemGeneroFeminino.listarGeneroFeminino();
            break;

        case 5:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 6:
            let cadastrarServico = new CadastroServico(empresa.getServicos)
            cadastrarServico.cadastrar()
            break;

        case 7:
            let cpfCliente = entrada.receberTexto(`Digite o CPF do cliente: `);
            let clienteSelecionado = empresa.getClientes.find(cliente => cliente.getCpf.getValor === cpfCliente);

            if (clienteSelecionado) {
                let produtoConsumido = entrada.receberTexto(`Digite o produto consumido: `);
                let produtoSelecionado = empresa.getProdutos.find(produto => produto.getNome === produtoConsumido);

                if (produtoSelecionado) {
                    clienteSelecionado.adicionarProdutoConsumido(produtoSelecionado);
                    produtoSelecionado.adicionarConsumo();
                    console.log(`Quantidade consumida do produto ${produtoSelecionado.getNome}: ${produtoSelecionado.getQuantidadeConsumida}`);
                    console.log("Compra/consumo registrada com sucesso! ");
                    console.log("------------------------------------------\n")
                } else {
                    console.log("Produto não encontrado.\n");
                }
            }
            else {
                console.log("Cliente não encontrado.");
            }
            break;
        case 100:
            let cpfClienteServico = entrada.receberTexto(`Digite o CPF do cliente: `);
            let clienteSelecionadoServico = empresa.getClientes.find(cliente => cliente.getCpf.getValor === cpfClienteServico);

            if (clienteSelecionadoServico) {
                let servicoConsumido = entrada.receberTexto(`Digite o serviço consumido: `);
                let servicoSelecionado = empresa.getServicos.find(servico => servico.getNome === servicoConsumido);

                if (servicoSelecionado) {
                    clienteSelecionadoServico.adicionarServicoConsumido(servicoSelecionado);
                    servicoSelecionado.adicionarConsumo();
                    console.log(`Quantidade consumida do servico ${servicoSelecionado.getNome}: ${servicoSelecionado.getQuantidadeConsumida}`);
                    console.log("Compra/consumo registrada com sucesso!");
                    console.log("------------------------------------------\n")
                } else {
                    console.log("Serviço não encontrado.\n");
                }
            }
            else {
                console.log("Cliente não encontrado.");
            }
            break;

        case 8:
            let ListaProdutos = new ListagemProdutos(empresa.getProdutos); 
            ListaProdutos.listar();

            let ListaServicos = new ListagemServicos(empresa.getServicos);
            ListaServicos.listar();
            break;
            
        case 9:
            const listagemConsumoGenero = new ListagemClientes(empresa.getClientes);
            listagemConsumoGenero.listarItensMaisConsumidosPorGenero("M");
            listagemConsumoGenero.listarItensMaisConsumidosPorGenero("F");
            break;
                
        case 10:
            let listagemMenosConsumidores = new ListagemClientes(empresa.getClientes);
            listagemMenosConsumidores.listarTop5ClientesMenosConsumidores();
            break;

        case 11:
            const listagemClientes = new ListagemClientes(empresa.getClientes);
            listagemClientes.listarTop5ClientesPorValor();
        break;

        case 12:
            let MaisConsumido = new ListagemProdutos(empresa.getProdutos);
            MaisConsumido.listarProdutosMaisConsumidos();

            let MaisConsumidoServico = new ListagemServicos(empresa.getServicos);
            MaisConsumidoServico.listarServicosMaisConsumidos();
            break;
        

        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida`)
    }
}