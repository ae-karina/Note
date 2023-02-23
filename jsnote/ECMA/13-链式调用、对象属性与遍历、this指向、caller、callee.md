# 链式调用

```js
var sched = {
  wakeup: function () {
    console.log('Running');
  },
  morning: function () {
    console.log('Going shopping');
  },
  noon: function () {
    console.log('Having a rest');
  },
  afternoon: function () {
    console.log('Studying');
  },
  evening: function () {
    console.log('Walking');
  },
  night: function () {
    console.log('Sleeping');
  }
}
sched.wakeup().morning().noon().afternoon().evening().night(); //报错
```

想要全部打印   **链式操作**

```js
var sched = {
  wakeup: function () {
    console.log('Running');
    return this;
  },
  morning: function () {
    console.log('Going shopping');
    return this;
  },
  noon: function () {
    console.log('Having a rest');
    return this;
  },
  afternoon: function () {
    console.log('Studying');
    return this;
  },
  evening: function () {
    console.log('Walking');
    return this;
  },
  night: function () {
    console.log('Sleeping');
    return this;
  }
}
sched.wakeup().morning().noon().afternoon().evening().night();    链式操作
```



# 对象属性与遍历

## 拼接属性名

```js
var myLang = {
  No1: 'HTML',
  No2: 'CSS',
  No3: 'JavaScript',
  myStudyingLang: function (num) {
    console.log(this['No' + num]);   拼接属性名只能这么写
  }
}

myLang.myStudyingLang(1);    //HTML
```

```js
obj = {
  name: '123'
}

console.log(obj.name); //123
console.log(obj['name']); //123   属性名是一个字符串  用括号括起来

最早的JS引擎  
obj.name -> obj['name']还是会匿名转换成这个样子
```

## 枚举 ->遍历

对象枚举   枚举实际就是对象

```js
var arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

var car = {
  brand: 'Benz',          key:value
  color: 'red',
  displacement: '3.0',
  lang: '5',
  width: '2.5',
}

for (var key in car) {
  console.log(key);
}

for (var key in car) {
  console.log(car.key); // undefined
}

car.key -> car['key']->undefined   找不到这个叫key的属性名

for (var key in car) {
  console.log(key + ':' + car[key]);    原封不动打印出来   遍历对象
}
```

for   in  既可以遍历对象 又可以遍历数组

```js
var arr = [1, 2, 3, 4, 5];

for (var i in arr) {
  console.log(arr[i]);
}
```

 
# hasOwnProperty   排除原型

```js
var obj = {
  name: '艾小野',
  age: 32
}

console.log((obj.hasOwnProperty(obj.name))) //false
```

```js
function Car() {
  this.brand = 'Benze';
  this.color = 'red';
  this.displacement = '3.0';
}

Car.prototype = {
  lang: 5,
  width: 2.5
}

var car = new Car();
// console.log(car);

for (var key in car) {
  console.log(key + ":" + car[key]);      原型链上自定义的属性的都能打印出来  不是自定义的不会打印
}


结果
brand:Benze
color:red
displacement:3.0
lang:5
width:2.5
```


只想打印自己的属性  不要原型上的

```js
function Car() {
  this.brand = 'Benze';
  this.color = 'red';
  this.displacement = '3.0';
}

Car.prototype = {
  lang: 5,
  width: 2.5
}

var car = new Car();
// console.log(car);

for (var key in car) {
  if (car.hasOwnPrototype(key)) {    排除自定义原型上的属性
    console.log(car[key]);          找对象的属性，而不是找原型本身的属性
  }
}

```

```js
var car = {
  brand: 'Benz',
  color: 'red'
}

car['displacement']  字符串
console.log('displacement' in car);  /* false */  不存在car里面



function Car() {
  this.brand = 'Benz';
  this.color = 'red';
}

Car.prototype = {
  displacement: '3.0'
}
var car = new Car();
console.log('displacement' in car);     判断属性是否在car里面
```

> 但是 in 不排除原型  实际场景中in不怎么用


## instanceof

该对象是否是该构造函数构实例化出来的

```js
A instancsof  B   B:构造函数
```

```js
function Car() {}

var car = new Car();

function Person() {}
var p = new Person();

console.log(car instanceof Car); //true
console.log(car instanceof Object); //true
console.log([] instanceof Array); //true
console.log({} instanceof Object); //true
```
A对象的原型里面到底有没有B的原型

> 原型链上重合的都是true

```js
var a = [] || {}; //返回 [] 空数组不是false

var a = []; //返回 [] 空数组不是false

console.log(a.constructor);  打印出来是数组的话  能判断是否是数组
// ƒ Array()  

console.log(a instanceof Array); //true

var str = Object.prototype.toString.call(a);  call把this替换成a了
console.log(str); //[object Array]

Object.prototype = {
  toString: function () {
    a.toString();     /* [object Array] */   call把this替换成a了
  }
}
```


```js
var arr = new Array(1, 2, 3);
console.log(arr);

调用Object里面的toString
Object.prototype.toString.call(arr);   arr去替换Object里面的this，this更改为arr，这样就可以打印

console.log(Object.prototype.toString.call(arr)) //[object Array]

```

> 尽可能用下面的方法判断数据类型  很少用 instanceof
```js
var a = [];
var str = Object.prototype.toString,   根据不同的数据类型对数据进行处理
trueTip = '[object Array]';          先缓存起来
if (str.call(a) === trueTip) {
console.log('是数组');     //是数组
} else {
console.log('不是数组')
}
```

```js
实际的数据排列
null      josn数据格式   如果是什么数据 判断什么问题
[
  {
    name: 'abc'
  },
  {
    name: 'bcd'
  }
]

{
  "10061":'error '     错误信息
}
```


### 三种判断数组的方法

```js
console.log(a.constructor);
console.log(a instanceof Array);
Object.prototype.toString.call(a);
```

# this指向
普通函数，只要没有实例化，函数内部this默认指向window

```js
function test(b) {
this.d = 3;         等于 window.d=3   d=3
var a = 1;

function c() {}
}

test(123);

console.log(this.d);


AO ={
  arguments:[123]   123其实存在这
  this:window
  b:123
  a:undefined
  c:function(){}
}

```


## 构造函数的AO
```js
function Test() {
  // var this={         new的时候
  // __proto__:Test.prototype
  // }
  this.name = '123';
}

var test = new Test();



AO={
 this.window    var this之后 这个被覆盖了  变成下面这个
 this:{
    name:'123';
    __prototype__:Test.prototype
 }    形成原型链了
}

GO={
Test:function test(){...}
test:{       new的时候变成了一个对象
   name:'123';
   __prototype__:Test.prototype    test 实际存在这了
}
}
```

## call/apply

```js
function Person() {
  this.name = '张三';
  this.age = 18
}

function Programmer() {
  Person.apply(this);
  this.work = 'Programming'
}

var p = new Programmer();
console.log(p);
```


apply需要传值的情况

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Programmer(name, age) {
  Person.apply(this, [name, age]);
  this.work = 'Programming'
}

var p = new Programmer('张三', 18);
console.log(p);
```

总结：4种this指向

1. 全局this  ->window

2. 预编译函数this ->window

3. apply/call改变this指向

4. 构造函数的this指向实例化对象


# callee/caller
 实际中少用  但是考试常考
```js
function test(a, b, c) {
  console.log(arguments.callee.length);
}
test(1, 2, 3); //3
```

## callee 返回正在被执行的函数对象 
```js
function test(a, b, c) {
  console.log(arguments.callee);   arguments指向的函数是谁就返回谁   返回实参列表所对应的函数

  arguments是实参列表

  实参列表指向的函数本身  就返回这个东西  等于下面这个

  console.log(test.length); /* 3 */        形参本身的长度

  console.log(arguments.length)   /* 3 */  实参列表的长度
}
test(1, 2, 3);


arguments.callee   返回函数本身
console.log(arguments.callee);

结果
ƒ test(a, b, c) {
 ···
}
```

arguments.callee在哪个函数里面就指向哪个函数   

不涉及交叉问题   

实参列表当中的一个属性  方法本身也是属性的一种

```js
function test1() {
consol.log(arguments.callee); 

function test2() {
  console.log(arguments.callee);
}
test2();
}
test1();
arguments.callee();   后面的括号是执行的意思

```

### callee  递归
```js
callee  递归累加n位
function sum(n) {
  if (n <= 1) {
    return 1;
  }
  return n + sum(n - 1);
}
var res = sum(10);
console.log(res);   //55
```

模块化编程

```js
希望是一个自启动函数交给全局变量   
var sum = (function (n) {
  if (n <= 1) {
    return 1;
  }
  return n + arguments.callee(n - 1);  因为没有函数名，所以用callee
})(100);

console.log(sum);
```
## caller实际没什么用处  但是笔试要
谁当前调用了该函数就返回谁  

在被调用函数里面打印被调用函数的caller 

可以打印出来谁在调用它  

执行才能打印出来

```js
'use strict';     严格模式   caller   callee 这些属性都不可以被通过
test1();

function test1() {
test2();
}

function test2() {
console.log(test2.caller);  
}

结果
ƒ test1() {
  test2();
}
```


# 题目

```js
function foo() {
  bar.apply(null, arguments);
  /* bar(arguments);  */  其实在执行着这个
}

function bar() {
  console.log(arguments);   空对象
}
bar();
foo(1, 2, 3, 4, 5); //[1, 2, 3, 4, 5,]
```

所有函数都有下面变化这个过程
```js
bar() - > bar.call(arguments) - > bar(arguments);
```

JS的typeof可能返回的值有哪些

```js
object(null) / boolean / number / string / undefined / function
```
```js
function b(x, y, a) {
  arguments[2] = 10;
  alert(a);   //10
}

b(1, 2, 3);   


function b(x, y, a) {
  a = 10;             实形参相对应
  alert(arguments[2]); //10
}

b(1, 2, 3);
```

```js
var f = (
  function f() {
    return '1';
  },
  function g() {
    return 2;
  }
);

console.log(typeof f); //function
/* (f(),g());  */ 返回逗号后面那个


var f = (
  function f() {
    return '1';
  },
  function g() {
    return 2;
  }
)();

console.log(typeof (f)); //返回string类型的number

函数执行过程
f(f(),g())
f=g()()
f()=g();
f=(g())();

```

常见值的问题

```js
console.log(undefined == null) //true
console.log(undefined === null) //false
console.log(isNaN('100'));     //false
console.log(parseInt('1a') == 1); //true


console.log(parseInt('123a'));/*  123 */ 读到不是数字为止
console.log(parseInt('1a2')); //1


var num = Number('100');  先转换成数字
console.log(isNaN(num)); //false
Number('abc'); /* NaN */   非数
isNaN('abc'); //true




function isNaN1(num) {
  var res = Number(num) + '';
  if (res == 'NaN') {
    return true;
  } else {
    return false;
  }
}

console.log(isNaN1('123')); //false
```
> NaN != NaN

空对象为什么不等于空对象，怎么让他等于

两个空对象存贮在不同的空间里面，地址不等，引用值不等

先声明一个对象再让这个对象赋值给另一个对象赋值  这时候原对象和新对象相等

让它相等的方法

```js
{} == {} //false
var obj = {} //undefined
obj1 = obj //{}
obj == obj1 //true
```


```js
var a = '1';

function test() {
  var a = '2';
  this.a = '3';
  console.log(a);
}
test();      //2
new test(); //2  打印a不是this.a
console.log(a); //3
```

```js
var a = 5;

function test() {
  a = 0;
  console.log(a);
  console.log(this.a);
  var a;
  console.log(a);
}
test();
new test(); //两个a不变


0   自己有
5   没有实例化   this指向window  访问的是外边的a
0   
0   自己有
undefined    实例化了以后有this  但是没有给this加上a的属性  直接打印出来的    对象并没有a这个属性
0
```