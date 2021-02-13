goal = 0
difference = 0
img = None
degrees = 0

input.calibrate()
img = images.create_image("""
. # . # .
. # . # .
. . . . .
# . . . #
. # # # .
""")

img.show_image(0)
goal = randint(0, 360)

def on_forever():
    global goal, difference, degrees
    degrees = Math.abs(goal - degrees)
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(difference * 5)
    pins.digital_write_pin(DigitalPin.P0, 0)
    basic.pause(difference * 5)

def on_button_pressed_a():
    global goal, difference
    if difference < 15:
        basic.show_string("Winner")
        goal = randint(0, 360)
    else:
        basic.show_string("Try Again")
        goal = randint(0, 360)

basic.forever(on_forever)
input.on_button_pressed(Button.A, on_button_pressed_a)
