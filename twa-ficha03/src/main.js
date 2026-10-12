import './style.css'

const state = {
  status: 'loading', error: null, items: [],
  query: '', category: '', sortDir: 'desc',
  selectedId: null,
}

document.querySelector('#app').innerHTML = `
  <div class="container">
    <aside class="sidebar">
      <div class="controls">
        <input type="search" id="search" placeholder="Pesquisar...">
        
        <select id="category">
          <option value="">Categorias</option>


        </select>
        
        <button id="sort-btn">Ordenar</button>
      </div>

      <ul id="list">


      </ul>
    </aside>

    <section id="detail">

      <!-- Os detalhes do item selecionado vão aparecer aqui -->

      <p>Selecione um item para ver os detalhes.</p>

    </section>
  </div>
`

async function load(){
  loading();

  try {
    
    const resposta = await fetch('/items.json');

    if(!resposta.ok) {
      throw new Error (`Erro na rede: ${resposta.status}`)

    }


    const dados = await resposta.json();
    console.log(dados);

    
    state.items = dados;
    state.status = 'ready';

    const categoriasUnicas = [];
    for (const item of dados){

      if (!categoriasUnicas.includes(item.category)){
        categoriasUnicas.push(item.category)
      }
    }

    // colocar cetegorias no select
    const selectCategoria = document.querySelector('#category');
    for (const cat of categoriasUnicas){
      const option = document.createElement('option')
      option.value = cat;
      option.textContent = cat;
      selectCategoria.appendChild(option);


    }


    render();



  } catch (error) {
    state.status = 'Error'
    showError(error.message);
    
  }finally{
    console.log('pedido terminou')
  }
}

function loading () {
  document.querySelector('#list').innerHTML = '<p>A carregar dados...</p>';
}

function showError(mensagem){
  document.querySelector('#list').innerHTML=`<p style="color: red;">Erro: ${mensagem}</p>`
}
function render() {
  const ulElement = document.querySelector('#list');
  ulElement.innerHTML = ''; // Limpa a lista atual

  const itensFiltrados = [];
  
  for (const item of state.items) {
    const passaPesquisa = item.name.toLowerCase().includes(state.query.toLowerCase());
    const passaCategoria = state.category === '' || item.category === state.category;
    
    if (passaPesquisa && passaCategoria) {
      itensFiltrados.push(item);
    }
  }

  const itensOrdenados = sortByPrice(itensFiltrados, state.sortDir);

  for (const item of itensOrdenados) {
    const liElement = document.createElement('li');
    
    liElement.textContent = `${item.name} (${item.price}€)`; // nnome e  preço
    
    ulElement.appendChild(liElement);
  }
}

  
const pesquisaInput = document.querySelector('#search');
pesquisaInput.addEventListener('input', (evento)=>{

  const textoEscrito = evento.target.value;

  state.query = textoEscrito;

  render();

});


const categorySelect = document.querySelector('#category')

categorySelect.addEventListener('change',(evento)=>{

  const select = evento.target.value;

  state.category = select

  render();

})


const btnSort = document.getElementById('sort-btn')

btnSort.addEventListener('click', ()=>{


  if (state.sortDir ==='desc'){
    state.sortDir = 'asc';
  }
  else{
    state.sortDir = 'desc'
  }


  render();
})


function sortByPrice(lista, dir) {
  
  const copia = [...lista];

  copia.sort((a, b) => {
    if (dir === 'asc') {
      return a.price - b.price; // Do mais barato para o mais caro
    } else {
      return b.price - a.price; // Do mais caro para o mais barato
    }
  });

  return copia;
}

load();