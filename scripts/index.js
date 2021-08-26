var box=path.getBBox()
svg.setAttribute("viewBox",`${box.x} ${box.y} ${box.width} ${box.height}`)

console.log(box)