var Producto = new Object();
Producto.Codigo;
Producto.Tipo;
Producto.PrecioCompra;
Producto.PrecioVenta;
Producto.stock;

var Venta = new Object();
Venta.Codigo;
Venta.cantidad;
Venta.Total;
Venta.fecha;

var Productos = [];
var Ventas =[];

var proceso;

function AgregarProducto(){
    Producto.Codigo = prompt("inserte el nombre del producto");
    Producto.Tipo = prompt("Ingrese el tipo del producto");
    Producto.PrecioCompra = prompt("ingrese el precio de compra");
    Producto.PrecioVenta = prompt("ingrese el precio de venta");
    Producto.stock = prompt("Ingrese el stock");
    Productos.push(Producto);
}

function ModificarStock(Codigo, cantidad, proceso){
    Productos.forEach(element => {
        if(element.Codigo == Codigo){
            if(proceso == "Agregar"){
                element.stock += cantidad;
            }
            if(proceso == "Extraer"){
                element.stock -= cantidad;
            }
        }
    });
}

function Promedio(){
    let aux = 0;
    let cont = 0;
    Ventas.forEach(element => {
        aux = + element.Total;
        cont++;
    });
    console.log("su promedio de ventas es: " + aux/cont);
}

function RegistroVenta(Codigo, cantidad){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    Productos.forEach(element =>{
        if(Codigo == element.Codigo){
            var precio = element.precio;
        }
    });
    today = mm + '/' + dd + '/' + yyyy;
    Venta.Codigo = Codigo;
    Venta.cantidad = cantidad;
    Venta.Total = Cantidad * precio;
    Venta.fecha = today;
    Ventas.push(Venta);
    ModificarStock(Codigo, cantidad, "Extraer");
}

function MostrarEn0(){
    aux = [];
    Productos.forEach(element =>{
        if(element.stock == 0){
            aux.push(element);
        }
    });
    console.log(aux);
}

var flag = true;
while(flag == true){
    let Codigo, cantidad, proceso;
    proceso = prompt("ingrese el proceso que desea hacer");
    switch(proceso){
        case "Agregar producto":
            AgregarProducto();
            break;
        case "Modificar stock":

            Codigo = prompt("Ingrese el codigo de producto");
            cantidad  = prompt("Ingrese la cantidad de producto");
            proceso = prompt("Ingrese el proceso a seguir");
            ModificarStock(Codigo, cantidad, proceso);
            break;
        case "Registro venta":
            Codigo = prompt("Ingrese el codigo de producto");
            cantidad  = prompt("Ingrese la cantidad de producto");
            RegistroVenta(Codigo, cantidad)
            break;
        case "Mostrar":
            MostrarEn0();
            break;
        case"Promedio":
            Promedio();
            break;
        default:
            flag = false;
    }
}