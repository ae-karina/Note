
undefined 既是一个原始数据类型，也是一个原始值数据

undefined 全局对象上的一个属性   window.undefined

```js
console.log(window.undefined);

console.log(window);
```

# 不可写  writeable:false
```js
window.undefined = 1;

console.log(window.undefined);
```


# 不可配置 configurable:false

```js
delete window.undefined
console.log(window.undeifned);
```



# 不可枚举  enumerable:false

```js
for (var k in window) {
  if (k === undefined) {
    console.log(k);
  }
}
```


# 不能重新定义

```js
Object.defineProperty(window, 'undefined', {
  enumerable: true,
  writable: true,
  configurable: true,
});
// Uncaught TypeError: Cannot redefine property: undefined
```

系统给一个未赋值的变量自动赋值为undefined，类型也是undefined

```js
console.log(a);
console.log(typeof a); //undefined

function test(a) {
  console.log(typeof a); //undefined

  return a; //undefined
}
console.log(test());    实参没有传值
```

函数内部没有显示返回一个值的时候，系统默认给函数返回undefined

```js
function test() {
  console.log(123); //123
}
console.log(test()); //undefined
```

全局undefined不能做变量使用  一般浏览器都是这样

```js
var undefined = 1;
console.log(undefined);
```

# 局部可使用undefined并改变变量

undefined 不是JS的保留字和关键字  局部不会去找window.undefined

```js
'use strict'; //ES5 没有解决这个问题
// 局部
function test() {
  // 'use strict';
  var undefined = 1;

  console.log(undefined); //1
}
test();
```

```js
var a = null;
a == undefined  /* true */ 非严格  检查a是不是null  是null就等于true   所以不能用这个
if (a === undefined) {  判断a赋值没赋值 全等才严谨
  console.log(true);
} else {
  console.log(false);
}
```

另一方法 判断a赋值没赋值

```js
var a;
if (typeof a === 'undefined') {
  console.log(true); //true
} else {
  console.log(false);
}

console.log(typeof b); /* undefined */ 未定义的一概认为undefined 不报错
console.log(b); //报错
```

另一方法 判断a赋值没赋值   全局找是否有a属性

```js
var a;
if ('a' in window) {
  conosle.log(true); //true
} else {
  console.log(false);
}

```

# void()

void() 括号可加可不加 类似于 typeof

void(0) -> 对0进行求值   返回undefined

```js
var a, b, c;
void(b = 1, c = 2);

console.log(a, b, c); //undefined 1 2
```

```js
<a href="javascript:void(0)" />   void(0)返回undefined 阻止链接跳转
<a href="javascript::" />        这样写也能阻止链接跳转

```

> void(0) 返回的就是window.undefined

```js
console.log(void(0) === window.undefined); //true
```

一些未定义

```js
if (b === undefined) {
  console.log(true); //Uncaught ReferenceError: b is not defined
}

if (b === void(0)) {
  console.log(true); //Uncaught ReferenceError: b is not defined
}
```

避免使用关键字做变量导致出问题 void(0)解决

```js
function test() {
  var undefined = 1;   
  console.log(undefined); //1  
  console.log(void(0)); //undefined 
  console.log(window.undefined === void(100)); //true  void(100) 也可以
  console.log(undefined === void(0)); //false    
}
test();
```

> window.undefined还要到全局去取  
> 
> void(0)自己执行然后返回undefined 不用去外面找 
> 
>  现在基本写代码都很规范  void(0)很少出现了  底层会出现