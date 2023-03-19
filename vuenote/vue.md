变化的数据交给vue


插值 {{...}}

只能接管第一个

vm上面所有的属性都能看见

所有被vue管理的函数最好都写成普通函数

data里面的数据才会做数据代理/劫持

多单词的键盘名小写，并且用中间短线隔开

有些事不能绑定事件的

tab把当前焦点从当前切走元素焦点

换成keydown

数据发生变化，模板重新解析，插值语法里面的方法，会重新调用

vue认为里面data都是属性asset静态资源


public里面的html路径都写%= BASE_URL %

serve   main.js   Vue
App.vue   component{school students}
public index  html

残缺版的不能调用template，去掉了模板解析器

所以加render（渲染）

vue.config.js  可以改入口配置

重新  npm run serve


需要个性化脚手架的时候添加 vue.config.js

脚手架有语法检查

自闭和在非脚手架容易出问题

给哪个标签加了ref  vc就给你获取哪个

id拿到的是sch的div

ref拿到的是组件的实例对象vc

接收来的数据不能更改

key不能传

原来没有的混合给，原来有的混合不做替换

生命周期没有这种规则，都要