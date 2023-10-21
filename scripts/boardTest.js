var five = require("johnny-five");
var board = new five.Board({port: 'COM9'});

board.on("ready", function() {
  console.log("Ready event. Repl instance auto-initialized!");

  var led = new five.Led(13);

  this.repl.inject({
    // Allow limited on/off control access to the
    // Led instance from the REPL.
    on: function() {
      led.on();
    },
    off: function() {
      led.off();
    }
  });
});













// const five = require("johnny-five");

// // Johnny-Five will try its hardest to detect the port for you,
// // however you may also explicitly specify the port by passing
// // it as an optional property to the Board constructor:
// // const board = new Board({
// //   port: "/dev/cu.usbmodem1411"
// // });

// const board = new five.Board({port: 'COM9'});

// // The board's pins will not be accessible until
// // the board has reported that it is ready
// board.on("ready", () => {
//     let relay = new five.Relay(13);
//     five.Repl.inject({
//         relay: relay
//     });
// });

// //   board.pinMode(13, board.MODES.OUTPUT);

// //   board.loop(200, () => {
// //     // Whatever the last value was, write the opposite
// //     board.digitalWrite(13, board.pins[13].value ? 0 : 1);
// //   });
