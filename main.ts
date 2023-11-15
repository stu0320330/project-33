input.onGesture(Gesture.ScreenUp, function () {
    basic.showString(timeanddate.date(timeanddate.DateFormat.MD))
    basic.showString(timeanddate.time(timeanddate.TimeFormat.HMMSSAMPM))
})
input.onGesture(Gesture.ScreenDown, function () {
    timeanddate.advanceBy(0, timeanddate.TimeUnit.Milliseconds)
    timeanddate.numericTime(function (hour, minute, second, month, day, year) {
        basic.showString("Day" + day)
    })
})
timeanddate.setTime(12, 0, 0, timeanddate.MornNight.AM)
timeanddate.setDate(1, 20, 2022)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        if (input.buttonIsPressed(Button.B)) {
            timeanddate.advanceBy(0, timeanddate.TimeUnit.Milliseconds)
            timeanddate.numericTime(function (hour, minute, second, month, day, year) {
                basic.showString("Hour" + hour)
            })
        }
    }
})
