input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
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
