import { useState } from "react";

const Pagina2 = () => {
  // Lista de productos con precios
  const productos = [
    { id: 1, nombre: "Producto A", precio: 10 },
    { id: 2, nombre: "Producto B", precio: 20 },
    { id: 3, nombre: "Producto C", precio: 15 },
  ];

  // Estado para las cantidades
  const [cantidades, setCantidades] = useState(
    productos.reduce((acc, producto) => {
      acc[producto.id] = 0;
      return acc;
    }, {})
  );

  // Función para manejar cambios en la cantidad
  const handleCantidadChange = (id, incremento) => {
    setCantidades((prev) => ({
      ...prev,
      [id]: Math.max(prev[id] + incremento, 0), // Evitar cantidades negativas
    }));
  };

  // Calcular el precio total
  const calcularTotal = () =>
    productos.reduce(
      (total, producto) => total + producto.precio * cantidades[producto.id],
      0
    );

  // Función de compra (puedes personalizarla según tus necesidades)
  const handleComprar = () => {
    alert("Compra realizada con éxito. Total: $" + calcularTotal());
    // Aquí podrías enviar la compra a una API o reiniciar los valores
    setCantidades(
      productos.reduce((acc, producto) => {
        acc[producto.id] = 0;
        return acc;
      }, {})
    );
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Tienda Virtual</h1>
      {productos.map((producto) => (
        <div
          key={producto.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <span>{producto.nombre}</span>
          <span>${producto.precio}</span>
          <div>
            <button onClick={() => handleCantidadChange(producto.id, -1)}>
              -
            </button>
            <span style={{ margin: "0 10px" }}>{cantidades[producto.id]}</span>
            <button onClick={() => handleCantidadChange(producto.id, 1)}>
              +
            </button>
          </div>
        </div>
      ))}
      <h2>Total: ${calcularTotal()}</h2>
      <button
        onClick={handleComprar}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        disabled={calcularTotal() === 0}
      >
        Comprar
      </button>
    </div>
  );
};

export default Pagina2;
