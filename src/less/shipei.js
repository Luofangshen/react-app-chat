let styleNode = document.createElement('style')
let size = document.documentElement.clientWidth / 16
styleNode.innerHTML = `html{font-size: ${size}px!important;}`
document.head.appendChild(styleNode)
