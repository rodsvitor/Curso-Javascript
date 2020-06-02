//deve-se adicionar um src de javascript para usar o axios.
axios.get('https://api.github.com/users/rodsvitor')
  .then(console.log)
  .catch(console.warn);