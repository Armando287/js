(function() {
    var devtools = /./;
    devtools.toString = function () {
        // Detecta si DevTools está abierto
        return "devtools";
    };

    // Función que detecta si DevTools está abierto y lo cierra
    function detectDevTools() {
        var startTime = new Date().getTime();
        var endTime = startTime;

        // Comprobamos si el ancho de la ventana cambia inesperadamente
        while (endTime - startTime < 100) {
            endTime = new Date().getTime();
        }

        if (endTime - startTime >= 100) {
            if (window.innerWidth - window.outerWidth > 100 || window.innerHeight - window.outerHeight > 100) {
                // Si el tamaño de la ventana cambia (lo que puede ocurrir cuando se abre DevTools)
                console.log("DevTools detectado, cerrando...");
                window.location.reload(); // Recarga la página para intentar cerrar los DevTools
            }
        }
    }

    // Detectamos si es un PC (no tablet ni móvil)
    function isDesktop() {
        return !(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i));
    }

    // Ejecuta el chequeo solo si está en PC
    if (isDesktop()) {
        setInterval(detectDevTools, 1000); // Verifica cada segundo si DevTools está abierto
    }
})();
