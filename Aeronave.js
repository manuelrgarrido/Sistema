
export class Aeronave {
    #matriculaAnv;
    #velCruzeiro;
    #autonomia;
    #tipoAnv;
    constructor(matriculaAnv, velCruzeiro, autonomia, tipoAnv){
        this.#matriculaAnv = matriculaAnv;
        this.#velCruzeiro = velCruzeiro;
        this.#autonomia = autonomia;
        this.#tipoAnv = tipoAnv;
        }
    get matriculaAnv(){return this.#matriculaAnv};
    get velCruzeiro(){return this.#velCruzeiro};
    get autonomia(){return this.#autonomia};
    get tipoAnv(){return this.#tipoAnv};
    set matriculaAnv(value){
        this.#matriculaAnv = value
    };
    set velCruzeiro(value){
        this.#velCruzeiro = value
    };
    set autonomia(value){
        this.#autonomia = value
    };    
    set tipoAnv(value){
        this.#tipoAnv = value;
    }
}
export class AeronaveParticular extends Aeronave {
    #empresaManutencao;
    constructor (matriculaAnv, velCruzeiro, autonomia, empresaManutencao){
        super(matriculaAnv, velCruzeiro, autonomia);
        this.#empresaManutencao = empresaManutencao;
        this.tipoAnv = 1;
    }
    get empresaManutencao(){return this.#empresaManutencao};
    set empresaManutencao(value){
        this.#empresaManutencao = value;
    };
}

export class AeronaveComercial extends Aeronave {
    #nomeEmpresa;
    constructor (matriculaAnv, velCruzeiro, autonomia, nomeEmpresa){
        super(matriculaAnv, velCruzeiro, autonomia);
        this.#nomeEmpresa = nomeEmpresa;
    }
    get nomeEmpresa(){return this.#nomeEmpresa};
    set nomeEmpresa(value){
        this.#nomeEmpresa = value
    };
}

export class AeronaveComercialCarga extends AeronaveComercial {
    #maximoCarga;
    constructor (matriculaAnv, velCruzeiro, autonomia, nomeEmpresa, maximoCarga){
        super(matriculaAnv, velCruzeiro, autonomia, nomeEmpresa);
        this.#maximoCarga = maximoCarga;
        this.tipoAnv = 2;
    }
    get maximoCarga(){return this.#maximoCarga};
    set maximoCarga(value){
        this.#maximoCarga = value
    };
}

export class AeronaveComercialPassageiro extends AeronaveComercial {
    #maximoPassageiro;
    constructor (matriculaAnv, velCruzeiro, autonomia, nomeEmpresa, maximoPassageiro){
        super(matriculaAnv, velCruzeiro, autonomia, nomeEmpresa);
        this.#maximoPassageiro = maximoPassageiro;
        this.tipoAnv = 3;
    }
    get maximoPassageiro(){return this.#maximoPassageiro};
    set maximoPassageiro(value){
        this.#maximoPassageiro = value
    };
}

