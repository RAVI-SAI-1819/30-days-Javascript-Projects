const resultElement = document.getElementById("result");

let recognition;

function startConverting() {
  if ("webkitSpeechRecongnition" in window) {
    recognition = new webkitSpeechRecongnition();
    setupRecongnition(recognition);
    recognition.start();
  }
}

function setupRecongnition(recognition) {
  recognition.continous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US"; //I take the english us standared
  recognition.onresult = function (event) {
    const { finalTranscript, interTranscript } = processResult(event.result);

    resultElement.innerHTML = finalTranscript + interTranscript;
  };

}

function processResult(result) {
  let finalTranscript = "";
  let interTranscript = "";
  for (let i = 0; i < result.length; i++) {
    let transcript = result[i][0].transcript;
    transcript.replace("\n", "<br>");
    if (result[i].isFinal) {
      finalTranscript += transcript;
    } else {
      interTranscript += transcript;
    }
  }
  return { finalTranscript, interTranscript };
}

function stopConverting() {
    if(recognition){
        recognition.stop();
    }
}
