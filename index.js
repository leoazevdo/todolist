function abrirModal() {
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

function novaTarefa() {
  event.preventDefault();
  let tarefa = {
    titulo: formulario.titulo.value,
    descricao: descricao.value
  }
  fetch("http://localhost:3000/tarefas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(tarefa)
  })
    .then(response => response.json())
    .then(response => {
      fecharNovaTarefa();
      buscarTarefas();
    })
}

function removerTarefa(id) {
  fetch(`http://localhost:3000/tarefas/${id}`, {
    method: "DELETE"
  })
    .then(response => response.json())
    .then(response => {
      buscarTarefas();
    })
}

function pesquisarTarefa() {
  let lis = document.querySelectorAll("ul li");
  if (busca.value.length > 0) {
    lis.forEach(li => {
      if (!li.children[1].innerText.includes(busca.value)) {
        li.classList.add("hide");
      } else {
        li.classList.remove("hide");
      }

    })
  }    else {
      lis.forEach(li => {
        li.classList.remove("hide");
      })
    };
  }

