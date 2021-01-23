// TO DO -----------------------------------------------------------
function cancel () {
  // With array (Player, Value)
}

// REAL FUNCTIONS ------------------------------------------------------

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

//______________________________________________________________________________
function newGame() {
  document.getElementsByClassName("playerChoice_hider")[0].className += " playerChoice_active";
  document.getElementsByClassName("wrapper")[0].className += " blur";
}

//______________________________________________________________________________
// RECEIVE 0 TO CANCEL / 1 TO APPLY
function SetPseudo(arg1) {
  if (arg1 == 1) {
    for (var i = 1; i <= 4; i++) {
      p = document.getElementById("p"+i);
      p.className = p.className.replace(" hidden", "")

      pseudo = document.getElementById("pseudo"+i);
      if (pseudo.value != "") { document.getElementById("n"+i).value = pseudo.value; }
      else { document.getElementById("p"+i).className += " hidden"; }
    }
    ResetBorne();
    ResetRound();
    ResetScore();
  }
  n = document.getElementsByClassName("playerChoice_hider");
  n[0].className = n[0].className.replace(" playerChoice_active", "");
  w = document.getElementsByClassName("wrapper");
  w[0].className = w[0].className.replace(" blur", "");
}

//______________________________________________________________________________
function up(arg1, arg2) {
  // Search for _P position in the Class name"
  var p = document.getElementsByClassName("indice_container")[0].className.indexOf("_P");
  // Check number right after _P (which is current player)
  var j = document.getElementsByClassName("indice_container")[0].className.charAt(p+2);

  // Check if increase Borne or Score
  if (arg2 == 1) {
    var point = "b";
    is = "i"+arg1+"_";
  }
  else if (arg2 == 2) {
    var point = "s";
    if (arg1 == 100) { is = "is1_"; }
    if (arg1 == 300) { is = "is2_"; }
    }
  // Increase Bornes and Indice
  n = document.getElementById(point+j);
  i = document.getElementById(is+j);
  n.value = parseInt(n.value)+arg1;
  i.value = parseInt(i.value)+1;


  // Check if the Round is finished
  borne = document.getElementById("b"+j).value;
  if (borne >= 1000) {
  ResetBorne();
  ChangeRound(j, borne);
  }

  // Check if a Player won the Game
  pseudo = document.getElementById("n"+j).value;
  if (document.getElementById("s"+j).value >= 5000) {
    pseudo = document.getElementById("n"+j);
    alert(pseudo.value+" win !");
  }
}


//______________________________________________________________________________
function down(arg1, arg2) {
  // Search for _P position in the Class name"
  var p = document.getElementsByClassName("indice_container")[0].className.indexOf("_P");
  // Check number right after _P (which is current player)
  var j = document.getElementsByClassName("indice_container")[0].className.charAt(p+2);

  // Check if increase Borne or Score
  if (arg2 == 1) {
    var point = "b";
    is = "i"+arg1+"_";
  }
  else if (arg2 == 2) {
    var point = "s";
    if (arg1 == 100) { is = "is1_"; }
    if (arg1 == 300) { is = "is2_"; }
    }

    n = document.getElementById(point+j);
    i = document.getElementById(is+j);
    // Decrease value if not under 0
    if (n.value >= arg1 && i.value > 0) {
      n.value = parseInt(n.value)-arg1;
      i.value = parseInt(i.value)-1;
    }
}


//______________________________________________________________________________
function ChangePlayer(arg1) {
  // Update active Player
  var current = document.getElementsByClassName("p_active");
    if ( document.getElementsByClassName("p_active").length != 0) {
    current[0].className = current[0].className.replace(" p_active", "");
    }
  document.getElementById("p"+arg1).className += " p_active";

  // Update all Indice visibility
  var element = document.getElementsByClassName("indice_container");
  for (var a = 1; a <= 4; a++) {
    for (var i = 1; i < element.length+4; i++) {
      if (i <= 8) { id = "i"+i*25+"_"+a; }
      else if (i > 8){ id = "is"+(i-8)+"_"+a; }

      var n = document.getElementById(id);
      if (a == arg1) { n.className = ""; }
      else if (a != arg1) { n.className = "hidden"; }
      if (i == 4) { i = 7;}
    }
  }
  // Update all colored border
  var x = document.getElementsByClassName("indice_container");
  for (var i = 0; i < element.length; i++) {
    x[i].className = "indice_container indice_border_P"+arg1;
  }
}


//______________________________________________________________________________
function ChangeRound(arg1, borne) {
    pseudo = document.getElementById("n"+arg1).value;
    temp = 0;
    // Check if player Win
    if (borne == 1000) {
      alert(pseudo+" win this round !");
      color = " color_P"+arg1;
      up(400,2);
    }
    // Check if a Player Loose
    else if (borne > 1000) {
      alert(pseudo+" loose this round, "+borne+" is too high !");
      color = " color_P0";
    }
    // Attribute to the correct Round
    for (var i = 0; i < 1; i) {
      var x = document.getElementsByClassName("round")[temp].className;
      if (x.length <= 5) {
        document.getElementsByClassName("round")[temp].className += color;
        i += 1;
      }
      else {temp += 1;}
    }
    ResetBorne();
}

//______________________________________________________________________________
function Cancel() {

}

//______________________________________________________________________________
function ResetBorne() {
  //Reset Bornes values
  for (var i = 1; i <= 4; i++) {
    document.getElementById("b"+i).value = 0;
  }
  // Reset Indice values
  for (var a = 1; a <= 4; a++) {
    for (var i = 1; i < 9; i++) {
      document.getElementById("i"+i*25+"_"+a).value = 0;
      if (i == 4) { i = 7;}
    }
  }
}

//______________________________________________________________________________
function ResetRound() {
  for (var i = 1; i <= 10; i++) {
    document.getElementById("r"+i).className = "round";
  }
}

//______________________________________________________________________________
function ResetScore() {
  //Reset Scores values
  for (var i = 1; i <= 4; i++) {
    document.getElementById("s"+i).value = 0;
  }
  // Reset Indice values
  for (var a = 1; a <= 4; a++) {
    for (var i = 1; i <= 2 ; i++) {
      document.getElementById("is"+i+"_"+a).value = 0;
    }
  }
}

// ---------- TEST ----------
