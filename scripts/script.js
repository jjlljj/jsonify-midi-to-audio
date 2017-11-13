var synth = new Tone.PolySynth(8).toMaster();

$('.start').on('click', function() {
  console.log('start'); 
  Tone.Transport.bpm.value = 120;
  var midiPart = new Tone.Part(function(time, note) {
    synth.triggerAttackRelease(note.name, note.duration, time, note.velocity)
  }, midi.tracks[0].notes).start();

  midiPart.set({
  "loop" : true,
  "loopEnd" : "4m"
  });

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
  "duration": 7.702083333333334,
  "tracks": [
    {
      "startTime": 0,
      "duration": 7.702083333333334,
      "length": 52,
      "notes": [
        {
          "name": "F#5",
          "midi": 78,
          "time": 0,
          "velocity": 0.5039370078740157,
          "duration": 0.1625
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 0,
          "velocity": 0.5039370078740157,
          "duration": 0.20208333333333334
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 0.25,
          "velocity": 0.5039370078740157,
          "duration": 0.14583333333333337
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 0.5,
          "velocity": 0.5039370078740157,
          "duration": 0.1395833333333334
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 0.5,
          "velocity": 0.5039370078740157,
          "duration": 0.22083333333333344
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 0.7500000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.16041666666666665
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 1,
          "velocity": 0.5039370078740157,
          "duration": 0.16041666666666665
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 1,
          "velocity": 0.5039370078740157,
          "duration": 0.2124999999999999
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 1.25,
          "velocity": 0.5039370078740157,
          "duration": 0.1479166666666667
        },
        {
          "name": "A4",
          "midi": 69,
          "time": 1.5,
          "velocity": 0.5039370078740157,
          "duration": 0.1479166666666667
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 1.5,
          "velocity": 0.5039370078740157,
          "duration": 0.14375000000000004
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 1.75,
          "velocity": 0.5039370078740157,
          "duration": 0.15416666666666679
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 1.75,
          "velocity": 0.5039370078740157,
          "duration": 0.14375000000000004
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 2,
          "velocity": 0.5039370078740157,
          "duration": 0.14375000000000027
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 2,
          "velocity": 0.5039370078740157,
          "duration": 0.09791666666666687
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 2.2500000000000004,
          "velocity": 0.5039370078740157,
          "duration": 0.1333333333333333
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 2.2500000000000004,
          "velocity": 0.5039370078740157,
          "duration": 0.1499999999999999
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 2.5000000000000004,
          "velocity": 0.5039370078740157,
          "duration": 0.1395833333333334
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 2.5000000000000004,
          "velocity": 0.5039370078740157,
          "duration": 0.1479166666666667
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 2.7500000000000004,
          "velocity": 0.5039370078740157,
          "duration": 0.18958333333333321
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 2.7500000000000004,
          "velocity": 0.5039370078740157,
          "duration": 0.11249999999999982
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 3.0000000000000004,
          "velocity": 0.5039370078740157,
          "duration": 0.19791666666666652
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 3.0000000000000004,
          "velocity": 0.5039370078740157,
          "duration": 0.11249999999999982
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 3.2500000000000004,
          "velocity": 0.5039370078740157,
          "duration": 0.15416666666666679
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 3.5000000000000004,
          "velocity": 0.5039370078740157,
          "duration": 0.15416666666666679
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 4.000000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.11666666666666625
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 4.250000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.11041666666666661
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 4.500000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.14374999999999982
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 4.500000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.15208333333333357
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 4.750000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.15833333333333321
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 4.750000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.17499999999999982
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 5.000000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.14791666666666625
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 5.000000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.11041666666666661
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 5.250000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.16041666666666643
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 5.250000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.09583333333333321
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 5.500000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.11666666666666625
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 5.750000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.11666666666666625
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 5.750000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.125
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 6.000000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.11458333333333304
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 6.000000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.18541666666666679
        },
        {
          "name": "B5",
          "midi": 83,
          "time": 6.250000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.16666666666666696
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 6.250000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.10416666666666696
        },
        {
          "name": "A5",
          "midi": 81,
          "time": 6.500000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.11875000000000036
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 6.500000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.08958333333333357
        },
        {
          "name": "G5",
          "midi": 79,
          "time": 6.750000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.10208333333333375
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 6.750000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.16041666666666732
        },
        {
          "name": "F#5",
          "midi": 78,
          "time": 7.000000000000002,
          "velocity": 0.5039370078740157,
          "duration": 0.11666666666666625
        },
        {
          "name": "A3",
          "midi": 57,
          "time": 7.000000000000002,
          "velocity": 0.5039370078740157,
          "duration": 0.16458333333333286
        },
        {
          "name": "E5",
          "midi": 76,
          "time": 7.250000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.10625000000000018
        },
        {
          "name": "E4",
          "midi": 64,
          "time": 7.250000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.11249999999999982
        },
        {
          "name": "D5",
          "midi": 74,
          "time": 7.500000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.17708333333333304
        },
        {
          "name": "D4",
          "midi": 62,
          "time": 7.500000000000001,
          "velocity": 0.5039370078740157,
          "duration": 0.2020833333333334
        }
      ],
      "controlChanges": {},
      "id": 0,
      "name": "level intro",
      "channelNumber": 0,
      "isPercussion": false
    }
  ]
}
