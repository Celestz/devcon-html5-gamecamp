'use strict'
$(document).ready(init)

let FPS = 60
let FRAME_RATE = 1000 / FPS
let CANVAS = null
let CONTEXT = null
let FRAME_COUNT = 0

let BLACK_BG = '#000'
let TEXT_COLOR = '#0FF'
let FONT_SCHEME = '30px Sans-Serif'

function init() {
  CANVAS = $('#canvas')[0] //Just remembered, Jquery returns array based results
  CONTEXT = CANVAS.getContext('2d')

  setInterval(function() {
  	update()
  	draw()
  }, FRAME_RATE)
}

function update() {
	FRAME_COUNT++
}

function draw() {
	CONTEXT.fillStyle = BLACK_BG
	CONTEXT.fillRect(0, 0, CANVAS.width, CANVAS.height)

	CONTEXT.font = FONT_SCHEME
	CONTEXT.fillStyle = TEXT_COLOR
	CONTEXT.fillText('Frame Count: ' + FRAME_COUNT, 50, 50)
}