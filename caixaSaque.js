var notas = [100,50,20,10];

var notaMax = function(valor,index)
{
  var i = index;
  while (i < notas.length && notas[i] > valor) {
    i++;
  }
  return i;
}

var sacarRec = function(valor,index) 
{
  var saque = [];
  
  var indexMax = notaMax(valor,index);

  if (indexMax >= notas.length) {
    return [];
  }

  for (var i = indexMax; i < notas.length; i++) {
    var resto = valor - notas[i];

    if (resto == 0) {
      return [notas[i]];
    }

    for (var j = i; j < notas.length; j++) {
      var saqueResto = sacarRec(resto,j);

      if (saqueResto.length > 0) {
        saqueResto.unshift(notas[i]);
        return saqueResto;
      }
    }
  }

  return [];
}

var sacar = function(valor)
{
  return sacarRec(valor,0);
}

