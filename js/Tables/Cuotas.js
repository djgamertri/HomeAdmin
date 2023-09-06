function fillTable(){
    const tbody = document.getElementById('tableBody');

    FetchData("/Pays", "GET").then((Pays) => {
        tbody.innerHTML = "";
      
        Pays.forEach((item) => {
          item.RegistDate =  new Date(item.RegistDate).toLocaleString()
          const partes = item.RegistDate.split(', ');
          console.log(partes);
          const fecha = partes[0];
          const hora = partes[1];
          const newRow = document.createElement("tr");
          newRow.id = item.IdUser;
          newRow.innerHTML = `
                          <td>${item.IdPayAdmin}</td>
                          <td>${item.IdUser}</td>
                          <td>${item.StatusPayAdmin}</td>
                          <td>${fecha}</td>
                          <td>${hora}</td>
                          <td><a href="#" data-open="modal2"><span class="status catch-up">Modificar</span></a></td>
                          <td><a href="#"><span class="status delivered">Eliminar</span></a></td>
                      `;
          tbody.appendChild(newRow);
        });
        Evaluar()
      });
}
document.addEventListener("DOMContentLoaded", fillTable);
