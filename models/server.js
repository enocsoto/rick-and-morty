const express = require ('express');

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
        this.app.get('/',(req, res)=>
        res.render('index', {nombre: 'Eyehole Man', Status: "Alive", species: 'Alien'})
        );
         
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

}


module.exports=Server;