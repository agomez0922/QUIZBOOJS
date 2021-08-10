let contador = 0

function carnet(){

    contador= contador + 1

    let nombre = document.getElementById('innombre').value
    
    let apellido = document.getElementById('inapellidos').value
   
    let fecha = document.getElementById('infecha').value
   
    let rh = document.getElementById('inrh').value
  
    let telefono = document.getElementById('intelefono').value

    document.getElementById('result').innerHTML=`<p>Nombre: ${nombre}</p><p>Apellidos: ${apellido}</p><p>Fecha de Nacimiento: ${fecha}</p><p>RH: ${rh}</p><p>Telefono: ${telefono}</p>`
    
}