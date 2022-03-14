let p = dom.create(' <p><span>111111</span></p>');
console.log(p);

dom.after(l3, p);

dom.before(l3, p)

let sp = dom.create('<span>test append</span>')
dom.append(box, sp);

dom.wrap(sp, '<div id="wrap"></div>')

dom.remove(p);

let arr = dom.empty(list);
console.dir(arr)
for (let i = 0; i < arr.length; i++) {
    dom.append(list, arr[i])
}

dom.attr(box, 'title', 'test')
console.log(dom.attr(box, 'title'))
console.log(dom.text(box))
console.log(dom.class.has(box, 'red'))
console.log(dom.parent(list))
console.log(dom.children(box))
console.log(dom.siblings(l2))
console.log(dom.next(l2));
let span = dom.create('<span>test</span>')
dom.append(l3, span);
dom.each(dom.find('li'), (node) => {
    dom.attr(node, 'name', 'li')
})
console.log(dom.index(l3));
