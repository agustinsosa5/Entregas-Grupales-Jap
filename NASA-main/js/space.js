//items tiene imagenes
//data tiene Titulo
//date_created  tiene la fecha
//description  descripcion de la imgane. 
//title titulo de la imagen. 
let buscador = document.getElementById("inputBuscar").value;
let URL = `https://images-api.nasa.gov/search?q=jupiter`;
const btbuscar = document.getElementById("btnBuscar");


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
    console.log(info);        
        imprimirHTML += 
        `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
        <div class="col-md-4">
        <img src=${info.collection.href} class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">${info.collection.title}</h5>
        <p class="card-text">${info.collection.description}</p>
        <footer class="card-text"><small class="text-muted">${info.collection.date_created} </small></footer>
        </div>
        </div>
        </div>
         </div>`
         document.getElementById("contenedor").innerHTML = imprimirHTML;   
             
    };
    



    //Busca y muestra la info    
    btbuscar.addEventListener("click",()=> {          
            showitems();        
       
    });
    
        

    // AHI ORDENE UN POCO EL CODIGO , QUE TE PARECE??? CREO QUE VAMOS A A TENER ERRORES
    // EN CREAR EL HTML PORQUE NO SE ASI ERA EL ARRAY PARA LLEGAR A LOS DATOS. 

