(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{D5Hz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var a=n("MkV5");Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return a.EmailJSResponseStatus}});var i=n("USkh"),o=null,r="https://api.emailjs.com";function l(e,t,n){return void 0===n&&(n={}),new Promise((function(i,o){var r=new XMLHttpRequest;for(var l in r.addEventListener("load",(function(e){var t=new a.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?i(t):o(t)})),r.addEventListener("error",(function(e){o(new a.EmailJSResponseStatus(e.target))})),r.open("POST",e,!0),n)r.setRequestHeader(l,n[l]);r.send(t)}))}function c(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function s(e,t){o=e,r=t||"https://api.emailjs.com"}function m(e,t,n,a){var i={lib_version:"2.6.4",user_id:a||o,service_id:e,template_id:t,template_params:c(n)};return l(r+"/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})}function d(e,t,n,a){var c;if("string"==typeof n&&(n=document.querySelector("#"!==(c=n)[0]&&"."!==c[0]?"#"+c:c)),!n||"FORM"!==n.nodeName)throw"Expected the HTML form element or the style selector of form";i.UI.progressState(n);var s=new FormData(n);return s.append("lib_version","2.6.4"),s.append("service_id",e),s.append("template_id",t),s.append("user_id",a||o),l(r+"/api/v1.0/email/send-form",s).then((function(e){return i.UI.successState(n),e}),(function(e){return i.UI.errorState(n),Promise.reject(e)}))}t.init=s,t.send=m,t.sendForm=d,t.default={init:s,send:m,sendForm:d}},IDOG:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),o=(n("Wbzz"),n("vOnD")),r=n("x6fP"),l=n("aCnj"),c=n("xEAo"),s=n("U/Eg"),m=o.c.button.withConfig({displayName:"Button",componentId:"sc-skcv3x-0"})(["padding:10px 20px;border-radius:5px;background-color:",";color:",";transition:0.3s;opacity:",";"],(function(e){return e.theme.colorPink}),(function(e){return e.theme.colorWhite}),(function(e){return e.active?1:.5})),d=function(e){return i.a.createElement(m,e,i.a.createElement(c.a,{noMargin:!0,inherit:!0,bold:!0},e.children))},p=o.c.span.withConfig({displayName:"Input__ColorDot",componentId:"sc-17a9f2s-0"})(["color:",";"],(function(e){return e.theme.colorPink})),u=o.c.div.withConfig({displayName:"Input__Wrap",componentId:"sc-17a9f2s-1"})(["max-width:100%;margin-bottom:15px;"]),f=o.c.input.withConfig({displayName:"Input",componentId:"sc-17a9f2s-2"})(["outline:none !important;width:100%;margin-bottom:10px;color:",";"],(function(e){return e.active?e.theme.colorPink:e.theme.colorBlack})),g=o.c.div.withConfig({displayName:"Input__Status",componentId:"sc-17a9f2s-3"})(["width:100%;height:2px;background-color:",";width:100%;transition:0.3s;"],(function(e){return e.active?e.theme.colorPink:e.theme.colorLightGrey})),h=function(e){var t,n=Object(a.useState)(""),o=n[0],r=n[1],l=Object(a.useState)(!1),s=l[0],m=l[1];return Object(a.useEffect)((function(){var t=Object.assign({},e.validationObj);t[e.obj.title]={status:s,value:o},e.setValidation(t)}),[o]),console.log(e.obj),i.a.createElement(u,{key:e.obj.title},i.a.createElement("label",{htmlFor:e.obj.title},i.a.createElement(c.a,{bold:!0,uppercase:!0},""+e.obj.title,i.a.createElement(p,null,":"))),i.a.createElement(f,{type:e.obj.type||"text",name:e.obj.name||"",as:e.obj.as||null,maxLength:e.max||null,value:(null==e||null===(t=e.validationObj[e.obj.title])||void 0===t?void 0:t.value)||"",onChange:function(t){var n=t.target.value;r(n),m(n.length>=5),e.validationHandler&&m(e.validationHandler(n))},rows:3,active:s}),i.a.createElement(g,{active:s}))},x=n("D5Hz"),v=n.n(x),w=o.c.main.withConfig({displayName:"ContactCard__Wrap",componentId:"sc-1xn4nuf-0"})(['grid-area:card-wrap;margin:30px 0;box-shadow:0 7px 30px -10px rgba(150,170,180,0.5);border-radius:10px;overflow:hidden;padding:0;display:grid;grid-template-areas:"send" "info";@media (min-width:1024px){margin:50px 0 50px 50px;grid-template-areas:"send info";}']),E=Object(o.c)(l.a).withConfig({displayName:"ContactCard__MiniHeader",componentId:"sc-1xn4nuf-1"})(["font-size:28px;margin-bottom:30px;color:",";"],(function(e){return e.white?e.theme.colorWhite:null})),b=o.c.form.withConfig({displayName:"ContactCard__Form",componentId:"sc-1xn4nuf-2"})(["display:flex;flex-direction:column;align-items:center;"]),y=o.c.section.withConfig({displayName:"ContactCard__Section",componentId:"sc-1xn4nuf-3"})(["padding:45px 20px;@media (min-width:1024px){padding:45px 40px;}"]),_=Object(o.c)(y).withConfig({displayName:"ContactCard__SendSection",componentId:"sc-1xn4nuf-4"})(["grid-area:send;@media (min-width:1400px){min-width:380px;}"]),j=Object(o.c)(y).withConfig({displayName:"ContactCard__InfoSection",componentId:"sc-1xn4nuf-5"})(["grid-area:info;width:100%;background-color:",";"],(function(e){return e.theme.colorPink})),k=o.c.ul.withConfig({displayName:"ContactCard__ContactList",componentId:"sc-1xn4nuf-6"})(["display:grid;row-gap:20px;"]),S=o.c.li.withConfig({displayName:"ContactCard__ContactElement",componentId:"sc-1xn4nuf-7"})(["display:flex;align-items:center;color:",";display:flex;align-items:center;.icon{margin-right:15px;font-size:20px;}"],(function(e){return e.theme.colorWhite})),C=function(e){var t=Object(a.useState)({}),n=t[0],o=t[1],r=Object(a.useState)(!1),l=r[0],s=r[1],m=[{title:"imię",max:15,name:"firstname"},{title:"email",type:"email",validationHandler:function(e){return/\S+@\S+\.\S+/.test(e)},max:15,name:"email"},{title:"wiadomość",as:"textarea",name:"textarea"}];return Object(a.useEffect)((function(){console.log(n),s(3===Object.keys(n).filter((function(e){return n[e].status})).length)}),[n]),i.a.createElement(w,{className:"card-wrap"},i.a.createElement(_,null,i.a.createElement(E,{center:!0,numOfPink:2},"Wyślij wiadomość"),i.a.createElement(b,{onSubmit:function(e){e.preventDefault(),l&&(o({}),s(!1),v.a.sendForm("gmail",e.target).then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})))}},m.map((function(e){return i.a.createElement(h,{obj:e,setValidation:o,validationObj:n,validationHandler:e.validationHandler||null})})),i.a.createElement(d,{type:"submit",active:l},"Wyślij"))),i.a.createElement(j,null,i.a.createElement(E,{center:!0,white:!0,numOfPink:0},"informacje"),i.a.createElement(k,null,[{title:"Bydgoszcz",icon:"fas fa-map-marker-alt"},{title:"kontakt@toucan-apps.pl",icon:"far fa-envelope-open"},{title:"Toucan Apps",icon:"fab fa-google-play"}].map((function(e){return i.a.createElement(S,{key:e.title},i.a.createElement("i",{className:e.icon+" icon"}),i.a.createElement(c.a,{inherit:!0,noMargin:!0},e.title))})))))},O=o.c.span.withConfig({displayName:"kontakt__MainTextWrap",componentId:"sc-1f99pwj-0"})([""]),I=o.c.div.withConfig({displayName:"kontakt__CustomTextWrap",componentId:"sc-1f99pwj-1"})(["display:grid;row-gap:15px;grid-area:text-wrap;"]),N=Object(o.c)(l.a).withConfig({displayName:"kontakt__StyledHeader",componentId:"sc-1f99pwj-2"})(["max-width:500px;"]),R=Object(o.c)(c.a).withConfig({displayName:"kontakt__StyledDesc",componentId:"sc-1f99pwj-3"})(["max-width:500px;"]),P="Potrzebujesz się z nami kontaktować? Skorzystaj z formularza albo napisz maila!";t.default=function(e){return i.a.createElement(r.a,{page:"contact",title:"Kontakt"},i.a.createElement(I,null,i.a.createElement(N,{numOfPink:2},"skontaktuj się z nami!"),i.a.createElement(R,null,P),i.a.createElement(O,null,i.a.createElement(c.a,{bold:!0,noMargin:!0},"Masz ",i.a.createElement("strong",null,"pomysł")," na ",i.a.createElement("strong",null,"aplikację")," do zrealizowania?"),i.a.createElement(s.a,{outside:!0,to:"https://forms.gle/h3b2VXDjvQFgyre98"},i.a.createElement("strong",null,"Napisz")," nam o niej!"))),i.a.createElement(C,null))}},MkV5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var a=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=a},"U/Eg":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),o=n("KVUm"),r=n("vOnD"),l=n("xEAo"),c=Object(r.c)(l.a).withConfig({displayName:"ColorLink__Text",componentId:"sc-18gxy4z-0"})(["color:",";font-weight:bold;display:inline-block;margin-bottom:0;transition:0.3s;&:hover{transform:translateX(20px);}&::first-letter{transition:0.3s;color:",";}"],(function(e){return e.theme.colorPink}),(function(e){return e.theme.colorPurple})),s=r.c.span.withConfig({displayName:"ColorLink__Row",componentId:"sc-18gxy4z-1"})(["color:",";font-weight:bold;margin-right:10px;transition:0.3s;display:inline;@media (min-width:1200px){font-size:20px;}"],(function(e){return e.theme.colorBlack})),m=Object(r.c)(o.a).withConfig({displayName:"ColorLink__StyledLink",componentId:"sc-18gxy4z-2"})(["display:flex;align-items:flex-start;margin:5px 0;&:hover{.text{transform:translateX(15px);}.row{transform:translateX(3px);color:",";}}"],(function(e){return e.theme.colorPink})),d=r.c.a.withConfig({displayName:"ColorLink__ALink",componentId:"sc-18gxy4z-3"})(["display:flex;align-items:flex-start;margin:5px 0;&:hover{.text{transform:translateX(15px);}.row{transform:translateX(3px);color:",";}}"],(function(e){return e.theme.colorPink}));t.a=function(e){return e.outside?i.a.createElement(d,{href:e.to,target:"_blank"},i.a.createElement(s,{className:"row"},">"),i.a.createElement(c,{className:"text"},e.children)):i.a.createElement(m,{to:e.to},i.a.createElement(s,{className:"row"},">"),i.a.createElement(c,{className:"text"},e.children))}},USkh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var a=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=a}}]);
//# sourceMappingURL=component---src-pages-kontakt-js-087b80921284c71f0b48.js.map