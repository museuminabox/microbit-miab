namespace miab {
    let _onObject: () => void;
    let lastYear = 0
    let lastPlace = ""

    /**
     * Registers code to run when an object is booped.
     */
    //% blockId=miab_on_boop
    //% block="on boop" blockGap=8
    export function onBoop(handler: () => void) {
        _onObject = handler
    }

    /**
     * Date of object creation
     */
    //% blockId=miab_year 
    //% block="object year" blockGap=8
    export function objectYear() {
        return lastYear
    }

    /**
     * Where the object was found
     */
    //% blockId=miab_object_place 
    //% block="object place" blockGap=8
    export function objectPlace() {
        return lastPlace
    }

    function init() {
        radio.setGroup(235)
        radio.setTransmitPower(7)
        radio.onDataReceived(() => {
            let s = radio.receiveString()
            console.log("G:"+s)
            if (s[0] == 'y') {
                lastYear = parseInt(s.substr(1))
            } else if (s[0] == 'p') {
                lastPlace = s.substr(1)
            } else if (s[0] == 'f') {
                if (_onObject) {
                    _onObject()
                }
            } else { }
        })
    }

    init()
}
