(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>p});var o=n(354),i=n.n(o),r=n(314),a=n.n(r),A=n(417),c=n.n(A),d=new URL(n(481),n.b),s=a()(i());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Cabin&display=swap);"]);var l=c()(d);s.push([e.id,`html {\n  height: 100%;\n}\nbody {\n  height: 100%;\n  margin: 0;\n\n  display: flex;\n  flex-direction: column;\n}\n* {\n  box-sizing: border-box;\n  font-family: "Cabin", sans-serif;\n}\nheader {\n  width: 100%;\n  height: 44px;\n  background: #7b2cbf;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px 0 20px;\n}\nbutton {\n  width: 20px;\n  height: auto;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n}\n.part1,\n.part2 {\n  display: flex;\n  gap: 15px;\n}\n.profile {\n  width: 25px;\n  height: 25px;\n  border-radius: 50px;\n  background: url("https://avatars.githubusercontent.com/u/98334884?v=4");\n  background-size: contain;\n}\nheader > h1 {\n  color: white;\n  margin: 0;\n}\n\n.sidebar {\n  width: 250px;\n  flex: 1;\n  background-color: rgba(128, 128, 128, 0.103);\n\n  display: flex;\n  flex-direction: column;\n  transition: 0.6s;\n\n  height: 100%;\n  position: fixed;\n  z-index: 1;\n  top: 20;\n  left: 20;\n  padding-top: 20px;\n  overflow-x: hidden;\n}\n.sidebar.inactive {\n  width: 0px;\n}\n.sidebar-btn {\n  transition: 0.6s;\n  fill: white;\n}\n.sidebar-btn.inactive {\n  transform: rotate(90deg);\n}\n.sidebar > div {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.due {\n  flex: 1;\n\n  display: flex;\n  flex-direction: column;\n  padding-top: 30px;\n}\n.projects {\n  flex: 8;\n}\n.sidebar > div > button {\n  font-size: 14px;\n  width: 220px;\n  border-radius: 4px;\n  padding: 7px;\n\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.sidebar > div > button:hover {\n  background-color: rgba(128, 128, 128, 0.116);\n  cursor: pointer;\n}\n.today-icon,\n.upcoming-icon {\n  width: 17px;\n}\n.today-icon {\n  filter: invert(36%) sepia(14%) saturate(4743%) hue-rotate(130deg)\n    brightness(91%) contrast(101%);\n}\n.upcoming-icon {\n  filter: invert(65%) sepia(63%) saturate(6667%) hue-rotate(202deg)\n    brightness(100%) contrast(102%);\n}\n.projects > h4 {\n  font-size: 15px;\n  margin-top: 0;\n  margin-bottom: 17px;\n  padding: 7px;\n  padding-left: 0;\n\n  display: flex;\n  justify-content: space-between;\n  border-bottom: black solid 1px;\n}\n.add-project {\n  justify-content: center;\n}\n.add-project > img {\n  width: 17px;\n}\n.add-project:hover {\n  cursor: pointer;\n}\nlabel {\n  display: flex;\n  flex-direction: column;\n}\ninput {\n  border-radius: 4px;\n  border: solid rgba(128, 128, 128, 0.555) 1px;\n  padding: 4px;\n  transition: 0.3s;\n}\ninput:focus {\n  outline: none;\n  border: solid black 1px;\n}\n.popup {\n  position: fixed;\n  top: 25%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  opacity: 0;\n  transition: opacity 300ms ease-in-out;\n  border-radius: 7px;\n  height: 180px;\n  z-index: 10;\n  min-width: 25%;\n  padding: 0 15px 0 15px;\n  background: white;\n\n  display: flex;\n  flex-direction: column;\n}\n.overlay {\n  position: fixed;\n  opacity: 0;\n  transition: 200ms ease-in-out;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  pointer-events: none;\n}\n.popup.active {\n  transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n}\n.overlay.active {\n  opacity: 1;\n  pointer-events: all;\n}\n.popup form {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.buttons {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  margin-top: 30px;\n}\n.buttons > button {\n  width: 65px;\n  padding: 7px;\n  border-radius: 4px;\n}\n.buttons > .add {\n  background-color: #7b2cbf;\n  color: white;\n}\n.buttons > .cancel {\n  background-color: rgba(128, 128, 128, 0.116);\n}\nbutton:hover {\n  cursor: pointer;\n}\n.projects-container {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.project {\n  padding: 7px;\n  border-radius: 4px;\n  font-size: 14px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.project:hover {\n  background-color: rgba(128, 128, 128, 0.116);\n}\n.todo-popup,\n.edit-popup {\n  position: fixed;\n  top: 25%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  opacity: 0;\n  transition: opacity 300ms ease-in-out;\n  border-radius: 7px;\n  height: 180px;\n  z-index: 10;\n  min-width: 30%;\n  padding: 5px 15px 5px 15px;\n  background: white;\n\n  display: flex;\n  flex-direction: column;\n\n  border: solid black 1px;\n}\n.todo-popup.active,\n.edit-popup.active {\n  transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n}\n.todo-popup form,\n.edit-popup form {\n  display: flex;\n  flex-direction: column;\n\n  height: 100%;\n  width: 100%;\n}\n.todo-popup #todo-title,\n.edit-popup #edit-title {\n  font-size: 20px;\n  border: none;\n}\n.todo-popup #desc,\n.edit-popup #edit-desc {\n  border: none;\n}\n.todo-popup .buttons,\n.edit-popup .buttons {\n  justify-content: space-between;\n}\n.leftBtns,\n.rightBtns {\n  display: flex;\n  gap: 5px;\n  justify-content: flex-end;\n}\n.leftBtns {\n  justify-content: start;\n}\n.buttons div button {\n  width: 65px;\n  padding: 7px;\n  border-radius: 4px;\n}\n.rightBtns .add {\n  background-color: #7b2cbf;\n  color: white;\n}\n.rightBtns button,\n.leftBtns button {\n  height: 30px;\n  background-color: rgba(128, 128, 128, 0.116);\n}\n.rightBtns .edit-confirm {\n  background-color: #7b2cbf;\n  color: white;\n}\n.leftBtns .date {\n  width: 70px;\n}\n#date,\n#edit-date {\n  background-color: rgba(128, 128, 128, 0.116);\n  border: none;\n  width: 108px;\n}\n.dropdowns,\n.edit-dropdowns {\n  display: flex;\n  padding: 10px 0 10px 0;\n}\n.priority,\n#projectSelect,\n.edit-priority,\n#edit-projectSelect {\n  border: #7b2cbf 1px solid;\n  border-radius: 4px;\n  background: none;\n}\n.priority:focus,\n#projectSelect:focus,\n.edit-priority:focus,\n#edit-projectSelect:focus {\n  outline: none;\n}\n#projectSelect,\n#edit-projectSelect {\n  padding: 4px;\n}\n.content-wrapper {\n  display: flex;\n  height: 100vh;\n}\n.content {\n  flex: 5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  margin-left: 250px;\n  transition: 0.6s;\n}\n.todo {\n  border-bottom: solid rgba(189, 189, 189, 0.555) 1px;\n  width: 60%;\n  height: 60px;\n  display: flex;\n  flex-direction: row-reverse;\n}\n.title-box {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.other-info {\n  flex: 1;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n}\n.title-wrapper > p {\n  margin: 0;\n}\n.desc {\n  font-size: 12px;\n}\n.edit {\n  width: 18px;\n  height: 18px;\n}\n.edit:hover {\n  cursor: pointer;\n}\n.trash {\n  width: 18px;\n  height: 18px;\n}\n.trash:hover {\n  cursor: pointer;\n}\n.todo-date,\n.todo-priority {\n  font-size: 15px;\n}\n.content > div {\n  display: none;\n}\n.Default.active {\n  width: 100%;\n  flex: 5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n}\n.content > div.active {\n  width: 100%;\n  flex: 5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  padding: 20px;\n}\n.remove {\n  height: 14px;\n  width: 14px;\n  background: center / contain url(${l});\n}\n.checkbox {\n  accent-color: #7b2cbf;\n}\n`,"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"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;EACzB,YAAY;AACd;AACA;;EAEE,YAAY;EACZ,4CAA4C;AAC9C;AACA;EACE,yBAAyB;EACzB,YAAY;AACd;AACA;EACE,WAAW;AACb;AACA;;EAEE,4CAA4C;EAC5C,YAAY;EACZ,YAAY;AACd;AACA;;EAEE,aAAa;EACb,sBAAsB;AACxB;AACA;;;;EAIE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;;;;EAIE,aAAa;AACf;AACA;;EAEE,YAAY;AACd;AACA;EACE,aAAa;EACb,aAAa;AACf;AACA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,mDAAmD;EACnD,UAAU;EACV,YAAY;EACZ,aAAa;EACb,2BAA2B;AAC7B;AACA;EACE,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,OAAO;EACP,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,SAAS;AACX;AACA;EACE,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;;EAEE,eAAe;AACjB;AACA;EACE,aAAa;AACf;AACA;EACE,WAAW;EACX,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,WAAW;EACX,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;AACf;AACA;EACE,YAAY;EACZ,WAAW;EACX,oEAAkE;AACpE;AACA;EACE,qBAAqB;AACvB",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Cabin&display=swap");\nhtml {\n  height: 100%;\n}\nbody {\n  height: 100%;\n  margin: 0;\n\n  display: flex;\n  flex-direction: column;\n}\n* {\n  box-sizing: border-box;\n  font-family: "Cabin", sans-serif;\n}\nheader {\n  width: 100%;\n  height: 44px;\n  background: #7b2cbf;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px 0 20px;\n}\nbutton {\n  width: 20px;\n  height: auto;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n}\n.part1,\n.part2 {\n  display: flex;\n  gap: 15px;\n}\n.profile {\n  width: 25px;\n  height: 25px;\n  border-radius: 50px;\n  background: url("https://avatars.githubusercontent.com/u/98334884?v=4");\n  background-size: contain;\n}\nheader > h1 {\n  color: white;\n  margin: 0;\n}\n\n.sidebar {\n  width: 250px;\n  flex: 1;\n  background-color: rgba(128, 128, 128, 0.103);\n\n  display: flex;\n  flex-direction: column;\n  transition: 0.6s;\n\n  height: 100%;\n  position: fixed;\n  z-index: 1;\n  top: 20;\n  left: 20;\n  padding-top: 20px;\n  overflow-x: hidden;\n}\n.sidebar.inactive {\n  width: 0px;\n}\n.sidebar-btn {\n  transition: 0.6s;\n  fill: white;\n}\n.sidebar-btn.inactive {\n  transform: rotate(90deg);\n}\n.sidebar > div {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.due {\n  flex: 1;\n\n  display: flex;\n  flex-direction: column;\n  padding-top: 30px;\n}\n.projects {\n  flex: 8;\n}\n.sidebar > div > button {\n  font-size: 14px;\n  width: 220px;\n  border-radius: 4px;\n  padding: 7px;\n\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.sidebar > div > button:hover {\n  background-color: rgba(128, 128, 128, 0.116);\n  cursor: pointer;\n}\n.today-icon,\n.upcoming-icon {\n  width: 17px;\n}\n.today-icon {\n  filter: invert(36%) sepia(14%) saturate(4743%) hue-rotate(130deg)\n    brightness(91%) contrast(101%);\n}\n.upcoming-icon {\n  filter: invert(65%) sepia(63%) saturate(6667%) hue-rotate(202deg)\n    brightness(100%) contrast(102%);\n}\n.projects > h4 {\n  font-size: 15px;\n  margin-top: 0;\n  margin-bottom: 17px;\n  padding: 7px;\n  padding-left: 0;\n\n  display: flex;\n  justify-content: space-between;\n  border-bottom: black solid 1px;\n}\n.add-project {\n  justify-content: center;\n}\n.add-project > img {\n  width: 17px;\n}\n.add-project:hover {\n  cursor: pointer;\n}\nlabel {\n  display: flex;\n  flex-direction: column;\n}\ninput {\n  border-radius: 4px;\n  border: solid rgba(128, 128, 128, 0.555) 1px;\n  padding: 4px;\n  transition: 0.3s;\n}\ninput:focus {\n  outline: none;\n  border: solid black 1px;\n}\n.popup {\n  position: fixed;\n  top: 25%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  opacity: 0;\n  transition: opacity 300ms ease-in-out;\n  border-radius: 7px;\n  height: 180px;\n  z-index: 10;\n  min-width: 25%;\n  padding: 0 15px 0 15px;\n  background: white;\n\n  display: flex;\n  flex-direction: column;\n}\n.overlay {\n  position: fixed;\n  opacity: 0;\n  transition: 200ms ease-in-out;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  pointer-events: none;\n}\n.popup.active {\n  transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n}\n.overlay.active {\n  opacity: 1;\n  pointer-events: all;\n}\n.popup form {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.buttons {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  margin-top: 30px;\n}\n.buttons > button {\n  width: 65px;\n  padding: 7px;\n  border-radius: 4px;\n}\n.buttons > .add {\n  background-color: #7b2cbf;\n  color: white;\n}\n.buttons > .cancel {\n  background-color: rgba(128, 128, 128, 0.116);\n}\nbutton:hover {\n  cursor: pointer;\n}\n.projects-container {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.project {\n  padding: 7px;\n  border-radius: 4px;\n  font-size: 14px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.project:hover {\n  background-color: rgba(128, 128, 128, 0.116);\n}\n.todo-popup,\n.edit-popup {\n  position: fixed;\n  top: 25%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  opacity: 0;\n  transition: opacity 300ms ease-in-out;\n  border-radius: 7px;\n  height: 180px;\n  z-index: 10;\n  min-width: 30%;\n  padding: 5px 15px 5px 15px;\n  background: white;\n\n  display: flex;\n  flex-direction: column;\n\n  border: solid black 1px;\n}\n.todo-popup.active,\n.edit-popup.active {\n  transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n}\n.todo-popup form,\n.edit-popup form {\n  display: flex;\n  flex-direction: column;\n\n  height: 100%;\n  width: 100%;\n}\n.todo-popup #todo-title,\n.edit-popup #edit-title {\n  font-size: 20px;\n  border: none;\n}\n.todo-popup #desc,\n.edit-popup #edit-desc {\n  border: none;\n}\n.todo-popup .buttons,\n.edit-popup .buttons {\n  justify-content: space-between;\n}\n.leftBtns,\n.rightBtns {\n  display: flex;\n  gap: 5px;\n  justify-content: flex-end;\n}\n.leftBtns {\n  justify-content: start;\n}\n.buttons div button {\n  width: 65px;\n  padding: 7px;\n  border-radius: 4px;\n}\n.rightBtns .add {\n  background-color: #7b2cbf;\n  color: white;\n}\n.rightBtns button,\n.leftBtns button {\n  height: 30px;\n  background-color: rgba(128, 128, 128, 0.116);\n}\n.rightBtns .edit-confirm {\n  background-color: #7b2cbf;\n  color: white;\n}\n.leftBtns .date {\n  width: 70px;\n}\n#date,\n#edit-date {\n  background-color: rgba(128, 128, 128, 0.116);\n  border: none;\n  width: 108px;\n}\n.dropdowns,\n.edit-dropdowns {\n  display: flex;\n  padding: 10px 0 10px 0;\n}\n.priority,\n#projectSelect,\n.edit-priority,\n#edit-projectSelect {\n  border: #7b2cbf 1px solid;\n  border-radius: 4px;\n  background: none;\n}\n.priority:focus,\n#projectSelect:focus,\n.edit-priority:focus,\n#edit-projectSelect:focus {\n  outline: none;\n}\n#projectSelect,\n#edit-projectSelect {\n  padding: 4px;\n}\n.content-wrapper {\n  display: flex;\n  height: 100vh;\n}\n.content {\n  flex: 5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  margin-left: 250px;\n  transition: 0.6s;\n}\n.todo {\n  border-bottom: solid rgba(189, 189, 189, 0.555) 1px;\n  width: 60%;\n  height: 60px;\n  display: flex;\n  flex-direction: row-reverse;\n}\n.title-box {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.other-info {\n  flex: 1;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n}\n.title-wrapper > p {\n  margin: 0;\n}\n.desc {\n  font-size: 12px;\n}\n.edit {\n  width: 18px;\n  height: 18px;\n}\n.edit:hover {\n  cursor: pointer;\n}\n.trash {\n  width: 18px;\n  height: 18px;\n}\n.trash:hover {\n  cursor: pointer;\n}\n.todo-date,\n.todo-priority {\n  font-size: 15px;\n}\n.content > div {\n  display: none;\n}\n.Default.active {\n  width: 100%;\n  flex: 5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n}\n.content > div.active {\n  width: 100%;\n  flex: 5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  padding: 20px;\n}\n.remove {\n  height: 14px;\n  width: 14px;\n  background: center / contain url("../visual-assets/trash-bin.png");\n}\n.checkbox {\n  accent-color: #7b2cbf;\n}\n'],sourceRoot:""}]);const p=s},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);o&&a[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),t.push(s))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},354:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),r="/*# ".concat(i," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},a=[],A=0;A<e.length;A++){var c=e[A],d=o.base?c[0]+o.base:c[0],s=r[d]||0,l="".concat(d," ").concat(s);r[d]=s+1;var p=n(l),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var C=i(u,o);o.byIndex=A,t.splice(A,0,{identifier:l,updater:C,references:1})}a.push(l)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var A=n(r[a]);t[A].references--}for(var c=o(e,i),d=0;d<r.length;d++){var s=n(r[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}r=c}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},481:(e,t,n)=>{e.exports=n.p+"a35f031b7f0135bef6db.png"}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=o[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var o=n(72),i=n.n(o),r=n(825),a=n.n(r),A=n(659),c=n.n(A),d=n(56),s=n.n(d),l=n(540),p=n.n(l),u=n(113),C=n.n(u),m=n(365),E={};E.styleTagTransform=C(),E.setAttributes=s(),E.insert=c().bind(null,"head"),E.domAPI=a(),E.insertStyleElement=p(),i()(m.A,E),m.A&&m.A.locals&&m.A.locals;const f=n.p+"e42c3c63c6b97a10746d.png";var x=n(481);let g;const h=e=>{console.log({todoInfo:e});const t=document.createElement("div");t.className="todo";const n=document.querySelector(`.${e.project}`.replace(/\s/g,""));console.log(n),n.appendChild(t),t.dataset.index=b.indexOf(e);const o=document.createElement("div");t.appendChild(o),o.className="other-info";const i=document.createElement("div");t.appendChild(i),i.className="title-box";const r=document.createElement("input");r.type="checkbox",r.className="checkbox",i.appendChild(r);const a=document.createElement("div");a.className="title-wrapper",i.appendChild(a);const A=document.createElement("p");A.className="todo-title",A.textContent=e.title,a.appendChild(A);const c=document.createElement("p");c.className="desc",c.textContent=e.desc,a.appendChild(c);const d=document.createElement("p");d.className="todo-date",d.textContent=e.date,o.appendChild(d);const s=document.createElement("p");s.className="todo-priority",s.textContent=e.priority,o.appendChild(s);const l=document.createElement("img");l.className="edit",l.src=f,o.appendChild(l);const p=document.createElement("img");p.className="trash",p.src=x,o.appendChild(p),p.addEventListener("click",(e=>{e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);let t=e.target.parentNode.parentNode.dataset.index;b.splice(t,1),console.log(b);let n=document.querySelectorAll(".todo");console.log(n);let o=0;n.forEach((e=>{e.dataset.index=o,o++}));const i=JSON.parse(localStorage.getItem("todoList"));i.splice(t,1),localStorage.setItem("todoList",JSON.stringify(i))})),l.addEventListener("click",(e=>{let t=e.target.parentNode.parentNode.dataset.index;g=t,console.log(g),console.log("edit listener triggered"),(()=>{const e=document.querySelector("body"),t=document.createElement("div");t.className="edit-popup";const n=document.createElement("form");n.setAttribute("method","post"),t.appendChild(n);const o=b[g],i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("id","edit-title"),i.setAttribute("name","edit-title"),i.setAttribute("placeholder","Task name"),i.setAttribute("value",`${o.title}`),n.appendChild(i);const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","edit-desc"),r.setAttribute("name","edit-desc"),r.setAttribute("placeholder","Description"),r.setAttribute("value",`${o.desc}`),n.appendChild(r);const a=document.querySelector(".overlay"),A=document.createElement("div");A.className="buttons",n.appendChild(A);const c=document.createElement("div");c.className="leftBtns",A.appendChild(c);const d=document.createElement("div");d.className="rightBtns",A.appendChild(d);const s=document.createElement("input");s.setAttribute("type","date"),s.setAttribute("id","edit-date"),s.setAttribute("name","edit-date"),s.setAttribute("value",`${o.date}`),c.appendChild(s);const l=document.createElement("select");l.textContent="editPriority";const p=document.createElement("option"),u=document.createElement("option"),C=document.createElement("option");p.textContent="high",u.textContent="medium",C.textContent="low",l.className="edit-priority",l.appendChild(p),l.appendChild(u),l.appendChild(C),c.appendChild(l);const m=document.createElement("button");m.textContent="Cancel",m.className="edit-cancel",d.appendChild(m);const E=document.createElement("button");E.textContent="edit",E.className="edit-confirm",d.appendChild(E);const f=document.createElement("div");f.className="edit-dropdowns",A.insertAdjacentElement("afterend",f);const x=document.createElement("select");f.appendChild(x),x.setAttribute("name","projectSelect"),x.setAttribute("value",`${o.project}`),x.id="edit-projectSelect",t.classList.add("active"),a.classList.add("active"),x.replaceChildren();const h=document.querySelector(".projects-container").querySelectorAll(".project");for(let e=0;e<h.length;e++){const t=document.createElement("option");t.textContent=h[e].textContent,x.appendChild(t)}m.addEventListener("click",(()=>{event.preventDefault(),t.classList.remove("active"),a.classList.remove("active"),x.replaceChildren(),e.removeChild(t)})),E.addEventListener("click",(()=>{event.preventDefault(),t.classList.remove("active"),a.classList.remove("active"),(()=>{console.log(b[g]);const e=document.querySelector("#edit-title").value,t=document.querySelector("#edit-desc").value,n=document.querySelector("#edit-date").value,o=document.querySelector(".edit-priority").value,i=document.querySelector("#edit-projectSelect").value,r=b[g];r.title=e,r.desc=t,r.date=n,r.priority=o,console.log(r);const a=document.querySelector(`.todo[data-index="${g}"]`);console.log(a),r.project!==i&&(r.project=i,document.querySelector(`.${i}`.replace(/\s/g,"")).appendChild(a));const A=a.querySelector(".todo-title"),c=a.querySelector(".desc"),d=a.querySelector(".todo-date"),s=a.querySelector(".todo-priority");console.log(A,c,d,s),A.textContent=e,c.textContent=t,d.textContent=n,s.textContent=o;const l=JSON.parse(localStorage.getItem("todoList"));l[g].title=e,l[g].desc=t,l[g].date=n,l[g].priority=o,l[g].project=i,localStorage.setItem("todoList",JSON.stringify(l))})(),e.removeChild(t)})),l.addEventListener("click",(()=>{event.preventDefault()})),e.appendChild(t)})()})),r.addEventListener("click",(()=>{1==r.checked?(A.style.textDecoration="line-through",c.style.textDecoration="line-through",A.style.color="grey",c.style.color="grey",A.style.textDecorationThickness="3px",c.style.textDecorationThickness="3px",A.style.textDecorationColor="#7b2cbf",c.style.textDecorationColor="#7b2cbf"):(A.style.textDecoration="none",c.style.textDecoration="none",A.style.color="black",c.style.color="black")}))},b=[];let y;const v=()=>{const e=document.querySelector("#todo-title").value,t=document.querySelector("#desc").value,n=document.querySelector(".priority").value,o=document.querySelector("#date").value,i=document.querySelector("#projectSelect").value,r=new class{constructor(e,t,n,o,i){this.title=e,this.desc=t,this.priority=n,this.project=i,this.date=o}}(e,t,n,o,i);console.log(r),b.push(r),console.log(b),h(r),y=JSON.parse(localStorage.getItem("todoList")),y.push(r),localStorage.setItem("todoList",JSON.stringify(y)),console.log(y.length)};localStorage.getItem("todoList")||localStorage.setItem("todoList",JSON.stringify(b));const B=e=>{let t=document.createElement("button");t.className="project",t.dataset.index=L.indexOf(e);const n=document.querySelector(".projects-container");n.appendChild(t),t.textContent=e.name,console.log(t);const o=document.createElement("div");o.className=e.name.replace(/\s/g,""),o.dataset.index=L.indexOf(e);const i=document.querySelector(".content");i.appendChild(o),console.log(o),t.addEventListener("click",(t=>{const n=e.name.replace(/\s/g,""),o=document.querySelector(`.${n}`);i.querySelectorAll("div").forEach((e=>{e.classList.remove("active")})),o.classList.add("active")}));const r=document.createElement("button");r.className="remove",t.appendChild(r),r.addEventListener("click",(e=>{let t=e.target.parentNode.textContent.replace(/\s/g,""),o=document.querySelector(`.${t}`),i=o.childNodes,r=Array.from(i);console.log(r);for(let e=0;e<r.length;e++){console.log(r[e]);let t=r[e].dataset.index;b[t].project="Default",console.log(b[t]),localStorage.setItem("todoList",JSON.stringify(b)),document.querySelector(".Default").appendChild(r[e]),console.log(r)}o.remove(),e.target.parentNode.remove(),e.stopPropagation();let a=e.target.parentNode.dataset.index;console.log(a),L.splice(a,1),console.log(L);const A=JSON.parse(localStorage.getItem("projList"));A.splice(a,1),localStorage.setItem("projList",JSON.stringify(A));let c=n.querySelector(".project");c.classList.add("defaultProject"),console.log(c);let d=document.querySelectorAll(".project:not(.defaultProject)");console.log(d);let s=0;d.forEach((e=>{e.dataset.index=s,s++}))})),console.log(L)};let S=document.createElement("button");S.className="project",document.querySelector(".projects-container").appendChild(S),S.textContent="Default",console.log(S);const w=document.createElement("div");w.className="Default";const j=document.querySelector(".content");j.appendChild(w);const k=document.querySelector(".Default");k.classList.add("active"),console.log(k),S.addEventListener("click",(e=>{j.querySelectorAll("div").forEach((e=>{e.classList.remove("active")})),w.classList.add("active")}));let N,L=[];const Y=()=>{const e=document.querySelector("#project-title").value,t=new class{constructor(e){this.name=e}}(e);t.name=e,console.log(t),L.push(t),B(t),N=JSON.parse(localStorage.getItem("projList")),N.push(t),localStorage.setItem("projList",JSON.stringify(N)),console.log(N.length),console.log(L)};localStorage.getItem("projList")||localStorage.setItem("projList",JSON.stringify(L)),(()=>{const e=document.querySelector(".sidebar-btn"),t=document.querySelector(".sidebar"),n=document.querySelector(".content");e.addEventListener("click",(()=>{t.classList.contains("inactive")&&e.classList.contains("inactive")?(t.classList.remove("inactive"),e.classList.remove("inactive"),n.style.marginLeft="250px"):(t.classList.add("inactive"),e.classList.add("inactive"),n.style.marginLeft="0px")}))})(),(()=>{const e=document.querySelector(".add-project"),t=document.querySelector("body"),n=document.createElement("div");n.className="popup";const o=document.createElement("form");o.setAttribute("method","post"),n.appendChild(o);const i=document.createElement("label");i.setAttribute("for","project-title"),i.textContent="Name",o.appendChild(i);const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","project-title"),r.setAttribute("name","project-title"),r.setAttribute("maxlength","30"),o.appendChild(r);const a=document.createElement("div");a.className="overlay";const A=document.createElement("h3");A.textContent="Add project",n.insertBefore(A,o);const c=document.createElement("div");c.className="buttons",o.appendChild(c);const d=document.createElement("button");d.textContent="Cancel",d.className="cancel",c.appendChild(d);const s=document.createElement("button");s.textContent="Add",s.className="add",c.appendChild(s),t.appendChild(n),t.appendChild(a),e.addEventListener("click",(()=>{n.classList.add("active"),a.classList.add("active")})),d.addEventListener("click",(()=>{event.preventDefault(),n.classList.remove("active"),a.classList.remove("active")})),s.addEventListener("click",(()=>{event.preventDefault(),""==r.value?alert("Please enter a name for your project"):(n.classList.remove("active"),a.classList.remove("active"),Y())})),r.addEventListener("keydown",(e=>{/^[A-Za-z]*$/.test(e.key)||e.preventDefault()}))})(),(()=>{const e=document.querySelector(".add-todo"),t=document.querySelector("body"),n=document.createElement("div");n.className="todo-popup";const o=document.createElement("form");o.setAttribute("method","post"),n.appendChild(o);const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("id","todo-title"),i.setAttribute("name","todo-title"),i.setAttribute("placeholder","Task name"),o.appendChild(i);const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","desc"),r.setAttribute("name","desc"),r.setAttribute("placeholder","Description"),o.appendChild(r);const a=document.querySelector(".overlay"),A=document.createElement("div");A.className="buttons",o.appendChild(A);const c=document.createElement("div");c.className="leftBtns",A.appendChild(c);const d=document.createElement("div");d.className="rightBtns",A.appendChild(d);const s=document.createElement("input");s.setAttribute("type","date"),s.setAttribute("id","date"),s.setAttribute("name","date"),c.appendChild(s);const l=document.createElement("select");l.textContent="Priority";const p=document.createElement("option"),u=document.createElement("option"),C=document.createElement("option");p.textContent="high",u.textContent="medium",C.textContent="low",l.className="priority",l.appendChild(p),l.appendChild(u),l.appendChild(C),c.appendChild(l);const m=document.createElement("button");m.textContent="Cancel",m.className="cancel",d.appendChild(m);const E=document.createElement("button");E.textContent="Add",E.className="add",d.appendChild(E);const f=document.createElement("div");f.className="dropdowns",A.insertAdjacentElement("afterend",f);const x=document.createElement("select");f.appendChild(x),x.setAttribute("name","projectSelect"),x.id="projectSelect",e.addEventListener("click",(()=>{n.classList.add("active"),a.classList.add("active"),x.replaceChildren();const e=document.querySelector(".projects-container").querySelectorAll(".project");for(let t=0;t<e.length;t++){const n=document.createElement("option");n.textContent=e[t].textContent,x.appendChild(n)}})),m.addEventListener("click",(()=>{event.preventDefault(),n.classList.remove("active"),a.classList.remove("active"),x.replaceChildren()})),E.addEventListener("click",(()=>{event.preventDefault(),n.classList.remove("active"),a.classList.remove("active"),v()})),l.addEventListener("click",(()=>{event.preventDefault()})),t.appendChild(n)})();const q=JSON.parse(localStorage.getItem("projList"));0!==q.length&&q.forEach((e=>{L.push(e),console.log(L),B(e)}));const O=JSON.parse(localStorage.getItem("todoList"));console.log(O),0!==O.length&&O.forEach((e=>{b.push(e),h(e)}))})();
//# sourceMappingURL=main.js.map