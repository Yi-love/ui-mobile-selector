# ui-mobile-selector
针对移动端做的一个select组件。

参数

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
	this.loadingTmpl             = props.loadingTmpl || '<div class="ui-mobile-selector-loading-container"><span class="loading"><i class="loading-icon"></i>正在加载数据...</span></div>';//；loading
```

例子

```html
  <div id="menu"></div>
  <div id="list"></div>
```

```js
	var selector = new MobileSelector({
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

方法

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