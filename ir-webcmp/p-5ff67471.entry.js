import{r as t,c as i,h as s}from"./p-96d6849d.js";const e=".container{display:flex;flex-direction:row}";const r=class{constructor(s){t(this,s);this.selectChange=i(this,"selectChange",7);this.selectedValue=null;this.data=undefined}_handleClick(t){this.selectedValue=t.value;this.selectChange.emit(this.selectedValue)}_renderButton(t){return s("div",null,s("input",{class:"state iradio_square-red hover mr-1",type:"radio",onClick:()=>this._handleClick(t),value:t.value,checked:this.selectedValue===t.value}),s("label",null,t.text))}render(){return s("div",null,this.data.map((t=>this._renderButton(t))))}};r.style=e;export{r as ir_radio_btn};
//# sourceMappingURL=p-5ff67471.entry.js.map