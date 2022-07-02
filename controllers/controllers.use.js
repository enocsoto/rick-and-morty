const {response}= require('express');
const usuarios= (req, res)=>
    res.render('index', 
        {personaje: [
            {   
                id: 'Eyehole Man', 
                name: "Alive", 
                first: 'Alien'
            }
        ]
        });

module.exports={
    usuarios
}