input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1825; index++) {
        valor_dado = randint(1, 6)
        cantidad_agua += cantidad_agua + valor_dado
        basic.showNumber(cantidad_agua)
        basic.pause(200)
    }
    basic.showNumber(cantidad_agua / 1825)
})
let valor_dado = 0
let cantidad_agua = 0
cantidad_agua = 0
valor_dado = 0
basic.showNumber(valor_dado)
