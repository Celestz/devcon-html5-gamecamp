'use strict'

let keys = {}

$(document).keydown(function(e) {
  keys[e.which] = true
  console.log(keys)
})

$(document).keyup(function(e) {
  delete keys[e.which]
  console.log(keys)
})

let Player = function(x, y, imgSrc) {
	this.pos = { x: 0, y: 0 }
  this.size = { w: 0, h: 0 }
	this.image= new Image()
  this.keyCodes = null
  this.moveSpeed = 5
  this.boundaries = { x: 0, y: 0 }

  //Hackathon Parameters
  this.boundLock = false
  this.teleport = false
  this.collision = false

  this.init = function(x, y, imgSrc) {
    this.pos.x = x
    this.pos.y = y

    this.image.src = imgSrc
    this.image.onload = this.onImageLoad.bind(this)
  }

  this.canTeleport= function(canvas) {
    this.teleport = true
  }

  this.bounded = function(canvas) {
    this.boundaries.x = canvas.width
    this.boundaries.y = canvas.height
    this.boundLock = true
  }

  this.onImageLoad = function() {
    // alert(this)
    this.size.w = this.image.width
    this.size.h = this.image.height
  }

  this.setKeyCodes = function(keyCodes) {
    this.keyCodes = keyCodes
  }

  this.update = function() {
    if(this.canTeleport) {
    }
    // if(this.canTeleport && this.pos.x < this.boundaries.x) {
    //   this.pos.x = -150
    // }
    if(this.boundLock) {
      if(this.pos.y < 0) this.pos.y += this.moveSpeed
      if(((this.pos.y+this.size.h ) > this.boundaries.y)) this.pos.y -= this.moveSpeed
      if(this.pos.x < 0) this.pos.x += this.moveSpeed
      if((this.pos.x+this.size.w ) > this.boundaries.x) this.pos.x -= this.moveSpeed
    }

    if(keys[this.keyCodes.UP]) {
      this.pos.y -= this.moveSpeed
    }
    if(keys[this.keyCodes.DOWN]) {
      this.pos.y += this.moveSpeed
    }
    if(keys[this.keyCodes.LEFT]) {
      this.pos.x -= this.moveSpeed
    }
    if(keys[this.keyCodes.RIGHT]) {
      this.pos.x += this.moveSpeed
    }

  }

  this.draw = function() {
    if( this.image.src ) {
      CONTEXT.drawImage(this.image, this.pos.x, this.pos.y, this.size.w, this.size.h)
    }
  }

  this.init(x, y, imgSrc)
}