function novaTarefa (){
 overlay.classList.add('active');
 novatarefa.classList.add('active');

} 

function fecharNovaTarefa() {
 overlay.classList.remove('active');
 novatarefa.classList.remove('active');
}

function buscarTarefas() {
  fetch("http://localhost:3000/tarefas")
    .then(response => response.json())
    .then(response => {
      adicionarTarefa(response);
    })
} buscarTarefas();

function adicionarTarefa(listaDeTarefas) {
  if (listaDeTarefas.length > 0) {
    lista.innerHTML = "";
    listaDeTarefas.map(tarefa => {
      lista.innerHTML += `
      <li>
        <h5>${tarefa.titulo}</h5>
        <p>${tarefa.descricao}</p>
        <div class="actions">
          <box-icon name='trash' onclick="removerTarefa(${tarefa.id})"></box-icon>
        </div>
      
      </li>
      `;
    })
  }
}
      