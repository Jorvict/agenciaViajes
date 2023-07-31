// Importamos el model de Viaje para poder realizar consulta a DB
import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

// Establecemos las funciones para renderizar las páginas que serán enrutadas
const paginaInicio = async (req, res) => {

    // Consultar 3 viajes del modelo Viaje

    const promiseDB = [];

    promiseDB.push( Viaje.findAll({ limit: 3 }) );
    promiseDB.push( Testimonial.findAll({ limit: 3 }) );

    try {
        const resultado = await Promise.all( promiseDB );

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }

    

    /* res.json({
        id: 1 Express envía un JSON al usuario del site
    }); */

    // res.render(); // Se utiliza para mostrar una vista
}

const paginaNosotros = (req, res) => {

    const viajes = 'Cambiando el texto';

    // El .pug renderizado, dentro del objeto consecutivo van todos los
    //datos que requerimos enviar a dicha vista
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) =>{

    // Consultar a la DB los viajes
    const viajes = await Viaje.findAll();

    console.log(viajes)


    res.render('viajes', {
        pagina: 'Próximos viajes',
        viajes // Es igual a viajes:viajes
    });
}

const paginaTestimoniales = async (req, res) =>{

    try {
        
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error)
    }
    
}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) =>{

    const { slug } = req.params;

    try {
        
        const viaje = await Viaje.findOne({ where : {slug} });
        res.render('viaje', { // Archivo .pug de view que renderizará
            pagina: 'Información Viaje',
            viaje
        })

    } catch (error) {
        console.log(error)
    }
}

// Exportamos funciones de renderización para que sean usadas por el router
export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}