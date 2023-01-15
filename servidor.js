var express = require("express");
var app = express();
app.get("/", inicio);
app.get("/cursos", cursos);

function cursos(peticion, resultado)
{
  resultado.send("estos son los cursos");
}
function inicio(peticion, resultado)
{
  resultado.send("Este es el home genial!!");
}

app.listen(8989);
