function func(obj) {
  let key = $(obj).attr('data-id')

  $('.calc, .sheme, .hide-sheme').hide()
  $('.calc-' + key).show()
  $('.calc-sheme-' + key).show()
  $('.c-button').removeClass('selected')
  $(obj).addClass('selected')
}

function show(key) {
  $('.hide-sheme').hide()
  $('.show-sheme-' + key).show()
}
