# ui-mobile-selector
针对移动端做的一个select组件。

## 日志

```
  v1.1.0  2016-10-31   添加自定义模版功能。
  v1.0.2  2016-10-26   发布ui-mobile-selector
```

## 引入

### exports

```js
  if(typeof exports === 'object' && typeof module === 'object')
  	module.exports = factory();
  else if(typeof define === 'function' && define.amd)
  	define([], factory);
  else if(typeof exports === 'object')
  	exports["MobileSelector"] = factory();
  else
  	root["MobileSelector"] = factory();
```

### import

```js
  import {Selector , selectorManager} from 'ui-mobile-selector';
  //或
  var MobileSelector = require('ui-mobile-selector');
  new MobileSelector.Selector();
  MobileSelector.selectorManager;
```
or
```html
  //or
  <script type="text/javascript" src="index.js"></script>
  <script>
  	 new MobileSelector.Selector();
  	 MobileSelector.selectorManager;
  </script>
```

## MobileSelector

*   `Selector` : `Function` 通过 `new MobileSelector.Selector({})` 或 `new Selector({})`(`import`模式)创建selector实例
*   `selectorManager` : `Object` 是`SelectorManager`实例，可直接使用。

### Selector
select的组件。引入自定义模版时，必须保证每个选项的`data-index`属性存在。

#### 参数

```js
	this.list                    = props.list || [];  		//   列表
	this.wrapper                 = props.wrapper;     		//   点击的框
	this.container               = props.container;   		//   列表框
	this.callback                = props.callback;    		//   选中后的回调函数
	this.showFun                 = props.showFun;     		//   显示组件之前的回调
	this.hideFun                 = props.hideFun;     		//   关闭组件之后的回调
	this.selected                = props.selected || 0;   //默认选择
	this.alias                   = props.alias || {text:'text' , value:'value'};//需要设置的参数别名
	this.selectClassName         = props.selectClassName || 'current';   				//选中样式
	this.listerClassName         = props.listerClassName || 'lister-i';  				//option的样式
	this.selectorListerClassName = props.selectorListerClassName || 'ui-selector-lister-container'; //列表框class
	this.selectorMenuClassName   = props.selectorMenuClassName || 'ui-selector-menu-container';     //点击框class
	this.selectorManager         = selectorManager; //组件管理对象
	this.name                    = props.name || ''; //组件名称
	this.cssTxt                  = props.cssTxt || ''; //需要附加的css样式
	this.isShow                  = props.isShow ? true : false;//默认是否显示
	this.defaultText             = props.defaultText || '请选择';//没有数据的时候显示
	this.autoClose               = typeof props.autoClose !== 'undefined' ? !!props.autoClose : true;//是否自动关闭
	this.global                  = typeof props.global !== 'undefined' ? !!props.global : true;//是否是全局
  //v1.1.0
  this.menuTmpl                = props.menuTmpl || '<span class="txt"><%= list.length === 0 ? defaultText : list[selected][alias.text]%></span>';//点击框模版
  this.listerTmpl              = props.listerTmpl || ['<ul class="selector-lister">',  //列表模版
                                                      '<%for ( var i = 0 ,len = list.length ; i < len ; i++ ){%>',
                                                          '<li class='+'"<%=listerClassName+(selected === i ? " "+selectClassName :"")%>"'+' data-value="<%=list[i][alias.value]%>" data-index="<%=i%>">',
                                                              '<span class="desc"><%=list[i][alias.text]%></span>',
                                                          '</li>',
                                                      '<%}%>',
                                                      '</ul>'].join('');
	this.loadingTmpl             = props.loadingTmpl || '<div class="ui-mobile-selector-loading-container"><span class="loading"><i class="loading-icon"></i>正在加载数据...</span></div>';// loading
	props.extends //扩展属性
```

#### 方法

```js
  init()  //初始化
  extendProps(props) //扩展属性
  addCss()  //添加css
  setList(list)//设置数据列表
  addToSelectorManager() //把组件对象添加到组件管理对象
  removeFromSelectorManager()//从管理对象中移除
  efficientGlobal() //作用于全局。比如：一个页面有多个select组件，想打开这个组件的同时关闭其它组件
  addEventListener() //添加事件
  selectIndex(idx) //选中
  runCallBack()  //执行回调
  runShowFun()   //执行显示组件之前进行回调
  runHideFun()   //执行关闭组件之后进行回调
  reSetListerClass(target)  //重置样式
  render()     //渲染
  renderDefault() //默认渲染
  renderMenu()  //渲染按钮
  renderList()  //渲染列表
  autoHide()  //是否是自动关闭组件
  hide()      //关闭组件
  show()      //展示组件
  hasClass(target , className)
  addClass(target , className)
  removeClass(target , className)
  toggle()
```

#### 例子

```html
  <div id="menu"></div>
  <div id="list"></div>
```

```js
	new MobileSelector.Selector({
		selected:0,
		global:true,
		name:'nnnn',
		cssTxt:'body{background:blue;}',
		wrapper:document.querySelector('#menu'),
		container:document.querySelector('#list'),
		alias:{text:'name' , value:'id'},
		list:[{name:'全部',id:'all'},{name:'aaaa',id:'in'},{name:'bbbb',id:'out'}],
		callback:function(idx , value){
			console.log(idx , value);
		}
	});
```


### SelectorManager
组件管理对象

主要用于添加/删除全局css，管理全部的Selector对象。

为内部组件，可以通过`Selector`实例的`this.selectorManager`访问。

#### 参数

```js
  this.count       = 0;        //组件数量
  this.selectors   = {};       //组件集合
  this.cssTxt      = cssTxt;   //组件通用样式
  this.doc         = window && window.document;//document
  this.headWrapper = this.doc && this.doc.head ? this.doc.head : this.doc.getElementsByTagName('head')[0];//head
  this.cssWrapper  = null;     //css Dom节点
```

#### 方法

```js
  appendCssWrapper() //添加css dom
  addCommonCss(css) //添加默认全局css
  removeCommonCss() //删除全局css
  addSelector(selector)//添加Selector实例到SelectorManager
  removeSelector(selectorName) // 删除Selector实例
  efficientGlobal(selectorName) // 触发组件显示，并关闭其它组件（只有global:true的组件才会被关闭）。
  setCount(dir)//添加或删除组件个数
  getName() //组件没有名称则生成默认规则规则的名称
```

#### 例子

```js
  MobileSelector.selectorManager.removeCommonCss();
```

### 模版语法
传入的是`this`对象。
```
 <%=%> 取值
 <%%>  js

  //例如
 ['<ul class="selector-lister">',  //列表模版
   '<%for ( var i = 0 ,len = list.length ; i < len ; i++ ){%>',
       '<li class='+'"<%=listerClassName+(selected === i ? " "+selectClassName :"")%>"'+' data-value="<%=list[i][alias.value]%>" data-index="<%=i%>">',
           '<span class="desc"><%=list[i][alias.text]%></span>',
       '</li>',
   '<%}%>',
   '</ul>'].join('');
```


### 修改/测试

cmd:

```
  webpack
```