/**
 * @fileoverview Controlador principal de enrutamiento web (Google Apps Script).
 * Arquitectura estática (Zero-Backend) implementada para la fase de prototipado visual.
 * Su única responsabilidad es ensamblar y despachar el frontend al navegador del cliente.
 */

/**
 * Punto de entrada HTTP GET requerido por la infraestructura estricta de Google Workspace.
 * Construye la vista principal y establece las políticas de seguridad de marcos (X-Frame-Options).
 * 
 * @param {Object} eventoPeticionServidor - Metadatos encapsulados de la solicitud HTTP entrante.
 * @returns {GoogleAppsScript.HTML.HtmlOutput} Interfaz de usuario compilada y segura lista para renderizar.
 */
function doGet(eventoPeticionServidor) {
  // Se utiliza createTemplateFromFile para permitir la inyección posterior de archivos secundarios
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('Control Metrológico - Calibración de instrumentos')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}

/**
 * Inyecta el contenido de dependencias estáticas locales (CSS) en el documento principal.
 * Al prescindir de CDNs externos por políticas de seguridad, este método empaqueta el código nativamente.
 * 
 * @param {string} nombreArchivoSecundario - Identificador exacto del archivo a inyectar sin extensión (ej. 'estilos').
 * @returns {string} Código fuente extraído en formato de texto plano.
 */
function incluirArchivoSecundario(nombreArchivoSecundario) {
  return HtmlService.createHtmlOutputFromFile(nombreArchivoSecundario).getContent();
}