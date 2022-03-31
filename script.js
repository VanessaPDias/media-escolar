function pegarValorInput(id) {
  let valor = document.querySelector(id).value

  if (valor == "" || valor < 0 || valor > 10) {
    throw 'Informe o valor da nota de 0 a 10'
  }

  return parseFloat(valor)
}

function calcularMedia() {
  document.querySelector('#erro').innerHTML = ""
  try {
    const nota1 = pegarValorInput('#nota1')
    const nota2 = pegarValorInput('#nota2')
    const nota3 = pegarValorInput('#nota3')
    const nota4 = pegarValorInput('#nota4')

    var media = (nota1 + nota2 + nota3 + nota4) / 4
    media >= 5
      ? imprimirResultado(media, '&#128512 APROVADO!')
      : imprimirResultado(media, '&#128532 REPROVADO!')
  } catch (excecao) {
    document.querySelector('#erro').innerHTML = excecao
  }
  
}

function imprimirResultado(media, resultado) {
  document.querySelector('#resultado').innerHTML = `Sua média é ${media.toFixed(
    1
  )} ${resultado}`
}

function limparDados() {
  nota1.value = ''
  nota2.value = ''
  nota3.value = ''
  nota4.value = ''

  document.querySelector('#resultado').innerHTML = ''
}
