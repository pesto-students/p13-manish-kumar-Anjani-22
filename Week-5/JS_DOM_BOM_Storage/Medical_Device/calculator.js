document.querySelectorAll('input[type="radio"]').forEach(function (radio) {
  radio.addEventListener("click", updateScore);
});
const scope = { scope_U: 1, scope_C: 1.08 };
const sens_conf = {
  sens_N: { conf_N: 0, conf_L: 0.22, conf_H: 0.56 },
  sens_L: { conf_N: 0.55, conf_L: 0.6, conf_H: 0.75 },
  sens_H: { conf_N: 0.85, conf_L: 0.9, conf_H: 0.95 },
};
const health_avail = {
  health_N: { avail_N: 0, avail_L: 0.22, avail_H: 0.56 },
  health_L: { avail_N: 0.55, avail_L: 0.6, avail_H: 0.75 },
  health_H: { avail_N: 0.85, avail_L: 0.9, avail_H: 0.95 },
};
const health_integ = {
  health_N: { integ_N: 0, integ_L: 0.22, integ_H: 0.56 },
  health_L: { integ_N: 0.55, integ_L: 0.6, integ_H: 0.75 },
  health_H: { integ_N: 0.85, integ_L: 0.9, integ_H: 0.95 },
};
const AC = { AC_L: 0.77, AC_H: 0.44 };
const PR = { PR_N: 0.85, PR_L: 0.62, PR_H: 0.27 };
const AV = { AV_N: 0.85, AV_L: 0.62, AV_A: 0.55, AV_A: 0.2 };
const UI = { UI_N: 0.85, UI_R: 0.62 };

const singleValue = ["AV", "AC", "PR", "UI"];

const combinedValues = ["scope", "integ", "avail", "conf", "health", "sens"];

function updateScore() {
  document.querySelector('input[name="property1"]:checked');
  const radioButtonClassNames = {
    AV: 0,
    AC: 0,
    PR: 0,
    UI: 0,
    scope: 0,
    integ: 0,
    avail: 0,
    conf: 0,
    health: 0,
    sense: 0,
  };
  let selectedRadioButtons = [];
  for (let radioClass of radioButtonClassNames) {
    let radioSelected = document.querySelector(
      `input[name={$radioClass}:checked`
    );
    if (radioSelected) {
      selectedRadioButtons.push(radioSelected);
      let name = radioSelected.getAttribute("name");
      if (singleValue.includes(name))
        radioButtonClassNames[name] = getSingleVal(name, radioSelected.value);
    }
  }
  cons;
}

function getSingleVal(name, value) {
  switch (name) {
    case AC:
      {
        return AC[value];
      }
      break;
    case AV:
      {
        return AV[value];
      }
      break;
    case PR:
      {
        return PR[value];
      }
      break;
    case UI:
      {
        return UI[value];
      }
      break;
  }
}
