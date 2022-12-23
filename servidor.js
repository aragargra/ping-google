const express = require('express');
const exec = require('child_process').execSync;
const os = require('os');
const mi_servidor = express();
mi_servidor.get('/', function (req, res) {
  var texto=exec("ping -c 1 google.com")+"";
  while (texto.indexOf("\n")!=-1)
    texto=texto.replace("\n","<br/>");
  texto='<h1>Ping a Google desde el servidor '+os.hostname()+'</h1>'+texto;
  res.send(texto);
});
mi_servidor.listen(8080);
console.log('Servidor escuchando en el puerto 8080');

