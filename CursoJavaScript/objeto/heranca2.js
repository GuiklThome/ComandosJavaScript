Object.prototype.attr0 = '0'
const avo = { attr1: 'A'}
const pai = { __photo__: avo, attr2: 'B'}
const filho = { __photo__: pai, attr3: 'C'}
console(filho.attr0)