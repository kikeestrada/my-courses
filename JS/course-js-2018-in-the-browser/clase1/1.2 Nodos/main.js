/**
 * Nodos
 * El DOM no es parte de la especificacion de JS
 * Es una web API
 * Los atributos tambien son nodos
 * EL texto tambien son nodos
 */

/**
 * Truco
 * 
 * Cuando seleccionamos un elemento en el inspector
 * Luego de seleccionarlo vamos a la consola y lo
 * invocamos usando:
 * 
 * $
 * $0
 * $0.Name
 * $0.nodeType
 * $0.nodeName === 'img'
 * 
 * Eso es solo en la consola
 */

 /**
  * Los objetos Node mas importantes son:
  * ELEMTN_NODE
  * TEXT_NODE
  * COMMENT_NODE
  */
 
/**
 * todo esto es un elemento es
 * toda etiqueta de html es un elemento
 * <title>Curso Dom</title>
 * 
 * pero el texto adentro es un nodo de tipo texto
 */
 
 /**
  * Si el node type devuelve:
  * 1 = Elmento
  * 2 = Atributo
  * 3 = texto
  * 8 = comentario
  */

  /**
   * Seleccionamos el h1
   * $0 nos devuelve el elemento
   * $0.childNodes[0].nodeType deveuelve 1 porque es un elemento
   * $0.nodeType
   */

   /**
    * Seleccionar Nodos
    */
