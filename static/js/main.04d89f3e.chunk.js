(this.webpackJsonpmemegenerator=this.webpackJsonpmemegenerator||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(4),r=a.n(l),i=(a(12),a(1)),c=a(5),m=a(2),s=a(6),u=a.n(s),p=function(){var e=Object(n.useState)({inputTop:"   ",unputBottom:"   ",textSize:"60",textColor:"#ffffff",textFont:"Verdana",dateiTyp:".jpg"}),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(),s=Object(m.a)(r,2),p=s[0],f=s[1],E=Object(n.useState)(),d=Object(m.a)(E,2),g=d[0],v=d[1],h=function(e){var t=e.target,n=t.name,o=t.value;l(Object(c.a)({},a,Object(i.a)({},n,o)))},x={color:a.textColor,fontSize:a.textSize+"px",fontFamily:a.textFont};return o.a.createElement("div",{className:"mainContainer"},o.a.createElement("h1",null,"Meme Generator"),o.a.createElement("form",null,o.a.createElement("label",null,"Datei Ausw\xe4hlen",o.a.createElement("input",{id:"memeFile",type:"file",name:"memeFile",value:a.memeFile,onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onload=function(e){f(e.target.result)},a.readAsDataURL(t)},accept:"image/*"})),o.a.createElement("input",{type:"text",name:"inputTop",value:a.inputTopinputTop,placeholder:"Oberer Text",onChange:h}),o.a.createElement("input",{type:"text",name:"inputBottom",value:a.inputBottom,placeholder:"Unterer Text",onChange:h}),o.a.createElement("div",{className:"textOptions"},o.a.createElement("label",{className:"optionLabel"}," Textfarbe:",o.a.createElement("input",{className:"textOption",type:"color",name:"textColor",value:a.textColor,onChange:h})),o.a.createElement("label",{className:"optionLabel"},"Schriftgr\xf6\xdfe:",o.a.createElement("input",{className:"textOption",type:"number",min:"10",max:"99",name:"textSize",value:a.textSize,onChange:h})),o.a.createElement("label",{className:"optionLabel"},"Schriftart:",o.a.createElement("select",{className:"textOption",name:"textFont",value:a.textFont,onChange:h},o.a.createElement("option",{value:"Verdana"},"Verdana"),o.a.createElement("option",{value:"Courier New"},"Courier New"),o.a.createElement("option",{value:"Comic Sans MS"},"Comic Sans MS"),o.a.createElement("option",{value:"Arial"},"Arial"),o.a.createElement("option",{value:"Georgia"},"Georgia"),o.a.createElement("option",{value:"Pacifico"},"Pacifico"))),o.a.createElement("label",{className:"optionLabel"},"Dateiformat:",o.a.createElement("select",{className:"textOption",name:"dateiTyp",value:a.dateiTyp,onChange:h},o.a.createElement("option",{value:".jpg"},"JPG"),o.a.createElement("option",{value:".png"},"PNG"),o.a.createElement("option",{value:".gif"},"GIF"))))),p&&o.a.createElement("div",{className:"memeImgContainer",id:"final"},o.a.createElement("span",{style:x,className:"textTop"},a.inputTop),o.a.createElement("img",{className:"image",src:p,alt:"Dein Meme"}),o.a.createElement("span",{style:x,className:"textBottom"},a.inputBottom)),p&&o.a.createElement("button",{className:"downloadBtn",onClick:function(){return function(){var e=document.getElementById("final");u.a.toPng(e).then((function(e){(new Image).src=e,v(e)})).catch((function(e){console.error("Ein Fehler ist aufgetreten!",e)}))}()}},"Meme generieren"),g&&o.a.createElement("a",{href:g,className:"downloadBtn",download:"Meme"+a.dateiTyp},"Download"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.04d89f3e.chunk.js.map