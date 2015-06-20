'use strict'
$(document).ready(init)

let FPS = 60
let FRAME_RATE = 1000 / FPS
let CANVAS = null
let CONTEXT = null

let BLACK_BG = '#000'
let TEXT_COLOR = '#0FF'
let FONT_SCHEME = '30px Sans-Serif'

//Players
let mario = null
let bird = null

function init() {
  CANVAS = $('#canvas')[0] //Just remembered, Jquery returns array based results
  CONTEXT = CANVAS.getContext('2d')

  let keyCodesMario = {
    UP: 87,
    LEFT: 65,
    DOWN: 83,
    RIGHT: 68
  }

  let keyCodesBird = {
    UP: 38,
    LEFT: 37,
    DOWN: 40,
    RIGHT: 39
  }

  setInterval(function() {
  	update()
  	draw()
  }, FRAME_RATE)

  mario = new Player(100, 100, 'img/super-mario.png')
  bird = new Player(700, 100, 'img/angry-bird.png')
  mario.bounded(CANVAS)
  bird.canTeleport(CANVAS)
  mario.setKeyCodes(keyCodesMario)
  bird.setKeyCodes(keyCodesBird)
}

function update() {
  mario.update()
  bird.update()
}

function draw() {
  mario.draw()
  bird.draw()
}