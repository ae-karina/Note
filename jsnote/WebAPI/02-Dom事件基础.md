# 事件监听（绑定）

## 事件

事件是编程语言中的术语，它是用来描述程序的行为或状态的，**一旦行为或状态发生改变，便立即调用一个函数。**

例如：用户使用【鼠标点击】网页中的一个按钮、用户使用【鼠标拖拽】网页中的一张图片

##  事件监听

结合 DOM 使用事件时，需要为 DOM 对象添加事件监听，等待事件发生（触发）时，便立即调用一个函数。

`addEventListener` 是 DOM 对象专门用来添加事件监听的方法，它的两个参数分别为【事件类型】和【事件回调】

语法：

```js
元素对象.addEventListener('事件类型',要执行的函数)
```
事件监听三要素：
- 事件源： 那个dom元素被事件触发了，要获取dom元素
- 事件类型： 用什么方式触发，比如鼠标单击 click、鼠标经过 mouseover 等
- 事件调用的函数： 要做什么事


```html
<h3>事件监听</h3>

<p id="text">为 DOM 元素添加事件监听，等待事件发生，便立即执行一个函数。</p>

<button id="btn">点击改变文字颜色</button>

<script>
  // 1. 获取 button 对应的 DOM 对象
  const btn = document.querySelector('#btn')

  // 2. 添加事件监听
  btn.addEventListener('click', function () {
    console.log('等待事件被触发...')
    // 改变 p 标签的文字颜色
    let text = document.getElementById('text')
    text.style.color = 'red'
  })
  // 3. 只要用户点击了按钮，事件便触发了！！！
</script>
```

> 注意：
> 1. 事件类型要加引号
> 2. 函数是点击之后再去执行，每次点击都会执行一次

```html
<script>
  // 双击事件类型
  btn.addEventListener('dblclick', function () {
    console.log('等待事件被触发...')
    
    const text = document.querySelector('.text')
    // 改变 p 标签的文字颜色
    text.style.color = 'red'
    // 改变 p 标签的文本内容
    text.style.fontSize = '20px'
  })
</script>
```


### 拓展阅读-事件监听版本

DOM L0

  `事件源.on事件 = function() { }`

DOM L2

  `事件源.addEventListener(事件， 事件处理函数)`

区别：

  on方式会被覆，addEventListener方式可绑定多次，拥有事件更多特性，推荐使用

>  onclick只能冒泡 不能捕获  已被抛弃
> 
>  addEventListener 能冒泡 捕获

发展史：
- DOM L0 ：是 DOM 的发展的第一个版本； L：level
- DOM L1：DOM级别1 于1998年10月1日成为W3C推荐标准
- DOM L2：使用addEventListener注册事件
- DOM L3： DOM3级事件模块在DOM2级事件的基础上重新定义了这些事件，也添加了一些新事件类型


# 事件类型

鼠标、键盘、表单、焦点等

### 鼠标事件

鼠标事件是指跟鼠标操作相关的事件，如单击、双击、移动等。

1. `mouseenter` 监听鼠标是否移入 DOM 元素

```html
<h3>鼠标事件</h3>

<p>监听与鼠标相关的操作</p>

<div class="box"></div>

<script>
  // 需要事件监听的 DOM 元素
  const box = document.querySelector('.box');

  // 监听鼠标是移入当前 DOM 元素
  box.addEventListener('mouseenter', function () {
    // 修改文本内容
    this.innerText = '鼠标移入了...';
    // 修改光标的风格
    this.style.cursor = 'move';
  })
</script>
```

2. `mouseleave` 监听鼠标是否移出 DOM 元素

```html
<h3>鼠标事件</h3>
<p>监听与鼠标相关的操作</p>
<hr>
<div class="box"></div>
<script>
  // 需要事件监听的 DOM 元素
  const box = document.querySelector('.box');

  // 监听鼠标是移出当前 DOM 元素
  box.addEventListener('mouseleave', function () {
    // 修改文本内容
    this.innerText = '鼠标移出了...';
  })
</script>
```

###  键盘事件

`keydown`   键盘按下触发

`keyup`   键盘抬起触发

> 尽量用keyup

### 焦点事件

`focus`  获得焦点

`blur` 失去焦点

```html
<input type="text">
<script>
  const input = document.querySelector('input')
  input.addEventListener('focus', function () {
    console.log('有焦点触发')
  })

  input.addEventListener('blur', function () {
    console.log('失去焦点触发')
  })
</script>
```

### 文本框输入事件

input  

```js
input.addEventListener('input', function () {
  console.log(input.value) //获取input的value
})
```

# 事件对象

事件对象：任意事件类型被触发时与事件相关的信息会被以对象的形式记录


## 获取事件对象

语法：

```js
元素.addEventListener('click'，function(e) ){

}
```


```html
<div class="box"></div>

<script>
  // 获取 .box 元素
  const box = document.querySelector('.box')

  // 添加事件监听
  box.addEventListener('click', function (e) {
    console.log('hahaha');
    console.log(e)
  })
</script>
```

- 事件回调函数的【第1个参数】就是事件对象 

- 通常习惯性的将这个对数命名为 `event`、`ev` 、`e` 




## 事件对象常用属性
事件对象中包含的有用信息：

1. `type` 当前事件的类型
2. `clientX/Y` 获取光标相对于浏览器可见窗口左上角的位置
3. `offsetX/Y` 获取光标相对于当前DOM元素左上角的位置
4. key
- 用户按下的键盘键的值
- 现在不提倡使用keyCod

> 注：在事件回调函数内部通过`window.event`同样可以获取事件对象




# 环境对象

> 能够分析判断函数运行在不同环境中 this 所指代的对象

**环境对象**：指的是函数内部特殊的变量 `this` ，代表当前函数运行时所处的环境

```js
每个函数里面都有this   环境对象   普通函数里面this指向的是window
function fn() {
  console.log(this)
}
window.fn()



const btn = document.querySelector('button')
btn.addEventListener('click', function () {
  // console.log(this) //btn 对象
  // btn.style.color = 'red'
  this.style.color = 'red'
})
```

结论：

1. `this` 本质上是一个变量，数据类型为对象
2. 函数的调用方式不同 `this` 变量的值也不同
3. **谁调用 `this` 就是谁**是判断 `this` 值的粗略规则
4. 函数直接调用时实际上 `window.sayHi()` 所以 `this` 的值为 `window`




# 回调函数

如果将函数 A 做为参数传递给函数 B 时，称函数 A 为回调函数

```js
// 声明 foo 函数
function foo(arg) {
  console.log(arg);
}

// 普通的值做为参数
foo(10);
foo('hello world!');
foo(['html', 'css', 'javascript']);

function bar() {
  console.log('函数也能当参数...');
}
// 函数也可以做为参数！！！！
foo(bar);
```

函数 `bar` 做参数传给了 `foo` 函数，`bar` 就是所谓的回调函数了！！！

间歇函数 `setInterval` 

```js
function fn() {
  console.log('我是回调函数...');
}
// 调用定时器
setInterval(fn, 1000);
```

`fn` 函数做为参数传给了 `setInterval` ，这便是回调函数的实际应用了

更简洁的写法：

```js
// 调用定时器，匿名函数做为参数
setInterval(function () {
  console.log('我是回调函数...');
}, 1000);
```
addEventListener也是回调函数：

```js
box.addEventListener('click',function{
  console.log('我也是回调函数')
})
```

结论：

1. 回调函数本质还是函数，只不过把它当成参数使用
2. 使用匿名函数做为回调函数比较常见


