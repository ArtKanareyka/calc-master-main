const Sshifer = 1.715 // Площадь шифера 1750x980

function isChecked(key) {
  let arr = $(`.calc-${key} input`).filter((i, item) => item.value == '')
  arr.addClass('is-invalid')
  return arr.length == 0 // Добавляем красную рамку на инпут если нет значений
}

// Односкатная
function calculateFirst() {
  if (!isChecked(1)) return
  let A = document.getElementById('shed-roof-A').value
  let B = document.getElementById('shed-roof-B').value
  let C1 = document.getElementById('shed-roof-C1').value
  let C2 = document.getElementById('shed-roof-C2').value
  let D = document.getElementById('shed-roof-D').value

  let K = Math.sqrt(B ** 2 + A ** 2) // Длина крыши
  let K1 = (K * C1) / A //Длина свеса 1
  let K2 = (K * C2) / A //Длина свеса 2
  let S = D * (K + K1 + K2) //Площадь крыши

  document.getElementById('shed-roof-result').textContent =
    'Количество листов: ' + Math.ceil((S * 1.15) / Sshifer) + ' шт.'
  // Количества поштучно шифера на крышу с учетом нахлеста
  document.getElementById('shed-roof-S').textContent =
    'Площадь: ' + S.toFixed(2) + ' м2'
}

// Двускатная
function calculateSecond() {
  if (!isChecked(2)) return

  let A = document.getElementById('gable-roof-A').value
  let B = document.getElementById('gable-roof-B').value
  let C = document.getElementById('gable-roof-C').value
  let D = document.getElementById('gable-roof-D').value

  let K = Math.sqrt(B ** 2 + A ** 2) // Длина крыши
  let K1 = (K * C) / A //Длина свеса
  let S = D * (K + K1) * 2 //Площадь крыши

  document.getElementById('gable-roof-result').textContent =
    'Количество листов: ' + Math.ceil((S * 1.15) / Sshifer) + ' шт.'
  // Количества поштучно шифера на крышу с учетом нахлеста
  document.getElementById('gable-roof-S').textContent =
    'Площадь: ' + S.toFixed(2) + ' м2'
}

// Мансардная
function calculateThird() {
  if (!isChecked(3)) return

  let A1 = document.getElementById('mansard-roof-A1').value
  let A2 = document.getElementById('mansard-roof-A2').value
  let B1 = document.getElementById('mansard-roof-B1').value
  let B2 = document.getElementById('mansard-roof-B2').value
  let C = document.getElementById('mansard-roof-C').value
  let D = document.getElementById('mansard-roof-D').value

  let K1 = Math.sqrt(A1 ** 2 + B1 ** 2)
  let K2 = Math.sqrt((B2 - B1) ** 2 + (A2 / 2) ** 2)
  let C1 = Math.sqrt(C ** 2 + ((B1 * C) / A1) ** 2)
  let S = D * (C1 + K1 + K2) * 2

  document.getElementById('mansard-roof-result').textContent =
    'Количество листов: ' + Math.ceil((S * 1.15) / Sshifer) + ' шт.'
  // Количества поштучно шифера на крышу с учетом нахлеста
  document.getElementById('mansard-roof-S').textContent =
    'Площадь: ' + S.toFixed(2) + ' м2'
}

// Вальмовая
function calculateFourth() {
  if (!isChecked(4)) return

  let A = document.getElementById('hip-roof-A').value
  let D = document.getElementById('hip-roof-D').value
  let B = document.getElementById('hip-roof-B').value
  let K = document.getElementById('hip-roof-K').value

  let H2 = Math.sqrt((A - B) / 2 ** 2 + K ** 2)
  let S1 = (H2 * D) / 2
  let B1 = Math.sqrt(H2 ** 2 + D ** 2)
  let H1 = Math.sqrt(B1 ** 2 - (D - B) / 2 ** 2)
  let S2 = ((A + B) / 2) * H1
  let S = S2 * 2 + S1 * 2

  document.getElementById('hip-roof-result').textContent =
    'Количество листов: ' + Math.ceil((S * 1.15) / Sshifer) + ' шт.'
  // Количества поштучно шифера на крышу с учетом нахлеста
  document.getElementById('hip-roof-S').textContent =
    'Площадь: ' + S.toFixed(2) + ' м2'
}

// Шатровая
function calculateFive() {
  if (!isChecked(5)) return

  let A = document.getElementById('hip2-roof-A').value
  let D = document.getElementById('hip2-roof-D').value
  let K = document.getElementById('hip2-roof-K').value

  let H2 = Math.sqrt(A / 2 ** 2 + K ** 2)
  let H1 = Math.sqrt(D / 2 ** 2 + K ** 2)
  let S1 = (H2 * D) / 2
  let S2 = (H1 * A) / 2
  let S = S1 + S2

  document.getElementById('hip2-roof-result').textContent =
    'Количество листов: ' + Math.ceil((S * 1.15) / Sshifer) + ' шт.'
  // Количества поштучно шифера на крышу с учетом нахлеста
  document.getElementById('hip2-roof-S').textContent =
    'Площадь: ' + S.toFixed(2) + ' м2'
}

// При вводе в инпут значения убираем красную рамку
$('input').on('change', (event) => {
  $(event.target).removeClass('is-invalid')
})
