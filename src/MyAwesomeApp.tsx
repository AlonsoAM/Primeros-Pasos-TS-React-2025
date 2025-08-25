/**
 * @fileoverview Componente principal de MyAwesomeApp
 * @description Este archivo contiene el componente React que muestra información personal
 * del usuario incluyendo datos básicos, juegos favoritos y ubicación.
 * @version 1.0.0
 * @author Alonso Anchante
 */

// ============================================================================
// IMPORTACIONES DE TIPOS
// ============================================================================

import type {CSSProperties, JSX} from "react";

// ============================================================================
// INTERFACES Y TIPOS
// ============================================================================

/**
 * Interface para definir la estructura de una dirección
 * @interface AddressInfo
 * @description Define los campos obligatorios para la información de dirección
 */
interface AddressInfo {
  /** Nombre de la calle o dirección específica */
  street: string;
  /** Ciudad de residencia */
  city: string;
  /** País de residencia */
  country: string;
}

// ============================================================================
// CONSTANTES DE DATOS PERSONALES
// ============================================================================

/**
 * Nombre del usuario
 * @type {string}
 */
const name: string = "Alonso"

/**
 * Apellido del usuario
 * @type {string}
 */
const lastName: string = "Anchante"

/**
 * Lista de juegos favoritos del usuario
 * @type {string[]}
 * @description Array que contiene los videojuegos preferidos
 */
const favoriteGames: string[] = ["League of Legends", "Valorant", "Fortnite"]

/**
 * Estado de actividad del usuario
 * @type {boolean}
 * @description Indica si el usuario está activo (true) o inactivo (false)
 */
const isActive: boolean = false

/**
 * Información de dirección del usuario
 * @type {AddressInfo}
 * @description Objeto que contiene los datos de ubicación del usuario
 * @see {AddressInfo} - Interface que define la estructura
 */
const address: AddressInfo = {
  street: "Calle 123",
  city: "Madrid",
  country: "España"
}

/**
 * Estilos CSS personalizados para el elemento de dirección
 * @type {CSSProperties}
 * @description Objeto que contiene estilos inline con lógica condicional
 * basada en el estado de actividad del usuario
 * 
 * @property {string} backgroundColor - Color de fondo gris claro
 * @property {string} padding - Espaciado interno de 10px
 * @property {string} borderRadius - Radio del borde condicional:
 *   - 5px si el usuario está activo
 *   - 30px si el usuario está inactivo
 * @property {string} marginTop - Margen superior de 10px
 * 
 * @example
 * // Los estilos cambian dinámicamente según isActive:
 * // isActive = true  -> borderRadius: '5px'  (esquinas menos redondeadas)
 * // isActive = false -> borderRadius: '30px' (esquinas muy redondeadas)
 */
const myStiles: CSSProperties = {
  backgroundColor: 'lightgray',
  padding: '10px',
  borderRadius: isActive ? '5px' : '30px', // Estilo condicional basado en actividad
  marginTop: '10px'
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
 * - Estilos dinámicos basados en el estado de actividad
 * - Tipado fuerte con TypeScript e interfaces personalizadas
 * 
 * @technical_details
 * - Utiliza CSSProperties para tipado de estilos
 * - Implementa lógica condicional en estilos CSS
 * - Usa AddressInfo interface para tipado de dirección
 * - Emplea Fragment como contenedor raíz
 */
export const MyAwesomeApp = (): JSX.Element => {
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

      {/* Información de dirección serializada como JSON con estilos dinámicos */}
      <p
        style={myStiles} // Aplica estilos condicionales basados en isActive
      >{JSON.stringify(address)}</p>
    </>
  )
}
