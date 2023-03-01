controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Laser = sprites.createProjectileFromSprite(assets.image`LaserBeam`, SpaceShip, 200, 0)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
    pause(500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    info.changeScoreBy(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
let Ufo: Sprite = null
let Laser: Sprite = null
let SpaceShip: Sprite = null
let shoot = 1
SpaceShip = sprites.create(assets.image`SpaceShip`, SpriteKind.Player)
controller.moveSprite(SpaceShip, 100, 100)
SpaceShip.setStayInScreen(true)
info.setLife(3)
scene.setBackgroundImage(assets.image`Backround`)
if (info.life() == 0) {
    game.setGameOverScoringType(game.ScoringType.HighScore)
    game.setGameOverMessage(true, "GAME OVER!")
}
game.onUpdateInterval(1000, function () {
    Ufo = sprites.create(assets.image`UFO`, SpriteKind.Enemy)
    Ufo.setVelocity(-100, 0)
    Ufo.setPosition(160, randint(5, 115))
    Ufo.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(1, function () {
    if (info.score() == 5000) {
        info.changeLifeBy(1)
        info.changeScoreBy(100)
    }
    if (info.score() == 10000) {
        info.changeLifeBy(1)
        info.changeScoreBy(100)
    }
    if (info.score() == 15000) {
        info.changeLifeBy(1)
        info.changeScoreBy(100)
    }
    if (info.score() == 20000) {
        info.changeLifeBy(1)
        info.changeScoreBy(100)
    }
})
