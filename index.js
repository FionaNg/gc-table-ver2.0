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

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        })


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}