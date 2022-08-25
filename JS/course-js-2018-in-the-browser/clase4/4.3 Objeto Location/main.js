/**
 * Nos posicionamos en un dominio
 * por ejemplo en la pagina de CyberU
 */

// con este sabemos cual es la url 
location.href

// con este sabemos el dominio
location.host

/**
 * con este abrimos una pagina web especifica 
 * porque es un elemento de escritura 
 * y sobre escritura
 */
location.href = 'https://www.google.com/'

// este nos desplega todos los links de la pagina web
const myLinks = document.links


/**
 * para trabajar sobre los links internos
 * nos posicionamos en la pagina web
 * y en la consola del navegador
 */

const links = document.links
 for(let link of links){
     if (link.href.includes(location.host)) {
         link.style.background = 'yellow';
         console.log(link);
     }
 }

 /**
 * para trabajar sobre los links Externos
 * nos posicionamos en la pagina web
 * y en la consola del navegador
 */
const links = document.links
 for(let link of links){
     if (!link.href.includes(location.host)) {
         link.style.background = 'yellow';
         console.log(link);
     }
 }

 /**
  * hostname
  * nos posicionamos en la pagina web y vemos 
  * las diferencias
  */

//   dominio y el puerto
location.host;

//   solmente el dominio
location.hostname;

// para saber si tiene ssl
location.protocol

/**
 * origin 
 * devuelve el protocolo mas el dominio
 */



 /**
  * reload
  */

  location.reload();

  /**
   * assign
   * cambia la navegacion
   * o es lo mismo que sobreescibir 
   * la propiedad href
   */

   location.assign('https://google.com')

   /**
    * location.replace
    */
   location.replace