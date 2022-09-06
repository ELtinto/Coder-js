// funciones //
let barra 
let suma = " ";
let total = 0;

while (barra != "5") {
  switch (barra) {
    case "1":
      suma = 5000;
      break;
    case "2":
      suma = 3000;
      break;4
    case "3":
      suma = 4000;
      break;
    case "4":
      suma = 6000;
      break;
    default:
      suma = 0;
      break;
  }
  total += suma;
  barra = prompt(`ingresa tu pedido:
  1. Mojitos 5.000
  2. Pisco sour 3.000
  3. Ferbet 4.0005
  4. Ron 6.000
  5. ver total de tu cuenta`);
  
}
alert(`el total de tu cuenta es: ${total} pesos Muchas gracias` );
