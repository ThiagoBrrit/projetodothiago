const form = document.getElementById("formS");
const contatos = [];
const salvos = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionalinha();
    atualizatabela();
    atualizanumerosalvos();

});

function adicionalinha() {
    const inputnome = document.getElementById('nome-');
    const inputtel = document.getElementById('tel-');

    contatos.push(parseFloat(inputnome.value));
    salvos.push(parseFloat(inputtel.value));

    let linha = '<tr>';
    linha += '<td>' + inputnome.value + '</td>';
    linha += '<td>' + inputtel.value + '</td>';
    linha += '</tr>';

    linhas += linha;

    inputnome.value = '';
    inputtel.value = '';
};

function atualizatabela() {
    const corpotable = document.querySelector('tbody');
    corpotable.innerHTML = linhas;
};

function atualizanumerosalvos() {
    const teste = salvoscontatos();

    document.getElementById('salvosX').innerHTML = teste;
};

function salvoscontatos() {
    let somasalvos = 0;
    
    for (let i = 0; i < salvos.length; i++) {
        somasalvos += salvos[i];
    }

    return salvos.length;
};

