

// funçaõ para que quando clicar no número ele aparecer na tela e acresentar o proximo que eu digitar

let lista = ['', ''];
let simbol = '';
let restart = false;



function insert(num) {

  if (num === ',') {
    // Se o último caractere do número atual for uma vírgula, não faça nada
    if (lista[0].endsWith(',') || lista[1].endsWith(',')) {
      return;
    }
  }
  if (lista.length == 0 || simbol == '') {
    lista[0] += num;
    document.getElementById('display-calculator').value = lista[0];
    if (lista[0] != '') {
      console.log(lista[0]);
      document.getElementById('buttonClean').innerText = 'C';
    }
  } else if (lista.length >= 1 && simbol != '') {
    lista[1] += num;
    document.getElementById('display-calculator').value = lista[1];
    console.log(lista[1]);
  }



}


// guardar  o operador

function operator(value) {
  if (lista[0] && lista[1] != '') {
    let resultado = calcular(parseFloat(lista[0].replace(",", ".")), parseFloat(lista[1].replace(",", ".")), simbol);
    // document.getElementById('display-calculator').value = `${resultado}`
    lista[0] = `${resultado}`;
    lista[1] = '';
    // return
  }
  // document.getElementById('display-calculator').value = '';
  simbol = value;
  console.log(simbol)

}




function calcular(num1 = parseFloat(lista[0]), num2 = parseFloat(lista[1]), operacao = simbol) {
  if (!num1 || !num2) {
    return null;
  }

  let result = 0

  switch (operacao) {
    case '+':
      result = num1 + num2
      setDisplay(result)
      return result;

    case '-':
      result = num1 - num2
      setDisplay(result)
      return result;

    case '*':
      result = num1 * num2
      setDisplay(result)
      return result;

    case '/':
      result = num1 / num2
      setDisplay(result)
      return result;

    case '%':

      result = (num1 / num2) * 100;
      setDisplay(result)
      return result;


    default:
      break;
  }
}


function setDisplay(num) {
  document.getElementById('display-calculator').value = `${num}`.replace(".", ",")
  // Formata o número com pontos nas casas decimais
  let formattedNum = num.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10 });
  document.getElementById('display-calculator').value = formattedNum.replace(",", ".");

}




function percente() {
  if (lista[0] != '') {
    let resultado = document.getElementById('display-calculator').value
    resultado = parseFloat(lista[0]) / 100
    lista[0] = resultado
    console.log(resultado)
    document.getElementById('display-calculator').value = resultado

  }
}


function negative() {

  let resultado = document.getElementById('display-calculator').value
  resultado = (lista[0]) * -1
  lista[0] = resultado
  console.log(resultado)
  lista[0] = resultado
  document.getElementById('display-calculator').value = resultado



}

// função para limpar a tela

function clean() {

  document.getElementById('display-calculator').value = ""
  lista = ['', ''];
  simbol = '';
  document.getElementById('buttonClean').innerText = 'AC';


}





