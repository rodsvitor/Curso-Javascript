function minhaPromise() {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'https://api.github.com/users/rodsvitor');
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) { // resposta voltou
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Erro na requisição!');
        }
      }
    }
  });
}

minhaPromise()
  .then(console.log)
  .catch(console.warn);

// var resultado = minhaPromise();
// console.log(resultado); //Mostratá um resultado pendente, pois não
//                         //se esperou o resultado completo do servidor

