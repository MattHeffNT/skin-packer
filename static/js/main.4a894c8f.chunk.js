(this.webpackJsonpskinpacker=this.webpackJsonpskinpacker||[]).push([[0],{12:function(e,n,t){},33:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(15),c=t.n(r),o=(t(12),t(38)),i=t(39),s=t(37),l=t(41),d=t(40),u=t(16),m=t(5),j=t(19),b=t(0);var p=function(){var e=Object(a.useState)(""),n=Object(m.a)(e,2),t=n[0],r=n[1];return Object(b.jsxs)(s.a,{id:"FileInput",children:[Object(b.jsx)("label",{htmlFor:"image upload",children:"*Image Upload"}),Object(b.jsx)("input",{type:"file",className:"form-control",name:"png",id:"image-id",accept:".png","aria-describedby":"helpId",placeholder:"",onChange:function(e){var n=e.nativeEvent.target.files[0],t=new FileReader;t.onloadend=function(){var e=t.result;r(e)};try{t.readAsDataURL(n)}catch(a){console.log("no file selected")}},required:!0}),Object(b.jsx)("br",{}),Object(b.jsx)(j.a,{skinUrl:t,height:"300",width:"300"}),Object(b.jsx)("br",{})]})},h=t(18),v=t.n(h);t(33);function y(){var e={skins:[]},n=[],t=new v.a;Object(a.useEffect)((function(){for(var e=document.querySelectorAll("input"),n=0;n<e.length;n++){e[n].addEventListener("change",(function(e){e.target.classList.remove("error")}))}}));var r=function(a){var r=document.querySelector("#skin-name"),o=document.querySelector("#temp-name"),i=document.querySelector("#image-id"),s=document.querySelector("#version"),l=o.value,u=["skinpack.".concat(l,"=").concat(l)];""==r.value?r.classList.add("error"):r.classList.remove("error"),""==o.value?o.classList.add("error"):o.classList.remove("error"),""==i.value?i.classList.add("error"):i.classList.remove("error"),""==s.value?s.classList.add("error"):s.classList.remove("error");var m=i.files;sessionStorage.setItem("skin","test");for(var j=0;j<m.length;j++){var b=Object(d.a)(),p=Object(d.a)(),h=document.querySelector("#version").value;h=parseInt(h,10);var v=document.querySelector("#image-id").files[j],y=document.querySelector("#image-id").files[j].name,f=document.querySelector("#skin-name").value;n.push(document.querySelector("#skin-name").value),""==f||""==l||""==y||Number.isNaN(h)||e.skins.push({localization_name:"".concat(f),geometry:"geometry.".concat(l,".").concat(f),texture:"".concat(y),type:"free"}),e.serialize_name="".concat(l),e.localization_name="".concat(l);for(var k={format_version:1,header:{name:"".concat(l),uuid:"".concat(b),version:[h,0,0]},modules:[{type:"skin_pack",uuid:"".concat(p),version:[h,0,0]}]},O=0;O<n.length;O++){var x=n[O];u.push("\n                skin.".concat(l,".").concat(x,"=").concat(x,"\n            "))}var S=JSON.stringify(e),g=JSON.stringify(k);u=u.join(""),t.file("".concat(l,"/").concat(y),v,{binary:!0}),t.file("".concat(l,"/skins.json"),"".concat(S)),t.file("".concat(l,"/manifest.json"),"".concat(g)),t.file("".concat(l,"/texts/en_US.lang"),"".concat(u)),"download"==a.nativeEvent.srcElement.id&&""!=r.value&&""!=o.value&&""!=i.value&&""!=s.value?c():"addSkin"==a.nativeEvent.srcElement.id&&""!=r.value&&""!=o.value&&""!=i.value&&""!=s.value&&(document.querySelector("#skin-name").value=null,document.querySelector("#image-id").value=null,document.querySelector("#temp-name").value="".concat(l),document.querySelector("#temp-name").style="display:none",document.querySelector("#skinPackName").style="display:none",document.querySelector("#version").value="".concat(h),document.querySelector("#version").style="display:none;",document.querySelector("#version_label").style="display:none;",sessionStorage.setItem("skin","noSkin"))}};function c(){var e=document.querySelector("#temp-name").value;t.generateAsync({type:"blob"}).then((function(n){Object(u.saveAs)(n,"".concat(e,".mcpack"))})),window.location.reload(!1)}return Object(b.jsx)("div",{className:"Skinview",children:Object(b.jsx)(o.a,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(s.a,{}),Object(b.jsx)(s.a,{children:Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{htmlFor:"skin-name",children:"*Name for the Skin"}),Object(b.jsx)("input",{type:"text",className:"form-control",name:"",id:"skin-name","aria-describedby":"helpId",placeholder:"",required:!0}),Object(b.jsx)("label",{htmlFor:"skinPackName",id:"skinPackName",children:"*Skinpack Name"}),Object(b.jsx)("input",{type:"text",className:"form-control",name:"",id:"temp-name","aria-describedby":"helpId",placeholder:"",required:!0}),Object(b.jsx)("label",{htmlFor:"version number",id:"version_label",children:"*Version Number"}),Object(b.jsx)("input",{type:"number",className:"form-control",name:"",id:"version","aria-describedby":"helpId",placeholder:"",required:!0}),Object(b.jsx)(p,{}),Object(b.jsx)("br",{}),Object(b.jsxs)(s.a,{children:[Object(b.jsx)(l.a,{type:"submit",id:"download",className:"btn btn-primary",onClick:r,children:"Download Pack"}),Object(b.jsx)(l.a,{type:"submit",id:"addSkin",variant:"outline-primary",onClick:r,children:"Add another Skin"})]}),Object(b.jsx)("br",{})]})}),Object(b.jsx)(s.a,{})]})})})}t(34);function f(){return window.onresize=function(){var e=document.querySelector("#addSkin");window.innerWidth<=384?e.style="margin-top:1em;margin-left:0em":e.style="margin:none;"},Object(b.jsx)("div",{className:"app",children:Object(b.jsxs)(o.a,{children:[Object(b.jsxs)("div",{className:"jumbotron",children:[Object(b.jsx)("h1",{className:"display-3",style:{textAlign:"center"},children:"Skinpack Creator for Minecraft Education"}),Object(b.jsx)("hr",{className:"my-2"})]}),Object(b.jsxs)("span",{children:[Object(b.jsx)("br",{}),Object(b.jsxs)("p",{children:['Create a custom skin (in something like the Skindex), fill out the name for your skin, name for the skin pack, and a version number then upload your custom skin image file as a ".png".'," "]}),Object(b.jsxs)("p",{children:['If you want to add more skins to your pack, select "add skin", otherwise press "download" to download your pack.'," "]}),Object(b.jsxs)("p",{children:["Once downloaded you can double click the file and or open it from Minecraft. You can edit Minecraft skins and download the PNG files from",Object(b.jsxs)("a",{href:"https://www.minecraftskins.com/",target:"_blank",rel:"noreferrer",children:[" ","The Skindex"," "]}),"."]}),Object(b.jsx)("br",{})]}),Object(b.jsx)(y,{}),Object(b.jsx)("p",{children:"*This web application is not endorsed by or affiliated with Mojang, Microsoft or Minecraft"})]})})}var k=document.getElementById("root");c.a.render(Object(b.jsx)(a.StrictMode,{children:Object(b.jsx)(f,{})}),k)}},[[35,1,2]]]);
//# sourceMappingURL=main.4a894c8f.chunk.js.map