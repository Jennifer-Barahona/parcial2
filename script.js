
/**
 * Universidad UMNG - Facultad de Ingeniería Multimedia
 * Asignatura: Introducción a la Computación Gráfica
 * * Estudiante: Jennifer Barahona Suarez
 * * Tarea: Implementar los algoritmos de rasterización manual.
 */

//Funcion para crear un número aleatorio entre 5 y 10
function randomEntre5y10() {
    return Math.floor(Math.random() * 6) + 5;
}

// Función de apoyo para dibujar un píxel individual
function drawPixel(ctx, x, y, color = "#000000") {
    ctx.fillStyle = color;
    ctx.fillRect(Math.floor(x), Math.floor(y), 1, 1);
}

/**
 * Implementación del algoritmo de Bresenham para líneas.
 * @param {number} x0, y0 - Coordenadas iniciales
 * @param {number} x1, y1 - Coordenadas finales
 * @returns {void}
 */

function bresenhamLine(x0, y0, x1, y1, color) {
    
}

/**
 * Calcula los vértices de un polígono regular.
 * @param {number} centerX, centerY - Centro
 * @param {number} sides - Número de lados
 * @param {number} radius - Radio
 * @returns {Array} Arreglo de objetos {x, y}
 */

function getPolygonVertices(centerX, centerY, sides, radius) {
    // Desarrollo del estudiante (Uso de Math.sin/Math.cos y retorno de datos)
}

