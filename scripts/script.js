var synth = new Tone.PolySynth(8).toMaster();

$('.start').on('click', function() {
  console.log('start'); 
  Tone.Transport.bpm.value = 120;
  var midiPart = new Tone.Part(function(time, note) {
    synth.triggerAttackRelease(note.name, note.duration, time, note.velocity)
  }, midi.tracks[0].notes).start()

  Tone.Transport.start()

});

$('.stop').on('click', function() {
  Tone.Transport.stop();
});


var midi = {
  "header": {
    "PPQ": 480,
    "timeSignature": [
      4,
      4
    ],
    "bpm": 120,
    "name": ""
  },
  "startTime": 0,
  "duration": 8.865625000000001,
  "tracks": [
    {
      "startTime": 0,
      "duration": 8.865625000000001,
      "length": 14,
      "notes": [
        {
          "name": "F3",
          "midi": 53,
          "time": 0,
          "velocity": 0.7716535433070866,
          "duration": 0.46875
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 0.5,
          "velocity": 0.7716535433070866,
          "duration": 0.534375
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 1,
          "velocity": 0.7716535433070866,
          "duration": 0.5020833333333334
        },
        {
          "name": "C4",
          "midi": 60,
          "time": 1.5,
          "velocity": 0.7716535433070866,
          "duration": 0.49375000000000013
        },
        {
          "name": "B3",
          "midi": 59,
          "time": 2,
          "velocity": 0.7716535433070866,
          "duration": 0.5114583333333331
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 2.5,
          "velocity": 0.7716535433070866,
          "duration": 0.5375000000000001
        },
        {
          "name": "F3",
          "midi": 53,
          "time": 3,
          "velocity": 0.7716535433070866,
          "duration": 0.5031249999999998
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 3.5,
          "velocity": 0.7716535433070866,
          "duration": 0.5281250000000002
        },
        {
          "name": "F3",
          "midi": 53,
          "time": 4,
          "velocity": 0.7716535433070866,
          "duration": 0.5625
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 4.5,
          "velocity": 0.7716535433070866,
          "duration": 1.3979166666666671
        },
        {
          "name": "D3",
          "midi": 50,
          "time": 6.000000000000001,
          "velocity": 0.7716535433070866,
          "duration": 0.6624999999999996
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 6.500000000000001,
          "velocity": 0.7716535433070866,
          "duration": 0.5
        },
        {
          "name": "F3",
          "midi": 53,
          "time": 7.000000000000001,
          "velocity": 0.7716535433070866,
          "duration": 0.5395833333333337
        },
        {
          "name": "E3",
          "midi": 52,
          "time": 7.500000000000001,
          "velocity": 0.7716535433070866,
          "duration": 1.3656250000000005
        }
      ],
      "controlChanges": {},
      "id": 0,
      "name": "#default",
      "channelNumber": 0,
      "isPercussion": false
    }
  ]
}
