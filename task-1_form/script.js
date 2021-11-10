function getSelectValue() {
  let selected = document.getElementById("mySelect");
  let option = selected.querySelectorAll("option");
  for (let i = 0; i < option.length; i++) {
    alert(option[i].value);
  }
}
