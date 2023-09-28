
export default class Controller {
    constructor(port) {
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

