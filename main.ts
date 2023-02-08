input.onButtonPressed(Button.A, function () {
    número_introducido += 10
})
input.onGesture(Gesture.Shake, function () {
    número_introducido = 0
    numero_a_adivinar = randint(1, 99)
})
input.onButtonPressed(Button.B, function () {
    número_introducido += 1
})
let numero_a_adivinar = 0
let número_introducido = 0
número_introducido = 0
basic.showString("" + (número_introducido))
numero_a_adivinar = randint(1, 99)
basic.forever(function () {
    basic.showString("" + (número_introducido))
})
