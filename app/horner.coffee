point = 3
polinom =
  coefficients: [2, -6, 2, -1]

recalc = (polinom, point) ->
  polinom.build = [polinom.coefficients[0]]
  polinom.intermid = []

  i = 1
  while i < polinom.coefficients.length
    inter = point * polinom.build[i - 1]
    polinom.intermid.push(inter)
    polinom.build.push(inter + parseInt(polinom.coefficients[i]))
    i++

  polinom

polinom = recalc(polinom, point)

ractive = new Ractive
  el: 'container'
  template: '#template'
  data:
    point: point
    coefficients: polinom.coefficients
    intermid: polinom.intermid
    build: polinom.build

ractive.on 'addCoeficient', ->
  polinom.coefficients.push 0

ractive.on 'removeCoeficient', ->
  polinom.coefficients.pop()

ractive.observe 'point', (newValue, oldValue) ->
  polinom = recalc(polinom, newValue)
  ractive.set('intermid', polinom.intermid)
  ractive.set('build', polinom.build)

ractive.observe 'coefficients', (newValue, oldValue) ->
  polinom = recalc(polinom, point)
  ractive.set('intermid', polinom.intermid)
  ractive.set('build', polinom.build)
