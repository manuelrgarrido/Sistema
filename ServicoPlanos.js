import promtpsync from 'prompt-sync';
const prompt = promtpsync({ sigint: true });
import { ServicoPilotos } from './ServicoPilotos.js';
import { ServicoAerovias } from './ServicoAerovia.js';
import { ServicoAeronaves } from './ServicoAeronaves.js';
import { PlanoDeVoo } from './PlanoDeVoo.js';
import fs from 'fs';

export class ServicoPlanos {
    static arquivoPlanos = [];
    static arquivoPlanosCarregados = [];
    static arquivoSlots = [];
    static codigoPlano = 0;
    static verificaSalvaSlot(identificadorAeroviaPlano, altitudePlano, diaPlano, mesPlano, anoPlano, horarioPartidaPlano){
            let verificaSlot = ServicoPlanos.arquivoSlots.find(slot => 
                slot.identificadorAeroviaPlano === identificadorAeroviaPlano &&
                slot.altitudePlano === altitudePlano &&
                slot.diaPlano === diaPlano &&
                slot.mesPlano === mesPlano &&
                slot.anoPlano === anoPlano &&
                slot.horarioPartidaPlano === horarioPartidaPlano
            );
                if (verificaSlot){
                    console.log('Slot já ocupado!');
                    return;
                }else{
                    let novoSlot = {
                        identificadorAeroviaPlano: identificadorAeroviaPlano,
                        altitudePlano: altitudePlano,
                        diaPlano: diaPlano,
                        mesPlano: mesPlano,
                        anoPlano: anoPlano,
                        horarioPartidaPlano: horarioPartidaPlano
                    };
                    ServicoPlanos.arquivoSlots.push(novoSlot);
                }
            }
    criarPlano(){
            let codigoPlano = 0
            let matriculaAnvPlano = prompt("Informe a matricula da ANV: ").toUpperCase();
            let verificaMatriculaAnvPlano = ServicoAeronaves.arquivoAeronaves.find(a => a.matriculaAnv ===matriculaAnvPlano);
            while (!verificaMatriculaAnvPlano){
                matriculaAnvPlano = prompt("Matricula da aeronave incorreta ou não cadastrada. Digite novamente: ").toUpperCase();
                verificaMatriculaAnvPlano = ServicoAeronaves.arquivoAeronaves.find(a => a.matriculaAnv === matriculaAnvPlano);
            };
            let matriculaPilPlano = Number(prompt("Informe a matricula do piloto: "));
            let verificaMatriculaPilPlano = ServicoPilotos.arquivoPilotosAtivos.find(a => a.matriculaPil === matriculaPilPlano);
            while (!verificaMatriculaPilPlano){
                matriculaPilPlano = Number(prompt('Matricula do piloto não cadastrada ou INATIVA! Digite novamente: '));
                verificaMatriculaPilPlano = ServicoPilotos.arquivoPilotosAtivos.find(a => a.matriculaPil === matriculaPilPlano);
            }; 
            let origemPlano = prompt('Informe o aeroporto de origem: ').toUpperCase();
            let verificaOrigemPlano = ServicoAerovias.arquivoAerovias.find(a => a.origem === origemPlano);
            while (!verificaOrigemPlano){
                origemPlano = prompt('Não existem aerovias partindo desta origem! Digite novamente: ').toUpperCase();
                verificaOrigemPlano = ServicoAerovias.arquivoAerovias.find(a => a.origem === origemPlano);
            };
            let destinoPlano = prompt('Informe o aeroporto de destino: ').toUpperCase(); 
            let verificaDestinoPlano = ServicoAerovias.arquivoAerovias.find(a => a.destino === destinoPlano);
            while (!verificaDestinoPlano){
                destinoPlano = prompt('Não existem aerovias chegando neste destino! Digite novamente: ').toUpperCase();
                verificaDestinoPlano = ServicoAerovias.arquivoAerovias.find(a => a.destino === destinoPlano);
            };
            let identificadorAeroviaPlano = prompt('Informe o código da aerovia: ').toUpperCase(); 
            let verificaIdentificadorPlano = ServicoAerovias.arquivoAerovias.find(a => a.identificador === identificadorAeroviaPlano);
            while (!verificaIdentificadorPlano){
                identificadorAeroviaPlano = prompt('Não existem aerovias com este código! Digite novamente: ').toUpperCase()
                verificaIdentificadorPlano = ServicoAerovias.arquivoAerovias.find(a => a.identificador === identificadorAeroviaPlano);
            };
            let horarioPartidaPlano = Number(prompt('Informe o horário de decolagem (HHMM): '));
            while (horarioPartidaPlano < 0 && horarioPartidaPlano > 2359 && horarioPartidaPlano.length < 4){
                horarioPartidaPlano = Number(prompt('Horário invalido. Digite novamente: '))};
            let altitudePlano = Number(prompt('Informe a altitude do voo: '));
            while (![25000, 26000, 27000, 28000, 29000, 30000, 31000, 32000, 33000, 34000, 35000].includes(altitudePlano)) {
                altitudePlano = Number(prompt('Altitude incorreta, digite a altitude novamente: '))}
                let tipoAeronave = ServicoAeronaves.arquivoAeronaves.find(a => a.matriculaAnv === matriculaAnvPlano).tipoAnv;
                switch(tipoAeronave) {
                    case 1: 
                        if (altitudePlano < 25000 || altitudePlano > 27000) {
                            altitudePlano = Number(prompt('Altitude incorreta para aeronave de pequeno porte. Informe uma altitude entre 25000 e 27000: '));
                        }
                        break;
                    case 2: 
                        if (altitudePlano < 28000) {
                            altitudePlano = Number(prompt('Altitude incorreta para aeronave comercial de passageiro. Informe uma altitude acima de 28000: '));
                        }
                        break;
                    case 3: 
                        if (altitudePlano < 28000) {
                            altitudePlano = Number(prompt('Altitude incorreta para aeronave comercial de carga. Informe uma altitude acima de 28000: '));
                        }
                        if (horarioPartidaPlano < 1800 || horarioPartidaPlano > 2400) {
                            horarioPartidaPlano = Number(prompt('Horário incorreto para aeronave comercial de carga. Por favor, informe um horário de decolagem entre seis da tarde e meia noite (1800 e 0000): '));
                        }
                        break;
                    default:
                        throw new Error('Tipo de aeronave não reconhecido.');
            } 
            
            
            let velocidadeCruzeiro = ServicoAeronaves.arquivoAeronaves.find(a => a.matriculaAnv === matriculaAnvPlano).velCruzeiro;
            let distanciaAerovia = ServicoAerovias.arquivoAerovias.find(a => a.identificador === identificadorAeroviaPlano).tamanho;
            let tempoDeVoo = distanciaAerovia / velocidadeCruzeiro;
            let horasDeVoo = Math.floor(tempoDeVoo);
            let minutosDeVoo = Math.round((tempoDeVoo - horasDeVoo) * 60);
            let horasPartida = Math.floor(horarioPartidaPlano / 100);
            let minutosPartida = horarioPartidaPlano % 100;
            let horasChegada = horasPartida + horasDeVoo;
            let minutosChegada = minutosPartida + minutosDeVoo;
            if (minutosChegada >= 60) {
                horasChegada += 1;
                minutosChegada -= 60;}
            let horarioChegada = Number(horasChegada * 100 + minutosChegada);   
            let diaPlano = Number(prompt('Informe o dia do plano (DD): '));
            while (diaPlano < 1 && diaPlano > 31){
                diaPlano = Number(prompt('Data Invalida! Digite novamente: '))
            };  
            let mesPlano = Number(prompt('Informe o mes do plano (MM): '));
            while (mesPlano < 1 && mesPlano > 12){
                mesPlano = Number(prompt('Mes Invalido! Digite novamente: '))
            };
            let anoPlano = Number(prompt('Informe o ano do plano (AAAA): '));
            while (anoPlano < 2000 && anoPlano > 2050){
                anoPlano = Number(prompt('Ano Invalido! Digite novamente: '))
            };
            ServicoPlanos.verificaSalvaSlot(identificadorAeroviaPlano, diaPlano, mesPlano, anoPlano, horarioPartidaPlano);
                let novoPlano = new PlanoDeVoo(
                    codigoPlano,
                    matriculaAnvPlano, 
                    matriculaPilPlano, 
                    origemPlano, 
                    destinoPlano, 
                    altitudePlano, 
                    identificadorAeroviaPlano,
                    horarioPartidaPlano,
                    horarioChegada,
                    diaPlano,
                    mesPlano,
                    anoPlano
                );
            ServicoPlanos.arquivoPlanos.push(novoPlano);
            codigoPlano += 1;
            console.log(`\nPLANO CADASTRADO COM SUCESSO!\nO código do seu plano é: ${codigoPlano}`);
            return novoPlano;
        }
    static gerarRelatorio(planos) {
        planos.forEach(plano => {
            console.log(`Codigo Plano: ${plano.codigoPlano}, 
            Aeronave: ${plano.matriculaAnvPlano}, 
            Piloto: ${plano.matriculaPilPlano}, 
            Origem: ${plano.origemPlano}, 
            Destino: ${plano.destinoPlano}, 
            Altitude: ${plano.altitudePlano}, 
            Aerovia: ${plano.identificadorAeroviaPlano}, 
            Horario Partida: ${plano.horarioPartidaPlano}, 
            Horario Chegada: ${plano.horarioChegadaPlano}, 
            Data: ${plano.diaPlano}/${plano.mesPlano}/${plano.anoPlano}`);

        });
    }
    static listaPlanosEspecificos(codigoPlanoPesquisa){
        let planoEspecifico = ServicoPlanos.arquivoPlanosCarregados.find(plano => plano.codigoPlano === codigoPlanoPesquisa);
        if (planoEspecifico) {
            console.log(`\nPlano de Voo com código ${codigoPlanoPesquisa}:`);
            console.log(`Código: ${planoEspecifico.codigoPlano} | Matrícula ANV: ${planoEspecifico.matriculaAnvPlano} | Origem: ${planoEspecifico.origemPlano} | Destino: ${planoEspecifico.destinoPlano}`);
        } else {
            console.log(`\nPlano de voo com código ${codigoPlanoPesquisa} não encontrado.`);
            };
    }
    static listaPlanosPorData(dia, mes, ano) {
        let planosDaData = ServicoPlanos.arquivoPlanosCarregados.filter(plano => plano.diaPlano === dia && plano.mesPlano === mes && plano.anoPlano === ano);

        if (planosDaData.length > 0) {
            console.log(`Planos de voo para a data ${dia}/${mes}/${ano}:`);
            planosDaData.forEach(plano => {
                console.log(`Código: ${plano.codigoPlano} | Matrícula ANV: ${plano.matriculaAnvPlano} | Origem: ${plano.origemPlano} | Destino: ${plano.destinoPlano}`);
            });
        } else {
            console.log(`Não há planos de voo cadastrados para a data ${dia}/${mes}/${ano}.`);
        }
    }
    static listaPlanosPorAeroviaEData(identificadorAerovia, dia, mes, ano) {
        let planosDaData = ServicoPlanos.arquivoPlanosCarregados.filter(plano => 
            plano.identificadorAeroviaPlano === identificadorAerovia && 
            plano.diaPlano === dia && 
            plano.mesPlano === mes && 
            plano.anoPlano === ano
        );

        if (planosDaData.length > 0) {
            console.log(`Planos de voo para a aerovia ${identificadorAerovia} na data ${dia}/${mes}/${ano}:`);
            planosDaData.forEach(plano => {
                console.log(`Código: ${plano.codigoPlano} | Matrícula ANV: ${plano.matriculaAnvPlano} | Origem: ${plano.origemPlano} | Destino: ${plano.destinoPlano}`);
            });
        } else {
            console.log(`Não há planos de voo cadastrados para a aerovia ${identificadorAerovia} na data ${dia}/${mes}/${ano}.`);
        }
    }
    static cancelarPlano(codigoPlano) {

        let plano = ServicoPlanos.arquivoPlanosCarregados.find(p => p.codigoPlano === codigoPlano);
        
        if (!plano) {
            console.log('Plano não encontrado!');
            return;
        }

        plano.status = "CANCELADO";

        const indexSlot = ServicoPlanos.arquivoSlots.findIndex(slot => 
            slot.identificadorAeroviaPlano === plano.identificadorAeroviaPlano &&
            slot.altitudePlano === plano.altitudePlano &&
            slot.diaPlano === plano.diaPlano &&
            slot.mesPlano === plano.mesPlano &&
            slot.anoPlano === plano.anoPlano &&
            slot.horarioPartidaPlano === plano.horarioPartidaPlano
        );
        if (indexSlot !== -1) {
            ServicoPlanos.arquivoSlots.splice(indexSlot, 1);
        }
        console.log(`O plano com código ${codigoPlano} foi cancelado e o slot foi liberado!`);
    }
    static salvarPlanosEmArquivo() {
        const dados = ServicoPlanos.arquivoPlanos.map(plano => ({
            codigoPlano: plano.codigoPlano,
            matriculaAnvPlano: plano.matriculaAnvPlano,
            matriculaPilPlano: plano.matriculaPilPlano,
            origemPlano: plano.origemPlano,
            destinoPlano: plano.destinoPlano,
            altitudePlano: plano.altitudePlano,
            identificadorAeroviaPlano: plano.identificadorAeroviaPlano,
            horarioPartidaPlano: plano.horarioPartidaPlano,
            horarioChegadaPlano: plano.horarioChegadaPlano,
            diaPlano: plano.diaPlano,
            mesPlano: plano.mesPlano,
            anoPlano: plano.anoPlano
        }));

        fs.appendFile('planosDeVoo.json', JSON.stringify(dados, null, 2), (err) => {
            if (err) {
                console.error('Houve um erro ao escrever no arquivo:', err);
            } else {
                console.log('Planos de voo salvos com sucesso!');
            }
        });
    }
    
    static carregarPlanosDoArquivo() {
        return new Promise((resolve, reject) => {
            fs.readFile('planosDeVoo.json', 'utf8', (err, data) => {
                if (err) {
                    console.error('Houve um erro ao ler o arquivo:', err);
                    reject(err);
                    return;
                }

                const planos = JSON.parse(data);
                for (const plano of planos) {
                    const planoDeVoo = new PlanoDeVoo(
                        plano.codigoPlano, 
                        plano.matriculaAnvPlano, 
                        plano.matriculaPilPlano, 
                        plano.origemPlano, 
                        plano.destinoPlano, 
                        plano.altitudePlano, 
                        plano.identificadorAeroviaPlano, 
                        plano.horarioPartidaPlano, 
                        plano.horarioChegadaPlano, 
                        plano.diaPlano, 
                        plano.mesPlano, 
                        plano.anoPlano
                    );
                    ServicoPlanos.arquivoPlanosCarregados.push(planoDeVoo);
                }
                resolve();
            });
        });
    }
}
