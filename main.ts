basic.showIcon(IconNames.Giraffe)
pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Capacitive)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Yes)
    } else if (false) {
    	
    } else {
        basic.showIcon(IconNames.No)
    }
})
