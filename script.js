document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var messageElement = document.getElementById("message");

    // Verificar la contraseña
    if (password === "contraseña123") {
      // Contraseña correcta
      messageElement.innerHTML =
        "<p>Contraseña correcta. ¡Inicio de sesión exitoso!</p>";
      messageElement.style.color = "green";
    } else {
      // Contraseña incorrecta
      messageElement.innerHTML =
        "<p>Contraseña incorrecta. Por favor, intenta nuevamente.</p>";
      messageElement.style.color = "red";
    }
  });

// Agregar el siguiente código para asegurarse de que el evento se maneje correctamente
document
  .getElementById("loginButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
    document.getElementById("loginForm").submit(); // Enviar el formulario manualmente
  });
