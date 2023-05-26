for (let index = 0; index <= 5; index++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(6 - index)
}
basic.showString("fasion newstar away bat dau")
basic.showLeds(`
    . # # # .
    . # # # .
    # . # . #
    . . # . .
    . # . # .
    `)
basic.clearScreen()
basic.showLeds(`
    . # # # .
    . # # # .
    . . # . #
    . # . # #
    . . . # .
    `)
basic.clearScreen()
basic.showLeds(`
    . # # # .
    . # # # .
    # . # . #
    . # . # .
    . # # # .
    `)
basic.clearScreen()
basic.showString("mimi va lyly winnerrrr!")
music.playTone(392, music.beat(BeatFraction.Whole))
basic.forever(function () {
	
})
