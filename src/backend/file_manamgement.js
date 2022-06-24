const fs = require ('fs');
   
async function crearArchivo () {
   await fs.promises.writeFile('./array.txt', 'Texto de prueba\n')
   try{
    console.log('Se guardo!');
   } 
   catch (err){

   }

}

crearArchivo()

class Clases {
    constructor (Actividades, Genero, Frecuencia, Precio, id){
        this.activity = Actividades;
        this.genere = Genero;
        this.frequency = Frecuencia;
        this.price = Precio;
        this.key = id
        
    }
    
    saved () { 
        function numeroAleatorio() {
            return parseInt(Math.random()*20) + 1
        
        }
        for (let index = 1; index < this.key; index++) {
            const num = numeroAleatorio()
            if(![num]){
                index = 0
            }
            [num]
        }
    

    }
    getbyId(){
        const getbyid = this.key.find(i => i.id === this.key)
        return getbyid
       
       
    } 
       
    getAll(){
        return Clases
    }

    deleteById(){
        if(!id){
            console.log('No existe el id');
        }
        this.key.reduce(i => i.id === id )
    }

    deleteAll(){
        return []
    }
      
}

const productos = new Clases (
    Actividades = 'Canto',
    Genero = 'Musica',
    Frecuencia = '1 vez por semana',
    Precio = 5000,
)


console.log(productos);
console.log(productos.saved());

async function Contenedor () {
    await fs.promises.writeFile('./array.txt', productos)
    try{
     console.log('Se guardo!' + productos.saved());
    } 
    catch (err){
 
    }
 
}
 
Contenedor()