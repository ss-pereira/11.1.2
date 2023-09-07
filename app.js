const cargaPeliculas = async() => {
    try{
    const respuesta = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=707006909f9ea6dede5663bb54dbd076&language=es-MX");
    console.log(respuesta);
    const datos= await respuesta.json();
    let peliculas= " ";
    datos.results.forEach(pelicula => {
        peliculas= peliculas + `<h1>${pelicula.title}</h1>`;
        
    });
    
    document.getElementById('contenedor').innerHTML= peliculas;
}catch(error){
        console.log(error);
    }
}
cargaPeliculas();