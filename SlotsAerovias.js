import promtpsync from 'prompt-sync';
const prompt = promtpsync({ sigint: true });
import { PlanoDeVoo } from "./PlanoDeVoo.js";
import { ServicoPlanos } from './ServicoPlanos.js';

export class SlotsAerovias extends PlanoDeVoo{
    static listaSlots(){
        console.log(ServicoPlanos.arquivoSlots);
    }

    static pesquisaDisponibilidadeAerovias(){
        let identificadorAerovia = prompt("Informe o código da aerovia para pesquisa: ").toUpperCase();
        let dia = Number(prompt('Informe o dia da pesquisa (DD): '));
        let mes = Number(prompt('Informe o mes da pesquisa (MM): '));
        let ano = Number(prompt('Informe o ano da pesquisa (AAAA): '));
        let horarioPartida = Number(prompt('Informe o horário de partida para pesquisa (HHMM): '));

        let slotsOcupados = ServicoPlanos.arquivoSlots.filter(slot => 
            slot.identificadorAeroviaPlano === identificadorAerovia &&
            slot.diaPlano === dia &&
            slot.mesPlano === mes &&
            slot.anoPlano === ano &&
            slot.horarioPartidaPlano === horarioPartida
        );

        let altitudes = [25000, 26000, 27000, 28000, 29000, 30000, 31000, 32000, 33000, 34000, 35000];
        let altitudesOcupadas = slotsOcupados.map(slot => slot.altitudePlano);
        let altitudesDisponiveis = altitudes.filter(altitude => !altitudesOcupadas.includes(altitude));

        console.log(`Altitudes disponíveis na aerovia ${identificadorAerovia} em ${dia}/${mes}/${ano} às ${horarioPartida}:`);
        console.log(altitudesDisponiveis.join(', '));
    }
}
