function games() {
  let firstName = document.getElementById("name1").value;
  let secondName = document.getElementById("name2").value;
  let fname = firstName.trim().replace(/\s+/g, "").toLowerCase().split("");
  let sname = secondName.trim().replace(/\s+/g, "").toLowerCase().split("");

  if (fname != "" && sname != "") {
    for (i = 0; i < fname.length; i++) {
      for (j = 0; j < sname.length; j++) {
        if (fname[i] == sname[j]) {
          fname[i] = "*";
          sname[j] = "*";
        }
      }
    }
  } else {
    alert("enter name");
  }

  let count = 0;
  for (i = 0; i < fname.length; i++) {
    if (fname[i] != "*") {
      count++;
    }
  }
  for (i = 0; i < sname.length; i++) {
    if (sname[i] != "*") {
      count++;
    }
  }
  let flames = "FLAMES";
  let index = 0;
  while (flames.length > 1) {
    index = (count % flames.length) - 1;
    if (index >= 0) {
      flames = flames.slice(index + 1) + flames.slice(0, index);
    } else {
      flames = flames.slice(0, flames.length - 1);
    }
  }
  if (flames == "F") {
    alert("FRIEND");
  } else if (flames == "L") {
    alert("LOVE");
  } else if (flames == "A") {
    alert("AFFECTION");
  } else if (flames == "M") {
    alert("MARRIGE");
  } else if (flames == "E") {
    alert("ENEMY");
  } else if (flames == "S") {
    alert("SISTER");
  }
}
