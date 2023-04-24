//function que nos ayuda a cargar todos los digimones

    fetch(`https://digimon-api.vercel.app/api/digimon`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then(function (json) {
        ImprimirTodo(json);
      })
      .catch((error) => console.log(error));

  

  //buscar digimon especifico

  function buscarUno(input) {
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${input} `, {
      method: "GET",
    })
      .then((response) => response.json())
      .then(function (json) {
        digicard(json[0].name,json[0].level,json[0].img)
      })
      .catch((error) => console.log(error));
  }


  //comenzaremos por buscar el digimon a travez del input de la barra de navegacion 
  const formularioBuscar = document.getElementById('buscarDigimon');

  formularioBuscar.addEventListener('submit', function(e){
    e.preventDefault();
    let inputBusqueda = document.getElementById('nombreDigimon').value;
    buscarUno(inputBusqueda);
  });



 // funcion imprimir una card con un digimon
function imprimirUno(nombre,level,img){

;  
    let modal = document.getElementById('constenidoModal');
 //creamos elementos a imprimir
    let cardImprimir = `
        <div class="card mx-auto" style="max-width: 20rem;">
        <h2 class="card-title text-center my-3">${nombre}</h2>
            <img src="${img}" class="card-img-top" alt="${nombre}">
            <p class="card-text my-3 text-center"><strong>Level:</strong>${level}</p>
        </div>`;

        modal.innerHTML = cardImprimir;
        mostrarModal();
}

function mostrarModal(){
    let modal = document.getElementById('modalDi');
    modal.classList.remove('d-none');
}

//cerrar ventana modal 
document.getElementById('cerrar').addEventListener('click', function () {
    let modal = document.getElementById('modalDi');
    modal.classList.add('d-none');
});

//imprimiendo tidis los digimon
function ImprimirTodo(elemento){
 
  for(let ele of elemento){
    let cardImprimir = `
    <div class="digiCard" id="${ele.name}" onclick="imprimirUno('${ele.name}','${ele.level}','${ele.img}')">
        <img src="${ele.img}" class="card-img-top img-fluid" alt="${ele.name}">
        </div>
    </div>`;

    document.getElementById('pizarra').innerHTML += cardImprimir;
  }
}

//eleccion de digimos en el cuerpo 

function digicard(name,level,img){


 let card =`
 <div class="card mx-auto p-2">
      <h2 class="text-center">${name}</h2>
     <img src="${img}" class="card-img-top" alt="${name}">
     <div class="card-body">
         
         <p class="card-text text-center"><strong>Level:</strong>${level}</p>
     </div>
 </div>`;


 document.querySelector(`#${name}`).scrollIntoView({
  behavior: 'smooth',
  block: 'center',
  inline: 'start'
 });

 document.getElementById('digipizarra').innerHTML = card;
 document.querySelector(`#${name}`).style.borderColor = '#e0e01b';

 setTimeout(function (){
  document.querySelector(`#${name}`).style.borderColor = 'grey';
 },3000)
 

 
}







