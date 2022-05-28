import { initToggleButton } from './utils/toggle-button.js'
import { makeFlower } from './makeFlowers.js'

initToggleButton('library')
initToggleButton('dark')


makeFlower('.butterfly', {
    petalCount: 5,
    rotation: 170,
    scale: 1.5,
    radius: 310,
})

makeFlower('.circle', {
    petalCount: 1,
    scale: 4,
    radius: 0,
})


makeFlower('.circleRed', {
    petalCount: 1,
    scale: 3.7,
    radius: 0,
})

makeFlower('.circle2', {
    petalCount: 1,
    scale: 2.2,
    radius: 0,
})


makeFlower('.middot', {
    petalCount: 1,
    scale: 0.7,
    radius: 0,
})

makeFlower('.shar', {
    scale: 0.8,
    petalCount: 3,
    radius: 100,
})
