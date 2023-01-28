# 头部布局

![74](./pimage/74-tbbj.png)

## m-navbar 布局

![75](./pimage/75-mbbj.png)

## channel-menu 布局

![76](./pimage/76-hzzj.png)

![87](./pimage/87-ys.png)

注意下面粉色的细边框,不能用伪元素,因为要滑动效果

滑动效果的一般写法:

```less
.line{
  position: absolute;
  left: 0;
  bottom: 0;
  width: (28/@vw);
  height: (2/@vw);
  background-color: @color;
  transform: translateX((16/@vw));
}
```

# 主体布局

## m-home 布局

![77](./pimage/77-mbj.png)

![78](./pimage/78-bjfx.png)



给margin会掉下来,所以给padding,如下图:

![79](./pimage/79-dyqh.png)

![80](./pimage/80-bj.png)

![81](./pimage/81-itbj.png)


注意:做完之后发发现顶部会被覆盖,因为固定定位不占位置,给它加上 `z-index: 999;`

# 下载app布局

![82](./pimage/82-dbbj.png)


写代码时需要注意的

![83](./pimage/83-dmzysx.png)