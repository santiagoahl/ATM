class Billete
{
  constructor(v, c, img)
  {
    this.imagen = new Image(); //Como dibujo la imagen ??
    this.valor = v;
    this.cantidad = c;

    this.imagen.src=img;
  }
}
