const selectStates = document.getElementById('input-states');
const brazilStates = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'Ap': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espirito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins' 
}

function states(uf) {
  for (let key in uf) {
    let item = document.createElement('option');
    item.innerText = uf[key];
    selectStates.appendChild(item);
  }
}

states(brazilStates);

// Variaveis Globais

const forms = document.querySelector('#formulario');
const inptName = document.querySelector('#input-name');
const inptEmail = document.querySelector('#input-email');
const inptCpf = document.querySelector('#input-cpf');
const inptEnd = document.querySelector('#input-end');
const inptCity = document.querySelector('#input-city');
const inptStates = document.querySelector('#input-states');
const inptCv = document.querySelector('#textarea-cv');
const inptCargo = document.querySelector('#input-cargo');
const inptDes = document.querySelector('#des-cargo');
const inptDate = document.querySelector('#data-calendario')
const btnSend = document.querySelector('#btn-action');
const btnClear = document.querySelector('#btn-clear');

// Funções

function inptSave(event) {
  event.preventDefault();
  localStorage.setItem('nome', inptName.value);
  localStorage.setItem('email', inptEmail.value);
  localStorage.setItem('cpf', inptCpf.value);
  localStorage.setItem('end', inptEnd.value);
  localStorage.setItem('cidade', inptCity.value);
  localStorage.setItem('estado', inptStates.value);
  localStorage.setItem('cv', inptCv.value);
  localStorage.setItem('cargo', inptCargo.value);
  localStorage.setItem('descricao', inptDes.value);
  localStorage.setItem('data', inptDate.value);
}

function clearForm() {
  const itemForms = document.querySelectorAll('input');
  for (let index = 0; index < itemForms.length; index += 1) {
    const inptUser = itemForms[index];
    inptUser.value = '';
    inptDes.value = '';
  }
}

// Botões

btnSend.addEventListener('click', inptSave);
btnClear.addEventListener('click', clearForm);