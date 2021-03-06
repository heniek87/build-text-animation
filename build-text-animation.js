
/*
 * Copyright (c) 2021 Michał Morawiec.
 * https://github.com/heniek87/build-text-animation
 *
 * Licensed MIT License
 */



const changeL = (o, l, c, t, co, cb) => {
    const orgs = l.map(s => o.innerHTML[s])
    const s = o.innerHTML.split('')
    const changes = Math.round(Math.random() * c) // max of changes

    for (let n = 0; n <= changes; n++) {
        setTimeout(() => {
            if (n == changes) {
                l.forEach((p, k) => {
                    s[p] = orgs[k]
                })
                o.innerHTML = s.join('')
                cb()
            } else {
                l.forEach((p) => {
                    s[p] = `<span style="color:${co}">${Math.round(Math.random())}</span>`
                })
                o.innerHTML = s.join('')
            }
        }, n * t)
    }
}

const startBuildAnim = function(conf = {}){
    const { min = 1, max = 3, changes = 20, time = 70, color = 'green' } = conf // destruct options + default values
    const length = this.innerHTML.length
    const l = []
    const i = max > min ? Math.round(Math.random() * (max - min)) + min : min

    for (let n = 0; n < i; n++) l.push(Math.round(Math.random() * (length - 1)))

    changeL(this, l, changes, time, color, () => window.requestAnimationFrame(()=>this.startBuildAnim( conf)))
}

HTMLElement.prototype.startBuildAnim = startBuildAnim