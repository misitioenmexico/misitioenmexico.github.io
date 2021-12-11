function search_estado() {

    let input = document.getElementById('searchbar').value

    input=input.toLowerCase();

    let x = document.getElementsByClassName('mx-bar-item');

      

    for (i = 0; i < x.length; i++) { 

        if (!x[i].innerHTML.toLowerCase().includes(input)) {

            x[i].style.display="none";

        }

        else {

            x[i].style.display="mx-bar-item";                 

        }

    }

}

