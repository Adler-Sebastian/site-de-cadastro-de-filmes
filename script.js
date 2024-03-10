let selectedRow = null;
function noFormulario(e) {
    event.preventDefault();
    let dadosFormulario = recuperarFormulario();
    if(selectedRow === null) {
        inserirDados(dadosFormulario);
    }
    else {
        atualizarDados(dadosFormulario);
    }
    resetarDados();
}



// função de recuperação de dados do formulario
function recuperarFormulario() {
    let dadosFormulario = {};
    dadosFormulario["nomeFilme"] = document.getElementById("nomeFilme").value; 
    dadosFormulario["anoFilme"] = document.getElementById("anoFilme").value; 
    dadosFormulario["direcaoFilme"] = document.getElementById("direcaoFilme").value; 
    dadosFormulario["notaFilme"] = document.getElementById("notaFilme").value; 
    return dadosFormulario;
}   

// função para inserir os dados
function inserirDados(dados) {
    let table = document.getElementById("listaLocal").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
        cell1.innerHTML = dados.nomeFilme;
    let cell2 = newRow.insertCell(1);
        cell2.innerHTML = dados.anoFilme;
    let cell3 = newRow.insertCell(2);
        cell3.innerHTML = dados.direcaoFilme;
    let cell4 = newRow.insertCell(3);
        cell4.innerHTML = dados.notaFilme;
    let cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='editDados(this)'>Editar</button> <button onClick='deletarDados(this)'>Excluir</button>`
}
