
/* var total = a 0 a partitr de los productos selccionados (checkbox) 
iremos sumando o restando el valor del producto y mostraremos e iremos visualizando el total */

/* var total=0;

function sumar(valor) {
total += valor;
document.formulario.total.value=total;
}

function restar(valor) {
total-=valor;
document.formulario.total.value=total;
}
*/

class Producto {
	Constructor(nombre, precio, detalle, cantidad) {
		this.nombre = nombre;
		this.precio = parseFloat(precio);
		this.detalle = detalle;
		this.cantidad = catidad;
		this.disponble = true;

}

sumarIva() {
	return this.precio * 1.16;
}

Vender(){
	this.disponible = false;
}

precioSugeridoCliente(){
	return this.precio * 1.16 * 1.20;
 }
}

//Empleo de do...while para cargar nombres en el array por prompt()
// arreglo para los productos de la pasteleria "la crema y nata"
	var arrayProductos = [];
	do{

		var comprobacion = prompt ('Ingrese la palabra malteada ó fin');
		if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "fin" ){
	    break;
}else{
	    nombreP = comprobacion;
		var precioP = comprobacion; ('ingrese el precio del producto');
		var detalleP = prompt ('escribe la palabra grande');
		var cantidadP = prompt ('¿Cuántos malteadas deseas?');
		arrayProductos.push(new Producto(nombreP, detalleP, cantidadP));
 }
}

	while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion !=  "fin" ) 

	console.log(arrayProductos);


//docuement.write ("<H3> El precio de costo del producto a calcular es "+precioCostoM+" </H3>")

for (var producto of arrayProductos) {
	document.write("<ul><li><h3> Nombre: malteada " + producto.nombre + "</h3></li>");
	document.write("<li><h3> Detalle: grande " + producto.detalle + "</h3></li>");
	document.write("<li><h3> Cantidad: 5 " + producto.cantidad + "</h3></li>");
	document.write("<li><h3> Precio: 45 "  + producto.precio + "</h3></li> <br>");
	console.log(producto.nombre);
	console.log(producto.detalle);
	console.log(producto.cantidad);
	console.log(producto.precio);

}

// Poco Stock - menos de 5 productos (poco producto)
	var pocoStock = arrayProductos.filter(producto => producto.cantidad <= 5);
	console.log('Prdoductos con poco Stock, comprar nuvamente: ');
	console.log(pocoStock);
	document.write("<h3> Lista de Productos con poco Stock (menos de cinco unidades): </h3>");

	for (var producto of pocoStock) {
	document.write("<ul><li><h3> Nombre: malteada " + producto.nombre + "</h3></li>");
	document.write("<li><h3> Detalle: grande " + producto.detalle + "</h3></li>");
	document.write("<li><h3> Cantidad: 5 " + producto.cantidad + "</h3></li></ul><br>");	
}


