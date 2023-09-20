
export class Piloto {

    #matriculaPil;
    #nome;
    #habilitacao;

    constructor(matriculaPil, nome, habilitacao){
        this.#matriculaPil = matriculaPil;
        this.#nome = nome;
        this.#habilitacao = habilitacao;
        }
    
    get matriculaPil(){ return this.#matriculaPil };
    get nome(){ return this.#nome };
    get habilitacao(){ return this.#habilitacao };
    set matriculaPil(value){
        if (value.length != 6){this.#matriculaPil = -1.0}
        else {
            this.#matriculaPil = value; 
        }
    };
    set nome(value){
        this.#nome = value;
    }
    set habilitacao(value){
        this.#habilitacao = value;
        };

}

