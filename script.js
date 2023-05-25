// Función para cambiar el modo
function toggleNightMode() {
    var body = document.body;
    body.classList.toggle('night-mode');

    // Guardar el modo en localStorage
    if (body.classList.contains('night-mode')) {
        localStorage.setItem('night-mode', 'enabled');
    } else {
        localStorage.setItem('night-mode', 'disabled');
    }
}

// Verificar el modo guardado en localStorage al cargar la página
window.addEventListener('load', function () {
    var nightMode = localStorage.getItem('night-mode');

    if (nightMode === 'enabled') {
        document.body.classList.add('night-mode');
    }
});

// Asignar el evento click al botón
var nightModeBtn = document.getElementById('night-mode-btn');
nightModeBtn.addEventListener('click', toggleNightMode);

function text() {
    var nombre = document.getElementById('nombre').value;
    sessionStorage.setItem('nombre', nombre);
    alert('Bienvenido' + nombre);
}

function iniciarSesion() {
    var usuario = document.getElementById("usuario").value;

    // Autenticación del usuario con las credenciales ingresadas
    if (!(usuario === "" || usuario === null)) {
        localStorage.setItem("nombreUsuario", usuario);
        mostrarNombreUsuario();
    } else {
        alert("Credenciales inválidas, debes de insertar un nombre");
    }
    alert("Login con éxito")
}

function mostrarNombreUsuario() {
    var nombreUsuario = localStorage.getItem("nombreUsuario");
    var nombreUsuarioElemento = document.getElementById("nombre-usuario");
    nombreUsuarioElemento.innerHTML = nombreUsuario;
}

// Mostrar el nombre del usuario si ya ha iniciado sesión anteriormente
mostrarNombreUsuario();

function cerrarSesion() {
    localStorage.removeItem("nombreUsuario");
    limpiarNombreUsuario();
    alert("Sesión cerrada");
}
function limpiarNombreUsuario() {
    var nombreUsuarioElemento = document.getElementById("nombre-usuario");
    nombreUsuarioElemento.innerHTML = "";
}