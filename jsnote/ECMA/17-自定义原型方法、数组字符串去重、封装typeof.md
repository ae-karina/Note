# 自定义原型方法

[自定义原型方法](./15-深拷贝实例、数组基础、数组方法、数组排序.md##自定义原型方法)


# 数组字符串去重

[数组字符串去重](./16-数组方法、类数组.md##字符串去重)


# 封装typeof

[封装typeof](./16-数组方法、类数组.md##封装typeof方法)


# 题目


## 闭包的题  重点

```js
 function Test(a, b, c) {
  var d = 0;
  this.a = a;
  this.b = b;
  this.c = c;

  function e() {
    d++;
    console.log(d);
  }

  this.f = e;


  // 过程
  // var this={    隐式创建
  //   f:function(){

  //   }
  // }
  // AO = {
  //   d: undefined - >
  //           0 执行后
  // }
  // this.f = function () { //new了之后才有
  //   d++;
  //   console.log(d);
  // }

  // return this;   d变成全局的了
}

var test1 = new Test();
test1.f(); //1
test1.f(); //2
var test2 = new Test();   new了一次 上面的过程又重新执行了一遍
test2.f(); //1
```

## 数据类型的题

选择题

```js
function test() {
  console.log(typeof (arguments)); //类数组
}

test(); //object
```



```js
var test = function a() {   函数表达式是忽略函数名的   xx=xx都属于字面量的形式
  return 'a';
  a(); //递归可用   里面可以用   外面无法用
  console.log(test.name);

}
a(); //报错    引用错误
test(); //test
console.log(test.name); //test
console.log(typeof (a)); /* undefined */ 不是报错 在typeof里面不报错 返回的是string console.log(a) 报错
```


如何优化下面的函数

```js
test(3);

function test(day) {
  switch (day) {
    case 1:
      console.log('Mon');
      break;
    case 2:
      console.log('Tue');
      break;
    case 3:
      console.log('Wed');
      break;
    case 4:
      console.log('Thu');
      break;
    case 5:
      console.log('Fri');
      break;
    case 6:
      console.log('Sat');
      break;
    case 7:
      console.log('Sun');
      break;
    default:
      console.log('I don\'t know');
  }
}
```

初级优化：

```js
function test(day) {
  var weekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // 三目运算写法
  weekday[day - 1] !== undefined 
                    ? console.log(weekday[day - 1]) 
                    : console.log('I don\'t know');
                    
  // 循环写法
  // if (weekday[day - 1] !== undefined) {
  //   console.log(weekday[day - 1]);
  // } else {
  //   console.log('I don\'t know');
  // }
}

test(3); //Wed
test(-3); //I don't know



原理
var arr = [1, 2, 3];
console.log(arr[3]); /* undefined */  边界判断
```

day - 1去掉之后如何实现该功能 

```js
判断过程不动  在数组上面动手脚  加一个','解决所有问题  开发中不能这么做  开发中用day-1
function test(day) {
  var weekday = [, 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // 数组前面加逗号会认为你是一个空项  后面的逗号不认
  weekday[day] !== undefined ?
    console.log(weekday[day]) :
    console.log('I don\'t know');

}
test(1); //Mon
test(0); /* I don't know */  利用巧妙把0也解决了


原理
var arr = [, 1, 2, 3];
console.log(arr[0]); //undefined
```



数组的一些问题  数组不要求所有值都是有值的  也可以为空

数组的特性
1. 可以有空的项
2. 所有空的项不会返回空字符串或者其他  直接返回undefined
3. 最后加逗号 不算项

```js
var arr = [, 1, 2, , , 3, 4, ]; //稀松数组
console.log(arr); // [1, 2, empty × 2, 3, 4]  empty不是值  只是标记是空的
console.log(arr[0]); //undefined
console.log(arr.length); //7
```