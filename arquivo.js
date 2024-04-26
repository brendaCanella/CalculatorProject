

// funçaõ para que quando clicar no número ele aparecer na tela e acresentar o proximo que eu digitar

let firstValue = '';
let secondValue = '';
let lista = ['', ''];
let simbol = '';
let restart = false;





function insert(num) {
  if (lista.length == 0 || simbol == '') {
    lista[0] += num;
    document.getElementById('display-calculator').value = lista[0];
  } else if (lista.length >= 1 && simbol != '') {
    lista[1] += num;
    document.getElementById('display-calculator').value = lista[1];
  }

  console.log(lista);
}



function verificaSeCaractereOperadorMatematico(caracter) {
  return caracter == "+" || caracter == "-" || caracter == "*" || caracter == "/" || caracter == "="

}



// guardar  o operador

function operator(value) {
  if (lista[0] && lista[1]) {
    let resultado = calcular(parseFloat(lista[0]), parseFloat(lista[1]), simbol);
    document.getElementById('display-calculator').value = `${resultado}`
    lista[0] = `${resultado}`;
    lista[1] = ''
    return
  }

  document.getElementById('display-calculator').value = '';
  simbol = value;
  console.log(simbol)

}


function calcular(num1 = parseFloat(lista[0]), num2 = parseFloat(lista[1]), operacao = simbol) {
  if (!num1 || !num2) {
    return null;
  }

  switch (operacao) {
    case '+':
      document.getElementById('display-calculator').value = num1 + num2;
      return num1 + num2;

    case '-':
      document.getElementById('display-calculator').value = num1 - num2;
      return num1 - num2;

    case '*':
      document.getElementById('display-calculator').value = num1 * num2;
      return num1 * num2;

    case '/':
      document.getElementById('display-calculator').value = num1 / num2;
      return num1 / num2;

    default:
      break;
  }
}


// function igual() {
//   if (sinal == "+") {
//       resultadoFinal = parseFloat(primeiroValor) + parseFloat(segundoValor)
//   }
//   if (sinal == "/") {
//       resultadoFinal = parseFloat(primeiroValor) / parseFloat(segundoValor)
//   }
//   if (sinal == "-") {
//       resultadoFinal = parseFloat(primeiroValor) - parseFloat(segundoValor)
//   }
//   if (sinal == "x") {
//       resultadoFinal = parseFloat(primeiroValor) * parseFloat(segundoValor)
//   }
//   resultado.innerHTML = resultadoFinal
//   primeiroValor = resultadoFinal
//   temVirgula = false
//   segundoValor = ''
//   checarTamanhoResultado()
// }

// function checarTamanhoResultado() {
//   resultadoFinal = String(resultadoFinal)
//   if (resultadoFinal.length >= 8) {
//       resultadoFinal = JSON.parse(resultadoFinal);
//       resultado.innerHTML = resultadoFinal.toFixed(4)
//   }
// }
















// função para limpar a tela

function clean() {
  document.getElementById('display-calculator').value = ""
  lista = ['', ''];
  simbol = '';
  console.log(lista);
}


























//variaveis necessárias para  a operação

// let firstOperation
// let secondOperation
// let operation 


// function calculate() {
//   if (operator === null || firstValue === null) return;
//   let secondOperand = parseFloat(temporaryNumber.replace(",", "."));
//   let resultValue;

//   switch (operator) {
//     case "+":
//       resultValue = firstValue + secondOperand;
//       break;
//     case "-":
//       resultValue = firstValue - secondOperand;
//       break;
//     case "×":
//       resultValue = firstValue * secondOperand;
//       break;
//     case "÷":
//       resultValue = firstValue / secondOperand;
//       break;
//     default:
//       return;
//   }


//   operator = null;
//   firstValue = null;
//   restart = true;
//   percentageValue = null;
//   updateResult();



// }

// function setOperator(newOperator) {
//   if (temporaryNumber) {
//     calculate();

//     firstValue = parseFloat(temporaryNumber.replace(",", "."));
//     temporaryNumber = "";
//   }

//   operator = newOperator;
// }
