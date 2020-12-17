class Pelicula{
    constructor({id,titulo,director,anio,pais,genero,calificacion}){
        this.id=id;
        this.titulo=titulo;
        this.director=director;
        this.anio=anio;
        this.pais=pais;
        this.genero=genero;
        this.calificacion=calificacion;

        this.validarId(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarAnio(anio);
        this.validarPais(pais);
        this.validarGenero(genero);
        this.validarCalificacion(calificacion);
    }

    static get listaGenero(){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }
    static generoAceptado(){
        return console.info(`Los generos aceptados son ${Pelicula.listaGenero.join(",")}`)
    }

    validarCad(propiedad,valor){
        if(!valor)return console.warn(`Ingrese ${propiedad}`);
        if(typeof valor !=="string") return console.warn (`El tipo de dato es incorrecto`);
        return true;
    }
    validarNum(propiedad,valor){
        if(!valor)return console.warn(`Ingrese ${propiedad}`);
        if(typeof valor !=="number") return console.warn (`El tipo de dato es incorrecto`);
        return true;
    }
    validarLong(propiedad,valor,longitud){
        if(valor.length>longitud)return console.warn(`El ${propiedad} es demasiado largo solo puede contener ${longitud}`);
        return true;
    }
    validarArreglo(propiedad,valor){
        if(!valor)return console.warn(`Ingrese ${propiedad}`);
        if(!(valor instanceof Array))return console.warn(propiedad,"no es arreglo");
        if(valor.length===0)return console.warn(`El arreglo ${propiedad} esta vacio`);
        for(let variable of valor){
            if(typeof(variable)!=="string") return console.warn(`El tipo de dato en ${propiedad} no es correcto`);
        }
        return true;
    }

    validarId(id){
        if (this.validarCad("id",id))
            if(!(/^([a-z]{2}([0-9]){7})$/.test(id)))return console.warn(" El id no es valido.");
    }
    validarTitulo(titulo){
        if(this.validarCad("titulo",titulo))
            this.validarLong("titulo",titulo,100);
    }
    validarDirector(director){
        if(this.validarCad("director",director))
            this.validarLong("director",director,50);
    }
    validarAnio(anio){
        if(this.validarNum("año",anio)){
            if(!(/^([0-9]){4}$/.test(anio)))return console.warn(" El año no es valido.");
        }
    }
    validarPais(pais){
        this.validarArreglo("pais",pais);
    }
    validarGenero(genero){
        if(this.validarArreglo("genero",genero)){
            for(let variable of genero){
                if(!Pelicula.listaGenero.includes(variable))return console.warn(`El ${variable} no se encuentra entre los generos permitidos`,Pelicula.generoAceptado());
            }
        }
    }
    validarCalificacion(calificacion){
        if(this.validarNum("calificación",calificacion)){
            if(calificacion<0||calificacion>10)return console.warn(`La calificacion debe estar entre 0 y 10`);
            this.calificacion=calificacion.toFixed(1);
        }
    }

    fichaTecnica(){
        console.log(`Información:\nID:${this.id}\nTitulo:${this.titulo}\nDirector:${this.director}\nAño:${this.anio}\nPais:${this.pais}\nGenero:${this.genero}\nCalificación:${this.calificacion}\n`)
    }
}

const pelis=[
    {
        id:"tt0446029",
        titulo:"Scott Pilgrim vs. the World",
        director:"Edgar Wright",
        anio:2010,
        pais:["USA"],
        genero:["Action", "Comedy", "Fantasy"],
        calificacion:9.8
    },
    {
        id:"tt0434409",
        titulo:"V for Vendetta",
        director:"James McTeigue",
        anio:2005,
        pais:["USA"],
        genero:["Action", "Drama", "Sci-Fi"],
        calificacion:9.9
    },{
        id:"tt0816692",
        titulo:"Interstellar",
        director:"Christopher Nolan",
        anio:2014,
        pais:["USA"],
        genero:["Adventure", "Drama", "Thriller"],
        calificacion:7.5454
    }
];

pelis.forEach(n=> new Pelicula(n).fichaTecnica());