// Objetos

const Producto = {
    Titulo : "Justicica Joven",
    Tipo_Producto : {
        Tipo : "Serie",
        N_Temporadas : "3",
        N_Capitulos : 65,
        Categorias: {
            Ingenioso : "Si",
            Imaginativo : "Si",
            Superhero : "Si"
        },
    },
    Clasificacion: "+13",
    Recomendado: 0.97,
    Calidad : "HD"
}

const {Titulo,Clasificacion,Recomendado,Tipo_Producto:{Tipo},Tipo_Producto:{N_Temporadas},Tipo_Producto:{Categorias:{Superhero}}} = Producto
console.log(Titulo,Clasificacion,Recomendado,Tipo,N_Temporadas,Superhero)


// Arreglo

const Producto2 = [
    {
        Tipo : "Serie",
        Titulo : "S.W.A.T",
        Duracion : "2 temporadas"
    },
    {
        Tipo : "Pelicula",
        Titulo : "Shrek 2",
        Duracion : "1h 30min"
    },
    {
        Tipo : "Documental",
        Titulo : "La gran noche del Pop",
        Duracion : "1h 37min"
    }
]

const Producto_View = Producto2.map((p) => {
    return {
        Tipo : p.Tipo.toUpperCase(),
        Titulo : p.Titulo.toUpperCase(),
        Duracion : p.Duracion.toUpperCase()
    }
})

console.log(Producto_View)