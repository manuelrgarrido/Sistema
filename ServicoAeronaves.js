import { AeronaveParticular } from './Aeronave.js';
import { AeronaveComercialCarga } from './Aeronave.js';
import { AeronaveComercialPassageiro } from './Aeronave.js';

export class ServicoAeronaves {
    static arquivoAeronaves = [];
    static gerarRelatorio(aeronaves) {
        aeronaves.forEach(aero => {
            console.log(`Matrícula: ${aero.matriculaAnv}, Vel. Cruzeiro: ${aero.velCruzeiro}, Autonomia: ${aero.autonomia}`);

        });
    }
}


let novaAeronave1 = new AeronaveParticular('PTVRL', 400, 1600, 'VoeSeguro Manutenção Ltda.');
ServicoAeronaves.arquivoAeronaves.push(novaAeronave1);
let novaAeronave2 = new AeronaveComercialPassageiro('PPABC', 600, 2400, 'Azul Linhas Aereas', 120);
ServicoAeronaves.arquivoAeronaves.push(novaAeronave2);
let novaAeronave3 = new AeronaveComercialCarga('PRATC', 800, 3000, 'Total Cargas', 50000);
ServicoAeronaves.arquivoAeronaves.push(novaAeronave3);