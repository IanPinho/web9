// veiculo.js
class Veiculo {
    #chassi;
    #placa;

    constructor(chassi, placa) {
        this.#chassi = chassi;
        this.#placa = placa;
    }

    getChassi() {
        return this.#chassi;
    }

    getPlaca() {
        return this.#placa;
    }
}
