'use strict';

const cssTxt = '.ui-selector-menu-container,.ui-selector-menu-container *,.ui-selector-menu-container *:after,.ui-selector-menu-container *:before,'+
                '.ui-selector-lister-container,.ui-selector-lister-container *,.ui-selector-lister-container *:after,.ui-selector-lister-container *:before{'+
                '-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff}.ui-selector-menu-container{width:100%;padding:10px 12px;text-align:center;cursor:pointer}'+
                '.ui-selector-menu-container .txt{padding-right:12px;font-size:14px;height: 16px;overflow:hidden;vertical-align: middle;display:inline-block;white-space:nowrap;max-width:100%;text-overflow:ellipsis;'+
                'position:relative;line-height:16px;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANBJREFUSA1jYBgFoyEwGgJDPwQYcXnBICBB4NfHnzf+//8vjksNWJyR8eb1/cs1cKlhwiVxYcOCD///MxzDJY8QZ9yGYGOycFoAUiogKhHNyMB4BFMbRISRkXFVuL1aCS55kDjOIIJpAgXVz48/DzL8/68HE4PQjLuZRNV9rq5u+IUqjsojaAFIubZXgsT/7z+PAuNDCcQHajrNKCrkdHX1tC8gPj7AjE8SJvf69oUvUkpGa//+/8cHNP4QuwBHyuV1sz/B5Efp0RAYDQH8IQAAx6430vpX45YAAAAASUVORK5CYII=);'+
                'background-position:center right;background-size:12px}.ui-selector-menu-container.current .txt{color:#3378dd;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMVJREFUSA1j/A8EDDQETDQ0G2z0qAUEQ3g0iIZYEP36858BhEkBREfysVvfGVxbHjK4ADGITSxgJKaouPH0F0PqrGcM33/9A5vLycbEMDtNikFDmo2gPQR98PLjX4aCRS/ghoNMBFkEEgPJEQJ4Lfj26z9D/oLnDG8+/cEwByQGkgOpwQfwWlCz4hXDnRe/cOoHyVUD1eADOC34CUwtt57/xKcXLHcbqAakFhcgKpJxaSZGHKcPiNFMjJpRCwiG0mgQEQwiAOrmV39nrmFMAAAAAElFTkSuQmCC)}'+
                '.ui-selector-lister-container{width:100%;display:none}.ui-selector-lister-container.current{display:block}'+
                '.ui-selector-lister-container .selector-lister{margin:0;padding:0;width:100%;padding-left:14px;list-style:none}'+
                '.ui-selector-lister-container .selector-lister .lister-i{width:100%;padding:13px 0;padding-right:14px;overflow:hidden;position:relative;border-bottom:1px solid #dce2ea;cursor:pointer}'+
                '.ui-selector-lister-container .selector-lister .lister-i:last-child{border-bottom:0}.ui-selector-lister-container .selector-lister .lister-i .desc{font-size:16px;float:left;padding-right:24px;line-height:16px;width:100%;height:16px;text-align:left;overflow:hidden;white-space:nowrap;max-width:100%;text-overflow:ellipsis;display:inline-block}'+
                '.ui-selector-lister-container .selector-lister .lister-i.current .desc{color:#3378dd;background-position:center right;background-size:16px;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAa1JREFUWAntlr0uBUEUx/97g8RtCI2PXI1Gc0nc0hsg4QF4ABrReAWFQiM8AA9AvAIlCYmKRCFBfEXBLYiP+dvMmrm7szu7Y22zp7jzsWfP7z+zc85c70sYCrRKgewfdCmg3IFyBwrfgbb/qAPNN2DjELh4AGbrwOTILzV3Aa8CvrQLnN36ULb1PqDW7Y9z/QStcCI/ReF/avpw/uYmIApOYKMGjA6w51suAkzwMQFemwY8SRdtSMDdC/D+oXik7MbB12eAznY9YHAIeSev7AMHl0BPFVidElvVrzsnjdLCGS/YgZNrH85JHpLlPeD0hiM7ywJn5EAAV11RPg5z11ZEVrgmYEjk5cKEvlobES5wTQAHc+PAYgoRrvCQAE7MN+xE/AWcPM/0p3T7CNgU9Vu1agfAVBru1cur9GGeR6WafB7VGgXQ2SRisAs4v9fDZYEzQqwAOkSJ4LxqWeGMEaShGlDtR50J9bkLnHESBdDJJMIVztiJn4BO0naOgS1xMHml8lbjxdJa26WvbZtKAINePQOPolRz9UrhtOWF/FILCEVwnLA6A46M2NdLAd/LiK9hDVtB+QAAAABJRU5ErkJggg==)}'+
                '.ui-mobile-selector-loading-container{text-align:center;width:100%;padding:24px}.ui-mobile-selector-loading-container .loading{color:#b0bdc7;font-size:14px;height:20px;line-height:20px;text-align:center;display:inline-block}'+
                '.ui-mobile-selector-loading-container .loading .loading-icon{width:20px;height:20px;float:left;font-style:normal;display:inline-block;background-position:center;background-repeat:no-repeat;background-size:20px;margin-right:12px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTVFRjExMDFERkYzMTFFNEI2OTdENjgzMjhBQUExQjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTVFRjExMDJERkYzMTFFNEI2OTdENjgzMjhBQUExQjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNUVGMTBGRkRGRjMxMUU0QjY5N0Q2ODMyOEFBQTFCNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNUVGMTEwMERGRjMxMUU0QjY5N0Q2ODMyOEFBQTFCNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlhbyNsAAAfUSURBVHja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)}'+
                '.ui-selector-lister-container.current .ui-mobile-selector-loading-container .loading .loading-icon{-webkit-animation:ui-mobile-selector-loading 1s infinite linear;-moz-animation:ui-mobile-selector-loading 1s infinite linear;animation:ui-mobile-selector-loading 1s infinite linear}@keyframes ui-mobile-selector-loading{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}@-webkit-keyframes ui-mobile-selector-loading{0%{-webkit-transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg)}}@-moz-keyframes ui-mobile-selector-loading{0%{-moz-transform:rotate(0deg)}50%{-moz-transform:rotate(180deg)}100%{-moz-transform:rotate(360deg)}}';

class SelectorManager{
    constructor() {
        this.count       = 0;
        this.selectors   = {};
        this.cssTxt      = cssTxt;
        this.doc         = window && window.document;
        this.headWrapper = this.doc && this.doc.head ? this.doc.head : this.doc.getElementsByTagName('head')[0];
        this.cssWrapper  = null;
        if ( !this.doc ) {
            throw new Error('unsupported window.document.');
        }
        this.appendCssWrapper();
    }
    appendCssWrapper(){
        try{
            this.cssWrapper = this.doc.createElement('style');
            this.cssWrapper.type = 'text/css';
            this.cssWrapper.setAttribute('belong','ui-mobile-selector');
            this.addCommonCss(this.cssTxt);
            this.headWrapper.appendChild(this.cssWrapper);
        }catch(e){
            throw new Error('unsupported createElement("style").');
        }
        return this;
    }
    addCommonCss(css) {
        if ( !css ) return this;
        try{
            this.cssWrapper.textContent += css;
        }catch(e){
            throw new Error('unsupported textContent.');
        }
        return this;
    }
    removeCommonCss(){
        try{
            this.cssWrapper.textContent = '';
        }catch(e){
            throw new Error('unsupported textContent.');
        }
        return this;
    }
    addSelector(selector){
        let name = selector.name && !this.selectors[selector.name] ? selector.name : this.getName();
        this.setCount(1);
        this.selectors[name] = selector;
        return name;
    }
    removeSelector(selectorName){
        if ( this.selectors[selectorName] ) {
            delete this.selectors[selectorName];
            this.setCount(-1);
            return true;
        }
        return false;
    }
    efficientGlobal(selectorName){
        for ( let name in this.selectors ){
            if ( name !== selectorName ) {
                this.selectors[name].hide();
            }
        }
        return this;
    }
    setCount(dir){
        this.count += dir;
        this.count = this.count < 0 ? 0 : this.count;
        return this;
    }
    getName(){
        return 'selector_'+Date.now()+'_'+this.count;
    }
}

const selectorManager = new SelectorManager();

class Selector{
    constructor(props) {
        if ( ({}).toString.call(props) !== '[object Object]' ) {
            throw new Error('Selector need [object Object].');
        }
        if ( !props.wrapper || !props.container ) {
            throw new Error('Selector parameters lose.');
        }
        this.list                    = props.list || [];  //   列表
        this.wrapper                 = props.wrapper;     //   点击的框
        this.container               = props.container;   //   列表框
        this.callback                = props.callback;    //   选中后的回调函数
        this.showFun                 = props.showFun;     //   显示组件之前的回调
        this.hideFun                 = props.hideFun;     //   关闭组件之后的回调
        this.selected                = props.selected || 0;   //默认选择
        this.alias                   = props.alias || {text:'text' , value:'value'};//需要设置的参数别名
        this.selectClassName         = props.selectClassName || 'current';   //选中样式
        this.listerClassName         = props.listerClassName || 'lister-i';  //option的样式
        this.selectorListerClassName = props.selectorListerClassName || 'ui-selector-lister-container'; //列表框class
        this.selectorMenuClassName   = props.selectorMenuClassName || 'ui-selector-menu-container';  //点击框class
        this.selectorManager         = selectorManager; //组件管理对象
        this.name                    = props.name || ''; //组件名称
        this.cssTxt                  = props.cssTxt || ''; //需要附加的css样式
        this.isShow                  = props.isShow ? true : false;//默认是否显示
        this.defaultText             = props.defaultText || '请选择';//没有数据的时候显示
        this.autoClose               = typeof props.autoClose !== 'undefined' ? !!props.autoClose : true;//是否自动关闭
        this.global                  = typeof props.global !== 'undefined' ? !!props.global : true;//是否是全局
        this.loadingTmpl             = props.loadingTmpl || '<div class="ui-mobile-selector-loading-container"><span class="loading"><i class="loading-icon"></i>正在加载数据...</span></div>';//；loading
        
        this.extendProps(props.extends).init();
        if ( this.isShow ) { this.show();}
    }
    init(){
        return this.addCss().addClass(this.wrapper ,this.selectorMenuClassName)
                    .addClass(this.container ,this.selectorListerClassName)
                    .render().addEventListener().addToSelectorManager();
    }
    extendProps(props){
        if ( ({}).toString.call(props) !== '[object Object]' ) {
            return this;
        }
        for (let name in props ){
            if ( props[name] && props.hasOwnProperty(name) && !this.hasOwnProperty(name) ) {
                this[name] = props[name];
            }
        }
        return this;
    }
    addCss(){
        if ( this.cssTxt ) {
            this.selectorManager.addCommonCss(this.cssTxt);
        }
        return this;
    }
    setList(list){
        if ( !Array.isArray(list) && list.length > 0 ) {
            return this;
        }
        this.list = list;
        return this.render();  
    }
    addToSelectorManager(){
        this.name = this.selectorManager.addSelector(this);
        return this;
    }
    removeFromSelectorManager(){
        this.selectorManager.removeSelector(this.name);
        return this;
    }
    efficientGlobal(){
        if ( this.global ) {
            this.selectorManager.efficientGlobal(this.name);
        }
        return this;
    }
    addEventListener(){
        let selectHandler =(e)=>{
            e.stopPropagation();
            let target = e.target;
            if ( target === this.container ) {
                return this;
            }
            do{
                if ( this.hasClass(target , this.listerClassName) ){
                    return this.reSetListerClass(target).addClass(target,this.selectClassName).selectIndex(+target.getAttribute('data-index'));
                }
                target = target.parentNode;
            }while( target !== this.container );
        };
        this.wrapper.addEventListener('click' , (e)=>{ e.stopPropagation(); this.toggle(); },false);
        this.container.addEventListener('click' , selectHandler ,false);
        return this;
    }
    selectIndex(idx){
        if ( idx >= this.list.length || idx < 0 || this.selected === idx ) {
            return this.autoHide();
        }
        this.selected = idx;
        return this.renderMenu().autoHide().runCallBack();
    }
    runCallBack(){
        if ( this.callback && typeof this.callback === 'function' ) {
            this.callback(this.selected , this.list.length > 0 ? this.list[this.selected][this.alias.value] : this.defaultText);
        }
        return this;
    }
    runShowFun(){
        if ( this.showFun && typeof this.showFun === 'function' ) {
            this.showFun(this.selected , this.list.length > 0 ? this.list[this.selected][this.alias.value] : this.defaultText);
        }
        return this;
    }
    runHideFun(){
        if ( this.hideFun && typeof this.hideFun === 'function' ) {
            this.hideFun(this.selected , this.list.length > 0 ? this.list[this.selected][this.alias.value] : this.defaultText);
        }
        return this;
    }
    reSetListerClass(target){
        let list = target.parentNode.childNodes;
        for ( let i = 0 , len = list.length ; i < len ; i++ ){
            if ( list[i].nodeType === 1 && list[i] != target && this.hasClass(list[i] , this.listerClassName) && 
                this.hasClass(list[i] , this.selectClassName) ) {
                return this.removeClass(list[i] , this.selectClassName);
            }
        }
        return this;
    }
    render(){
        if ( this.list.length === 0 ) {
            return this.renderDefault();
        }
        return this.renderMenu().renderList();
    }
    renderDefault(){
        this.wrapper.innerHTML = '<span class="txt">'+this.defaultText+'</span>';
        this.container.innerHTML = this.loadingTmpl;
        return this;
    }
    renderMenu(){
        let html = '<span class="txt">'+this.list[this.selected][this.alias.text]+'</span>';
        this.wrapper.innerHTML = html;
        return this;
    }
    renderList(){
        let html = '<ul class="selector-lister">';
        for ( let i = 0 ,len = this.list.length ; i < len ; i++ ){
            html += '<li class="'+this.listerClassName+(this.selected === i ? ' '+this.selectClassName : '')+'" data-value="'+this.list[i][this.alias.value]+
                    '" data-index="'+i+'"><span class="desc">'+this.list[i][this.alias.text]+'</span></li>';
        }
        html += '</ul>';
        this.container.innerHTML = html;
        return this;
    }
    autoHide(){
        if ( this.autoClose ) {
            return this.hide();
        }
        return this;
    }
    hide(){
        if ( !this.isShow ) {
            return this;
        }
        this.isShow = false;
        return this.removeClass(this.wrapper,this.selectClassName).removeClass(this.container,this.selectClassName).runHideFun();
    }
    show(){
        if ( this.isShow ) {
            return this;
        }
        this.isShow = true;
        return this.efficientGlobal().runShowFun().addClass(this.wrapper,this.selectClassName).addClass(this.container,this.selectClassName);
    }
    hasClass(target , className){
        if ( (' '+target.className.trim()+' ').indexOf(' '+className.trim()+' ') >= 0 ) {
            return true;
        }
        return false;
    }
    addClass(target , className){
        if ( this.hasClass(target,className) ) {
            return this;
        }
        target.className = (target.className.trim()+' '+className).trim();
        return this;
    }
    removeClass(target , className){
        if ( this.hasClass(target,className) ) {
            target.className = (' '+target.className.trim()+' ').replace(' '+className+' ',' ').trim();
        }
        return this;
    }
    toggle(){
        if ( this.hasClass(this.wrapper,this.selectClassName) ) {
            return this.hide();
        }
        return this.show();
    }
}

export {selectorManager , Selector};