/**
 * @fileoverview Componente principal de MyAwesomeApp
 * @description Este archivo contiene el componente React que muestra información personal
 * del usuario incluyendo datos básicos, juegos favoritos y ubicación.
 * @version 1.0.0
 * @author Alonso Anchante
 */

// ============================================================================
// CONSTANTES DE DATOS PERSONALES
// ============================================================================

/**
 * Nombre del usuario
 * @type {string}
 */
const name = "Alonso"

/**
 * Apellido del usuario
 * @type {string}
 */
const lastName = "Anchante"

/**
 * Lista de juegos favoritos del usuario
 * @type {string[]}
 * @description Array que contiene los videojuegos preferidos
 */
const favoriteGames = ["League of Legends", "Valorant", "Fortnite"]

/**
 * Estado de actividad del usuario
 * @type {boolean}
 * @description Indica si el usuario está activo (true) o inactivo (false)
 */
const isActive = true

/**
 * Información de dirección del usuario
 * @type {Object}
 * @property {string} street - Nombre de la calle
 * @property {string} city - Ciudad de residencia
 * @property {string} country - País de residencia
 */
const address = {
  street: "Calle 123",
  city: "Madrid",
  country: "España"
}

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================

/**
 * Componente principal de la aplicación MyAwesome
 * 
 * @component
 * @description Renderiza la información personal del usuario en una interfaz simple.
 * Muestra nombre, apellido, juegos favoritos, estado de actividad y dirección.
 * 
 * @returns {JSX.Element} Elemento JSX que contiene la información del usuario
 * 
 * @example
 * // Uso básico del componente
 * <MyAwesomeApp />
 * 
 * @features
 * - Muestra datos personales estáticos
 * - Renderiza lista de juegos unidos por comas
 * - Incluye cálculo matemático simple
 * - Renderizado condicional para estado de actividad
 * - Serialización JSON de objeto dirección
 */
export const MyAwesomeApp = () => {
  return (
    <>
      {/* Título principal con el nombre del usuario */}
      <h1>{name}</h1>

      {/* Subtítulo con el apellido */}
      <h3>{lastName}</h3>

      {/* Lista de juegos favoritos unidos por comas */}
      <p>{favoriteGames.join(', ')}</p>

      {/* Ejemplo de operación matemática simple */}
      <p>{2 + 2}</p>

      {/* Estado de actividad usando renderizado condicional */}
      <h1>{isActive ? 'Activo' : 'No Activo'}</h1>

      {/* Información de dirección serializada como JSON */}
      <p>{JSON.stringify(address)}</p>
    </>
  )
}
