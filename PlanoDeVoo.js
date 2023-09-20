import promtpsync from 'prompt-sync';
const prompt = promtpsync({ sigint: true });
let codigoPlano = 0

export class PlanoDeVoo {
    #codigoPlano;
    #matriculaAnvPlano;
    #matriculaPilPlano;
    #origemPlano;
    #destinoPlano;
    #altitudePlano;
    #identificadorAeroviaPlano;
    #horarioPartidaPlano;
    #horarioChegadaPlano;
    #diaPlano;
    #mesPlano;
    #anoPlano;

    constructor(codigoPlano, matriculaAnvPlano, matriculaPilPlano, origemPlano, destinoPlano, altitudePlano, identificadorAeroviaPlano, horarioPartidaPlano, horarioChegadaPlano, diaPlano, mesPlano, anoPlano){
        this.#codigoPlano = codigoPlano;
        this.#matriculaAnvPlano = matriculaAnvPlano;
        this.#matriculaPilPlano = matriculaPilPlano;
        this.#origemPlano = origemPlano;
        this.#destinoPlano = destinoPlano;
        this.#altitudePlano = altitudePlano;
        this.#identificadorAeroviaPlano = identificadorAeroviaPlano;
        this.#horarioPartidaPlano = horarioPartidaPlano;
        this.#horarioChegadaPlano = horarioChegadaPlano;
        this.#diaPlano = diaPlano;
        this.#mesPlano = mesPlano;
        this.#anoPlano = anoPlano;
    }

    get codigoPlano(){ return this.#codigoPlano };
    get matriculaAnvPlano(){ return this.#matriculaAnvPlano };
    get matriculaPilPlano(){ return this.#matriculaPilPlano };
    get origemPlano(){ return this.#origemPlano };
    get destinoPlano(){ return this.#destinoPlano };
    get altitudePlano(){ return this.#altitudePlano };
    get identificadorAeroviaPlano(){ return this.#identificadorAeroviaPlano };
    get horarioPartidaPlano(){ return this.#horarioPartidaPlano };
    get horarioChegadaPlano(){ return this.#horarioChegadaPlano };
    get diaPlano(){ return this.#diaPlano };
    get mesPlano(){ return this.#mesPlano };
    get anoPlano(){ return this.#anoPlano};
    
    set codigoPlano(value){
        this.#codigoPlano = value
    };
    set matriculaAnvPlano(value){
        this.#matriculaAnvPlano = value; 
        }

    set matriculaPilPlano(value){  
        this.#matriculaPilPlano = value
    };
    set origemPlano(value){
            this.#origemPlano = value
    };
    set destinoPlano(value){
            this.#destinoPlano = value
    };
    set identificadorAeroviaPlano(value){
            this.#identificadorAeroviaPlano = value
    };
    set altitudePlano(value){
        this.#altitudePlano = value 
    };
    set horarioPartidaPlano(value){
        this.#horarioPartidaPlano = value
    };
    set horarioChegadaPlano(value){
        this.#horarioChegadaPlano = value
    };
    set diaPlano(value){ 
        this.#diaPlano = value
    };
    set mesPlano(value){
        this.#mesPlano = value 
    };
    set anoPlano(value){
        this.#anoPlano = value 
    };
}


/*
export class PlanoDeVoo {
    static arquivoPlanos = [];
    static arquivoSlots = [];

    constructor(codigoPlano, matriculaAnvPlano, matriculaPilPlano, origemPlano, destinoPlano, altitudePlano, identificadorAeroviaPlano, horarioPartidaPlano, horarioChegadaPlano, diaPlano, mesPlano, anoPlano){
        this.codigoPlano = codigoPlano;
        this.matriculaAnvPlano = matriculaAnvPlano;
        this.matriculaPilPlano = matriculaPilPlano;
        this.origemPlano = origemPlano;
        this.destinoPlano = destinoPlano;
        this.altitudePlano = altitudePlano;
        this.identificadorAeroviaPlano = identificadorAeroviaPlano;
        this.horarioPartidaPlano = horarioPartidaPlano;
        this.horarioChegadaPlano = horarioChegadaPlano;
        this.diaPlano = diaPlano;
        this.mesPlano = mesPlano;
        this.anoPlano = anoPlano;
    }

    static criarPlano(){
        this.matriculaAnvPlano = prompt("Informe a matricula da ANV: ").toUpperCase();
        let verificaMatriculaAnvPlano = Aeronave.arquivoAeronaves.find(a => a.matriculaAnv === this.matriculaAnvPlano);
        if (!verificaMatriculaAnvPlano){
            this.matriculaAnvPlano = prompt("Matricula incorreta. Informe a matricula da ANV novamente: ").toUpperCase();
            return;
        }
        this.matriculaPilPlano = Number(prompt("Informe a matricula do piloto: "));
        let verificaMatriculaPilPlano = ServicoPilotos.arquivoPilotosAtivos.find(a => a.matriculaPil === this.matriculaPilPlano);
        if (!verificaMatriculaPilPlano){
            console.log('Matricula não cadastrada ou INATIVA!')
            return;
        }
        this.origemPlano = prompt('Informe o aeroporto de origem: ').toUpperCase();
        let verificaOrigemPlano = Aerovia.arquivoAerovias.find(a => a.origem === this.origemPlano);
        if (!verificaOrigemPlano){
            console.log('Não existem aerovias partindo desta origem! ');
            return;
        }
        this.destinoPlano = prompt('Informe o aeroporto de destino: ').toUpperCase();
        let verificaDestinoPlano = Aerovia.arquivoAerovias.find(a => a.destino === this.destinoPlano);
        if (!verificaDestinoPlano){
            console.log('Não existem aerovias chegando neste destino! ');
            return;
        }

        this.identificadorAeroviaPlano = prompt('Informe o código da aerovia: ').toUpperCase();
        let verificaIdentificadorPlano = Aerovia.arquivoAerovias.find(a => a.identificador === this.identificadorAeroviaPlano);
        if (!verificaIdentificadorPlano){
            console.log('Não existem aerovias com este código! ');
            return;
        }

        this.altitudePlano = Number(prompt('Informe a altitude do voo: '));
        while (![25000, 26000, 27000, 28000, 29000, 30000, 31000, 32000, 33000, 34000, 35000].includes(this.altitudePlano)) {
            this.altitudePlano = Number(prompt('Altitude incorreta, digite a altitude novamente: '));
        };
        let tipoAeronave = Aeronave.arquivoAeronaves.find(a => a.matriculaAnv === this.matriculaAnvPlano).tipoAnv;
        this.horarioPartidaPlano = Number(prompt('Informe o horário de decolagem (HHMM): '));
        let velocidadeCruzeiro = Aeronave.arquivoAeronaves.find(a => a.matriculaAnv === this.matriculaAnvPlano).velCruzeiro;
        let distanciaAerovia = Aerovia.arquivoAerovias.find(a => a.identificador === this.identificadorAeroviaPlano).tamanho;
        let tempoDeVoo = distanciaAerovia / velocidadeCruzeiro;
        let horasDeVoo = Math.floor(tempoDeVoo);
        let minutosDeVoo = Math.round((tempoDeVoo - horasDeVoo) * 60);
        let horasPartida = Math.floor(this.horarioPartidaPlano / 100);
        let minutosPartida = this.horarioPartidaPlano % 100;

        let horasChegada = horasPartida + horasDeVoo;
        let minutosChegada = minutosPartida + minutosDeVoo;

        if (minutosChegada >= 60) {
            horasChegada += 1;
            minutosChegada -= 60;
        }

        this.horarioChegadaPlano = Number(horasChegada * 100 + minutosChegada);
        switch(tipoAeronave) {
            case 1: 
                while (this.altitudePlano < 25000 || this.altitudePlano > 27000) {
                    this.altitudePlano = Number(prompt('Altitude incorreta para aeronave de pequeno porte. Informe uma altitude entre 25000 e 27000: '));
                }
                break;
            case 2: 
                while (this.altitudePlano <= 28000) {
                    this.altitudePlano = Number(prompt('Altitude incorreta para aeronave comercial de passageiro. Informe uma altitude acima de 28000: '));
                }
                break;
            case 3: 
                while (this.altitudePlano <= 28000) {
                    this.altitudePlano = Number(prompt('Altitude incorreta para aeronave comercial de carga. Informe uma altitude acima de 28000: '));
                }
                while (this.horarioPartidaPlano < 1800 || this.horarioPartidaPlano > 2400) {
                    this.horarioPartidaPlano = Number(prompt('Horário incorreto para aeronave comercial de carga. Por favor, informe um horário de decolagem entre seis da tarde e meia noite (1800 e 0000): '));
                }
            }        
        this.diaPlano = Number(prompt('Informe o dia do plano (DD): '));
        this.mesPlano = Number(prompt('Informe o mes do plano (MM): '));
        this.anoPlano = Number(prompt('Informe o ano do plano (AAAA): '));

        let verificaSlot = PlanoDeVoo.arquivoSlots.find(slot => 
            slot.identificadorAeroviaPlano === this.identificadorAeroviaPlano &&
            slot.altitudePlano === this.altitudePlano &&
            slot.diaPlano === this.diaPlano &&
            slot.mesPlano === this.mesPlano &&
            slot.anoPlano === this.anoPlano &&
            slot.horarioPartidaPlano === this.horarioPartidaPlano
        );
        if (verificaSlot){
            console.log('Slot já ocupado!');
            return;
        }else{
            let novoSlot = {
                identificadorAeroviaPlano: this.identificadorAeroviaPlano,
                altitudePlano: this.altitudePlano,
                diaPlano: this.diaPlano,
                mesPlano: this.mesPlano,
                anoPlano: this.anoPlano,
                horarioPartidaPlano: this.horarioPartidaPlano
            };
            PlanoDeVoo.arquivoSlots.push(novoSlot);
        }
        this.codigoPlano = codigoPlano + 1;
        let novoPlano = new PlanoDeVoo(this.codigoPlano, this.matriculaAnvPlano, this.matriculaPilPlano, this.origemPlano, this.destinoPlano, this.altitudePlano, this.identificadorAeroviaPlano, this.horarioPartidaPlano, this.horarioChegadaPlano, this.diaPlano, this.mesPlano, this.anoPlano);
        PlanoDeVoo.arquivoPlanos.push(novoPlano);
        codigoPlano += 1;
        console.log(`\nPLANO CADASTRADO COM SUCESSO!\nO código do seu plano é: ${this.codigoPlano}`);
        return novoPlano
    }

    static listaPlanos(){
        console.log(PlanoDeVoo.arquivoPlanos);
    }
    static listaPlanosEspecificos(codigoPlanoPesquisa){
        let planoEspecifico = PlanoDeVoo.arquivoPlanos.find(plano => plano.codigoPlano === codigoPlanoPesquisa);
    
    if (planoEspecifico) {
        console.log(`\nPlano de Voo com código ${codigoPlanoPesquisa}:`);
        console.log(`Código: ${planoEspecifico.codigoPlano} | Matrícula ANV: ${planoEspecifico.matriculaAnvPlano} | Origem: ${planoEspecifico.origemPlano} | Destino: ${planoEspecifico.destinoPlano}`);
    } else {
        console.log(`\nPlano de voo com código ${codigoPlanoPesquisa} não encontrado.`);
        };
    }
    static listaPlanosPorData(dia, mes, ano) {
        let planosDaData = this.arquivoPlanos.filter(plano => plano.diaPlano === dia && plano.mesPlano === mes && plano.anoPlano === ano);
    
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
        let planosDaData = this.arquivoPlanos.filter(plano => 
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

        let plano = this.arquivoPlanos.find(p => p.codigoPlano === codigoPlano);
        
        if (!plano) {
            console.log('Plano não encontrado!');
            return;
        }

        plano.status = "CANCELADO";

        const indexSlot = this.arquivoSlots.findIndex(slot => 
            slot.identificadorAeroviaPlano === plano.identificadorAeroviaPlano &&
            slot.altitudePlano === plano.altitudePlano &&
            slot.diaPlano === plano.diaPlano &&
            slot.mesPlano === plano.mesPlano &&
            slot.anoPlano === plano.anoPlano &&
            slot.horarioPartidaPlano === plano.horarioPartidaPlano
        );
        if (indexSlot !== -1) {
            this.arquivoSlots.splice(indexSlot, 1);
        }
        console.log(`O plano com código ${codigoPlano} foi cancelado e o slot foi liberado!`);
    }
    static salvarPlanosEmArquivo() {
        let dados = PlanoDeVoo.arquivoPlanos.map(plano => {
            return `Código: ${plano.codigoPlano}, Matrícula Aeronave: ${plano.matriculaAnvPlano}, Matrícula Piloto: ${plano.matriculaPilPlano}, Origem: ${plano.origemPlano}, Destino: ${plano.destinoPlano}, Altitude: ${plano.altitudePlano}, Identificador Aerovia: ${plano.identificadorAeroviaPlano}, Horário Partida: ${plano.horarioPartidaPlano}, Horário Chegada: ${plano.horarioChegadaPlano}, Dia: ${plano.diaPlano}, Mês: ${plano.mesPlano}, Ano: ${plano.anoPlano}`
        }).join('\n');

        fs.writeFile('planosDeVoo.txt', dados, (err) => {
            if (err) {
                console.error('Houve um erro ao escrever no arquivo:', err);
            } else {
                console.log('Planos de voo salvos com sucesso!');
            }
        });
    }
    static carregarPlanosDoArquivo() {
        return new Promise((resolve, reject) => {
            fs.readFile('planosDeVoo.txt', 'utf8', (err, data) => {
                if (err) {
                    console.error('Houve um erro ao ler o arquivo:', err);
                    reject(err);
                    return;
                }

                const linhas = data.split('\n');

                for (const linha of linhas) {

                    const codigoMatch = linha.match(/Código: (.*?),/);
                    const matriculaAnvMatch = linha.match(/Matrícula Aeronave: (.*?),/);
                    const matriculaPilMatch = linha.match(/Matrícula Piloto: (.*?),/);
                    const origemMatch = linha.match(/Origem: (.*?),/);
                    const destinoMatch = linha.match(/Destino: (.*?),/);
                    const altitudeMatch = linha.match(/Altitude: (.*?),/);
                    const identificadorAeroviaMatch = linha.match(/Identificador Aerovia: (.*?),/);
                    const horarioPartidaMatch = linha.match(/Horário Partida: (.*?),/);
                    const horarioChegadaMatch = linha.match(/Horário Chegada: (.*?),/);
                    const diaMatch = linha.match(/Dia: (.*?),/);
                    const mesMatch = linha.match(/Mês: (.*?),/);
                    const anoMatch = linha.match(/Ano: (.*)/);


                    if (codigoMatch && matriculaAnvMatch && matriculaPilMatch && origemMatch && destinoMatch && altitudeMatch && identificadorAeroviaMatch && horarioPartidaMatch && horarioChegadaMatch && diaMatch && mesMatch && anoMatch) {
                        const plano = new PlanoDeVoo(
                            codigoMatch[1], 
                            matriculaAnvMatch[1], 
                            matriculaPilMatch[1], 
                            origemMatch[1], 
                            destinoMatch[1], 
                            altitudeMatch[1], 
                            identificadorAeroviaMatch[1], 
                            horarioPartidaMatch[1], 
                            horarioChegadaMatch[1], 
                            diaMatch[1], 
                            mesMatch[1], 
                            anoMatch[1]
                        );
                        PlanoDeVoo.arquivoPlanos.push(plano);
                    }
                }
                resolve();
            });
        });

    }
}*/