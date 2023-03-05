(()=>{"use strict";var n={426:(n,t,e)=>{e.d(t,{Z:()=>p});var r=e(81),o=e.n(r),a=e(645),s=e.n(a),i=e(667),c=e.n(i),l=new URL(e(732),e.b),d=s()(o()),u=c()(l);d.push([n.id,"* {\n  --arrow-color: rgb(0, 0, 0);\n  --background-color: #333;\n}\n\n@font-face {\n  font-family: 'MyFont';\n  src: url("+u+") format('openType');\n  font-weight: 600;\n  font-style: normal;\n}\n\nbody {\n    background-color: var(--background-color);\n    color: #fff;\n    font-family: sans-serif;\n    display: flex;  \n    justify-content: center;\n    font-family: MyFont;\n  }\n  .mainContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  \n  h1 {\n    font-size: 50px;\n  }\n  .userMessage, .description {\n    font-size: 32px;\n    max-width: 800px;\n  }\n\n\n  .board {\n    display: flex;\n    flex-wrap: wrap;\n    width: 800px;\n    height: 800px;\n  }\n  .square {\n    width: 100px;\n    height: 100px;\n    text-align: center;\n    font-size: 60px;\n    line-height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n  }\n\n  .interface {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n\n  .square.black {\n    background-color: #b58863;\n  }\n  .square.white {\n    background-color: #f0d9b5;\n  }\n\n  .square.start, .square.target {\n    background-color: red;\n  }\n\n  .square:hover {\n    background-color: red;\n  }\n\n  .arrow {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    display: block;\n    width: 0;\n    height: 0;\n    border-left: 20px solid transparent;\n    border-right: 20px solid transparent;\n    opacity: 0;\n  }\n\n  .upArr {\n    border-bottom: 20px solid var(--arrow-color);\n  }\n  \n  .downArr {\n    border-top: 20px solid var(--arrow-color);\n  }\n\n  .leftArr, .rightArr {\n    border-top: 20px solid transparent;\n    border-bottom: 20px solid transparent;\n  }\n  \n  .leftArr {\n    transform: translate(-100%, -50%);\n    border-right: 20px solid var(--arrow-color);\n  }\n  \n  .rightArr {\n    transform: translate(0, -50%);\n    border-left: 20px solid var(--arrow-color);\n  }\n  \n  .circle {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 30px;\n    width: 30px;\n    border-radius: 50%;\n    background-color: transparent;\n    color:  var(--arrow-color);\n    font-size: 60px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    opacity: 0;\n  }\n  \n  \n  .circle span {\n    position: relative;\n    top: -2px;\n  }\n\n  .activeSquare {\n    opacity: 1;\n  }\n\n  /* Buttons */\n\nbutton  {\n    appearance: none;\n    background-color: white;\n    border-radius: 5px;\n    box-sizing: border-box;\n    cursor: pointer;\n    display: inline-block;\n    font-size: 2em;\n    font-weight: 500;\n    line-height: normal;\n    margin: 0;\n    outline: none;\n    text-align: center;\n    text-decoration: none;\n    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    will-change: transform;\n    border: 2px solid;\n    color: var(--background-color);\n    width: 200px;\n    height: 50px;\n}\n\n\nbutton:hover{\n    color: white;\n    background-color: var(--background-color);\n    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;\n    transform: translateY(-2px);\n}\n\n@media (max-width: 600px) {\n  .description, .userMessage {\n    width: 320px;\n    font-size: 16px;\n  }\n  .board {\n    width: 320px;\n    height: 320px;\n  }\n  .square {\n    width: 40px;\n    height: 40px;\n    font-size: 30px;\n    line-height: 40px;\n  }\n\n  .arrow {\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n  }\n\n  .upArr {\n    border-bottom: 10px solid var(--arrow-color);\n  }\n  \n  .downArr {\n    border-top: 10px solid var(--arrow-color);\n  }\n\n  .leftArr, .rightArr {\n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent;\n  }\n  \n  .leftArr {\n    border-right: 10px solid var(--arrow-color);\n  }\n  \n  .rightArr {\n    border-left: 10px solid var(--arrow-color);\n  }\n  \n  .circle {\n\n    height: 15px;\n    width: 15px;\n    font-size: 30px;\n}\n}",""]);const p=d},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},s=[],i=0;i<n.length;i++){var c=n[i],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=e(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=o(h,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var s=0;s<a.length;s++){var i=e(a[s]);t[i].references--}for(var c=r(n,o),l=0;l<a.length;l++){var d=e(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},732:(n,t,e)=>{n.exports=e.p+"6dcbc9bed1ec438907ee.ttf"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{class n{constructor(){this.items={},this.frontIndex=0,this.backIndex=0}enqueue(n){return this.items[this.backIndex]=n,this.backIndex++,n+" inserted"}dequeue(){const n=this.items[this.frontIndex];return delete this.items[this.frontIndex],this.frontIndex++,n}}class t{constructor(n,t=[]){this.currPos=n,this.moveList=this.setMoveList(this.currPos),this.prevMov=[...t,this.currPos]}setMoveList(n){let t=[];for(let e=0;e<8;e++){let o=[n[0]+r.possMoves[e][0],n[1]+r.possMoves[e][1]];o[0]<0||o[0]>7||o[1]<0||o[1]>7||t.push(o)}return t}}const r={path:[],trevail:function(e,o){let a={},s=new t(e);a[s.currPos]=!0;const i=new n;for(i.enqueue(s);Object.keys(i.items).length>0;){let n=i.dequeue();if(n.currPos[0]===o[0]&&n.currPos[1]===o[1]){r.path=n.prevMov;break}let e=n.moveList;for(let r=0;r<e.length;r++)if(!a[e[r]]){let o=new t(e[r],n.prevMov);a[o.currPos]=!0,i.enqueue(o)}}return r.path},getFullPath:function(){let n=r.path,t=[n[0]];for(let e=0;e<n.length-1;e++){let r=n[e+1][0]-n[e][0],o=n[e+1][1]-n[e][1];2===r&&(t.push([n[e][0]+1,n[e][1]]),t.push([n[e][0]+2,n[e][1]])),-2===r&&(t.push([n[e][0]-1,n[e][1]]),t.push([n[e][0]-2,n[e][1]])),2===o&&(t.push([n[e][0],n[e][1]+1]),t.push([n[e][0],n[e][1]+2])),-2===o&&(t.push([n[e][0],n[e][1]-1]),t.push([n[e][0],n[e][1]-2])),t.push(n[e+1])}return t},possMoves:[[2,1],[1,2],[-1,2],[-2,1],[-1,-2],[-2,-1],[1,-2],[2,-1]]};var o=e(379),a=e.n(o),s=e(795),i=e.n(s),c=e(569),l=e.n(c),d=e(565),u=e.n(d),p=e(216),h=e.n(p),f=e(589),g=e.n(f),v=e(426),m={};m.styleTagTransform=g(),m.setAttributes=u(),m.insert=l().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=h(),a()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals;const b={loadBoard:function(){let n="white",t="black",e=0,r=7;for(let o=0;o<64;o++){const a=document.createElement("div");if(a.classList.add("square"),o%8==0&&0!==o){let o=n;n=t,t=o,r--,e=0}o%2==0&&a.classList.add(n),o%2!=0&&a.classList.add(t),a.classList.add(`c${e}${r}`),e++,x.board.appendChild(a)}},initSquareInnerHtml:function(){const n=document.getElementsByClassName("square");for(let t=0;t<n.length;t++){if("start"===n.item(t).classList[3]||"target"===n.item(t).classList[3])continue;const e=n.item(t).classList[2][1],r=n.item(t).classList[2][2];n.item(t).innerHTML=`     <div class="arrow upArr upArr${e}${r}"></div>\n      <div class="arrow downArr downArr${e}${r}"></div>\n      <div class="arrow leftArr leftArr${e}${r}"></div>\n      <div class="arrow rightArr rightArr${e}${r}"></div>\n      <div class="circle circle${e}${r}">\n        <span>1</span>\n      </div>`}},initSquareSelection:function(){const n=document.getElementsByClassName("square");for(let t=0;t<n.length;t++)n.item(t).addEventListener("click",(e=>{if(null===b.startCoord){console.log(e.target.classList);const r=parseInt(e.target.classList[2][1]),o=parseInt(e.target.classList[2][2]);return b.startCoord=[r,o],n.item(t).classList.add("start"),n.item(t).innerHTML="<p>S<p/>",x.userMessage.innerText="Now select the target square",void console.log(b.startCoord)}if(null===b.targetCoord){const r=parseInt(e.target.classList[2][1]),o=parseInt(e.target.classList[2][2]);return b.targetCoord=[r,o],n.item(t).classList.add("target"),n.item(t).innerHTML="<p>T<p/>",x.userMessage.innerText="hit the trevail button",console.log(b.targetCoord),void b.initSquareInnerHtml()}}))},initTrevailBtn:function(){x.trevailBtn.addEventListener("click",(()=>{if(null!==b.startCoord&&null!==b.targetCoord){r.trevail(b.startCoord,b.targetCoord),b.path=r.getFullPath(),console.log(b.path);for(let n=1;n<b.path.length-1;n++){const t=b.path[n][0],e=b.path[n][1],r=b.path[n+1][0],o=b.path[n+1][1];if(n%3!=0)r-t!=1?r-t!=-1?o-e!=1?o-e!=-1||document.querySelector(`.downArr${t}${e}`).classList.add("activeSquare"):document.querySelector(`.upArr${t}${e}`).classList.add("activeSquare"):document.querySelector(`.leftArr${t}${e}`).classList.add("activeSquare"):document.querySelector(`.rightArr${t}${e}`).classList.add("activeSquare");else{const r=document.querySelector(`.circle${t}${e}`);r.classList.add("activeSquare"),r.innerHTML=`<span class="pathNum">${n/3}</span>`}}document.querySelector(".target").innerHTML=`<p>${(b.path.length-1)/3}<p/>`,document.querySelector(".userMessage").innerText=`You made it in ${(b.path.length-1)/3} moves`}}))},startCoord:null,targetCoord:null,path:null},x={board:document.querySelector(".board"),userMessage:document.querySelector(".userMessage"),trevailBtn:document.querySelector(".trevailBtn")};b.loadBoard(),b.initSquareSelection(),b.initTrevailBtn()})()})();