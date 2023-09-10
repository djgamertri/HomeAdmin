function fillTable(){
    const tbody = document.getElementById('tableBody');

    FetchData("/Residents", "GET").then((residente) => {      
        residente.forEach((item) => {
          const newRow = document.createElement("tr");
          newRow.id = item.IdUser;
          newRow.innerHTML = `
                          <td>${item.NumDoc}</td>
                          <td>${item.NameUser}</td>
                          <td>${item.Email}</td>
                          <td>${item.Phone}</td>
                          <td>${item.NumHouse}</td>
                          <td>${item.StatusUser}</td>
                          <td><a href="#" data-open="modal2" onclick="Modificar(${item.IdUser})" id="update"><span class="status catch-up">Modificar</span></a></td>
                          <td><a class="status delivered" onclick="Delete(${item.IdUser})" id="delete">Eliminar</a></td>
                      `;
          tbody.appendChild(newRow);
        });
        Evaluar()
      });
}

document.addEventListener("DOMContentLoaded", fillTable);
