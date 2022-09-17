let buscador = "" 
let URL = ""

//fetch
async function getBusqueda(){
    const response = await fetch(URL);
    if (response.ok) {
       const data = await response.json();
       return data;
    }
    alert("error");
};

//mostrar en HTML
async function showitems(){
    let imprimirHTML= " ";   
    let info = await getBusqueda(); 
    let planetaDatos = info.collection.items;   
   for (let i = 0; i < planetaDatos.length; i++) {
    const element = planetaDatos[i];
    imprimirHTML += `        
        <div class="card">
            <div class="imagenes">
                <img src="${element.links[0].href}" class="img-fluid">
            </div>    
            <div class="card-body">
                <h5 class="card-title">${element.data[0].title}</h5>
                <p class="card-text">${element.data[0].description}</p>
                <p class="card-text"><small class="text-muted">${element.data[0].date_created}</small></p>
            </div>
        </div>`

document.getElementById("contenedor").innerHTML = imprimirHTML; 
};
}
    
//Busca y muestra la info  
document.addEventListener("DOMContentLoaded", ()=>  {
    const btbuscar = document.getElementById("btnBuscar");
    btbuscar.addEventListener("click",()=> {          
    buscador = document.getElementById("inputBuscar").value;
    URL = `https://images-api.nasa.gov/search?q=${buscador}`;    
    showitems();          
    });
});


