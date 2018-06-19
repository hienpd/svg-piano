'use strict';

var keys = document.getElementById('keyboard');
var notes = {
  f3: 174.61,
  g3: 196,
  a3: 220,
  b3: 246.94,
  c4: 261.63,
  d4: 293.67,
  e4: 329.63,
  f4: 349.23,
  g4: 392,
  a4: 440,
  b4: 493.88,
  g3b: 185,
  a3b: 207.65,
  b3b: 233.08,
  d4b: 277.18,
  e4b: 311.13,
  g4b: 369.99,
  a4b: 415.30,
  b4b: 466.16
};

function playSound(e) {
    var keyPlayed = e.target;
    var frequency = notes[keyPlayed.id];
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var oscillator = audioCtx.createOscillator();

    keyPlayed.setAttribute('class', 'highlight');

    oscillator.connect(audioCtx.destination);
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    oscillator.start();
    oscillator.stop(.15);

    // Reset CSS animation
    var keyTwin = keyPlayed.cloneNode(true);
    keyPlayed.parentNode.replaceChild(keyTwin, keyPlayed);

    return;
}

keys.addEventListener('pointerdown', function(e) {
    playSound(e);
}, false);
