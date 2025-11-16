// --- SCENE DATA ---
const scenes = {
  intro: {
    text: "As you walk further inside your base, you hear a shuffling noise come from your supplies room.",
    choices: [
      { text: "Yell out", next: "yell1" },
      { text: "Peek around the corner", next: "peek" }
    ]
  },

  yell1: {
    text: "“Who’s there?!” you yell out. The noises suddenly stop.",
    choices: [
      { text: "Yell out again", next: "yell2" },
      { text: "Slowly walk in", next: "enter" }
    ]
  },

  peek: {
    text: "You slowly look around the corner, and see a man—no, a zombie—digging through your food!",
    choices: [
      { text: "Slowly walk in", next: "enter" }
    ]
  },

  yell2: {
    text: "“Hello? Who’s there?!”",
    choices: [
      { text: "Slowly walk in", next: "enter" }
    ]
  },

  enter: {
    text: "A man… no, a zombie. A zombie seems to have been digging through your food. Some has been eaten. He turns to you and says, “I'm sorry, I thought this place was abandoned.”",
    choices: [
      // Add more choices here when you continue your story!
    ]
  }
};


// --- GAME ENGINE ---
const textBox = document.getElementById("text");
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
    btn.className = "choice-btn";
    btn.onclick = () => loadScene(choice.next);
    choiceBox.appendChild(btn);
  });

  // If no choices, offer restart
  if (scene.choices.length === 0) {
    const restart = document.createElement("button");
    restart.textContent = "Restart";
    restart.className = "choice-btn";
    restart.onclick = () => loadScene("intro");
    choiceBox.appendChild(restart);
  }
}

// Start game
loadScene("intro");
