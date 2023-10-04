document.querySelectorAll('input[type="radio"]').forEach(function (radio) {
  radio.addEventListener("click", updateScore);
});

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

const AC = { AC_L: 0.77, AC_H: 0.44 };
const PR = { PR_N: 0.85, PR_L: 0.62, PR_H: 0.27 };
const AV = { AV_N: 0.85, AV_A: 0.62, AV_L: 0.55, AV_P: 0.2 };
const UI = { UI_N: 0.85, UI_R: 0.62 };

const scope = { scope_U: 1, scope_C: 1.08 };
const classValMap = new Map();

function updateScore(event) {
  let radioButton = event.target;
  let radioClassName = radioButton.getAttribute("name");
  console.log(radioClassName);
  let radioButtonValue = radioButton.value;
  console.log(radioButtonValue);
  classValMap.set(radioClassName, radioButtonValue);
  console.log("map size" + classValMap.size);
  if (classValMap.size == 10) {
    let base_avail =
      Base_availibility[classValMap.get("health")][classValMap.get("avail")];
    console.log(base_avail);
    let base_integ =
      Base_Integrity[classValMap.get("health")][classValMap.get("integ")];
    console.log(base_integ);
    let base_conf =
      Base_Confidentiality[classValMap.get("sens")][classValMap.get("conf")];
    console.log(base_conf);
    let sBase = base_avail + base_integ + base_conf;

    let sExploitability =
      AC[classValMap.get("AC")] *
      AV[classValMap.get("AR")] *
      PR[classValMap.get("PR")] *
      UI[classValMap.get("UI")];
    console.log(AC);
    console.log(AV);
    console.log(PR);
    console.log(UI);
    console.log(AC);

    console.log(AC[classValMap.get("AC")]);
    console.log(AV[classValMap.get("AV")]);
    console.log(UI[classValMap.get("UI")]);
    console.log(PR[classValMap.get("PR")]);

    console.log("exploi " + sExploitability);
    let sStatus = scope[classValMap.get("scope")];
    console.log("STATUS " + sStatus);
    let score;
    if (sBase == 0) {
      score = 0;
    } else {
      score = sStatus * 3.326258289 * sBase + 1.1 * sExploitability;
      score = score.toFixed(1);
    }
    console.log(score);
    document.getElementById("warning").style.display = "none";
    document.getElementById("score").innerHTML = parseFloat(score);
  }
}
