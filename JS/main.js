let ArrayAlumnos = []
const ArrayRecoger = []

const form = document.getElementById('form');
const nombre = document.getElementById('nomEstudiantes');
const id = document.getElementById('idEstudiantes');
const numPeriodos = document.getElementById('numPeriodos')
const expresion = /^[a-z ,.'-]+$/i;



form.addEventListener('submit', e => {
	e.preventDefault();
	
  class Alumno {
    constructor (){
    this.id = document.getElementById('idEstudiantes').value;
    this.nombre = document.getElementById('nomEstudiantes').value;
    this.periodos = document.getElementById('numPeriodos').value;
    this.resultadoFinal = "";
  }
}
const cadaAlumno = new Alumno(); 
function recogerInputs(){
  
  if(checkInputs()){
    return false;
  }
  
  /* const notasInputs= [];
  let numPeriodos = document.getElementById("numPeriodos");
    for (let i = 0; i<numPeriodos.value; i++){
    let nota = document.getElementById(`input${(i+1)}`);
    notasInputs.push(parseFloat(nota.value))    
    }

  const res = notasInputs.reduce((acc, item) => {
    return acc = (acc + item);}, 0)/numPeriodos.value;
  cadaAlumno.resultadoFinal = res;
  }
   
  ArrayAlumnos.push(cadaAlumno);   */
	
  
};

function mostrar(){
  //Creo las variables del HTML
  let numPeriodos = document.getElementById("numPeriodos");//Llama al elemento que vamos a usar
  let render = document.getElementById("render");//Llama al elemento donde vamos a crear los inputs 
  render.innerHTML = "";//Reinicia el contador de inputs
  
  for(let i = 0; i < numPeriodos.value; i++){//Creamos la variable de iteraciòn donde recibimos el valor de numeriodos.   
    let elemento = document.createElement("input"); //Creamos la variable del tipo de valor que vamos a ingresar.  
    elemento.setAttribute("id", ("input"+(i+1)));//Creamos un mètodo que me agrega un atributo (ID) con cada iteración 
    elemento.setAttribute("placeholder", ("Notas Periodo: "+(i+1)));
    elemento.classList.add("form-control");//Le insertamos una class a la variable elemento (input) ((BOOSTRAP))

    render.appendChild(elemento);//Le insertamos un nodo hijo al render en HTML 
  
  }
}

function repetirAlumnos(){ //Renderizado
  recogerInputs()
  let respuesta = document.getElementById("respuesta");
  respuesta.innerHTML = "";

  for(const Alumno of ArrayAlumnos){
    if(Alumno.nombre !=""){
      respuesta.innerHTML +=`ID: ${Alumno.id} Nombre: ${Alumno.nombre} Periodos: ${Alumno.periodos} Resultado Final:${Alumno.resultadoFinal}<br>`
    }
    
  }

  Toastify({

    text: "Datos mostrados correctamente",
    
    duration: 3000
    
    }).showToast();
}



// VALIDACIÓN DE CAMPOS 

function checkInputs() {
  let error = false;
	const usernameValue = nombre.value.trim();
	const idValue = id.value.trim();



	
	if(usernameValue === '') {
		setErrorFor(nombre, 'Tu nombre no puede estar vacío');
    error = true;

	} else if(!expresion.test(usernameValue)){
    setErrorFor(nombre, 'Tu solo puede contener letras');
    error = true;
  } else {
		setSuccessFor(nombre);
    
	}
	

	if(idValue === '') {
		setErrorFor(id, 'El ID no puede estar vacío');
    error = true;
	} else if(isNaN(idValue)) {
    setErrorFor(id, 'El ID no puede contener letras');
    error = true;
  } else {
		setSuccessFor(id);
	}
  return error;
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	


