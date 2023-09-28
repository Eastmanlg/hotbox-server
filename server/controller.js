import j5 from 'johnny-five';

export default class Controller {
    constructor(port) {
        this.board = new j5.Board({port, repl:false});
        this.led = {};

        this.board.on('ready', () => {
            this.led = new j5.Led(13);
        });
    }

    async blink(ms) {
        this.led.blink(ms);
    }
    async on() {
        this.led.on();
    }
    async off() {
        this.led.stop().off();
        this.led.off();
    }

}

