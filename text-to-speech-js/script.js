let synth = window.speechSynthesis;
let speech = new SpeechSynthesisUtterance();
let voiceSelect = document.querySelector("#voices");
speech.lang = "en";

let voices = [];
synth.onvoiceschanged = () => {
  voices = synth.getVoices();
  console.log(voices);
  voices.forEach((voice) => {
    let option = document.createElement("option");
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voiceSelect.appendChild(option);
  });
};

function setVoice(e) {
  speech.voice = voices.find((voice) => voice.name === e.target.value);
  console.log(speech.voice);
}
// Change voice
voiceSelect.addEventListener("change", setVoice);

document.querySelector("#volume").addEventListener("input", () => {
  const volume = document.querySelector("#volume").value;
  speech.volume = volume;
  document.querySelector("#volume-label").innerHTML = volume;
});

document.querySelector("#pitch").addEventListener("input", () => {
  const pitch = document.querySelector("#pitch").value;
  document.querySelector("#pitch-label").innerHTML = pitch;
  speech.pitch = pitch;
});

document.querySelector("#start").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  synth.speak(speech);
});

document.querySelector("#pause").addEventListener("click", () => {
  synth.pause();
});

document.querySelector("#resume").addEventListener("click", () => {
  synth.resume();
});

document.querySelector("#cancel").addEventListener("click", () => {
  synth.cancel();
});
