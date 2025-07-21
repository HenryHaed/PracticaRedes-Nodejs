document.getElementById("form-contacto").addEventListener("submit", async function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  const datos = { nombre, email, mensaje };

  try {
    const respuesta = await fetch("http://localhost:3000/api/formulario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    // Verificamos si la respuesta fue exitosa
    if (!respuesta.ok) {
      throw new Error(`Error del servidor: ${respuesta.status}`);
    }

    const resultado = await respuesta.json();
    alert("Enviado correctamente: " + resultado.mensaje);
  } catch (error) {
    console.error("Error al enviar:", error);
    alert("Hubo un error al enviar el formulario.\n" + error.message);
  }
});
