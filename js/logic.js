 function validarCorreo() {
    var emailInput = document.getElementById("u14_input").value;
    // Expresión regular para verificar si es un correo electrónico de Gmail
    var regex = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    if (!regex.test(emailInput)) {
      // Mostrar mensaje de error si no es un correo electrónico de Gmail
      document.getElementById("u16").style.display = "block";
    } else {
      // Ocultar mensaje de error si es un correo electrónico de Gmail
      document.getElementById("u16").style.display = "none";
    }
  }

  // Agregar un event listener para verificar la validación al cambiar el valor del campo de entrada
  document.getElementById("u14_input").addEventListener("input", validarCorreo);


   function validarCorreo() {
    var emailInput = document.getElementById("u58_input").value;
    // Expresión regular para verificar si es un correo electrónico de Gmail
    var regex = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    if (!regex.test(emailInput)) {
      // Mostrar mensaje de error si no es un correo electrónico de Gmail
      document.getElementById("u59").style.display = "block";
    } else {
      // Ocultar mensaje de error si es un correo electrónico de Gmail
      document.getElementById("u59").style.display = "none";
    }
  }

  // Agregar un event listener para verificar la validación al cambiar el valor del campo de entrada
  document.getElementById("u58_input").addEventListener("input", validarCorreo);