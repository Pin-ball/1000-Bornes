


// var pseudoElt = document.getElementById("pseudo");
// pseudoElt.value = "MonPseudo";
//
// // Affichage d'un message contextuel pour la saisie du pseudo
// pseudoElt.addEventListener("focus", function () {
// document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
// });
// // // Suppression du message contextuel pour la saisie du pseudo
// pseudoElt.addEventListener("blur", function (e) {
//     document.getElementById("aidePseudo").textContent = "";
// });



// document.getElementById("pseudo").onclick = function() {myFunction()};
// document.getElementsByClassName("demo")[0].onclick = function() {myFunction()};



function myFunction() {
  document.getElementsByClassName("demo")[0].innerHTML = "Hello World!";
  // var x = document.getElementsByClassName("demo");
  // x[0].innerHTML = "Hello World!";
}




// TO DO -----------------------------------------------------------
function cancel2 () {
}

function raz(arg) {
}


// TESTS HELP -----------------------------------------------------------

function tryme() {
  alert("Hello You");
}

// REAL FUNCTIONS ------------------------------------------------------

// Refresh the Total is Click or press Enter
addEventListener("click",total);
addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault(); // Cancel the default action, if needed
    total();
  }
});

function replace() {
      var text = "1000 Bornes";
      document.getElementById("myText").innerHTML = text;
}

function up(arg) {
n = document.getElementById(arg);
n.value = parseInt(n.value)+1;
total();
cancel(arg);
}

function up2(arg1, arg2) {
n = document.getElementById(arg1);
n.value = parseInt(n.value)+arg2;
total();
cancel(arg1);
}

function down(arg) {
n = document.getElementById(arg);
  if (n.value > 0) {
    n.value = parseInt(n.value)-1;
    total();
    cancel(arg);
  }
}

function down2(arg1, arg2) {
n = document.getElementById(arg1);
  if (n.value >= arg2) {
    n.value = parseInt(n.value)-arg2;
    total();
    cancel(arg1);
  }
}

// arg == 0 : Demande de cancel
// arg == data : Register new Temp data
function cancel(arg) {
  if (arg == 0 && temp != 0) {
    n = document.getElementById(temp);
    n.value = parseInt(n.value)-1;
    temp = 0;
  }
  else {
     temp = arg;
     n = document.getElementById(arg);
  }
}

function total() {
  for (var i = 1; i <= 2; i++) {
    var borne = "borne"+i;
    var botte = "botte"+i;
    var abotte = "abotte"+i;
    var cf = "cf"+i;
    var manche = "manche"+i;
    var se = "se"+i;
    var t = "total"+i;

    n1 = document.getElementById(borne);
    n2 = document.getElementById(botte);
    n3 = document.getElementById(abotte);
    n4 = document.getElementById(cf);
    n5 = document.getElementById(manche);
    n6 = document.getElementById(se);

    // sum = (parseInt(n1.value)*1)+(parseInt(n2.value)*100)+(parseInt(n3.value)*400)+(parseInt(n4.value)*700)+(parseInt(n5.value)*300);
    sum = (parseInt(n2.value)*100)+(parseInt(n3.value)*700)+(parseInt(n4.value)*300)+(parseInt(n5.value)*400)+(parseInt(n6.value)*300);
    document.getElementById(t).innerHTML = sum;

    if (sum >= 5000) {

      setTimeout(function() {
        //your code to be executed after ... second
        alert("Player "+i+" Win !")
      }, 500);
      return;
    }
  }
}
