function consultaCep() {
  let cep = document.querySelector('input').value;
  if (cep === '' || cep.length < 8 || cep.length > 8) {
    alert("Digite um cep valido")
  } else {
    let dts = document.getElementById('dts');
    dts.style.display = "block";

    const url = `https://cep.awesomeapi.com.br/json/${cep}`;
    fetch(url).then(function (resp) {
      resp.json().then(function (data) {
        let nome = [data.city, data.address, data.state, data.district];

        let cep = document.getElementById('cep');
        cep.innerHTML = nome[0];
        let city = document.getElementById('city');
        city.innerHTML = nome[1];
        let address = document.getElementById('address');
        address.innerHTML = nome[2];
        let bairro = document.getElementById('bairro');
        bairro.innerHTML = nome[3];
      })
    })
  }
}

