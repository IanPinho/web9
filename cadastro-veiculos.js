// cadastro-veiculos.js
const veiculos = [];

function cadastrarVeiculo() {
    const chassi = prompt('Informe o número do chassi:');
    const placa = prompt('Informe a placa do veículo:');
    
    const veiculo = new Veiculo(chassi, placa);
    veiculos.push(veiculo);

    console.log('Veículo cadastrado:', veiculo);
    console.log('Lista de Veículos:', veiculos);
}

// Exemplo de uso:
cadastrarVeiculo();
cadastrarVeiculo();
