(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),i=n.n(r),c=(n(85),n(13)),l=n(14),s=n(16),u=n(15),d=n(17),p=n(74),f=n.n(p),m=n(111),h=n(149),b=n(6),g=n(58),y=n(12),x=n(33),w=n(24),v=n(42),j=n(69),O=n.n(j),E=n(70),S={DO_NOTHING:"DO_NOTHING",SET_ERROR:"SET_ERROR",SET_LOADING:"SET_LOADING",SET_LOADING_FALSE:"SET_LOADING_FALSE",STORE_DATA:"STORE_DATA",RESET:"RESET"};function C(){return{type:"RESET"}}function k(e,t,n){var a=e.toLowerCase();return function(o){fetch("https://rhymes-713f8.firebaseio.com/"+a[0]+"/"+a+".json",{method:"GET",mode:"cors",headers:new Headers({"Content-Type":"application/json"})}).then(function(r){r.json().then(function(r){r?o({type:"STORE_DATA",data:r,word:e,index:t,indexSentence:n}):fe.collection("words").where("word","==",a).get().then(function(r){r.empty?o({type:"STORE_DATA",data:null,word:e,index:t,indexSentence:n}):r.forEach(function(r){r.data().word===a&&o({type:"STORE_DATA",data:r.data().pattern,word:e,index:t,indexSentence:n})})}).catch(function(e){console.log("Error getting document:",e)})})})}}var T=O()(),I=Object(v.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{currentSentence:"",error:!1,loading:!1,rhymeBlock:[],sentence:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.RESET:return Object(w.a)({},e,{rhymeBlock:[]});case S.STORE_DATA:return Object(w.a)({},e,{rhymeBlock:[].concat(Object(x.a)(e.rhymeBlock),[{indexSentence:t.indexSentence,index:t.index,word:t.word,rhymes:t.data}])});case S.SET_LOADING:return Object(w.a)({},e,{loading:!0});case S.SET_LOADING_FALSE:return Object(w.a)({},e,{loading:!1});case S.SET_ERROR:return Object(w.a)({},e,{error:!0});case S.DO_NOTHING:return Object(w.a)({},e);case"STORE_STUFF":return Object(w.a)({},e,{sentence:t.data});case"DELETE_WORD":var n=e.rhymeBlock;console.log("currentList",n,t);var a=n.filter(function(e){return console.log(e),t.indexSentence!=e.indexSentence||t.index-1!=e.index});return console.log("newList",a),Object(w.a)({},e,{rhymeBlock:a});default:return e}},Object(v.a)(E.a,T)),N=n(153),R=n(156),D=n(157),W=n(148),A=n(152),B=n(151),L=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={word:""},n.handleChange=function(e){return function(e){var t=e.target.value;n.setState(function(){return{word:t}})}},n.handleKeyDown=function(e){"Enter"===e.key&&n.handleSubmit()},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleSubmit",value:function(){var e=this,t=this.state.word.split("\n");this.props.reset(),t.map(function(t,n){t.split(/[\s,'\u2019"-;]+/).map(function(t,a){e.props.getWord(t,a,n)})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",flexDirection:"column",padding:"15px",width:window.innerWidth/1.4,maxHeight:window.innerHeight-200}},o.a.createElement(B.a,{id:"standard-name",multiline:!0,rowsMax:1,label:"Word",onKeyDown:function(t){return e.handleKeyDown(t)},onChange:this.handleChange("name"),margin:"normal",value:this.state.word}),o.a.createElement(A.a,{variant:"outlined",onClick:function(){return e.handleSubmit()}},"Submit"))}}]),t}(o.a.Component),_=(Object(y.b)(function(e){return{}},{getWord:k,reset:C})(L),n(144)),z=n(155),F=n(158),V=/[ptkbdg\u0261fs\u0283vz\u0292l\u0281mn\u0272h\u014bxjw\u0265]+/g,G={i:"i",e:"\xe9","\u025b":"\xe8",a:"a","\u0251":"a","\u0254":"o",o:"o",u:"ou",y:"u","\xf8":"eu","\u0153":"eu","\u0259":"eu","\u025b\u0303":"in","\u0251\u0303":"an","\u0254\u0303":"on","\u0153\u0303":"in"},H={a:"#ef9a9a",i:"#f48fb1","\xe9":"#ce93d8","\xe8":"#b39ddb",eu:"#81d4fa",o:"#b5a142",ou:"#ffcc80",u:"#a5d6a7",in:"#ffab91",an:"#80cbc4",on:"#b0bec5"},P=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={list:[]},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"addToList",value:function(e){this.setState(function(t){return Object(w.a)({},t,{list:[].concat(Object(x.a)(t.list),[e])})})}},{key:"removePeople",value:function(e){var t=Object(x.a)(this.state.list);-1!==e&&(t.splice(e,1),this.setState({list:t}))}},{key:"resetState",value:function(){this.setState(function(){return{list:[]}})}},{key:"storeWord",value:function(){var e={};this.state.list.map(function(t,n){e[n]=t}),this.props.storeWord(this.props.value,e),this.resetState(),this.props.close()}},{key:"render",value:function(){var e=this,t=this.props.classes;return o.a.createElement(z.a,{open:this.props.open,onClose:function(){e.props.close(),e.resetState()},PaperProps:{style:{backgroundColor:"#303030"}},"aria-labelledby":"simple-dialog-title"},o.a.createElement(F.a,{id:"simple-dialog-title"},o.a.createElement("div",{className:t.wordText},this.props.value)),this.state.list.length>0&&o.a.createElement("div",{className:t.selectedVowContainer},this.state.list.map(function(n,a){return o.a.createElement(_.a,{in:!0},o.a.createElement("div",{style:{backgroundColor:"#3f51b5"},className:t.selectedVowItem,onClick:function(){return e.removePeople(a)}},n))})),o.a.createElement("div",{className:t.vowContainer},Object.keys(G).map(function(n){return o.a.createElement(_.a,{in:!0},o.a.createElement("div",{onClick:function(){return e.addToList(n)},style:{backgroundColor:H[G[n]]},className:t.vowItem},o.a.createElement("div",{className:t.originalVow},G[n]),o.a.createElement("div",{className:t.convertedVow},n)))})),o.a.createElement(A.a,{className:t.buttonStyle,onClick:function(){return e.storeWord()}},"STORE"))}}]),t}(a.Component),U=Object(y.b)(function(e){return{}},{storeWord:function(e,t){var n=e.toLowerCase();return function(e){return fetch(fetch("https://rhymes-713f8.firebaseio.com/"+n[0]+"/"+n+".json",{method:"PUT",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}))}}})(Object(b.a)({root:{height:"100vh",width:"40%",backgroundColor:"#536dfe",display:"flex",alignItems:"center",justifyContent:"center"},buttonStyle:{fontWeight:"bold",fontSize:"1.3em",fontFamily:"Barlow",color:"white",backgroundColor:"#212121"},wordText:{color:"white",fontFamily:"Barlow",fontWeight:"bold",fontSize:"1.5em"},vowItem:{padding:"10px",color:"white",borderRadius:"25px",width:"30px",height:"30px",flexDirection:"column",display:"flex",alignItems:"center",justifyContent:"center",margin:"5px",boxShadow:"0px 2px 21px -17px rgba(0,0,0,0.75)"},selectedVowItem:{padding:"10px",color:"white",borderRadius:"25px",height:"15px",width:"15px",display:"flex",alignItems:"center",justifyContent:"center",margin:"5px"},vowContainer:{padding:"10px",display:"flex",alignItems:"center",justifyContent:"space-evenly",flexWrap:"wrap",width:"500px"},selectedVowContainer:{padding:"10px",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",width:"500px"},originalVow:{fontSize:"1em",color:"white",fontWeight:"bold",fontFamily:"Barlow"},convertVow:{fontSize:"0.8em",color:"white",fontFamily:"Barlow"}})(P)),K=n(147),M=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:this.props.vertical?e.vertical:e.horizontal})}}]),t}(o.a.Component),J=Object(b.a)({vertical:{width:"15px"},horizontal:{height:"5px"}})(M),q=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return o.a.createElement(_.a,{in:!0,unmountOnExit:!0},o.a.createElement("p",{onClick:function(){return e.props.isClicked(e.props.word)},className:t.noItem},this.props.word))}}]),t}(a.Component),Q=Object(y.b)(function(e){return{}},{})(Object(b.a)({noItem:{fontSize:"0.5em",fontWeight:"bold",color:"white",height:"10px",width:"10px",borderRadius:"100%",backgroundColor:"#c62828",padding:"10px",alignItems:"center",marginLeft:"5px",display:"flex",justifyContent:"center",boxShadow:"0px 2px 21px -5px rgba(0,0,0,0.75)"}})(q)),$=n(146);var X=Object($.a)({item:{fontSize:"0.7em",minWidth:"15px",fontWeight:"bold",color:"black",borderRadius:"25px",padding:"5px",alignItems:"center",margin:"2px",display:"flex",justifyContent:"center",flexDirection:"column"},noItem:{fontSize:"0.5em",fontWeight:"bold",color:"white",height:"10px",width:"10px",borderRadius:"100%",backgroundColor:"#c62828",padding:"10px",alignItems:"center",marginLeft:"5px",display:"flex",justifyContent:"center",boxShadow:"0px 2px 21px -5px rgba(0,0,0,0.75)"},originalVow:{fontSize:"1.6em",color:"black",fontFamily:"Barlow"},convertVow:{fontSize:"1.2em",color:"white",fontFamily:"NotoSans"}});var Y=function(e){var t=X();return console.log(e.elem),e.elem&&e.elem.rhymes?e.elem.rhymes.map(function(n,a){Object(x.a)(n).map(function(e){console.log(e.charCodeAt(0))});var r=n.replace(V,"");return e.elem.word.length>1&&o.a.createElement(_.a,{in:!0,unmountOnExit:!0,timeout:a+500},o.a.createElement("div",{style:{backgroundColor:H[G[r]]},className:t.item},o.a.createElement("div",{className:t.originalVow},G[r]),o.a.createElement("div",{className:t.convertVow},r)))}):o.a.createElement(Q,{isClicked:e.isClicked,word:e.elem.word})},Z=(n(107),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,n=this.props.content.sort(function(e,t){return e.index-t.index});return console.log(n),o.a.createElement("div",{className:t.root,style:{backgroundColor:(n[0].indexSentence+1)%2==1?"#212121":"#303030"}},o.a.createElement("div",{className:t.index},o.a.createElement("div",null,n[0].indexSentence+1,".")),o.a.createElement("div",{className:t.rhymeContainer},n?n.map(function(n,a){return n&&o.a.createElement(_.a,{in:!0,direction:"up"},o.a.createElement("div",{className:t.word},o.a.createElement("div",{className:t.orignalContainer},n.rhymes&&n.rhymes.map(function(e,t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,e),o.a.createElement("div",null,t!==n.rhymes.length-1?".":""))})),o.a.createElement("div",{className:t.wordText},n.word),o.a.createElement(J,null),o.a.createElement("div",{className:t.wordContainer},o.a.createElement(Y,{isClicked:e.props.isClicked,elem:n}))))}):o.a.createElement(K.a,null)))}}]),t}(a.Component)),ee=Object(y.b)(function(e){return{rhymeBlock:e.rhymeBlock}},{})(Object(b.a)({root:{display:"flex",alignItems:"center",justifyContent:"flex-start",flexWrap:"no-wrap",width:"100%",maxHeight:"150px",overflow:"hidden"},wordContainer:{display:"flex"},orignalContainer:{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2em",fontFamily:"NotoSans"},wordText:{fontSize:"1.5em",fontFamily:"Barlow",fontWeight:"bold",color:"black",marginTop:"-5px"},rhymeContainer:{display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"flex-start"},word:{fontSize:"1em",color:"black",fontFamily:"Montserrat",padding:"7px",display:"flex",flexDirection:"column ",alignItems:"center",justifyContent:"center",margin:"5px",backgroundColor:"#eeeeee",borderRadius:"25px",height:"100px"},item:{fontSize:"0.7em",minWidth:"15px",fontWeight:"bold",color:"black",borderRadius:"25px",backgroundColor:"white",padding:"10px",alignItems:"center",margin:"2px",display:"flex",justifyContent:"center",flexDirection:"column"},index:{height:"120px",color:"white",fontSize:"1.2em",fontWeight:"bold",marginRight:"10px",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"20px"},originalVow:{fontSize:"1.6em",color:"black",fontWeight:"bold",fontFamily:"Barlow"},convertVow:{fontSize:"1.2em",color:"white",fontFamily:"Barlow"}})(Z)),te=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1},n.wordIsClicked=function(e){n.setState(function(){return{open:!0,value:e}})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"setPanelClose",value:function(){this.setState(function(){return{open:!1}})}},{key:"render",value:function(){var e,t=this,n=this.props.classes,a=this.props.rhymeBlock.sort(function(e,t){return e.indexSentence-t.indexSentence}),r=(e="indexSentence",a.reduce(function(t,n){return(t[n[e]]=t[n[e]]||[]).push(n),t},{}));if(r)return o.a.createElement("div",{className:n.root},r&&Object.keys(r).map(function(e){return o.a.createElement(ee,{content:r[e],isClicked:t.wordIsClicked})}),o.a.createElement(U,{value:this.state.value,close:function(){return t.setPanelClose()},open:this.state.open}))}}]),t}(a.Component),ne=Object(y.b)(function(e){return{rhymeBlock:e.rhymeBlock}},{})(Object(b.a)({root:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",flexDirection:"column",flexWrap:"nowrap",width:"100%",boxShadow:"0px 2px 21px -17px rgba(0,0,0,0.75)",borderRadius:"25px",backgroundColor:"#303030",transition:"1s ease",minHeight:"90vh"}})(te)),ae=n(57),oe=n.n(ae),re=n(38),ie=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","space","backspace","enter","ctrl+v"];var ce={color:"white",fontSize:"2em",fontFamily:"Barlow",fontWeight:"bold",height:"10vh",display:"flex",alignItems:"center",justifyContent:"center"},le=function(e){var t=Object(a.useState)(""),n=Object(re.a)(t,2),r=n[0],i=n[1],c=Object(a.useState)(null),l=Object(re.a)(c,2),s=(l[0],l[1],Object(a.useState)([])),u=Object(re.a)(s,2),d=u[0],p=u[1],f=Object(a.useState)(0),m=Object(re.a)(f,2),h=m[0],b=m[1],g=Object(a.useState)(0),x=Object(re.a)(g,2),v=x[0],j=x[1],O=(Object(y.d)(function(e){return e.rhymeBlock}),Object(y.c)()),E=function(e){return O({type:"STORE_STUFF",data:e})};return o.a.createElement("div",null,o.a.createElement("div",{style:Object(w.a)({},ce)},r?r.substr(r.length-8):""),o.a.createElement(oe.a,{handleKeys:ie,onKeyEvent:function(e,t){var n=r.split(/[\s,'\u2019"-;]+/),a=n.length;if("space"===e)i(r+" "),p(r.split(/[\s,'\u2019"-;]+/)),a!==d.length&&(b(a),O(k(n[a-1],h,v)));else if("backspace"===e){var o=r.slice(0,-1).split(/[\s,'\u2019"-;]+/).length;console.log(o,h)," "!==r[r.length]&&o<h&&(O({type:"DELETE_WORD",indexSentence:v,index:h}),b(h-1)),i(r.slice(0,-1))}else"enter"===e?(j(v+1),i(r+"\n")):"ctrl+v"===e?navigator.clipboard.readText().then(function(e){var t;t=e.split("\n"),O({type:"RESET"}),t.map(function(e,t){e.split(/[\s,'\u2019"-;]+/).map(function(e,n){O(k(e,n,t))})}),E(r)}):i(r+e)}}))},se=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(W.a,{container:!0,spacing:4,alignItems:"center",className:e.root,direction:"column"},o.a.createElement(W.a,{container:!0,justify:"center",xs:10},o.a.createElement(le,null)),o.a.createElement(W.a,{justify:"center",container:!0,xs:12},o.a.createElement(ne,null)))}}]),t}(a.Component),ue=Object(y.b)(function(e){return{}},{splitLines:function(e){e.split("\n").map(function(e,t){e.split(/[\s,'\u2019"-;]+/).map(function(e,n){e&&k(e,n+1,t)})})}})(Object(b.a)({root:{backgroundColor:"#212121",flexGrow:1}})(se)),de=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(N.a,{basename:"/"},o.a.createElement(R.a,null,o.a.createElement(D.a,{path:"/",component:ue})))}}]),t}(a.Component),pe=Object(y.b)(function(e){return{}},{})(Object(b.a)({root:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",backgroundColor:"#d6d6d6"}})(de)),fe=(g.initializeApp({apiKey:"AIzaSyDxh9GNSpLC25SMydfCSFDqBgAWHghRA20",authDomain:"rhymes-713f8.firebaseapp.com",databaseURL:"https://rhymes-713f8.firebaseio.com",projectId:"rhymes-713f8",storageBucket:"rhymes-713f8.appspot.com",messagingSenderId:"817148267138",appId:"1:817148267138:web:9f128f035a30b096"}),g.firestore()),me=Object(m.a)({palette:{primary:f.a,white:"#ffffff"}}),he=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(y.a,{store:I},o.a.createElement(h.a,{theme:me},o.a.createElement(pe,null)))}}]),t}(a.Component),be=Object(b.a)({root:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}})(he),ge=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ye(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(be,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/rapsodie-rhymes",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/rapsodie-rhymes","/service-worker.js");ge?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ye(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):ye(t,e)})}}()},80:function(e,t,n){e.exports=n(110)},85:function(e,t,n){}},[[80,2,1]]]);
//# sourceMappingURL=main.5e7b6342.chunk.js.map