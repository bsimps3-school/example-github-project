input.onButtonPressed(Button.A, function () {
    while (false) {
        basic.showIcon(IconNames.Heart)
        if (true) {
        	
        } else {
        	
        }
    }
    radio.sendValue("name", 0)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("- - - - - - - - ", 120)
    basic.showLeds(`
        . # . . .
        . . # . .
        . . # # .
        . . # . .
        . . # . .
        `)
})
basic.forever(function () {
	
})
