input.onButtonPressed(Button.A, function () {
    if (paddle > 0) {
        paddle += -1
    }
})
function gameOver () {
    basic.showIcon(IconNames.Skull)
    basic.pause(1000)
    control.reset()
}
input.onButtonPressed(Button.AB, function () {
    started = true
})
input.onButtonPressed(Button.B, function () {
    if (paddle < 4) {
        paddle += 1
    }
})
function resetBall () {
    ballX = randint(1, 3)
    ballY = 3
    dx = 1
    dy = -1
}
let started = false
let dy = 0
let dx = 0
let ballY = 0
let ballX = 0
let paddle = 0
paddle = 2
ballX = 2
ballY = 3
dx = 1
dy = -1
basic.forever(function () {
    basic.clearScreen()
    // draw paddle
    led.plot(paddle, 4)
    // draw ball ONLY ONCE
    led.plot(ballX, ballY)
    if (!(started)) {
        // keep ball sitting above paddle before launch
        ballX = paddle
        ballY = 3
        basic.pause(50)
        return
    }
    // move ball
    ballX += dx
    ballY += dy
    // wall bounce
    if (ballX <= 0 || ballX >= 4) {
        dx *= -1
    }
    if (ballY <= 0) {
        dy *= -1
    }
    // paddle bounce (correct timing)
    if (ballY == 3 && ballX == paddle && dy > 0) {
        dy = -1
    }
    // miss
    if (ballY > 4) {
        gameOver()
    }
    basic.pause(200)
})
