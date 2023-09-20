import fs from 'fs';
import { Piloto } from "./Piloto.js";

export class ServicoPilotos {
    static arquivoPilotosCarregados = [];
    static arquivoPilotos = [];
    static arquivoPilotosAtivos = [];
    static arquivoPilotosAtivosCarregados = [];
    
    /*static listaPilotos(){
        console.log(ServicoPilotos.arquivoPilotos);
    };
    
    static listaPilotosAtivos() {
        let pilotosAtivos = ServicoPilotos.arquivoPilotos.filter(piloto => piloto.habilitacao === 1);
        if (pilotosAtivos.length > 0) {
            console.log("Pilotos com habilitação ATIVA:");
            pilotosAtivos.forEach(piloto => {ServicoPilotos.arquivoPilotosAtivos.push(piloto) &&
                console.log(`Matrícula: ${piloto.matriculaPil}, Nome: ${piloto.nome}`);
            });
        } else {
            console.log("Não há pilotos com habilitação ATIVA.");
        }
    };*/
    static salvarPilotosEmArquivo() {
        const dados = ServicoPilotos.arquivoPilotos.map(piloto => ({
            matriculaPil: piloto.matriculaPil,
            nome: piloto.nome,
            habilitacao: piloto.habilitacao
        }));

        fs.writeFile('pilotos.json', JSON.stringify(dados, null, 2), (err) => {
            if (err) {
                console.error('Houve um erro ao escrever no arquivo:', err);
            } else {
                console.log('Pilotos salvos com sucesso!');
            }
        });
    }
    
    static carregarPilotosDoArquivo() {
        return new Promise((resolve, reject) => {
            fs.readFile('pilotos.json', 'utf8', (err, data) => {
                if (err) {
                    console.error('Houve um erro ao ler o arquivo:', err);
                    reject(err);
                    return;
                }

                const pilotos = JSON.parse(data);
                for (const pilotoData of pilotos) {
                    const piloto = new Piloto(pilotoData.matriculaPil, pilotoData.nome, pilotoData.habilitacao);
                    ServicoPilotos.arquivoPilotosCarregados.push(piloto);
                    
                    if (pilotoData.habilitacao === 1) {
                        ServicoPilotos.arquivoPilotosAtivosCarregados.push(piloto);
                    }
                }
                resolve();
            });
        });
    }
    /*static salvarPilotosEmArquivo() {
        let dados = ServicoPilotos.arquivoPilotos.map(piloto => `Matrícula: ${piloto.matriculaPil}, Nome: ${piloto.nome}, Habilitação: ${piloto.habilitacao === 1 ? 'ATIVA' : 'INATIVA'}`).join('\n');

        fs.writeFile('pilotos.txt', dados, (err) => {
            if (err) {
                console.error('Houve um erro ao escrever no arquivo:', err);
            } else {
                console.log('Pilotos salvos com sucesso!');
            }
        });
    }
    static carregarPilotosDoArquivo() {
            return new Promise((resolve, reject) => {
                fs.readFile('pilotos.txt', 'utf8', (err, data) => {
                    if (err) {
                        console.error('Houve um erro ao ler o arquivo:', err);
                        reject(err);
                        return;
                    }
            
                    const linhas = data.split('\n');

                    for (const linha of linhas) {
                        const matriculaMatch = linha.match(/Matrícula: (\d+),/);
                        const nomeMatch = linha.match(/Nome: (.*), Habilitação/);
                        const habilitacaoMatch = linha.match(/Habilitação: (ATIVA|INATIVA)/);
            
                        if (matriculaMatch && nomeMatch && habilitacaoMatch) {
                            const matriculaPil = parseInt(matriculaMatch[1]);
                            const nome = nomeMatch[1];
                            const habilitacao = habilitacaoMatch[1] === 'ATIVA' ? 1 : 2;
            
                            const piloto = new Piloto(matriculaPil, nome, habilitacao);
                            ServicoPilotos.arquivoPilotosCarregados.push(piloto);
                            if (habilitacao === 1) {
                                ServicoPilotos.arquivoPilotosAtivosCarregados.push(piloto);
                    }
                }
            }
            resolve();
        });
    });
    }*/
}
let novoPiloto1 = new Piloto(123456, 'Manuel Garrido', 1);
ServicoPilotos.arquivoPilotos.push(novoPiloto1);
if (novoPiloto1.habilitacao === 1){
    ServicoPilotos.arquivoPilotosAtivos.push(novoPiloto1)
};
let novoPiloto2 = new Piloto(223456, 'João da Silva', 1);
ServicoPilotos.arquivoPilotos.push(novoPiloto2);
if (novoPiloto2.habilitacao === 1){
    ServicoPilotos.arquivoPilotosAtivos.push(novoPiloto2)
};
let novoPiloto3 = new Piloto(324567, 'Maria Lopes', 1);
ServicoPilotos.arquivoPilotos.push(novoPiloto3);
if (novoPiloto3.habilitacao === 1){
    ServicoPilotos.arquivoPilotosAtivos.push(novoPiloto3)
};
let novoPiloto4 = new Piloto(456789, 'Pedro Silva', 2);
ServicoPilotos.arquivoPilotos.push(novoPiloto4);
if (novoPiloto3.habilitacao === 1){
    ServicoPilotos.arquivoPilotosAtivos.push(novoPiloto4)
};