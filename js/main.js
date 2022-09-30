let table_add = document.getElementById("table_add");
let formContent = document.getElementById("formContent");
var form = document.forms['form'];
var users = [
    {
      id: 1,
      email: 'AlejandroChart@gmailcom',
      password: 123456789,
      address: 'carrera 15A #22-32',
      ocupacion: 'student',
      Name: 'Alejandro Chart',
      City: 'Barranquilla',
      Cedula: 101856235,
      Age: '20'
    },

    {
      id: 2,
      email: 'faker@gmailcom',
      password: 1234,
      address: 'calle 10C #22-32',
      ocupacion: 'Jugador Profesional de Lol',
      Name: 'Faker',
      City: 'Seul',
      Cedula: 7258964,
      Age: '26'
    },
    {
        id: 3,
        email: 'CarlosBacca@gmailcom',
        password: 3214,
        address: 'calle 12C #01-22',
        ocupacion: 'Jugador Profesional de futbol',
        Name: 'Carlos Bacca',
        City: 'Barranquilla',
        Cedula: 932549,
        Age: '30'

    }
]

form.onsubmit = function (e) {
  e.preventDefault();
  var newUser = {
        id: users.length+1,
        email: document.getElementById("Email").value,
        password: document.getElementById("Password").value,
        address: document.getElementById("Address").value,
        ocupacion: document.getElementById("Ocupacion").value,
        Name: document.getElementById("Name").value,
        City: document.getElementById("City").value,
        Cedula: document.getElementById("Cedula").value,
        Age: document.getElementById("Age").value,
  }
   users.push(newUser)
   
   Swal.fire(
    'Good job!',
    'Usuario Añadido Correctamente!!',
    'success'
  )
   
  ListUser()

}

let ListUser = ()=>{
  
  return table_add.innerHTML = users.map((x) => {
    return `  
    <tr>
    <th scope="row">${x.id}</th>
    <td>${x.email}</td>
    <td>${x.password}</td>
    <td>${x.address}</td>
    <td>${x.ocupacion}</td>
    <td>${x.Name}</td>
    <td>${x.City}</td>
    <td>${x.Cedula}</td>
    <td>${x.Age}</td>
  </tr>`;

  }).join("");
}