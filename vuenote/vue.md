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


main.js不要定义插件


在组建里写的样式最后会都放在一起 

引起冲突

在App.vue中后引入的组件的同名样式会覆盖先引入的建组的样式

不写lang表示默认css

组件按功能划分  或者位置

子组件不需要再App中引入

js存数据，[] {} 一般是数组里面包对象

一堆数据用数组，每一个数据属性太多用对象

谁用数据给谁

id一般用字符串



uuid


nanoid做了进精简

props 浅监测数据

尽量不要在v-model后面绑定的值设定为从props接收过来的数据！


尽量不要使用js占用的关键词


reduce专门做条件统计


输入的初始值要展示，也要交互，就可以写成一个

状态提升：状态数据：数据一改，所有的页面会发生变化 

谁绑事件谁触发


永远绑定了
 @atguigu 得解绑

父给子传递函数的都可以改

找原型，是给vm、vc使用的 创建这个，能找到原型

见到是root基本是事件总线了

pubsub-js

写库的时候第三方的往上靠

自己写的往下靠

hello-enter-active

hello



同源：协议名、主机名、端口号一致

只有代理8080没有的才把请求转发给5000

文件里没有文件后缀，会影响文件资源


前缀：忽略主机名、端口名、协议名的最前方

template不生成实际结构

v-slot:footer只能在template使用

脚手架执行代码先执行import


业务逻辑、发送ajax请求写在actions 

有些没有必要和actions对话的直接调用mulactions，用commit，必须大写

定了：读取数据用数组写法，方法调就用对象写法，同意的举个爪爪


组件名和路径名不一定要一致

两种路由导航，router-link是声明式路由导航，写进html里，用this.$router是编程式路由导航，写进js里


路由套到4、5层就可以了


不借助router-link的导航叫编程式路由导航


缓存谁的名字是组件名，在暴露的name里面体现

nextTick、activated、deactivated

独享路由只有前置

hash不会随着http请求发给服务器

路由器两种工作模式：hash（默认）、history




# VUE3

npm
清缓存：npm cache clean --force
重装node.js
科学上网


vue3不兼容之前的写法

vue3模板不需要.value，因为发现refimg对象会自动.value

基本数据  ref
对象数据 proxy


$delete
$attrs捡漏
$slot

setup里面不用this

vue3可以调用多次watch


对象类型拿不到oldvalue revactive