// TO DO -----------------------------------------------------------
function cancel () {
  // With array (Player, Value)
}

function raz(arg) {
  // Raz only Bornes
}


// REAL FUNCTIONS ------------------------------------------------------

// UTILISE "indice_container" pour connaitre le joueur actuel
//     -->  PLUS TARD changer pour utiliser l'info de la case joueur_actif
function up(arg1) {

  // Search for _P position in the Class name"
  var p = document.getElementsByClassName("indice_container")[0].className.indexOf("_P");
  // Check number right after _P (which is current player)
  var i = document.getElementsByClassName("indice_container")[0].className.charAt(p+2);

  n = document.getElementById("num"+i);
  i = document.getElementById("i"+arg1+"_"+i);

  // Increase Bornes and Indice
  n.value = parseInt(n.value)+arg1;
  i.value = parseInt(i.value)+1;
}

function down(arg1) {

  // Search for _P position in the Class name"
  var p = document.getElementsByClassName("indice_container")[0].className.indexOf("_P");
  // Check number right after _P (which is current player)
  var i = document.getElementsByClassName("indice_container")[0].className.charAt(p+2);

  n = document.getElementById("num"+i);
  i = document.getElementById("i"+arg1+"_"+i);

  // Decrease value if not under 0
  if (n.value >= arg1 && i.value > 0) {
    n.value = parseInt(n.value)-arg1;
    i.value = parseInt(i.value)-1;
  }
}

function ChangePlayer(arg1) {
  // Update all Indice visibility
  for (var a = 1; a <= 4; a++) {
    for (var i = 1; i < 9; i++) {
      var temp = "i"+i*25+"_"+a;
      var n = document.getElementById(temp);
      // We want to see this one
      if (a == arg1) {n.className = "";}
      // We don't want to see thoss ones
      else {n.className = "hidden";}
      if (i == 4) { i = 7}
    }
  }
  // Update all colored border
  var player = "indice_container indice_border_P"+arg1;
  var x = document.getElementsByClassName("indice_container");
  for (var i = 0; i < 5; i++) {
    x[i].className = player;
  }
}



// ---------- TEST ----------
