const loginLogout = (element) => {

    if (element.innerText == "Login") {
        element.innerText = "Logout";
    } else if (element.innerText == "Logout") {
        element.innerText = "Login";
    }
}

const changeBackground = (element) => {
  console.log(element.id);
  if (element.id === "plus"){
    $(element).attr("id", "minus");
    element.innerText = "-";
  } else if (element.id === "minus"){
    $(element).attr("id", "plus");
    element.innerText = "+";
  }
}