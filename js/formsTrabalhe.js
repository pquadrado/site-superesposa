
let estadoCivilSelecionado;
let filhosSelecionado;
let conhecimentoDiarista;

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('input[name="estadoCivil"]').forEach((radio) => {
    radio.addEventListener('change', function () {
      estadoCivilSelecionado = this.value;
    });
  });

  document.querySelectorAll('input[name="filhos"]').forEach((radio) => {
    radio.addEventListener('change', function () {
      filhosSelecionado = this.value;
    });
  });

  document.querySelectorAll('input[name="conhecimentoDiarista"]').forEach((radio) => {
    radio.addEventListener('change', function () {
      conhecimentoDiarista = this.value;
    });
  });
});


function sendEmailTrabalheConosco() {

  const params = {
    name: document.getElementById("name").value,
    endereco: document.getElementById("endereco").value,
    contato: document.getElementById("telefone").value,
    nascimento: document.getElementById("datanascimento").value,
    civil: estadoCivilSelecionado,
    filhos: filhosSelecionado,
    quantidade: document.getElementById("quantosfilhos").value,
    diarista: conhecimentoDiarista,
    tempo_diarista: document.getElementById("tempo_diarista").value
  }

  const serviceId = "service_t4cb82l"
  const templateId = "template_n4sp1zr"

  emailjs.send(serviceId, templateId, params).then(
    (res) => {
      alert("Foi enviado com sucesso!")
    }
  ).catch((err) => console.log(err))
}

document.getElementById("emailform").addEventListener("submit", function (event) {
  event.preventDefault();
  sendEmailTrabalheConosco();
});