import promtpsync from 'prompt-sync';
const prompt = promtpsync({ sigint: true });
import { ServicoPilotos } from './ServicoPilotos.js';
import { ServicoAerovias } from './ServicoAerovia.js';
import { ServicoPlanos } from './ServicoPlanos.js';
import { SlotsAerovias } from './SlotsAerovias.js';



//MENU PRINCIPAL:

function MenuPrincipal(){

    let opcao;
    do {
        console.log("\nMENU PRINCIPAL:");
        console.log("1 - Criar Plano de Voo");
        console.log("2 - Listar Pilotos Ativos")
        console.log("3 - Listar Aerovias");
        console.log("4 - Listar Planos de Voo");
        console.log("5 - Cancelar Plano de Voo");
        console.log("6 - Sair");
        opcao = Number(prompt("Escolha uma opção: "));

        switch (opcao) {
            case 1:
                const servicoPlanos = new ServicoPlanos();
                servicoPlanos.criarPlano();
                break;
            case 2:
                ServicoPilotos.listaPilotosAtivos();
                break;
            case 3:
                console.log('1 - Listar todas Aerovias cadastradas de acordo com Origem/Destino')
                console.log('2 - Listar disponibilidade de uma Aerovia especifica')
                opcao = Number(prompt("Escolha uma opção: "));
                switch (opcao){
                    case 1:
                        ServicoAerovias.listaAeroviasEspecificas();
                        break;
                    case 2:
                        SlotsAerovias.pesquisaDisponibilidadeAerovias();
                        break;
                }
                ServicoAerovias.listaAeroviasEspecificas();
                break;
            case 4:
                console.log('1 - Listar todas os Planos de Voo cadastrados');
                console.log('2 - Listar Plano de Voo a partir do seu código especifico:');
                console.log('3 - Listar Plano de Voo a partir de uma data especifica:');
                console.log('4 - Listar Plano de Voo a partir de uma data especifica e para uma Aerovia especifica:');
                opcao = Number(prompt("\nEscolha uma opção: "));
                switch (opcao){
                    case 1:
                        ServicoPlanos.gerarRelatorio(ServicoPlanos.arquivoPlanos);
                        break;
                    case 2:
                        let opcao2 = Number(prompt('Digite o código do Plano de Voo que deseja pesquisar: '));
                        ServicoPlanos.listaPlanosEspecificos(opcao2);
                        break;
                    case 3:
                        let diaPesquisaPlano = Number(prompt('Informe o dia que gostaria de pesquisar: '));
                        let mesPesquisaPlano = Number(prompt('Informe o mes que gostaria de pesquisar: '));
                        let anoPesquisaPlano = Number(prompt('Informe o ano que gostaria de pesquisar: '));
                        ServicoPlanos.listaPlanosPorData(diaPesquisaPlano, mesPesquisaPlano, anoPesquisaPlano);
                        break;
                    case 4:
                        let identificadorAerovia = prompt("Informe o identificador da aerovia para pesquisa: ").toUpperCase();
                        let diaPesquisaAerovia = Number(prompt('Informe o dia da pesquisa (DD): '));
                        let mesPesquisaAerovia = Number(prompt('Informe o mês da pesquisa (MM): '));
                        let anoPesquisaAerovia = Number(prompt('Informe o ano da pesquisa (AAAA): '));
                        ServicoPlanos.listaPlanosPorAeroviaEData(identificadorAerovia, diaPesquisaAerovia, mesPesquisaAerovia, anoPesquisaAerovia); 
                        break;
                }
                break;
            case 5:
                let cancelamentoPlano = Number(prompt('Informe o código do plano que gostaria de cancelar: '));
                ServicoPlanos.cancelarPlano(cancelamentoPlano);
                break;
            case 6:
                ServicoPilotos.salvarPilotosEmArquivo();
                ServicoPlanos.salvarPlanosEmArquivo();
                console.log("\nENCERRANDO O PROGRAMA\n");
                break;
            default:
                console.log("\nOpção inválida!\n");
        }
    } while (opcao !== 6);
}
async function iniciarPrograma() {

        await ServicoPilotos.carregarPilotosDoArquivo();
        await ServicoPlanos.carregarPlanosDoArquivo();
        MenuPrincipal();

}

iniciarPrograma();