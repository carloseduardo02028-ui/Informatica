// Guardamos el enlace a app web que vincula el google sheets
const url = 'https://script.google.com/macros/s/AKfycbztxHYsQZPLFGXZyDxx-3N5P5xzOHRwxoii-Oxnpp9maOE4aAj2djl4k6mmaF4QlSgBxQ/exec'
//obtenemos el formulario que hicimos.
const form = document.getElementById('form');
//ahora vamos a escuchar el evento de envío del formulario.
form.addEventListener('submit', async e =>{
    //prevenimos que se recargue la pagina::
    e.preventDefault()
    // comenzamos el manejo de errores:
    try {
        //hacemos la solicitud usando fetch
        const response = await fetch(url, {
            method: 'POST',
            //enviamos el formulario
            body: new FormData(form)
        })
        //mensaje visual para la web
        alert('Enviado correctamente.')
    } catch (error) {
        //mensaje de error en caso falle el envío.
        console.error('ERROR: ', error.message)
        alert('Error al enviar formulario')
    }
})