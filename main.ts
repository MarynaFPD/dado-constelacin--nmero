let Número = 0
input.onGesture(Gesture.Shake, function () {
    Número = randint(1, 6)
    if (Número == 1) {
        basic.showNumber(1)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (Número == 2) {
        basic.showNumber(2)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    }
    if (Número == 3) {
        basic.showNumber(3)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
    }
    if (Número == 4) {
        basic.showNumber(4)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    }
    if (Número == 5) {
        basic.showNumber(5)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    }
    if (Número == 6) {
        basic.showNumber(6)
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
})
basic.forever(function () {
	
})
