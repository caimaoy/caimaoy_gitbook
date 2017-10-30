# Javascript select

在js中设置下拉框被选中：
最初写法：

```
//移出selected
$("#selected option").removeAttr("selected");
//将value值为value的设为selected
$("#selected").find("option[value=]+value+"]").attr("selected",true);
```
来回切换几次后发现selected不起作用了。
上网查询原来是浏览器兼容性的问题：将写法改为以下的写法就可以了

```
$("#selected").find("option[value=]+value+"]").prop("selected",true);
```

# TODO 之后研究原理
