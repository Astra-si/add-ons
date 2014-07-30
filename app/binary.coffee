$ ->
  $('#decimal').on 'input', ->
    decimal = $(this).val()
    result = if decimal then parseInt(decimal, 2) else ''

    $('.decimal-result').text(result)

  $('#binary').on 'input', ->
    binary = $(this).val()
    result = ''

    if binary
      decimal = parseInt(binary, 10)
      result = decimal.toString(2)

    $('.binary-result').text(result)
