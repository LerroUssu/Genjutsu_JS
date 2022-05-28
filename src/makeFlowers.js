export const makeFlower = (sourceSelector, { 
    petalCount = 5,
    radius = 300,
    scale = 1,
    angleOffset = 36,
    forEachPetal = null,
    rotation = 90,
}) => {

    const element = document.querySelector(sourceSelector)
    const main = document.querySelector('#flower')

    for (let index = 0; index < petalCount; index++) {

        const petal = element.cloneNode(true)
        main.append(petal)

        petal.style.position = 'absolute'
        petal.style.left = '50%'
        petal.style.top = '50%'

        const angle = angleOffset + 360 * index / petalCount
        petal.style.transform = `
            translate(-50%, -50%)
            rotate(${angle}deg)
            translate(${radius}px, 0)
            scale(${scale})
            rotate(${rotation}deg)`

        forEachPetal?.(petal, index)
    }

    // why? dunno...
    document.body.scrollTop = 0
}