
/**
 * Universidad UMNG - Facultad de Ingeniería Multimedia
 * Asignatura: Introducción a la Computación Gráfica
 * * Estudiante: Jennifer Barahona Suarez
 * * Tarea: Implementar los algoritmos de rasterización manual.
 */

//Obtenemos el contexto del canvas para dibujar
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//Funcion para crear un número aleatorio entre 5 y 10
function randomEntre5y10() {
    return Math.floor(Math.random() * 6) + 5;
}

// Función de apoyo para dibujar un píxel individual
function drawPixel(ctx, x, y, color = "#a200ff") {
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
    let dx = Math.abs(x1 - x0);
    let dy = Math.abs(y1 - y0);

    let sx = (x0 < x1) ? 1 : -1;
    let sy = (y0 < y1) ? 1 : -1;

    let error = dx - dy; // parámetro de decisión inicial

    while (true) {
        drawPixel(ctx, x0, y0, color);

        if (x0 === x1 && y0 === y1) break;

        let e2 = 2 * error;

        /**
         * Ajuste del error:
         * Si el error acumulado supera cierto umbral,
         * se corrige desplazando en X o Y para aproximarse
         * a la recta ideal.
         */
        if (e2 > -dy) {
            error -= dy;
            x0 += sx;
        }

        if (e2 < dx) {
            error += dx;
            y0 += sy;
        }
    }
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
    let vertices = [];

    for (let i = 0; i < sides; i++) {
        let angulo = (2 * Math.PI * i) / sides;
        let x = centerX + radius * Math.cos(angulo); // Cálculo de la coordenada X usando coseno
        let y = centerY + radius * Math.sin(angulo); // Cálculo de la coordenada Y usando seno

        vertices.push({ x: Math.round(x), y: Math.round(y) });
    }

    return vertices;// Retorna un arreglo con las coordenadas de los vértices
}


/**
 * Algoritmo del punto medio para circunferencias
 * cx, cy: centro de la circunferencia
 * r: radio de la circunferencia
 * color: color de la circunferencia
 * El parámetro p decide cuándo decrementar Y
 */
function drawCircle(cx, cy, r, color = "#13bddb") {
    let x = 0;
    let y = r;
    let p = 1 - r;

    while (x <= y) {
        plotCirclePoints(cx, cy, x, y, color);

        x++;

        if (p < 0) {
            p += 2 * x + 1;
        } else {
            y--;
            p += 2 * (x - y) + 1;
        }
    }
}

function plotCirclePoints(cx, cy, x, y, color) {
    drawPixel(ctx, cx + x, cy + y, color);
    drawPixel(ctx, cx - x, cy + y, color);
    drawPixel(ctx, cx + x, cy - y, color);
    drawPixel(ctx, cx - x, cy - y, color);

    drawPixel(ctx, cx + y, cy + x, color);
    drawPixel(ctx, cx - y, cy + x, color);
    drawPixel(ctx, cx + y, cy - x, color);
    drawPixel(ctx, cx - y, cy - x, color);
}

