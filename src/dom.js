window.dom = {
    // 创建元素
    create(string) {
        let container = document.createElement('template');
        // 去除两端空格，以防将读取到空格文本
        container.innerHTML = string.trim();
        // 没有将元素appendChild时，其children为空
        return container.content.firstChild;
    },

    //新增下一个兄弟元素
    after(node, newNode) {
        return node.parentNode.insertBefore(newNode, node.nextSibling);
    },

    // 新增上一个兄弟元素
    before(node, newNode) {
        console.dir(newNode)
        return node.parentNode.insertBefore(newNode, node)
    },

    // 新增子节点
    append(node, childNode) {
        return node.appendChild(childNode)
    },

    // 改变父节点
    wrap(node, tagName) {
        let parent = this.create(tagName);
        this.before(node, parent);
        this.append(parent, node);
    },

    //删除节点
    remove(node) {
        return node.parentNode.removeChild(node);
    },

    // 删除子节点
    empty(node) {
        let len = node.childNodes.length
        let arr = []
        for (let i = 0; i < len; i++) {
            arr.push(node.firstChild)
            this.remove(node.firstChild)
        }
        return arr
    },

    // 读取或修改属性
    attr(node, attrName, value) {
        if (arguments.length === 2) {
            return node.getAttribute(attrName)
        } else if (arguments.length === 3) {
            node.setAttribute(attrName, value)
        }
    },

    // 读写文本内容
    text(node, value) {
        if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        } else if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = value
            } else {
                node.textContent = value
            }
        }
    },

    // 读写HTML内容
    html(node, string) {
        if (arguments.length === 1) {
            return node.innerHTML;
        } else if (arguments.length === 2) {
            node.innerHTML = string
        }
    },

    // 获取或修改样式 style(div,color,'red')  style(div,{border:1px solid black,color:red})
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (name instanceof Object) {
                let styleObj = name;
                for (let i in styleObj) {
                    node.style[i] = styleObj[i]
                }
            } else {
                return node.style[name]
            }
        }
    },

    // 类的处理
    class: {

        // 添加类
        add(node, name) {
            node.classList.add(name)
        },
        // 删除类
        remove(node, name) {
            node.classList.remove(name)
        },
        // 判断类是否存在
        has(node, name) {
            return node.classList.contains(name)
        }

    },

    // 事件监听
    on(node, eventName, fn) {
        node.addEventListener(node, eventName, fn)
    },

    //解除事件监听
    off(node, eventName, fn) {
        node.removeEventListener(node, eventName)
    },

    // 获取标签
    find(selector, node) {
        return (node || document).querySelectorAll(selector)
    },

    // 获取父元素
    parent(node) {
        return node.parentNode
    },

    // 获取子元素
    children(node) {
        return node.children
    },

    // 获取兄弟元素
    siblings(node) {
        return Array.from(node.parentNode.children).filter((i) => { return i !== node })
    },

    // 获取上一个兄弟节点
    previous(node) {
        return node.previousElementSibling
    },

    // 获取下一个兄弟节点
    next(node) {
        return node.nextElementSibling
    },

    //对给出的所有节点，遍历并进行对应操作
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(undefined, nodeList[i])
        }
    },

    // 用于获取该元素位于父元素的第几个子元素，从1开始
    index(node) {
        let list = this.children(node.parentNode)
        let i
        for (i = 0; i < list.length; i++) {
            if (list[i] === node)
                break
        }
        return i + 1
    }

}