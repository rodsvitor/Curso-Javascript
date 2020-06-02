var xhr = new XMLHttpRequest();

xhr.open('get', 'https://api.github.com/users/rodsvitor');
xhr.send(null);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) { // resposta voltou
    console.log(JSON.parse(xhr.responseText));
  }
}
console.log(xhr.responseText);



