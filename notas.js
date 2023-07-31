/**
 * ########## ¿Qué es Node.JS? ##########
 * Node o Node.JS es un entorno de código abierto, 
 * multi-plataforma que permite crear aplicaciones del lado
 * del servidor en JavaScript. Permite crear API's, 
 * aplicaciones web e incluso acceder a archivos y leer sus
 * contenidos. Algunos ejemplos son realizar pagos de forma 
 * segura, puedes acceder a una BD, autenticar usuarios, 
 * subir archivos y muchas cosas más.
 * 
 * ===== Ventajas de Node =====
 *  - Velocidad y rendimiento: Node fue pensado para 
 * solucionar estos problemas, además es excelente para 
 * aplicaciones en tiempo real.
 * 
 *  - JavaScript: Sí ya tienes experiencia en javascript,
 * ahora podrás crear aplicaciones fullstack con Node sin
 * necesidad de compiladores ni lenguajes extras.
 * 
 *  - NPM (Node Package Manager): Una gran cantidad de paquetes
 * y librerías de código abierto ya listos, entre ellos encontrarás:
 *      ~ Subida de archivo
 *      ~ Autenticación
 *      ~ Enviar emails
 *      ~ Template engines
 *      ~ Seguridad
 * 
 *  - Funciona en Windows, Mac, Linux
 * 
 *  - Una gran cantidad de librerías soporte, documentación, ejemplos
 * 
 * ===== Instalación de NPM =====
 * Escribimos y ejecutamos la siguiente línea de código en la terminal
 * npm install (nombre_del_paquete)
 * npm install express
 * 
 * 
 * ########## ¿Qué es Express? ##########
 * Express.JS es el framework web más popular de Node, y es la herramienta
 * sobre la que están desarrollados otros frameworks como MEAN, Sails,
 * Loopback, GraphQL, Yoga y otros.
 * 
 * ===== Características de Express =====
 * En las rutas (Routes) soporta los diferentes verbos HTTP, como son POST, 
 * GET, PUT, PATCH, DELETE.
 * 
 * Soporta "vistas" que son los datos mostrados en la pantalla mediante 
 * determinadas respuestas. (Hacen referencia a los views donde se utilizan
 * los template engines ).
 * 
 * Permiten la creación de aplicaciones MVC que permiten tener una separación
 * de código y a su vez un mejor orden.
 * 
 * Cuentan con soporte a MiddleWare, mediante peticiones que se ejecutan en
 * la tubería de la petición. Es decir, ejecutas una petición y una vez
 * finalizada pasará a la siguiente petición (básicamente como una cola).
 * 
 * ===== Middleware Express =====
 * El middleware se utiliza bastante en Express, permite acceder a archivos,
 * revisar si un usuario está autenticado o no, entre otras.
 * Ejemplo: Código que enrutara a admistracion cuando un controlador valide 
 * que el usuario está autenticado y otro controlador mostrará el panel de
 * administracion
 *      router.get('/administracion',
 *          authController.usuarioAutenticado,
 *          adminController.panelAdministracion
 *      );
 * 
 * El middleware se ejecuta en pila, por lo tanto se ejecuta uno y después el
 * otro.
 * 
 * En alguno casos el middleware lo creas tu (similar a crear tus propias
 * funciones) o también está disponible en express una gran cantidad de
 * middlewares.
 * 
 * ===== Desventajas de Express =====
 * A diferencia de otros frameworks como Django o Laravel, Express no viene
 * con "baterías incluidas", ese término se le da cuando un framework ya tiene
 * autenticación, roles, ORM o un generador de modelos, esto quiere decir que
 * Express no viene con dichas funciones incluidas, pero estas piezas se
 * pueden instalar vía NPM. Lo cual en realidad podría ser una ventaja ya que
 * solamente instalas lo que necesitas para tu aplicación y podría beneficiarte
 * en rendimiento ya que a diferencia de los frameworks como Laravel, Django,
 * Ruby on rails puede ser que vengan con más funciones de las que en realidad
 * requieres para tu proyecto.
 * 
 * ########## Instala la última versión de Node para utilizar Imports y Exports ##########
 *  - Instalamos Node, NPM y chocolatey desde su página web
 *  - En la ruta de nuestro proyecto ejecutamos el comando npm init
 *      para generar el archivo package.json
 *  - Procederemos a instalar express como DEPENDENCIA DE PRODUCCIÓN, existen
 *      2 tipos de dependencias, las dependencias de desarrollo y las
 *      dependencias de producción, las de desarrollo son aquellas que 
 *      requerimos y utilizamos mientras desarrollamos el proyecto, y las de 
 *      producción son aquellas que se van a requerir cuando el proyecto ya se 
 *      encuentre publicado. Para instalar como dependencia de producción
 *      ejecutamos como siempre (npm install X_paquete) ya que es la
 *      configuración por defecto, dicha dependencias se subirá al servidor 
 *      cuando el proyecto sea desplegado, caso contrario sí solamente se
 *      requiere mientras desarrollamos el proyecto, entonces agregamos 
 *      "--save-dev" al comando de instalacion para especificar que es una
 *      dependencia de desarrollo.
 *      npm install --save-dev X_paquete
 *  - Podemos identificar las dependencias de desarrollo y de producción a 
 *      través del archivo package.json, las de desarrollo son aquellas
 *      dentro del objeto "devDependencies" mientras que las de producción
 *      están dentro de "dependencies"
 *  - Recordar, instalar express como dependencia de producción
 *  - Instalamos Nodemon como dependencia de desarrollo, Nodemon funciona
 *      para detectar cambios en los archivos y reiniciar el servidor,
 *      esto es útil para refrescar el site cada vez que modificamos el
 *      código mientras ejecutamos el servidor, así ya no tendremos que
 *      ir a la terminal, detener el servidor y volverlo a arrancar cada
 *      vez que hagamos algún cambio (tener en cuenta que refrescar el
 *      servidor con los nuevos cambios no significa que la página se
 *      actualizará automaticamente, por el contrario, debemos refrescar
 *      la página manual,ente, lo que se refresca es el server).
 * - Generamos el archivo index.js que es donde vamos a configurar express
 * - Para ejecutar el index.js y poder arrancar el servidor necesitamos el
 *      package.json, es nuestra segunda utilidad de dicho archivo, para
 *      ejecutar el index vamos al archivo package y en el objeto "scripts"
 *      creamos una key con el nombre "dev", como value le colocamos
 *      nodemon (para que detecte los cambios) index.js.
 *      Ahora vamos a la terminal con la ruta de nuestro proyecto, y
 *      ejecutamos el script creado con el comando "npm run dev".
 * - Para visualizar el proyecto abrimos el navegador y vamos a la url 
 *      localhost:4000
 * 
 * ########## Habilitando la Sintaxis de Imports y Exports ##########
 *
 * Anteriormente cuando aún no existían los Modules para poder importar
 * en Express se utilizaba CommonJS, sin embargo en la actualidad ya se
 * puede utilizar los Modules, no obstante deben habilitarse en primer
 * lugar, para ello debemos ir al package.json y justo antes del author
 * y despues del objeto de scripts, colocamos la key "type" con un value
 * de "module" (también se puede habilitar "commonjs" en caso se requiera).
 * 
 * Tener en consideración que si colocamos todos los .get para acceder a
 * subpaginas en el index.js principal el archivo se hará muy pesado por
 * lo cual una opción altamente recomendable es realizar Routing que es 
 * pasar dichos .get a otros archivos y enlazarlos con el index principal
 * 
 * ########## Routing en Express ##########
 * Creamos una carpeta llamada "routes" en la raíz del proyecto y creamos
 * un archivo llamado "index.js" dentro, tener en cuenta que dentro del
 * archivo no podemos volver a instanciar haciendo uso de app para express
 * debido a que ya se está utilizando en el index.js principal ubicado en la
 * raíz y solamente se debe tener una instancia de app. Lo que si podemos
 * hacer es importar express para luego definir el router, de esta manera
 * en el app del index.js principal seguimos usando Express con las
 * extensiones establecidas en el Router a través del index.js de routes.
 * 
 * ########## ¿Qué es un Template Engine? y habilitando Pug ##########
 * Los Template Engines o también conocidos como motores de plantilla son
 * la V(Vista/View) del MVC(Modelo Vista Controlador/Model View Controller).
 * 
 * Permiten mostrar la parte visual (HTML) en una aplicación de Express,
 * debido a que el modelo retorna un objeto (o arreglo) de datos, un
 * template engine permitirá acceder a los resultados de una consulta y
 * mostrarlos en pantalla
 * 
 * ===== Características de un Template Engine =====
 * ~ Hay una gran variedad y cada uno tiene su propia sintaxis.
 * ~ Usualmente puedes escribir código JS dentro del HTML
 * ~ Sí tienes experiencia en angular, React o Vue, estos usualmente suelen
 *      reemplazar a los template engines en una aplicación
 * 
 * ===== Template Engines más comunes en Node - Express =====
 *  ~ PUG - (Antes Jade)
 *  ~ EJS - Embedded JavaScript
 *  ~ HBS - Handlebars.JS (Antes Mustache.JS)
 *  ~ REACT - Sintaxis similar al framework
 * 
 * ===== Instalación de Template Engine =====
 * ~ Se instalan vía npm como dependencia de producción:
 *      npm install pug
 * ~ Se habilita en el archivo principal (el index.js de la raíz):
 *      app.set('view engine', 'pug');
 * ~ Creamos una carpeta "views" en la raíz del proyecto
 * ~ Dentro creamos un archivo con el nombre de una URL establecida en el
 *      routing, como por ejemplo "nosotros" y le agregamos la extensión
 *      de .pug, quedando "nosotros.pug", recordar que en el routing el
 *      response del .get debe ser un render (res.render)
 * 
 * ===== Sintaxis de Pug =====
 * Tener en cuenta que en pug es muy importante la identación puesto que
 * no existen llaves para bloques de código así que aquel código que esté
 * más identado que otro significa que es su hijo y por lo tanto dentro
 * de un bloque de código inferior.
 * No existen apertura y cierre de etiquetas de los HTML
 * Sí queremos pasar atributos a la etiqueta, deben ser dentro de unos
 * paréntesis, p. ej: img(src="img/photo01.jpg")
 *
 * ########## Pasar variables hacia las vistas ##########
 * Usualmente a través de un controlador se pasará una consulta a una BD,
 * o también se pasarán variables de forma condicional (Por ejemplo si el
 * usuario está autenticado o no), los datos que se pasarán a la vista van
 * dentro de un objeto que se pasa como argumento al response.render en 
 * conjunto con el nombre de la vista a la cual se está accediendo, para
 * más detalle revisar funciones router.get del archivo de routing y los
 * controllers de las páginas.
 * 
 * Para utilizar alguna de las variables que se pasaron como argumento,
 * simplemente desde el archivo pug colocamos la etiqueta y un = asignandole
 * la variable, por ejemplo "p= viajes", generara una etiqueta P y como
 * valor le asignará lo que contenga la variable viajes. COMO OBSERVACIÓN
 * NO DEJAR ESPACIOS ENTRE LA ETIQUETA Y EL "=", DEBEN IR JUNTAS, de lo
 * contrario pug no lo detectará como asignación de variable.
 * Una sintáxis alternativa es de la siguiente forma "p #{viajes}", donde
 * también se deben respetar tal cual los espacios
 * 
 * ########## Creando un layout principal (Master Page) ##########
 * Nos evitará tener que repetir código constantemente, para un mejor
 * orden se recomienda ingresar a la carpeta "views" y dentro de ella
 * crear una carpeta con nombre "layout", dentro de esta carpeta irían
 * aquellos diseños que suelen repetirse como por ejemplo el header, navbar,
 * footer, entre otros.
 * 
 * Dentro de la carpeta generamos un archivo index.pug que será como la página 
 * principal, primero definimos la base que siempre será "estática", o sea,
 * que siempre tendrá el mismo contenido para todas las páginas, y luego
 * definimos el bloque de contenido "block contenido", esta directiva
 * se utiliza para establecer bloques de contenido reemplazables y que se
 * pueden modificar.
 * 
 * Para poder "halar" la plantilla de la master page, nos vamos al archivo
 * .pug donde se encuentra el contenido y jalamos la ruta haciendo uso de
 * extends, p. ej: "extends ./layout/index", luego colocamos "block contenido"
 * y haciendo salto de línea colocamos lo que se quiera renderizar de
 * contenido haciendo uso de la master page de inicio, tener en cuenta
 * que todo el código de contenido debe estar identado para que esté dentro
 * del bloque de la master page
 * 
 * ########## Agregar Hojas de Estilos y Archivos estáticos ##########
 * Generamos una carpeta con nombre "public" en la raíz, dentro de esta 
 * carpeta irán los archivos CSS e imágenes que se requieran para el proyecto.
 * Luego establecemos en Express que esa será la carpeta pública de donde se 
 * obtendrán las hojas de estilos e imágenes. Esto se realizará en el index.js
 * de la raíz. app.use(express.static('public'));
 * 
 * Para agregar una imagen desde un archivo .pug colocamos la etiqueta
 * img y el atributo src (que va dentro de parentesis), tener en cuenta
 * que la ruta del src va a ser relativa como si estuvieramos en la carpeta
 * public debido a que así se definió en el archivo index.js principal con
 * el comando específicado en el parráfor superior
 * 
 * ########## Creando un header y navegación principal ##########
 * En caso deseemos incluir más de una sección provenientes de otros archivos y
 * agregarlos al archivo master page lo podemos realizar haciendo uso de 
 * "Include", este se diferencia en que el include agrega el código de otro
 * archivo pug tal cuál, como sí se hubiera copiado y pegado todo el código 
 * mientras que block si permite realizar modificaciones. Al usar el include
 * se coloca la ruta donde se encuentra el archivo que tiene el código a usar.
 * 
 * La sintaxis de pug permite agregar clases sin necesidad de los parentesis,
 * solamente colocando "." y el nombre de la clase, si no se especifica que
 * tipo de etiqueta es, por defecto generará un DIV con las clases especificadas.
 * Sí deseas que sea una etiqueta en especifico puedes colocar el nombre de la 
 * etiqueta, seguido de un . y los nombres de las clases. Por ejemplo:
 * "nav.mt-5.mt-md-0.nav.justify-content-center.justify-content-md-end"
 * 
 * ########## Middleware en Express ##########
 * Un middleware en Express es una función que se utiliza para procesar y
 * manipular las solicitudes HTTP que llegan a una aplicación web. Funciona
 * como una capa intermedia entre el servidor y las rutas definidas en la
 * aplicación. Puede acceder y modificar el objeto de la solicitud (req), el
 * objeto de respuesta (res), y el siguiente middleware en la cadena (next).
 * Puede realizar diversas tareas como validar datos, autenticar usuarios,
 * manejar errores, realizar registro y seguimiento, entre otros. Cabe mencionar
 * que el middleware se ejecuta secuencialmente en el orden en el que se
 * define en la aplicación. En ocasiones es posible que la ejecución del
 * middleware se bloquee y que no continue con la ejecución de los siguientes
 * middlewares, lo cual podría ocasionar que no se carguen las páginas a los
 * usuarios, por lo cual se considera una buena práctica llamar a la función
 * next() al final del middleware, y en caso no funcione, forzarlo haciendo
 * uso de un "return next()".
 * 
 * Es importante tener en cuenta que no en todos lo casos es recomendable
 * colocar un next(), principalmente cuando la ejecución se debe detener, 
 * forzosamente, un ejemplo sería sí falla la autenticación de un usuario,
 * al haber fallado no se pueden mostrar las siguientes páginas de acceso
 * ni ejecutar sus respectivos middlewares ya que se daría acceso a un usuario
 * no permitido.
 * 
 * Para mas detalle, los middlewares donde no se recomienda colocar el next()
 * son los siguientes:
 *      ~ Middleware de manejo de errores: En los middleware de manejo de
 *      errores, no se requiere llamar a "next()" ya que su objetivo principal
 *      es capturar y manejar los errores que ocurren en la aplicación. Una
 *      vez que el error es manejado no se espera que la ejecución continue hacia
 *      otros middlewares. En lugar de eso, se envía una respuesta al cliente o se
 *      realiza alguna otra acción adecuada.
 * 
 *      ~ Middleware de autenticación: En algunos casos, los middlewares de
 *      autenticación pueden detener la ejecución si la autenticación falla. Sí
 *      no se puede autenticar al usuario, no tiene sentido continuar hacia
 *      otros middlewares. En éste caso, el middleware de autenticación puede
 *      enviar una RESPUESTA DE ERROR o REDIRIGIR AL USUARIO a una página de
 *      inicio de sesión
 * 
 *      ~ Middleware de rutas finales: Sí tienes un middleware que se utiliza
 *      como un controlador final de rutas, es posible que no necesites llamar
 *      a "next()". Este tipo de middleware suele ser utilizado para manejar
 *      rutas especificas y enviar una respuesta al cliente. Una vez que se
 *      envía la respuesta, la ejecución se considera complet y no hay necesidad
 *      de continuar hacia otros middlewares. Suelen ser utilizadas para rutas
 *      no encontradas, pero tambien son validas para realizar redirecciones
 *      en caso se intente acceder a una ruta que no existe o a una ruta que
 *      se necesita logearse previamente.
 * 
 * 
 * Express maneja un objeto de variables internas llamada "locals", puedes
 * hacer referencia a ellos con "res.locals" dentro de un middleware, sí deseas
 * establecer una nueva propiedad para el objeto locals puedes realizarlo a
 * través de la sintáxis de punto.
 * 
 * Algo a tener en cuenta es que si hacemos un console.log a la variable desde
 * un middleware definido con .use es posible que en consola se imprima varias
 * veces la variable, esto es debido a que si el middleware se registró con
 * .use entonces éste se ejecutará para todas las solicitudes que lleguen
 * a la aplicación (GET, POST, PUT, PATCH, DELETE).
 * 
 * Algo también a tener en cuenta es que las variables creadas y almacenadas en
 * res.locals están disponibles para las Views, es decir, desde los archivos
 * .pug se puede hacer referencia directamente a dichas variables.
 *
 * ########## Creando todas las vistas ##########
 * 
 * Podemos generar varias plantillas .pug en donde el encabezado sea la misma
 * variable, pero el valor que se le pase a dicha variable cambiará en el
 * routing, de esta manera en cierto modo se puede usar el mismo código entre 
 * plantillas, además, en el index.pug (la master page) se puede hacer uso
 * de esa misma variable para el Title, de ésta manera la masterpage cambiará
 * de título de página según la variable que reciba en el routing de la
 * página a la que estamos accediendo, esto podría beneficiar al SEO. En caso
 * deseemos utilizar dos variables debemos utilizar la sintáxis "#{variable}"
 * Por ejemplo: title #{nombreSitio} | #{pagina}
 * (No dejar espacios entre el #, las llaves y variable)
 * 
 * ########## Conectando a una base de datos MYSQL ##########
 * 
 * Debemos tener instalado MYSQL y TablePlus con anterioridad, importamos la 
 * base de datos al tableplus haciendo uso del SQL dump, luego procedemos a
 * instalar una dependencia de desarrollo con el siguiente comando (recordar 
 * que la ruta debe estar posicionada en la raiz del proyecto):
 * 
 * npm install mysql2 sequelize
 * Sequelize es un ORM que permite a los usuarios llamar a funciones JS para
 * interactuar con SQLDB sin escribir consultas reales.
 * 
 * Definición: Un ORM (Object Relational Mapping) tiene como función abstraer
 * la DB, de modo que tú como programador puedas hacer consultas sin conocer
 * SQL, y en su lugar, seguir usando el lenguaje de programación que ya
 * conoces. Lo que hace un ORM es mapear las bases de datos a objetos(de ahí
 * viene su nombre), y estos objetos tendrán métodos para interactuar con ellos
 * y hacer el CRUD sin comunicarte directamente a la base de datos.
 * 
 * Procedemos a crear una carpeta llamada "config" en la raíz y dentro de
 * esta carpeta creamos un archivo llamado "db.js"
 * 
 * ########## Introducción a MVC y creando un Modelo ##########
 * MVC o Model View Controller es un patrón de diseño de software que permite
 * la separación de obligaciones de cada pieza de código en tu aplicación web.
 * 
 * Enfatiza la separación de la lógica de programación y lo que se muestra en
 * la pantalla. Esto se realiza principalmente en el controlador con los datos
 * que se pasan hacia la vista.
 * 
 * Model = Modelo
 * View = Vista
 * Controller = Controlador
 * 
 *  ~ Model: Es el encargado de los datos (Desde una base de datos) y de la
 *          lógica para mostrar esos datos. Ejemplo: Un usuario quiere ver la
 *          sección de productos, el modelo se encargará de realizar esa 
 *          consulta a la DB. Al crear un model se sugiere que la primera letra
 *          del nombre del archivo sea en mayusculas.
 *  ~ View: Es el encargado de lo que se ve en pantalla (HTML). Ejemplo: Sí el
 *          Modelo hace la consulta a la DB para los productos, es la vista
 *          quien imprime y renderiza esos resultados.
 *  ~ Controller: Es el que se comunica entre el modelo y la vista, antes de
 *          que el modelo consulte a la base de datos es el encargado de
 *          mandarlo a llamar, y también una vez que el modelo tiene los
 *          resultados de la consulta, es el que se encarga de pasarlos a la
 *          vista.
 *  ~ Router: Es un término que es importante tenerlo en conocimiento, es el
 *          encargado de registrar todas las URL's o endpoints que la
 *          aplicación soporta. Sí el usuario accede a /productos, el router
 *          llama a un controlador, que se comunica con el modelo para
 *          obtener los datos que son pasados hacia la vista para ser
 *          mostrados
 * 
 * Para iniciar con la creación de un Modelo, creamos una carpeta "models"
 * en la raíz del proyecto, y dentro de la carpeta creamos el archivo
 * "Viaje.js"
 * 
 * ########## Creando un Controller ##########
 * Recordar que el controlador es quien se debe de encargar de que información
 * se va a mostrar y que vista se va a cargar. Para ello debemos crear una
 * carpeta en la raíz del proyecto, debe tener por nombre "controllers" y
 * dentro creamos un archivo que se llama "paginasController.js", este
 * controlador se encargará de mostrar las diferentes páginas del proyecto.
 * 
 * ########## Consultar a la base de datos ##########
 * Desde el paginasController importamos el Modelo de viaje, dentro
 * de la funcion de renderizacion de viajes creamos una variable que tendra
 * como valor un await que esperará la ejecución del modelo Viaje, con el
 * método findAll(), es decir, una línea de código similar a la siguiente:
 *  const viajes = await Viaje.findAll();
 * 
 * La variable creada será un arreglo con los valores retornados por la
 * consulta, nos aseguramos de pasar dicho arreglo a través del controller
 * para poder utilizarlo en el view.
 * 
 * Para poder recorrer el arreglo en el pug se puede utilizar una estructura
 * repetitiva similar a un for, la cual es un "each", por ejemplo:
 * each viaje in viajes
 * Donde viaje es la posición iterada y viajes es el arreglo
 * 
 * Para el caso del hipervinculo de mas información recordar que la ruta del
 * href debe iniciar con la ruta "viajes/(data_iteracion)" y agregar un texto
 * fuera de los parentesis de atributos, ese texto sera renderizado como
 * visible. Ejemplo de como sería: 
 *      a(href=`viajes/${viaje.slug}`, class="btn btn-success btn-block") Mas información
 * Recordar que debe estar alineado con los parrafos previos, y los atributos
 * van antes de la asignación de la variable al elemento a renderizar
 * 
 * 
 * ########## Consultar la DB de cada viaje según la URL visitada ##########
 * Debemos crear un router que nos pueda direccionar a cada uno de los
 * distintos viajes a través del slug, para ello podemos hacer uso de un
 * comodín en el router, escribiendo la ruta de la siguiente manera:
 *      /viajes/:(nombre_comodin)
 * El comodín puede llevar cualquier nombre, pero se recomienda que sea
 * igual al nombre de la columna del slug, la función del comodín es que
 * en vez de crear un router para la página n1,n2,n3...etc. lo que hará es 
 * ejecutar el método de renderización pasandole el comodín como una
 * variable que se podrá utilizar desde el método ejecutado.
 * En otras palabras, se puede interpretar como que todas las rutas que inicien
 * con "/viajes/" ejecutarán el método contiguo al comodín.
 * Adicionalmente tener en cuenta que el comodín capturará toda la ruta que
 * venga despues de "/viajes/", es decir, sí la ruta del slug fuera
 * "/viajes/terrestres/bus/mes-mayo", entonces el valor almacenado en el
 * comodín será la ruta "terrestres/bus/mes-mayo"
 * 
 * NOTA: Tener en consideración que el view con los detalles se ejecuta 
 * automaticamente luego de hacer click al hipervinculo porque el router
 * está detectando que se está accediendo a una ruta del comodín.
 * 
 * Para acceder a la variable que capturó la ruta del comodin debemos acceder
 * a req.params desde el controlador que abrirá las páginas, sí lo imprimimos
 * desde un console.log veremos que retornará un objeto donde el nombre de la 
 * variable que capturó la ruta es el mismo nombre que se estableció para 
 * el comodín, por lo cual para acceder a la ruta podemos acceder con sintáxis
 * de punto
 * 
 * Sí en las rutas "hijas" no funciona el logo del header, ir al .pug del
 * header y en la ruta de la img del logo agregarle un "/" al inicio sí es
 * que no lo tiene, el inconveniente con la imagen puede ser debido a un
 * problema de que no está buscando la imagen en la ruta del public 
 * correctamente sino que desde rutas secundarias o hijas al no tener el
 * / está intentando buscar el archivo en la propia ruta del .pug.
 * Adicionalmente, en el index.js principal, donde se definió la ruta de
 * la carpeta public, agregamos el siguiente codigo
 * app.use('/viajes', express.static('public'));
 * Esto es para que las rutas hijas de viajes también tengan acceso a la
 * carpeta public, ya que el app.use inicial solo funciona para rutas de
 * primer nivel, pero tener en cuenta que se debe modificar la ruta del
 * botón de "Más información" y eliminar el prefijo "viajes/"
 * 
 * 
 * ########## Reutilizando el código de viajes ##########
 * 
 * Un inconveniente que podríamos presentar es que las rutas se dupliquen
 * al ingresar a un viaje desde la página viajes, esto pasará sí el
 * hipervinculo de mas información direcciona con un hípervinculo
 * relativo y no absoluto, los hípervinculos relativos añaden el valor
 * del href a la ruta actual en la que nos encontramos mientras que una
 * ruta absoluta comienza desde la raíz del dominio, para asegurarnos
 * que el href está con una ruta absoluta debemos colocarle un / al inicio
 */