document.querySelectorAll('input[type="radio"]').forEach(function (radio) {
  radio.addEventListener("click", updateScore);
});

function updateScore() {
  const radioButtonClassNames = [
    "AV",
    "AC",
    "PR",
    "UI",
    "scope",
    "integ",
    "avail",
    "conf",
    "health",
    "sense",
  ];
  let allRadioButtonSelected = true;

  let selectedRadioButtons = [];
  for (let radioClass of radioButtonClassNames) {
    let radioGroup = document.getElementsByClassName(radioClass);
    let radioSelected = radioGroup.filter((radioButton) => radioButton.checked);
    if (radioSelected.length == 0) {
      allRadioButtonSelected = false;
    } else {
      selectedRadioButtons.push(radioSelected[0].value);
    }
  }
  if (allRadioButtonSelected) {
    document.getElementById("warning").style.display = "none";
    for (let radioValue of selectedRadioButtons) {
    }
  }
}
