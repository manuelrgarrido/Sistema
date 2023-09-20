import promtpsync from 'prompt-sync';
const prompt = promtpsync({ sigint: true });
import { Aerovia } from "./Aerovia.js";

export class ServicoAerovias {
    static arquivoAerovias = [];

    static listaAerovias(){
        console.log(ServicoAerovias.arquivoAerovias)
    }

    static gerarRelatorio(aerovias) {
        aerovias.forEach(aerovia => {
            console.log(`Identificador: ${aerovia.identificador}, Origem: ${aerovia.origem}, Destino: ${aerovia.destino}, Tamanho: ${aerovia.tamanho}`);

        });
    }

    static listaAeroviasEspecificas(){
        this.origem = prompt('Informe a origem da aerovia que gostaria de pesquisar: ').toUpperCase();
        this.destino = prompt('Informe o destino da aerovia que gostaria de pesquisar: ').toUpperCase();
        
        let aeroviasEspecificas = ServicoAerovias.arquivoAerovias.filter(a => a.origem === this.origem && a.destino === this.destino);
        
        if (aeroviasEspecificas.length === 0) {
            console.log('\nNão existem aerovias ligando esses dois pontos.');
            return;
        } else {
            console.log(`\nAerovias que ligam ${this.origem} a ${this.destino}:`);
            for(let aerovia of aeroviasEspecificas) {
                console.log(`\nCódigo: ${aerovia.identificador} | Origem: ${aerovia.origem} | Destino: ${aerovia.destino}`);
            }
        }
    }
}
let novaAerovia1 = new Aerovia('A123', 'POA', 'FLN', 800);
ServicoAerovias.arquivoAerovias.push(novaAerovia1)
let novaAerovia2 = new Aerovia('A456', 'FLN', 'POA', 800);
ServicoAerovias.arquivoAerovias.push(novaAerovia2)
