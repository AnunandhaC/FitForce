// BMI Calculator
function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value)/100;
  const result = document.getElementById("bmi-result");
  const planDiv = document.getElementById("fitness-plan");

  if(!weight || !height || weight <=0 || height <=0) {
    result.innerText = "⚠ Please enter valid weight and height.";
    planDiv.innerHTML = "";
    return;
  }

  const bmi = (weight/(height*height)).toFixed(1);
  let status="", plan="";

  if(bmi <18.5) {
    status="Underweight";
    plan=`<h3>🧘‍♀ Weight Gain Routine</h3><ul><li>Strength training 4x/week</li><li>High-calorie meals</li><li>8h sleep</li></ul>`;
  } else if(bmi<24.9) {
    status="Normal weight";
    plan=`<h3>💪 Maintenance Routine</h3><ul><li>3x/week cardio</li><li>2x/week strength</li><li>Balanced diet</li></ul>`;
  } else if(bmi<29.9) {
    status="Overweight";
    plan=`<h3>🔥 Fat Loss Routine</h3><ul><li>HIIT 5x/week</li><li>Calorie-controlled diet</li><li>Light resistance training</li></ul>`;
  } else {
    status="Obese";
    plan=`<h3>⚠ Fat Burning + Diet Plan</h3><ul><li>Low-impact cardio daily</li><li>Strict nutrition</li><li>Medical consultation</li></ul>`;
  }

  result.innerText=`Your BMI is ${bmi} (${status})`;
  planDiv.innerHTML=plan;
}

// Contact Form Validation
function validateForm() {
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const message=document.getElementById("message").value.trim();
  const formMsg=document.getElementById("form-msg");

  if(name===""||email===""||message==="") {
    formMsg.innerText="⚠️ All fields are required.";
    formMsg.style.color="red";
    return false;
  }

  formMsg.innerText="✅ Thank you! We'll get back to you soon.";
  formMsg.style.color="green";
  return false; // prevent actual submission for demo
}

// Progress Tracker
function logProgress() {
  const weight=document.getElementById("weight-log").value;
  const waist=document.getElementById("waist-log").value;
  if(!weight || !waist) return;
  const log=document.getElementById("progress-log");
  const entry=document.createElement("p");
  entry.innerText=`Weight: ${weight}kg, Waist: ${waist}cm, Date: ${new Date().toLocaleDateString()}`;
  log.prepend(entry);
  document.getElementById("weight-log").value="";
  document.getElementById("waist-log").value="";
}
