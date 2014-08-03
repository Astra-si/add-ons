number = 17

isPrimeNumber = (number) ->
  start = Math.ceil number / 2

  while start > 1
    if number % start is 0
      return no

    start -= 1

  yes

console.log isPrimeNumber(number)
