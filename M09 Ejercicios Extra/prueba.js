const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  var nuevoArreglo = [];
  var propiedades = Object.keys(object1);

  for (var i = 0;i<propiedades.length;i++){
    nuevoArreglo.push([propiedades[i],object1[propiedades[i]]]);
  }

  console.log(nuevoArreglo);