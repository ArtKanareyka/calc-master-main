const Sshifer = 1.715 // Площадь шифера 1750x980

function isChecked(key) {
  let arr = $(`.calc-${key} input`).filter((i, item) => item.value == '')
  arr.addClass('is-invalid')
  return arr.length == 0 // Добавляем красную рамку на инпут если нет значений
}

// Односкатная
function calculateFirst() {
  if (!isChecked(1)) return

  let A = +$('#shed-roof-A').val()
  let B = +$('#shed-roof-B').val()
  let C1 = +$('#shed-roof-C1').val()
  let C2 = +$('#shed-roof-C2').val()
  let D = +$('#shed-roof-D').val()

  let K = Math.sqrt(B ** 2 + A ** 2) // Длина крыши
  let K1 = (K * C1) / A //Длина свеса 1
  let K2 = (K * C2) / A //Длина свеса 2
  let S = D * (K + K1 + K2) //Площадь крыши

  $('#shed-roof-result').text(
    'Количество листов: ' + Math.ceil((S * 1.15) / Sshifer) + ' шт.'
  ) // Количества поштучно шифера на крышу с учетом нахлеста
  $('#shed-roof-S').text('Площадь: ' + S.toFixed(2) + ' м2')
}

// Двускатная
function calculateSecond() {
  if (!isChecked(2)) return

  let A = +$('#gable-roof-A').val()
  let B = +$('#gable-roof-B').val()
  let C = +$('#gable-roof-C').val()
  let D = +$('#gable-roof-D').val()

  let K = Math.sqrt(B ** 2 + A ** 2) // Длина крыши
  let K1 = (K * C) / A //Длина свеса
  let S = D * (K + K1) * 2 //Площадь крыши

  $('#gable-roof-result').text(
    'Количество листов: ' + Math.ceil((S * 1.15) / Sshifer) + ' шт.'
  ) // Количества поштучно шифера на крышу с учетом нахлеста
  $('#gable-roof-S').text('Площадь: ' + S.toFixed(2) + ' м2')
}

// Мансардная
function calculateThird() {
  if (!isChecked(3)) return

  let A1 = +$('#mansard-roof-A1').val()
  let A2 = +$('#mansard-roof-A2').val()
  let B1 = +$('#mansard-roof-B1').val()
  let B2 = +$('#mansard-roof-B2').val()
  let C = +$('#mansard-roof-C').val()
  let D = +$('#mansard-roof-D').val()

  let K1 = Math.sqrt(A1 ** 2 + B1 ** 2)
  let K2 = Math.sqrt((B2 - B1) ** 2 + (A2 / 2) ** 2)
  let C1 = Math.sqrt(C ** 2 + ((B1 * C) / A1) ** 2)
  let S = D * (C1 + K1 + K2) * 2

  $('#mansard-roof-result').text(
    'Количество листов: ' + Math.ceil((S * 1.15) / Sshifer) + ' шт.'
  ) // Количества поштучно шифера на крышу с учетом нахлеста
  $('#mansard-roof-S').text('Площадь: ' + S.toFixed(2) + ' м2')
}

// Вальмовая
function calculateFourth() {
  if (!isChecked(4)) return

  let A = +$('#hip-roof-A').val()
  let D = +$('#hip-roof-D').val()
  let B = +$('#hip-roof-B').val()
  let K = +$('#hip-roof-K').val()

  let H2 = Math.sqrt((A - B) / 2 ** 2 + K ** 2)
  let S1 = (H2 * D) / 2
  let B1 = Math.sqrt(H2 ** 2 + D ** 2)
  let H1 = Math.sqrt(B1 ** 2 - (D - B) / 2 ** 2)
  let S2 = ((A + B) / 2) * H1
  let S = S2 * 2 + S1 * 2

  $('#hip-roof-result').text(
    'Количество листов: ' + Math.ceil((S * 1.15) / Sshifer) + ' шт.'
  ) // Количества поштучно шифера на крышу с учетом нахлеста
  $('#hip-roof-S').text('Площадь: ' + S.toFixed(2) + ' м2')
}

// Шатровая
function calculateFive() {
  if (!isChecked(5)) return

  let A = +$('#hip2-roof-A').val()
  let D = +$('#hip2-roof-D').val()
  let K = +$('#hip2-roof-K').val()

  let H2 = Math.sqrt(A / 2 ** 2 + K ** 2)
  let H1 = Math.sqrt(D / 2 ** 2 + K ** 2)
  let S1 = (H2 * D) / 2
  let S2 = (H1 * A) / 2
  let S = S1 + S2

  $('#hip2-roof-result').text(
    'Количество листов: ' + Math.ceil((S * 1.15) / Sshifer) + ' шт.'
  ) // Количества поштучно шифера на крышу с учетом нахлеста
  $('#hip2-roof-S').text('Площадь: ' + S.toFixed(2) + ' м2')
}

// При вводе в инпут значения убираем красную рамку
$('input').on('change', (event) => {
  $(event.target).removeClass('is-invalid')
})
