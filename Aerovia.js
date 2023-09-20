
export class Aerovia {
    #identificador;
    #origem;
    #destino;
    #tamanho;

    constructor(identificador, origem, destino, tamanho){
        this.#identificador = identificador
        this.#origem = origem
        this.#destino = destino
        this.#tamanho = tamanho
        }

    get identificador(){return this.#identificador};
    get origem(){return this.#origem};
    get destino(){return this.#destino};
    get tamanho(){return this.#tamanho};
    set identificador(value){
        this.#identificador = value
    };
    set origem(value){
        this.#origem = value
    };
    set destino(value){
        this.#destino = value
    };
    set tamanho(value){
        this.#tamanho = value
    };

}

