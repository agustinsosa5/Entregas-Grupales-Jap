//items tiene imagenes
//data tiene Titulo
//date_created  tiene la fecha
//description  descripcion de la imgane. 
//title titulo de la imagen. 
let buscador = document.getElementById("inputBuscar").value;
var URL = `https://images-api.nasa.gov/search?q=${buscador}`;


//fetch
async function getBusqueda(){
    const response = await fetch(URL);
    if (response.ok) {
        return await response.json();
    }
    alert("error");
};

prueba

//mostrar en HTML
async function showitems(){
    let imprimirHTML= " ";   
    let info = await getBusqueda();
    info.forEach(element => {
        imprimirHTML += 
        `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
        <div class="col-md-4">
        <img src=${element.items} class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.description}</p>
        <footer class="card-text"><small class="text-muted">${element.date_created} </small></footer>
        </div>
        </div>
        </div>
         </div>`
         document.getElementById("contenedor").innerHTML = imprimirHTML;   
    });           
    };
    



    //Busca y muestra la info
    function buscar(){
    document.getElementById("btnBuscar").addEventListener("click",()=> {    
        if (buscador != "") {
        showitems();        
        }    
    });
    };
        

    // AHI ORDENE UN POCO EL CODIGO , QUE TE PARECE??? CREO QUE VAMOS A A TENER ERRORES
    // EN CREAR EL HTML PORQUE NO SE ASI ERA EL ARRAY PARA LLEGAR A LOS DATOS. 

