
# **API de Almanax**



<a href="https://www.buymeacoffee.com/perroaa94g" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 217/2px !important;" ></a>

# [API Link](https://pevalcar-apis.netlify.app/api)

Creada por **pevalcar**

## TODO
- AlmanaxDB
  - [x] ES 
  - [x] EN
  - [x] FR
  - [ ] DE
  - [ ] IT
  - [ ] JA
  - [ ] PT
- [ ] DofusDB
- [ ] DofusTouchDB



## **Usos**
Esta es una API para hacer peticiones relacionadas con los eventos de Almanax en los juegos Dofus y Dofus Touch.

### **Endpoints**

#### Obtener todos los datos de un juego
- **Endpoint**: `/api/almanax/`
- **Método**: GET
- **Descripción**: Retorna todos los datos disponibles.
- **Ejemplo**:
  ```http
  GET https://pevalcar-apis.netlify.app/api/almanax/
  ```

#### Obtener datos específicos de un juego
- **Endpoint**: `/api/almanax/:game`
- **Método**: GET
- **Descripción**: Retorna todos los datos del juego especificado (dofus o dofus-touch).
- **Ejemplo**:
  ```http
  GET https://pevalcar-apis.netlify.app/api/almanax/dofus-touch
  ```

#### Obtener datos específicos de un juego y un idioma
- **Endpoint**: `/api/almanax/:game/:lang`
- **Método**: GET
- **Descripción**: Retorna todos los datos del juego y el idioma especificados.
- **Ejemplo**:
  ```http
  GET https://pevalcar-apis.netlify.app/api/almanax/dofus-touch/es
  ```

#### Obtener datos específicos de un juego, un idioma y una fecha
- **Endpoint**: `/api/almanax/:game/:lang/:date`
- **Método**: GET
- **Descripción**: Retorna los datos del juego, idioma y fecha especificados.
- **Ejemplo**:
  ```http
  GET https://pevalcar-apis.netlify.app/api/almanax/dofus-touch/en/2024-01-01
  ```

#### Obtener los idiomas disponibles
- **Endpoint**: `/api/almanax/langs`
- **Método**: GET
- **Descripción**: Retorna una lista de los idiomas disponibles.
- **Ejemplo**:
  ```http
  GET https://pevalcar-apis.netlify.app/api/almanax/langs
  ```

## **Descripción de la API**

Esta API proporciona información sobre los eventos diarios de Almanax para los juegos Dofus y Dofus Touch, permitiendo filtrar la información por juego, idioma y fecha.

### **Ejemplo de respuesta**

La API puede retornar una lista de objetos o un solo objeto con el siguiente formato:

```json
{
  "date": "String",
  "itemQuantity": "Number",
  "item": "String",
  "description": "String",
  "bonus": "String",
  "itemPictureUrl": "String",
  "language": "String",
  "game": "String"
}
```

## **Autor**
Creada por **pevalcar**

