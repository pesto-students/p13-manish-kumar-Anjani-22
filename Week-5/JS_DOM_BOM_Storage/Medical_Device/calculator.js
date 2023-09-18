document.querySelectorAll('input[type="radio"]').forEach(function (radio) {
  radio.addEventListener("click", updateScore);
});

//Combined Values
const combinedClassArray = [
  "scope",
  "integ",
  "avail",
  "conf",
  "health",
  "sens",
];
const combinedClassValue = {
  scope: "",
  integ: "",
  avail: "",
  conf: "",
  health: "",
  sens: "",
};

const Base_Confidentiality = {
  sens_N: { conf_N: 0, conf_L: 0.22, conf_H: 0.56 },
  sens_L: { conf_N: 0.55, conf_L: 0.6, conf_H: 0.75 },
  sens_H: { conf_N: 0.85, conf_L: 0.9, conf_H: 0.95 },
};
const Base_availibility = {
  health_N: { avail_N: 0, avail_L: 0.22, avail_H: 0.56 },
  health_L: { avail_N: 0.55, avail_L: 0.6, avail_H: 0.75 },
  health_H: { avail_N: 0.85, avail_L: 0.9, avail_H: 0.95 },
};
const Base_Integrity = {
  health_N: { integ_N: 0, integ_L: 0.22, integ_H: 0.56 },
  health_L: { integ_N: 0.55, integ_L: 0.6, integ_H: 0.75 },
  health_H: { integ_N: 0.85, integ_L: 0.9, integ_H: 0.95 },
};

//Single Values

const AC = { AC_L: 0.77, AC_H: 0.44 };
const PR = { PR_N: 0.85, PR_L: 0.62, PR_H: 0.27 };
const AV = { AV_N: 0.85, AV_L: 0.62, AV_A: 0.55, AV_A: 0.2 };
const UI = { UI_N: 0.85, UI_R: 0.62 };

const Exploitability = {};
const scope = { scope_U: 1, scope_C: 1.08 };
const classValMap = new Map();

function updateScore(event) {
  let radioButton = event.target;
  let radioClassName = radioButton.getAttribute("name");
  let radioButtonValue = radioButton.value;
  classValMap.set(radioClassName, radioButtonValue);

  if (combinedClassArray.includes(radioClassName)) {
    combinedClassValue[radioClassName] = radioButtonValue;
  } else if (radioClassName == "scope") {
    sStatus = scope[radioButtonValue];
  } else {
    Exploitability[radioClassName] = getSingleVal(
      radioClassName,
      radioButtonValue
    );
  }

  //key1=health_N/L/H   //key2=avail_N/L/H    gives eg: Base-availibility[health_N][avail_L]
  if (classValMap.size() == 10) {
    let base_avail =
      Base_availibility[combinedClassValue["health"]][
        combinedClassValue["avail"]
      ];

    let base_integ =
      Base_Integrity[combinedClassValue["health"]][combinedClassValue["integ"]];

    let base_conf =
      Base_Confidentiality[combinedClassValue["sens"]][
        combinedClassValue["conf"]
      ];

    let sBase = base_avail + base_integ + base_conf;

    let sExploitability =
      Exploitability[AC] *
      Exploitability[AV] *
      Exploitability[PR] *
      Exploitability[AC] *
      Exploitability[UI];
    let score;
    if (sBase == 0) {
      score = 0;
    } else {
      score = sStatus * 3.326258289 * sBase + 1.1 * sExploitability;
      score = score.toFixed(1);
    }

    document.getElementById("warning").style.display = "none";
    document.getElementById("score").innerText = score;
  }
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
    case scope:
      {
        return scope[value];
      }
      break;
  }
}
