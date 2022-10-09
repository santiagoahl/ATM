var dinero = document.getElementById("caja_dinero");
var boton = document.getElementById("boton");
var write = document.getElementById("lokesea"); //xd

boton.addEventListener("click", extraerDinero);

var dinero_caja = [];
dinero_caja.push(new Billete(50, 5, "50.png"));
dinero_caja.push(new Billete(20, 7, "20.png"));
dinero_caja.push(new Billete(10, 15, "10.png"));
var entregado = [];
entregado.push(new Billete(50, 0, "50.png"));
entregado.push(new Billete(20, 0, "20.png"));
entregado.push(new Billete(10, 0, "10.png"));

function extraerDinero()
{
  var dinero_usuario = parseInt(dinero.value);
  var dinero_total_caja = 0;

  for(i in dinero_caja)
  {
    dinero_total_caja += dinero_caja[i].valor*dinero_caja[i].cantidad;
  }

  if(dinero_usuario > dinero_total_caja)write.innerHTML = "Lo siento, soy un cajero pobrechito"; //Por si no me alcanza el dinero de la caja JJAJAJA
  else
  {
    for(var e in dinero_caja)
    {
      if(dinero_usuario>0)
      {
        entregado[e].cantidad = Math.floor(dinero_usuario / dinero_caja[e].valor);
        dinero_usuario = dinero_usuario - (entregado[e].valor*entregado[e].cantidad);
        for(k=0; k<entregado[e].cantidad;k++)document.body.appendChild(entregado[e].imagen);
        //write.innerHTML += "Billetes de " + entregado[e].valor + " son " + entregado[e].cantidad + "<br />";
      }
      write.innerHTML = " <hr />"
    }

  }

document.body.appendChild(entregado[0].imagen); //ASI SE TRAEN IMAGENES DE LA CLASE
}
