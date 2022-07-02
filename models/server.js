const express = require ('express');
const axios = require('axios').default;
class Server {

    constructor(){
        this.app = express();
        
        
        //Puerto
        this.port = process.env.PORT;
        
        this.midellwares();
        //Rutas
        this.routes();

        //Motor de plantilla utilizado
        this.app.set('view engine', 'ejs');
        this.app.set('../views');
    }
    
    midellwares(){
        //servir contenido estatico midellwares
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use('/', require('../routes/routes'));
        this.app.get('*', (req, res)=>{
            res.send('404| Page Not Found');
        });
    };

    listen(){
        //Escucha del servidor
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en el puerto '+ this.port);
        });
    }
async personajes (personaje=''){
    try {
        const pers= await axios.get('https://rickandmortyapi.com/api/character')
        //console.log(pers.data);
        return personaje=[];
    } catch (error) {
        console.log('No se encontro lo solicitado');
        return [];
    }
}
}


module.exports=Server;