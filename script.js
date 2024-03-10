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

// função para editar
function editDados(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('nomeFilme').value = selectRow.cells[0].innerHTML;
    document.getElementById('anoFilme').value = selectRow.cells[1].innerHTML;
    document.getElementById('direcaoFilme').value = selectRow.cells[2].innerHTML;
    document.getElementById('notaFilme').value = selectRow.cells[3].innerHTML;
    }
    
    function atualizarDados(dadosFormulario) {
        selectedRow.cells[0].innerHTML = dadosFormulario.nomeFilme;
        selectedRow.cells[1].innerHTML = dadosFormulario.anoFilme;
        selectedRow.cells[2].innerHTML = dadosFormulario.direcaoFilme;
        selectedRow.cells[3].innerHTML = dadosFormulario.notaFilme;
    
    }
    
    // função para deletar
    function deletarDados(td) {
        if(confirm('Você quer apagar?')){
            row = td.parentElement.parentElement;
            document.getElementById('listaLocal').deleteRow(row.rowIndex);
        }
        resetarDados();
    }
    
    // função para reset
    function resetarDados() {
        document.getElementById('nomeFilme').value = '';
        document.getElementById('anoFilme').value = '';
        document.getElementById('direcaoFilme').value = '';
        document.getElementById('notaFilme').value = '';
    }