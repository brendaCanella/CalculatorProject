

// funçaõ para que quando clicar no número ele aparecer na tela e acresentar o proximo que eu digitar

let lista = ['', ''];
let simbol = '';
// let restart = false;




function insert(num) {
  // Verifica se o número digitado é uma vírgula, se for ele não pode ser digitado em seguida
  if (num === ',') {
    if (lista[0].endsWith(',') || lista[1].endsWith(',')) {
      return;
    }
  }

  if (lista.length == 0 || simbol == '') {
    lista[0] += num;
    // Formata o número com pontos a cada três dígitos
    let formattedNumber = formatNumber(lista[0]);
    document.getElementById('display-calculator').value = formattedNumber;
    if (lista[0] != '') {
      // console.log(lista[0]);
      document.getElementById('buttonClean').innerText = 'C';
    }
  } else if (lista.length >= 1 && simbol != '') {
    lista[1] += num;
    let formattedNumber = formatNumber(lista[1]);
    document.getElementById('display-calculator').value = formattedNumber;
    console.log(lista[1]);
  }
}


// esta função recebe um número como entrada, adiciona pontos a cada três dígitos na parte inteira e retorna o número formatado.
function formatNumber(num) {
  let parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(",");
}



// guardar  o operador

function operator(value) {
  if (lista[0] && lista[1] != '') {
    let resultado = calcular(parseFloat(lista[0].replace(",", ".")), parseFloat(lista[1].replace(",", ".")), simbol);
    // document.getElementById('display-calculator').value = `${resultado}`
    lista[0] = `${resultado}`;
    console.log(resultado);
    lista[1] = '';
  }
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




    default:
      break;
  }
}


function setDisplay(num) {


  if (num.toString().replace('.', '').length > 7) {
    // Se for maior, diminua o tamanho da fonte do display
    document.getElementById('display-calculator').style.fontSize = '50px'; // Defina o tamanho da fonte desejado
  } else {
    // Caso contrário, mantenha o tamanho da fonte padrão
    document.getElementById('display-calculator').style.fontSize = ''; // Volte ao tamanho da fonte padrão
  } document.getElementById('display-calculator').value = `${num}`.replace(",", ".")
  // Formata o número com pontos nas casas decimais
  let formattedNum = num.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10 });
  document.getElementById('display-calculator').value = formattedNum.replace(".", ",");
  replace

}



function percente() {
  lista[0]= lista[0].replace(",", ".");  console.log(lista[0], lista[1], simbol)
  lista[1]= lista[1].replace(",", ".");
  if (lista[0] != '') {
    let resultado = document.getElementById('display-calculator').value
    resultado = parseFloat(lista[0]) / 100
    lista[0] = resultado
    document.getElementById('display-calculator').value = formatNumber(resultado);

  }
  if (simbol != '' && lista[0] && lista[1]) {
    porcentagem = (lista[0] * lista[1]) / 100
    document.getElementById('display-calculator').value = formatNumber(porcentagem * 100);
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





