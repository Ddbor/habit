"use strict";(self.webpackChunk_ddbor_habit=self.webpackChunk_ddbor_habit||[]).push([[625],{69517:function(Vt,je,h){h.r(je),h.d(je,{HabitColumnSetting:function(){return ht},HabitDragSortTable:function(){return Ht},HabitMultipleSelect:function(){return bt},HabitRangePicker:function(){return Je},HabitTimeSelecto:function(){return Mt},HabitWeekTimeSelecto:function(){return $t},arrayMoveImmutable:function(){return ie},arrayMoveMutable:function(){return Ge},deepFindItem:function(){return ze},groupHabitColumns:function(){return Ie},habitColumnsCopy:function(){return Q},habitSortColumns:function(){return q},sortGroupHabitColumns:function(){return Fe}});var We=h(57213),d=h.n(We),Le=h(54306),w=h.n(Le),Ye=h(28001),ke=h(7553),J=h(54223),ve=h(16328),Qe=h(58290),Ne=h(71583),Ee=h(17852),v=h(85170),Ue=h(74637),B=h.n(Ue),t=h(43010),he=function(){return[{label:"\u4ECA\u65E5",value:[B()(),B()()]},{label:"\u6628\u65E5",value:[B()().subtract(1,"d"),B()().subtract(1,"d")]}]},Je=function(e){var n=e.value,a=e.popoverProps,r=e.buttonProps,o=e.presetsButtonProps,s=e.subtmitButtonProps,i=e.cancelButtonProps,u=e.presets,g=e.startDatePickerProps,b=e.endDatePickerProps,x=e.format,S=x===void 0?"YYYY-MM-DD":x,y=e.compared,j=e.onChange,f=(0,v.useState)(["",""]),C=w()(f,2),m=C[0],p=C[1],N=(0,v.useState)(n),I=w()(N,2),F=I[0],M=I[1],Y=(0,v.useState)(["",""]),W=w()(Y,2),V=W[0],G=W[1],A=(0,v.useState)(!1),H=w()(A,2),P=H[0],E=H[1],O=(0,v.useMemo)(function(){return typeof y=="boolean"},[y]),le=(0,v.useState)(!1),ue=w()(le,2),L=ue[0],ce=ue[1];(0,v.useEffect)(function(){ce(O?y:null)},[y,O]);var _=(0,v.useMemo)(function(){return O&&!y},[O,y]),pe=(0,v.useMemo)(function(){return O&&!L},[O,L]),xe=(0,v.useMemo)(function(){return P?180:0},[P]),U=(0,v.useMemo)(function(){var c,k;if(O){var $,z;return[(($=he().find(function(te){return B()(te.value[0]).isSame(n[0],"d")}))===null||$===void 0?void 0:$.label)||m[0],_?"":((z=he().find(function(te){return B()(te.value[0]).isSame(n[1],"d")}))===null||z===void 0?void 0:z.label)||m[1]]}var ee=(c=u||[])===null||c===void 0||(k=c.concat(he()).find(function(te){return B()(te.value[0]).isSame(n[0],"d")&&B()(te.value[1]).isSame(n[1],"d")}))===null||k===void 0?void 0:k.label;return[ee||m[0],ee?"":m[1]]},[n,u,_,O,m]),de=(0,v.useMemo)(function(){return{textAlign:U[1]?"center":"left"}},[U]),be=(0,v.useCallback)(function(c){return c?c>B()().endOf("d"):!1},[F[1]]),ye=(0,v.useCallback)(function(c){return c?L?c>B()().endOf("d"):F[0]&&c<F[0]||c>B()().endOf("d"):!1},[F[0],L]);(0,v.useEffect)(function(){M(n);var c=[B()(n[0]).format(S),B()(n[1]).format(S)];p(c),G(c)},[n,P]);var Ce=function(k,$){var z=[k,F[1]];k>F[1]&&(z[1]=B()(k)),M(z),G([$,B()(z[1]).format(S)])},K=function(k,$){M([F[0],k]),G([V[0],$])},D=function(k){r!=null&&r.disabled?E(!1):E(k)},Z=function(){E(!1),j==null||j(F,V,L)},T=function(k){M(k.value);var $=[B()(k.value[0]).format(S),B()(k.value[1]).format(S)];G($),E(!1),j==null||j(k.value,$,L)},R=(0,v.useCallback)(function(){return u==null?void 0:u.map(function(c,k){return typeof c.label=="string"?(0,t.jsx)("div",{className:"habit-range-picker-popover-presets-item",children:(0,t.jsx)(J.ZP,d()(d()({type:"link",size:"small",style:{padding:0,textAlign:"left",width:"100%"},onClick:function(){return T(c)}},o),{},{children:c.label}))},k):c.label})},[u]);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(ve.Z,d()(d()({trigger:"click",placement:"bottom",open:P,getPopupContainer:function(k){return k},overlayInnerStyle:{padding:0}},a),{},{onOpenChange:D,content:(0,t.jsxs)("div",{className:"habit-range-picker-popover-content",children:[(0,t.jsxs)("div",{className:"habit-range-picker-popover-head",children:[(0,t.jsxs)("div",{className:"habit-range-picker-popover-head-title",children:[(0,t.jsx)("div",{children:"\u9009\u62E9\u65E5\u671F:"}),O&&(0,t.jsxs)("div",{className:"habit-range-picker-popover-head-switch",children:[(0,t.jsx)("span",{children:"\u5BF9\u6BD4"}),(0,t.jsx)(Qe.Z,{size:"small",checked:!!L,onChange:function(k){return ce(k)}})]})]}),(0,t.jsxs)("div",{className:"habit-range-picker-popover-date",children:[(0,t.jsx)(Ne.Z,d()({showToday:!1,allowClear:!1,size:"small",value:F[0],disabledDate:be,onChange:Ce},g)),(0,t.jsx)("span",{className:"habit-range-picker-popover-date-separator",children:"-"}),(0,t.jsx)(Ne.Z,d()(d()({showToday:!1,allowClear:!1,size:"small",placement:"bottomRight",value:F[1],disabledDate:ye,onChange:K},b),{},{disabled:pe}))]})]}),(0,t.jsx)(Ee.Z,{style:{margin:0}}),u&&u.length&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"habit-range-picker-popover-presets",children:[(0,t.jsx)("div",{className:"habit-range-picker-popover-presets-title",children:"\u5FEB\u6377\u65E5\u671F:"}),(0,t.jsx)("div",{className:"habit-range-picker-popover-presets-list",children:R()})]}),(0,t.jsx)(Ee.Z,{style:{margin:0}})]}),(0,t.jsxs)("div",{className:"habit-range-picker-popover-footer",children:[(0,t.jsx)(J.ZP,d()(d()({size:"small"},i),{},{style:{marginRight:"8px"},onClick:function(){E(!1)},children:"\u53D6\u6D88"})),(0,t.jsx)(J.ZP,d()(d()({type:"primary",size:"small"},s),{},{onClick:function(){return Z()},children:"\u786E\u5B9A"}))]})]}),children:(0,t.jsx)("div",{className:"habit-range-picker",children:(0,t.jsx)(J.ZP,d()(d()({},r),{},{onClick:function(){return E(!P)},children:(0,t.jsxs)("div",{className:"habit-range-picker-button",children:[(0,t.jsx)(Ye.Z,{style:{color:"#999"}}),(0,t.jsxs)("div",{className:"habit-range-picker-button-text",children:[(0,t.jsx)("span",{className:"habit-range-picker-button-text-item",style:de,children:U[0]}),U[1]&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"habit-range-picker-button-text-separator",children:O?"\u5BF9\u6BD4":"-"}),(0,t.jsx)("span",{className:"habit-range-picker-button-text-item",style:de,children:U[1]})]})]}),(0,t.jsx)(ke.Z,{style:{color:"#999",transform:"rotate(".concat(xe,"deg)"),transition:"all 0.3s"}})]})}))})}))})},Xe=h(25359),re=h.n(Xe),qe=h(49811),De=h.n(qe),_e=h(12342),fe=h.n(_e),we=h(71953),Ae=h(75445),et=h(8505),tt=h(49070),Te=h(59282),me=h(94986),Ie=function(e){return e.reduce(function(n,a){var r=a.properties.groupName,o=a.properties.groupOrder;return n[r]||(n[r]={groupName:r,groupOrder:o,columns:[]}),n[r].columns.push(a),n},{})},Fe=function(e){return Object.values(Ie(e)).sort(function(n,a){return n.groupOrder-a.groupOrder})},Oe=function(e){return typeof e.order=="number"?e.order:1/0},q=function(e){return e.filter(function(n){return n.show}).sort(function(n,a){return Oe(n)-Oe(a)})},Q=function(e){return e.map(function(n){return d()({},n)})},nt=(0,Te.W8)(function(l){var e=l.value;return(0,t.jsx)("div",{className:"habit-column-setting-drag-item",style:{backgroundImage:'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAAAt0lEQVR4Ae3BQQ3EMAxE0d8MDRMKEUtGFMlESig0RtoiaA697ntXVU3bzUNSrrVuXlTVtN08JOWw3UAAYbs5sN1AAGG7Bx8NSQlsYEtKDiQlsIEtKfnjqqppu3lIyrXWzYuqmrabh6QcthsIIGw3B7YbCCBs9+CjISmBDWxJyYGkBDawJSV/XFU1bTcPSbnWunlRVdN285CUw3YDAYTt5sB2AwGE7R58NCQlsIEtKTmQlMAGtqT8AT13ZKKS1qIVAAAAAElFTkSuQmCC")'},children:(0,t.jsx)(t.Fragment,{children:e==null?void 0:e.title})})}),rt=(0,Te.JN)(function(l){var e=l.children;return(0,t.jsx)("div",{className:"habit-column-setting-drag-box",children:e})}),at=function(e){var n=e.dataSource,a=e.onSortEnd,r=(0,me.J)(function(o){var s=o.oldIndex,i=o.newIndex;if(s!==i){var u=ie({array:Q(n),fromIndex:s,toIndex:i});u.forEach(function(g,b){g.order=b}),a==null||a(u)}});return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(rt,{lockAxis:"y",lockToContainerEdges:!0,onSortEnd:r,children:n.map(function(o,s){return(0,t.jsx)(nt,{index:s,value:o},o.key)})})})},ae=h(31762),ot=h(89058),st={color:"#ccc",cursor:"pointer",fontSize:"14px",marginLeft:"2px",verticalAlign:"middle"},Pe=function(e){return e.every(function(n){return n.show})},it=function(e){return e.some(function(n){return n.show})&&!Pe(e)},lt=function(e,n){return!n||typeof e!="string"?!1:e.includes(n)},ut=function(e){var n=e.dataSource,a=e.filterTitle,r=e.max,o=r===void 0?1/0:r,s=e.sortColumns,i=s===void 0?[]:s,u=e.onChange,g=(0,v.useState)([]),b=w()(g,2),x=b[0],S=b[1],y=(0,v.useMemo)(function(){return i.length>=o},[o,i]);(0,v.useEffect)(function(){S(Fe(Q(n)))},[n]);var j=function(C,m){var p=C.target.checked,N=Q(n),I=i.length;m.forEach(function(F){if(!(p&&I>=o||F!=null&&F.disable)){var M=N.findIndex(function(Y){return Y.key===F.key});N[M].show=p,p?I++:delete N[M].order}}),u==null||u(N)};return(0,t.jsx)(t.Fragment,{children:x.map(function(f,C){return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"habit-column-setting-left-cont-title",children:(0,t.jsx)(ae.Z,{indeterminate:it(f.columns),checked:Pe(f.columns),onChange:function(p){return j(p,f.columns)},children:(0,t.jsx)("span",{className:"habit-column-setting-checkbox-label",children:f.groupName})})}),(0,t.jsx)("div",{className:"habit-column-setting-checkbox-list clearfix",children:f.columns.map(function(m){return(0,t.jsxs)("div",{className:"habit-column-setting-checkbox-item ".concat(lt(m.title,a)?"habit-column-setting-checkbox-item-active":""),children:[(0,t.jsx)(ae.Z,{checked:m.show,disabled:m.disable||y&&!m.show,onChange:function(N){return j(N,[m])},children:(0,t.jsx)("span",{className:"habit-column-setting-checkbox-label",children:m==null?void 0:m.title})}),m.description&&(0,t.jsx)(ve.Z,{content:m.description,overlayInnerStyle:{maxWidth:200},children:(0,t.jsx)(ot.Z,{style:st})})]},m.key)})})]},C.toString())})})},Ke=h(75736),ct=["columns","open","max","min","onOk","persistenceKey","persistenceType","extraContent"],dt=we.Z.Search,vt=Ae.Z.useToken,ht=function(e){var n=e.columns,a=e.open,r=e.max,o=e.min,s=o===void 0?1:o,i=e.onOk,u=e.persistenceKey,g=e.persistenceType,b=e.extraContent,x=fe()(e,ct),S=x.onClose,y=(0,v.useState)([]),j=w()(y,2),f=j[0],C=j[1],m=(0,v.useState)([]),p=w()(m,2),N=p[0],I=p[1],F=(0,v.useState)(""),M=w()(F,2),Y=M[0],W=M[1],V=(0,v.useRef)([]),G=(0,v.useState)(!0),A=w()(G,2),H=A[0],P=A[1],E=(0,v.useMemo)(function(){return!u||!g||typeof window=="undefined"},[u,g]),O=vt(),le=O.token,ue=(0,v.useState)(!1),L=w()(ue,2),ce=L[0],_=L[1],pe=(0,v.useCallback)(function(K){if(E)return K;var D=window[g];try{var Z=D==null?void 0:D.getItem(u);if(Z){var T=JSON.parse(Z),R=Q(K);return R.forEach(function(c){var k,$,z,ee;c.show=(k=T==null||($=T[c.key])===null||$===void 0?void 0:$.show)!==null&&k!==void 0?k:c.show,c.order=(z=T==null||(ee=T[c.key])===null||ee===void 0?void 0:ee.order)!==null&&z!==void 0?z:c.order}),R}}catch(c){console.warn(c)}return K},[u,g,E]),xe=(0,v.useCallback)(function(K){if(!E){var D=window[g];try{var Z=K.reduce(function(T,R){return T[R.key]={show:R.show,order:R.order},T},{});D==null||D.setItem(u,JSON.stringify(Z))}catch(T){console.warn(T)}}},[u,g,E]),U=function(D,Z){return D.map(function(T){var R=Z.find(function(k){return k.key===T.key}),c=d()(d()({},T),{},{show:!!R});return R&&(c.order=R.order),c})};(0,v.useEffect)(function(){if(a){var K=n;V.current=K,P(!1),C(q(Q(V.current))),I(V.current)}},[a,n]),(0,v.useEffect)(function(){if(!a&&H&&!E){var K=pe(n);P(!1),i==null||i(U(K,q(Q(K))))}},[H,E,a,n]);var de=function(D){W(D)},be=function(D){C(q(D.map(function(Z){var T;return d()(d()({},Z),{},{order:(T=f.find(function(R){return R.key===Z.key}))===null||T===void 0?void 0:T.order})}))),I(D)},ye=function(){var D=Q(V.current);D.forEach(function(Z){Z.disable||(Z.show=!1,delete Z.order)}),C(q(D)),I(D)},Ce=function(){var K=De()(re()().mark(function D(Z){var T;return re()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!(typeof s=="number"&&f.length<s)){c.next=3;break}return _(!0),c.abrupt("return");case 3:if(!(typeof r=="number"&&f.length>r)){c.next=6;break}return _(!0),c.abrupt("return");case 6:return T=U(V.current,f),_(!1),xe(T),c.next=11,i==null?void 0:i(T);case 11:if(c.t0=c.sent,c.t0===!1){c.next=14;break}S==null||S(Z);case 14:case"end":return c.stop()}},D)}));return function(Z){return K.apply(this,arguments)}}();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(et.Z,d()(d()({title:"\u9009\u62E9\u6570\u636E\u5B57\u6BB5",placement:"right",width:1e3,bodyStyle:{padding:"16px 24px",backgroundColor:"#f9f9f9"},footer:(0,t.jsxs)(tt.Z,{children:[(0,t.jsx)(J.ZP,{type:"default",onClick:S,children:"\u53D6\u6D88"}),(0,t.jsx)(J.ZP,{type:"primary",onClick:Ce,children:"\u786E\u5B9A"}),ce&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Ke.Z,{style:{color:le.colorError,fontSize:12}}),(0,t.jsxs)("span",{style:{color:le.colorError,fontSize:12},children:["\u8BF7",typeof s=="number"?"\u81F3\u5C11\u9009\u62E9 ".concat(s," \u4E2A\u6307\u6807"):"",typeof s=="number"&&typeof r=="number"&&"\uFF0C",typeof r=="number"?"\u81F3\u591A\u9009\u62E9 ".concat(r," \u4E2A\u6307\u6807"):""]})]})]}),open:a},x),{},{children:(0,t.jsxs)("div",{className:"habit-column-setting-body",children:[(0,t.jsxs)("div",{className:"habit-column-setting-left",children:[(0,t.jsx)("div",{className:"habit-column-setting-left-head",children:(0,t.jsx)(dt,{placeholder:"\u641C\u7D22\u6570\u636E\u5B57\u6BB5",allowClear:!0,style:{width:200},onSearch:de})}),(0,t.jsx)("div",{className:"habit-column-setting-left-cont",children:(0,t.jsx)(ut,{max:r,sortColumns:f,dataSource:N,filterTitle:Y,onChange:be})})]}),(0,t.jsxs)("div",{className:"habit-column-setting-right",children:[(0,t.jsxs)("div",{className:"habit-column-setting-right-head",children:[(0,t.jsxs)("span",{className:"habit-column-setting-checkbox-label",children:["\u5DF2\u9009\uFF08",f.length,r?" / ".concat(r):null,"\uFF09\u9879"]}),(0,t.jsx)("a",{className:"habit-column-setting-right-a",onClick:ye,children:"\u6E05\u7A7A"}),b]}),(0,t.jsx)("div",{className:"habit-column-setting-right-alert",children:"\u62D6\u52A8\u4EE5\u4E0B\u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F"}),(0,t.jsx)(at,{dataSource:f,onSortEnd:function(D){return C(q(D))}})]})]})}))})},ft=h(53911),mt=h(55457),gt=h(79131),St=h(21503),pt=we.Z.Search,xt=Ae.Z.useToken,bt=function(e){var n=e.popoverProps,a=e.buttonProps,r=e.searchProps,o=e.className,s=e.value,i=e.style,u=e.onChange,g=e.options,b=g===void 0?[]:g,x=e.buttonText,S=e.showSearch,y=S===void 0?!0:S,j=(0,v.useState)(!1),f=w()(j,2),C=f[0],m=f[1],p=(0,v.useState)(""),N=w()(p,2),I=N[0],F=N[1],M=(0,v.useMemo)(function(){return b.filter(function(E){return E.label.includes(I)})},[I,b]),Y=(0,v.useState)(!1),W=w()(Y,2),V=W[0],G=W[1],A=xt(),H=A.token,P={color:H.colorTextQuaternary,fontSize:H.fontSizeIcon};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(ve.Z,d()(d()({open:C,onOpenChange:m,placement:"bottom",trigger:"click",overlayStyle:{width:250}},n),{},{content:(0,t.jsxs)(t.Fragment,{children:[!!y&&(0,t.jsx)(pt,d()(d()({placeholder:"\u540D\u79F0\u641C\u7D22",className:"habit-multiple-select-search",allowClear:!0,size:"small"},r),{},{value:I,onChange:function(O){return F(O.target.value)}})),(0,t.jsx)(ae.Z.Group,{value:s,onChange:u,children:(0,t.jsx)(ft.Z,{gutter:[0,10],children:M.map(function(E){return(0,t.jsx)(mt.Z,{span:24,children:(0,t.jsx)(ae.Z,{value:E.value,children:E.label})},E.value)})})}),!M.length&&(0,t.jsx)(gt.Z,{description:!1})]}),children:(0,t.jsx)(J.ZP,d()(d()({className:"habit-multiple-select-button ".concat(o),style:i},a),{},{onMouseEnter:function(){return G(!0)},onMouseLeave:function(){return G(!1)},children:(0,t.jsxs)("div",{className:"habit-multiple-select-button-content",children:[(0,t.jsx)("span",{children:x}),s!=null&&s.length?V?(0,t.jsx)(Ke.Z,{className:"habit-multiple-select-icon",style:P,onClick:function(O){O.stopPropagation(),u==null||u([])}}):(0,t.jsx)(St.Z,{className:"habit-multiple-select-icon",count:s==null?void 0:s.length,showZero:!0,size:"small",color:H.colorPrimary}):(0,t.jsx)(ke.Z,{className:"habit-multiple-select-icon",style:P})]})}))}))})},yt=h(65854),ge=h.n(yt),Ct=h(43014),jt=h(46996),X=h(87966),Se=h(41485),kt=h(40202),Nt=function l(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"children",a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"treeKey",r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:[];return e.forEach(function(o){o[a]&&r.push(o[a]),Array.isArray(o[n])&&l(o[n],n,a,r)}),r},Et=function(e,n,a){var r=[n.id,a.id].map(function(g){return g.toString().split("-")}),o=w()(r,2),s=o[0],i=o[1];if(s.length===i.length&&s.length===1){var u=ie({array:e,fromIndex:parseInt(s[0]),toIndex:parseInt(i[0])});return{data:u,status:!0}}return{data:e,status:!1}},oe=function(e,n,a){return e.reduce(function(r,o){return Array.isArray(r)?r[Number(o)]:r[a][Number(o)]},n)},se=function(e,n,a,r){var o=[n.id,a.id].map(function(S){return S.toString().split("-")}),s=w()(o,2),i=s[0],u=s[1],g=i.pop(),b=u.pop();if(i.length!==u.length||!i.length||i.join(",")!==u.join(","))return{data:e,status:!1};var x=oe(i,e,r);return x[r]=ie({array:x[r],fromIndex:parseInt(g),toIndex:parseInt(b)}),{data:e,status:!0}},Dt=h(93525),ne=h.n(Dt),wt=function(e,n){for(var a=!1,r=0;r<e.length;r++){var o=e[r],s=n[r];if(o!==s)if(typeof s=="undefined"||o>s){a=!0;break}else{a=!1;break}}return a?"up":"down"},Ze=function(e,n,a){var r=ne()(n),o=parseInt(r.pop());if(!r.length)e.splice(o,1);else{var s=oe(r,e,a);s[a].splice(o,1)}},Be=function(e,n,a,r,o){var s=ne()(n),i=parseInt(s.pop());if(o==="down"&&(i+=1),!s.length)e.splice(i,0,r);else{var u=oe(s,e,a);u[a].splice(i,0,r)}},He=function(e,n,a,r){var o=ne()(e),s=oe(n,e,r),i=wt(n,a);return i==="up"?(Ze(o,n,r),Be(o,a,r,s,i)):(Be(o,a,r,s,i),Ze(o,n,r)),o},At=function(e,n,a,r){var o=se(e,n,a,r);if(o.status)return o;var s=se(e,n,a,r);if(s.status)return s;var i=[n.id,a.id].map(function(x){return x.toString().split("-")}),u=w()(i,2),g=u[0],b=u[1];return{data:He(e,g,b,r),status:!0}},Tt=function(e,n,a,r){var o=se(e,n,a,r);if(o.status)return o;var s=ne()(e),i=[n.id,a.id].map(function(x){return x.toString().split("-")}),u=w()(i,2),g=u[0],b=u[1];return g.length!==b.length?{data:s,status:!1}:{data:He(s,g,b,r),status:!0}},Me=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"children",a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"treeKey",r=function o(s,i,u){var g=u!==void 0?"".concat(u,"-").concat(i):String(i);s[a]=g;var b=s[n];Array.isArray(b)&&s[n].forEach(function(x,S){o(x,S,g)})};return e.forEach(function(o,s){r(o,s)}),e},It=["DragHandle","dragSortKey"],Re=(0,v.createContext)({handle:null}),Ft=function(e){var n=(0,Se.nB)({id:e.id}),a=n.attributes,r=n.listeners,o=n.setNodeRef,s=n.transform,i=n.transition,u=d()({transform:kt.ux.Transform.toString(s),transition:i},e==null?void 0:e.style),g=e.DragHandle,b=e.dragSortKey,x=fe()(e,It);if(b){var S=[];return v.Children.forEach(x.children,function(y,j){if(y.key===b){var f,C;S.push((0,t.jsx)(Re.Provider,{value:{handle:(0,t.jsx)(g,d()(d()({rowdata:y==null||(f=y.props)===null||f===void 0?void 0:f.record,index:y==null||(C=y.props)===null||C===void 0?void 0:C.index},r),a))},children:y},y.key||j));return}S.push(y)}),(0,t.jsx)("tr",d()(d()({},x),{},{ref:o,style:u,children:S}))}return(0,t.jsx)("tr",d()(d()(d()({},x),{},{ref:o,style:u},a),r))},Ot=v.memo(function(l){var e=Object.assign({},(ge()(l),l)),n=(0,v.useContext)(Re),a=n.handle;return a?(0,t.jsx)("td",d()(d()({},e),{},{children:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[a," ",e.children]})})):(0,t.jsx)("td",d()({},e))}),Pt=function(e){return(0,t.jsx)("tbody",d()({},e))};function Kt(l){var e=l.dataSource,n=e===void 0?[]:e,a=l.onDragSortEnd,r=l.DragHandle,o=l.dragSortKey,s=l.sortType,i=l.childrenColumnName,u=l.treeKeyName,g=(0,X.Dy)((0,X.VT)(X.we),(0,X.VT)(X.MA));function b(f){var C,m=f.active,p=f.over;if(!(!(p!=null&&(C=p.id)!==null&&C!==void 0&&C.toString())||m.id===(p==null?void 0:p.id))){var N=Et(n,m,p);if(N.status){a==null||a(N.data,N.status);return}s==="freeSort"?N=At(n,m,p,i):s==="groupSort"?N=Tt(n,m,p,i):s==="treeSort"&&(N=se(n,m,p,i)),a==null||a(N.data,N.status)}}var x=(0,me.J)(function(f){return(0,t.jsx)(Se.Fo,{items:Nt(n,i,u),strategy:Se.qw,children:(0,t.jsx)(Pt,d()({},f))})}),S=(0,me.J)(function(f){var C,m=Object.assign({},(ge()(f),f)),p=ze(n,i,function(N){var I;return N[(I=l.rowKey)!==null&&I!==void 0?I:"index"]===m["data-row-key"]});return(0,t.jsx)(Ft,d()({id:p[u],dragSortKey:o,DragHandle:r},m),p[(C=l.rowKey)!==null&&C!==void 0?C:"index"])}),y=l.components||{};if(o){var j;y.body=d()(d()({},((j=l.components)===null||j===void 0?void 0:j.body)||{}),{},{wrapper:x,row:S,cell:Ot})}return{DndContext:function(C){return(0,t.jsx)(X.LB,{sensors:g,collisionDetection:X.pE,onDragEnd:b,children:C.children})},components:y}}var Zt=h(7906),Bt=["dataSource","defaultData","onDataSourceChange","onLoad","rowKey","dragSortKey","onDragSortEnd","dragSortHandlerRender","sortType","childrenColumnName","treeKeyName"],Ht=function(e){var n,a=e.dataSource,r=e.defaultData,o=e.onDataSourceChange,s=e.onLoad,i=e.rowKey,u=e.dragSortKey,g=e.onDragSortEnd,b=e.dragSortHandlerRender,x=e.sortType,S=x===void 0?"default":x,y=e.childrenColumnName,j=y===void 0?"children":y,f=e.treeKeyName,C=f===void 0?"treeKey":f,m=fe()(e,Bt),p=(0,jt.Z)(function(){return Me(r||[])},{value:Me(a),onChange:o}),N=w()(p,2),I=N[0],F=N[1],M=function(){var A=De()(re()().mark(function H(P){return re()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return F(P),O.abrupt("return",s==null?void 0:s(P));case 2:case"end":return O.stop()}},H)}));return function(P){return A.apply(this,arguments)}}(),Y=(0,v.useMemo)(function(){return function(A){var H=Object.assign({},(ge()(A),A)),P=(0,t.jsx)(Zt.Z,d()(d()({},H),{},{className:"habit-drag-sort-table-icon"})),E=b?b(A==null?void 0:A.rowdata,A==null?void 0:A.index,H):P;return(0,t.jsx)(t.Fragment,{children:E})}},[]),W=Kt({dataSource:I==null?void 0:I.slice(),dragSortKey:u,onDragSortEnd:g,components:e.components,rowKey:i,DragHandle:Y,sortType:S,childrenColumnName:j,treeKeyName:C}),V=W.components,G=W.DndContext;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(Ct.Z,d()(d()({},m),{},{columns:(n=m.columns)===null||n===void 0?void 0:n.map(function(A){return(A.dataIndex===u||A.key===u)&&(A.render||(A.render=function(){return null})),A}),rowKey:i,onLoad:M,dataSource:I,onDataSourceChange:o,components:V,tableViewRender:function(H,P){return(0,t.jsx)(G,{children:P})}}))})},$e=function(e){var n=e.className,a=n===void 0?"":n,r=e.hourClassName,o=r===void 0?"":r;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("ul",{className:a,children:[(0,t.jsx)("li",{children:"00:00 - 06:00"}),(0,t.jsx)("li",{children:"06:00 - 12:00"}),(0,t.jsx)("li",{children:"12:00 - 18:00"}),(0,t.jsx)("li",{children:"18:00 - 24:00"})]}),(0,t.jsx)("ul",{className:o,children:Array.from({length:24}).fill(void 0).map(function(s,i){return(0,t.jsx)("li",{children:i},i)})})]})},Ve=h(54844),Mt=function(e){var n=e.options,a=n===void 0?{}:n,r=e.events,o=e.content,s=(0,v.useState)(),i=w()(s,2),u=i[0],g=i[1],b=(0,v.useState)(),x=w()(b,2),S=x[0],y=x[1];return(0,v.useEffect)(function(){if(S){var j=new Ve.ZP(d()({container:S,rootContainer:null,dragContainer:S,boundContainer:S,selectableTargets:["li"],selectByClick:!0,selectFromInside:!0,continueSelect:!1,toggleContinueSelect:"shift",keyContainer:window,hitRate:0},a));g(j)}},[S]),(0,v.useEffect)(function(){if(u&&r){var j=Object.keys(r);j.forEach(function(f){u.on(f,r[f])})}},[u,r]),(0,t.jsxs)("div",{className:"habit-selecto",children:[(0,t.jsx)($e,{className:"habit-selecto-split",hourClassName:"habit-selecto-hour"}),(0,t.jsx)("ul",{className:"habit-selecto-cont",ref:y,children:o})]})},Rt=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("ul",{className:"habit-selecto-week-left",children:[(0,t.jsx)("li",{className:"habit-selecto-week-title",children:"\u661F\u671F"}),(0,t.jsx)("li",{children:"\u4E00"}),(0,t.jsx)("li",{children:"\u4E8C"}),(0,t.jsx)("li",{children:"\u4E09"}),(0,t.jsx)("li",{children:"\u56DB"}),(0,t.jsx)("li",{children:"\u4E94"}),(0,t.jsx)("li",{children:"\u516D"}),(0,t.jsx)("li",{children:"\u65E5"})]})})},$t=function(e){var n=e.options,a=n===void 0?{}:n,r=e.events,o=e.className,s=o===void 0?"":o,i=e.style,u=e.render,g=(0,v.useState)(),b=w()(g,2),x=b[0],S=b[1],y=(0,v.useState)(),j=w()(y,2),f=j[0],C=j[1];return(0,v.useEffect)(function(){if(f){var m=new Ve.ZP(d()({container:f,rootContainer:null,dragContainer:f,boundContainer:f,selectableTargets:["li"],selectByClick:!0,selectFromInside:!0,continueSelect:!1,toggleContinueSelect:"shift",keyContainer:window,hitRate:0},a));S(m)}},[f]),(0,v.useEffect)(function(){if(x&&r){var m=Object.keys(r);m.forEach(function(p){x.on(p,r[p])})}},[x,r]),(0,t.jsxs)("div",{style:i,className:"habit-selecto-week ".concat(s),children:[(0,t.jsx)(Rt,{}),(0,t.jsxs)("div",{className:"habit-selecto-week-right",children:[(0,t.jsx)($e,{className:"habit-selecto-week-split",hourClassName:"habit-selecto-week-hour"}),(0,t.jsx)("ul",{className:"habit-selecto-week-cont",ref:C,children:Array.from({length:7}).fill(null).map(function(m,p){return(0,t.jsx)(v.Fragment,{children:u(p)},p)})})]})]})};function Ge(l,e,n){var a=e<0?l.length+e:e;if(a>=0&&a<l.length){var r=n<0?l.length+n:n,o=l.splice(e,1),s=w()(o,1),i=s[0];l.splice(r,0,i)}}function ie(l){var e=l.array,n=l.fromIndex,a=l.toIndex,r=ne()(e);return Ge(r,n,a),r}var ze=function l(e,n,a){if(!Array.isArray(e))return null;for(var r=0;r<e.length;r++){var o=e[r];if(a(o,r,e))return o;var s=o[n];if(Array.isArray(s)){var i=l(s,n,a);if(i)return i}}return null}}}]);
