
let listaProductos = [
    {
      nombreProducto: "Hidratante facial",
      precio: 3500,
      categoria: "Hidratante",
    },
    { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
    {
      nombreProducto: "Protector solar factor 50",
      precio: 3300,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Protector solar toque seco factor 50",
      precio: 4100,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Protector solar con color factor 50",
      precio: 3850.5,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Gel de limpieza facial",
      precio: 1740.99,
      categoria: "Limpieza",
    },
    { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
    { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
    {
      nombreProducto: "Exfoliante de azúcar cherry",
      precio: 1200,
      categoria: "Labios",
    },
    {
      nombreProducto: "Pads de hidrogel para contorno de ojos",
      precio: 2800,
      categoria: "Ojos",
    },
    {
      nombreProducto: "Mascarilla facial",
      precio: 3250.99,
      categoria: "Mascaras",
    },
    { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
    { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
    { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
    {
      nombreProducto: "Protector solar en barra",
      precio: 3800,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Mascara de hidratación y reparación",
      precio: 1200,
      categoria: "Mascaras",
    },
    { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
  ];

/*  for (const element in listaProductos) {
    document.write(listaProductos[element].nombreProducto);
    document.write(listaProductos[element].precio);
    document.write(listaProductos[element].categoria);
 } */

 function crearTabla(){
    document.write(`<h1>Tabla de productos</h1>`)
    document.write(`
    <table>
      <thead>
        <tr>
          <td>Nombre del producto</td>
          <td>Precio</td>
          <td>Categoria</td>
        </tr>
      </thead>
      <tbody>
    `)
    for (const element in listaProductos) {
    document.write(`<tr>`)
    document.write(`<td>${listaProductos[element].nombreProducto}</td>`);
    document.write(`<td>${listaProductos[element].precio}</td>`);
    document.write(`<td>${listaProductos[element].categoria}</td>`);
    document.write(`</tr>`)
 }
    document.write(`
      </tbody>
    </table>
    `)
  } 

  function filtrarPSolares(){
    document.write(`<h1>Productos solares</h1>`)
    document.write(`
    <table>
      <thead>
        <tr>
          <td>Nombre del producto</td>
          <td>Precio</td>
          <td>Categoria</td>
        </tr>
      </thead>
      <tbody>
    `)
    for (const element in listaProductos) {
    document.write(`<tr>`)
    document.write(`<td>${listaProductos[element].nombreProducto}</td>`);
    document.write(`<td>${listaProductos[element].precio}</td>`);
    document.write(`<td>${listaProductos[element].categoria}</td>`);
    document.write(`</tr>`)
 }
    document.write(`
      </tbody>
    </table>
    `)
  } 


