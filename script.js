// --- SCENE DATA ---
const scenes = {
  intro: {
    text: "You hear shuffling in your base. Something... someone... is inside.",
    choices: [
      { text: "Grab a weapon and approach.", next: "approach" },
      { text: "Call out: 'Who's there?'", next: "callout" },
      { text: "Hide and observe quietly.", next: "observe" }
    ]
  },

  approach: {
    text: "A ragged, half-decayed guy stumbles back. His eyes widen. \"D-don’t hurt me...\"",
    choices: [
      { text: "Wait. You can talk?", next: "talk1" }
    ]
  },

  callout: {
    text: "\"I-I'm not... dangerous,\" a shaky voice answers.",
    choices: [
      { text: "Step closer slowly.", next: "approach" }
    ]
  },

  observe: {
    text: "You peek around a corner. A zombie-looking man is rummaging for food... but gently?",
    choices: [
      { text: "Reveal yourself.", next: "approach" }
    ]
  },

  talk1: {
    text: "\"Y-yeah... a little,\" he murmurs. His voice cracks.",
    choices: [
      { text: "Ask who he is.", next: "endDemo" }
    ]
  },

  endDemo: {
    text: "End of demo scene. You can now start adding your own!",
    choices: []
  }
};


// --- GAME ENGINE ---
const textBox = document.getElementById("text-box");
const choiceBox = document.getElementById("choices");

function loadScene(key) {
  const scene = scenes[key];

  // Show text
  textBox.textContent = scene.text;

  // Clear old buttons
  choiceBox.innerHTML = "";

  // Add new choice buttons
  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => loadScene(choice.next);
    choiceBox.appendChild(btn);
  });

  // If no choices, offer a restart
  if (scene.choices.length === 0) {
    const restart = document.createElement("button");
    restart.textContent = "Restart";
    restart.onclick = () => loadScene("intro");
    choiceBox.appendChild(restart);
  }
}

// Start game
loadScene("intro");
