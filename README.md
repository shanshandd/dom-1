# dom-1
+ 创建元素  
 `create(string)`
+ 新增下一个兄弟元素  
 `after(node, newNode)`
+ 新增上一个兄弟元素  
 `before(node, newNode)`
+ 新增子节点  
  `append(node, childNode)`
+ 改变父节点  
  `wrap(node, tagName)`
+ 删除节点  
  `remove(node)`
+ 删除子节点  
  `empty(node)`

+ 读取或修改属性  
  `attr(node, attrName, value?)`

+ 读写文本内容  
  `text(node, value?)`

+ 读写HTML内容  
  `html(node, string?)`

+ 获取或修改样式  
  `style(div,color,'red'?)`  
  `style(div,{border:1px solid black,color:red})`


+  添加类  
 `class.add(node, name)`
+ 删除类  
  `remove(node, name)`
+ 判断类是否存在  
  `has(node, name)`

+ 事件监听  
  `on(node, eventName, fn)`

+ 解除事件监听  
  `off(node, eventName, fn)`

+ 获取标签  
 `find(selector, node)`

+ 获取父元素  
 `parent(node)`

+ 获取子元素  
  `children(node)`

+ 获取兄弟元素  
 `siblings(node)`

+ 获取上一个兄弟节点  
  `previous(node)`

+ 获取下一个兄弟节点  
 `next(node)`

+ 对给出的所有节点，遍历并进行对应操作  
  `each(nodeList, fn)`

+ 用于获取该元素位于父元素的第几个子元素，从1开始  
 `index(node)`
