function inputSearch(){
  datasearch = document.getElementById("myInput").value.toUpperCase();
  filter(datasearch,0);// goi ham search trang vao du lieu cna search
}

function select1Search(){
  datasearch = document.getElementById("select1").value.toUpperCase();
  if (datasearch.length > 0) {
    var input, table, tr, td, i, txtValue;
    table = document.getElementById("program-table");
    tr = table.getElementsByTagName("tr");
    
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];

      if (td) {
        txtValue = td.textContent.toUpperCase() || td.innerText.toUpperCase();
        arr = txtValue.split(", ");
        if (arr.length > 1) {

          var count = 0;
          for (j = 0; j < arr.length; j++) {
            if(datasearch.includes(arr[j])){
              count++
            }
          }
          if (count > 0) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        } else {
          if(datasearch.indexOf(txtValue.toUpperCase()) !== -1){
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  } else {
    filter(datasearch,1);
  }
}

function select2Search(){
  datasearch = document.getElementById("select2").value.toUpperCase();
  filter(datasearch,2);
}


function filter(datasearch,tdKey) {
  var input, filter, table, tr, td, i, txtValue;
  table = document.getElementById("program-table");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[tdKey];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(datasearch) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }

    }       
  }
}
//
