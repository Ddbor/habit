"use strict";(self.webpackChunk_ddbor_habit=self.webpackChunk_ddbor_habit||[]).push([[714],{48714:function(Vn,be,d){d.r(be),d.d(be,{HabitColumnSetting:function(){return on},HabitDragSortTable:function(){return Mn},HabitMultipleSelect:function(){return gn},HabitRangePicker:function(){return Le},arrayMoveImmutable:function(){return le},arrayMoveMutable:function(){return Me},deepFindItem:function(){return Ze},groupHabitColumns:function(){return Ae},habitColumnsCopy:function(){return Y},habitSortColumns:function(){return W},sortGroupHabitColumns:function(){return Ie}});var He=d(57213),c=d.n(He),Ve=d(54306),I=d.n(Ve),Ge=d(28001),Ce=d(7553),J=d(54223),je=d(16328),$e=d(58290),De=d(71583),ke=d(17852),v=d(85170),ze=d(74637),M=d.n(ze),n=d(43010),he=function(){return[{label:"\u4ECA\u65E5",value:[M()(),M()()]},{label:"\u6628\u65E5",value:[M()().subtract(1,"d"),M()().subtract(1,"d")]}]},Le=function(e){var t=e.value,r=e.popoverProps,a=e.buttonProps,o=e.presetsButtonProps,s=e.subtmitButtonProps,l=e.cancelButtonProps,u=e.presets,m=e.startDatePickerProps,S=e.endDatePickerProps,b=e.format,C=b===void 0?"YYYY-MM-DD":b,f=e.compared,T=e.onChange,p=(0,v.useState)(["",""]),j=I()(p,2),h=j[0],x=j[1],y=(0,v.useState)(t),P=I()(y,2),D=P[0],F=P[1],Q=(0,v.useState)(["",""]),G=I()(Q,2),L=G[0],$=G[1],E=(0,v.useState)(!1),Z=I()(E,2),B=Z[0],w=Z[1],k=(0,v.useMemo)(function(){return typeof f=="boolean"},[f]),Se=(0,v.useState)(""),ue=I()(Se,2),_=ue[0],de=ue[1],xe=(0,v.useState)(!1),ce=I()(xe,2),U=ce[0],ve=ce[1];(0,v.useEffect)(function(){ve(k?f:null)},[f,k]);var O=(0,v.useMemo)(function(){return k&&!f},[k,f]),N=(0,v.useMemo)(function(){return k&&!U},[k,U]),R=(0,v.useMemo)(function(){return B?180:0},[B]),K=(0,v.useMemo)(function(){var g,A;if(k){var z,ye;return[((z=he().find(function(ee){return M()(ee.value[0]).isSame(t[0],"d")}))===null||z===void 0?void 0:z.label)||h[0],O?"":((ye=he().find(function(ee){return M()(ee.value[0]).isSame(t[1],"d")}))===null||ye===void 0?void 0:ye.label)||h[1]]}if(_)return[_,""];var Re=(g=u||[])===null||g===void 0||(A=g.concat(he()).find(function(ee){return M()(ee.value[0]).isSame(t[0],"d")&&M()(ee.value[1]).isSame(t[1],"d")}))===null||A===void 0?void 0:A.label;return[Re||h[0],Re?"":h[1]]},[t,u,O,k,h,_]),H=(0,v.useMemo)(function(){return{textAlign:K[1]?"center":"left"}},[K]),V=(0,v.useCallback)(function(g){return g?N?g>M()().endOf("d"):U?g>M()().endOf("d")||D[1]&&g.isSame(D[1],"d"):D[1]&&g>D[1]:!1},[D[1],N]),q=(0,v.useCallback)(function(g){return g?U?g>M()().endOf("d")||D[0]&&g.isSame(D[0],"d"):D[0]&&g<D[0]||g>M()().endOf("d"):!1},[D[0]]);(0,v.useEffect)(function(){F(t);var g=[M()(t[0]).format(C),M()(t[1]).format(C)];x(g),$(g)},[t]);var te=function(A,z){F([A,D[1]]),$([z,L[1]])},re=function(A,z){F([D[0],A]),$([L[0],z])},ae=function(A){w(A)},Zn=function(){w(!1),T==null||T(D,L,U),de(null)},Rn=function(A){F(A.value);var z=[M()(A.value[0]).format(C),M()(A.value[1]).format(C)];$(z),w(!1),T==null||T(A.value,z,U),de(A==null?void 0:A.label)},Hn=(0,v.useCallback)(function(){return u==null?void 0:u.map(function(g,A){return typeof g.label=="string"?(0,n.jsx)("div",{className:"habit-range-picker-popover-presets-item",children:(0,n.jsx)(J.ZP,c()(c()({type:"link",size:"small",style:{padding:0,textAlign:"left",width:"100%"},onClick:function(){return Rn(g)}},o),{},{children:g.label}))},A):g.label})},[u]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(je.Z,c()(c()({trigger:"click",placement:"bottom",open:B,getPopupContainer:function(A){return A},overlayInnerStyle:{padding:0}},r),{},{onOpenChange:ae,content:(0,n.jsxs)("div",{className:"habit-range-picker-popover-content",children:[(0,n.jsxs)("div",{className:"habit-range-picker-popover-head",children:[(0,n.jsxs)("div",{className:"habit-range-picker-popover-head-title",children:[(0,n.jsx)("div",{children:"\u9009\u62E9\u65E5\u671F:"}),k&&(0,n.jsxs)("div",{className:"habit-range-picker-popover-head-switch",children:[(0,n.jsx)("span",{children:"\u5BF9\u6BD4"}),(0,n.jsx)($e.Z,{size:"small",checked:!!U,onChange:function(A){return ve(A)}})]})]}),(0,n.jsxs)("div",{className:"habit-range-picker-popover-date",children:[(0,n.jsx)(De.Z,c()({showToday:!1,allowClear:!1,size:"small",value:D[0],disabledDate:V,onChange:te},m)),(0,n.jsx)("span",{className:"habit-range-picker-popover-date-separator",children:"-"}),(0,n.jsx)(De.Z,c()(c()({showToday:!1,allowClear:!1,size:"small",placement:"bottomRight",value:D[1],disabledDate:q,onChange:re},S),{},{disabled:N}))]})]}),(0,n.jsx)(ke.Z,{style:{margin:0}}),u&&u.length&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"habit-range-picker-popover-presets",children:[(0,n.jsx)("div",{className:"habit-range-picker-popover-presets-title",children:"\u5FEB\u6377\u65E5\u671F:"}),(0,n.jsx)("div",{className:"habit-range-picker-popover-presets-list",children:Hn()})]}),(0,n.jsx)(ke.Z,{style:{margin:0}})]}),(0,n.jsxs)("div",{className:"habit-range-picker-popover-footer",children:[(0,n.jsx)(J.ZP,c()(c()({type:"primary",size:"small",style:{marginRight:"8px"}},s),{},{onClick:function(){return Zn()},children:"\u786E\u5B9A"})),(0,n.jsx)(J.ZP,c()(c()({size:"small"},l),{},{onClick:function(){return w(!1)},children:"\u53D6\u6D88"}))]})]}),children:(0,n.jsx)("div",{className:"habit-range-picker",children:(0,n.jsx)(J.ZP,c()(c()({},a),{},{htmlType:"reset",onClick:function(){return w(!B)},children:(0,n.jsxs)("div",{className:"habit-range-picker-button",children:[(0,n.jsx)(Ge.Z,{style:{color:"#999"}}),(0,n.jsxs)("div",{className:"habit-range-picker-button-text",children:[(0,n.jsx)("span",{className:"habit-range-picker-button-text-item",style:H,children:K[0]}),K[1]&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"habit-range-picker-button-text-separator",children:k?"\u5BF9\u6BD4":"-"}),(0,n.jsx)("span",{className:"habit-range-picker-button-text-item",style:H,children:K[1]})]})]}),(0,n.jsx)(Ce.Z,{style:{color:"#999",transform:"rotate(".concat(R,"deg)"),transition:"all 0.3s"}})]})}))})}))})},Ye=d(12342),fe=d.n(Ye),Ne=d(71953),Qe=d(8505),Ee=d(59282),ge=d(44963),Ae=function(e){return e.reduce(function(t,r){var a=r.properties.groupName,o=r.properties.groupOrder;return t[a]||(t[a]={groupName:a,groupOrder:o,columns:[]}),t[a].columns.push(r),t},{})},Ie=function(e){return Object.values(Ae(e)).sort(function(t,r){return t.groupOrder-r.groupOrder})},Te=function(e){return typeof e.order=="number"?e.order:1/0},W=function(e){return e.filter(function(t){return t.show}).sort(function(t,r){return Te(t)-Te(r)})},Y=function(e){return e.map(function(t){return c()({},t)})},Ue=(0,Ee.W8)(function(i){var e=i.value;return(0,n.jsx)("div",{className:"habit-column-setting-drag-item",style:{backgroundImage:'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAAAt0lEQVR4Ae3BQQ3EMAxE0d8MDRMKEUtGFMlESig0RtoiaA697ntXVU3bzUNSrrVuXlTVtN08JOWw3UAAYbs5sN1AAGG7Bx8NSQlsYEtKDiQlsIEtKfnjqqppu3lIyrXWzYuqmrabh6QcthsIIGw3B7YbCCBs9+CjISmBDWxJyYGkBDawJSV/XFU1bTcPSbnWunlRVdN285CUw3YDAYTt5sB2AwGE7R58NCQlsIEtKTmQlMAGtqT8AT13ZKKS1qIVAAAAAElFTkSuQmCC")'},children:(0,n.jsx)(n.Fragment,{children:e==null?void 0:e.title})})}),Je=(0,Ee.JN)(function(i){var e=i.children;return(0,n.jsx)("div",{className:"habit-column-setting-drag-box",children:e})}),We=function(e){var t=e.dataSource,r=e.onSortEnd,a=(0,ge.J)(function(o){var s=o.oldIndex,l=o.newIndex;if(s!==l){var u=le({array:Y(t),fromIndex:s,toIndex:l});u.forEach(function(m,S){m.order=S}),r==null||r(u)}});return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Je,{lockAxis:"y",lockToContainerEdges:!0,onSortEnd:a,children:t.map(function(o,s){return(0,n.jsx)(Ue,{index:s,value:o},o.key)})})})},oe=d(31762),Xe=d(25590),qe=d(89058),_e={color:"#ccc",cursor:"pointer",fontSize:"14px",marginLeft:"2px",verticalAlign:"middle"},we=function(e){return e.every(function(t){return t.show})},en=function(e){return e.some(function(t){return t.show})&&!we(e)},nn=function(e,t){return!t||typeof e!="string"?!1:e.includes(t)},tn=function(e){var t=e.dataSource,r=e.filterTitle,a=e.max,o=a===void 0?1/0:a,s=e.sortColumns,l=s===void 0?[]:s,u=e.onChange,m=(0,v.useState)([]),S=I()(m,2),b=S[0],C=S[1],f=(0,v.useMemo)(function(){return l.length>=o},[o,l]);(0,v.useEffect)(function(){C(Ie(Y(t)))},[t]);var T=function(j,h){var x=j.target.checked,y=Y(t),P=l.length;h.forEach(function(D){if(!(x&&P>=o||D!=null&&D.disable)){var F=y.findIndex(function(Q){return Q.key===D.key});y[F].show=x,x?P++:delete y[F].order}}),u==null||u(y)};return(0,n.jsx)(n.Fragment,{children:b.map(function(p,j){return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"habit-column-setting-left-cont-title",children:(0,n.jsx)(oe.Z,{indeterminate:en(p.columns),checked:we(p.columns),onChange:function(x){return T(x,p.columns)},children:(0,n.jsx)("span",{className:"habit-column-setting-checkbox-label",children:p.groupName})})}),(0,n.jsx)("div",{className:"habit-column-setting-checkbox-list clearfix",children:p.columns.map(function(h){return(0,n.jsxs)("div",{className:"habit-column-setting-checkbox-item ".concat(nn(h.title,r)?"habit-column-setting-checkbox-item-active":""),children:[(0,n.jsx)(oe.Z,{checked:h.show,disabled:h.disable||f&&!h.show,onChange:function(y){return T(y,[h])},children:(0,n.jsx)("span",{className:"habit-column-setting-checkbox-label",children:h==null?void 0:h.title})}),h.description&&(0,n.jsx)(Xe.Z,{title:h.description,children:(0,n.jsx)(qe.Z,{style:_e})})]},h.key)})})]},j.toString())})})},rn=["columns","open","max","onOk","persistenceKey","persistenceType"],an=Ne.Z.Search,on=function(e){var t=e.columns,r=e.open,a=e.max,o=e.onOk,s=e.persistenceKey,l=e.persistenceType,u=fe()(e,rn),m=u.onClose,S=(0,v.useState)([]),b=I()(S,2),C=b[0],f=b[1],T=(0,v.useState)([]),p=I()(T,2),j=p[0],h=p[1],x=(0,v.useState)(""),y=I()(x,2),P=y[0],D=y[1],F=(0,v.useRef)([]),Q=(0,v.useState)([]),G=I()(Q,2),L=G[0],$=G[1],E=(0,v.useState)(!0),Z=I()(E,2),B=Z[0],w=Z[1],k=(0,v.useMemo)(function(){return!s||!l||typeof window=="undefined"},[s,l]),Se=(0,v.useCallback)(function(O){if(k)return O;var N=window[l];try{var R=N==null?void 0:N.getItem(s);if(R){var K=JSON.parse(R),H=Y(O);return H.forEach(function(V){var q,te,re,ae;V.show=(q=K==null||(te=K[V.key])===null||te===void 0?void 0:te.show)!==null&&q!==void 0?q:V.show,V.order=(re=K==null||(ae=K[V.key])===null||ae===void 0?void 0:ae.order)!==null&&re!==void 0?re:V.order}),H}}catch(V){console.warn(V)}return O},[s,l,k]),ue=(0,v.useCallback)(function(O){if(!k){var N=window[l];try{var R=O.reduce(function(K,H){return K[H.key]={show:H.show,order:H.order},K},{});N==null||N.setItem(s,JSON.stringify(R))}catch(K){console.warn(K)}}},[s,l,k]),_=function(N,R){return N.map(function(K){var H=R.find(function(q){return q.key===K.key}),V=c()(c()({},K),{},{show:!!H});return H&&(V.order=H.order),V})};(0,v.useEffect)(function(){if(r){var O=t;F.current=O,w(!1),f(W(Y(F.current))),h(F.current)}},[r,t]),(0,v.useEffect)(function(){if(!r&&B&&!k){var O=Se(t);$(O),w(!1),o==null||o(_(O,W(Y(O))))}},[B,k,r,t]);var de=function(N){D(N)},xe=function(N){f(W(N)),h(N)},ce=function(){f(W(Y(L))),h(L)},U=function(){var N=Y(F.current);N.forEach(function(R){R.disable||(R.show=!1,delete R.order)}),f(W(N)),h(N)},ve=function(N){var R=_(F.current,C);ue(R),o==null||o(R),m==null||m(N)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Qe.Z,c()(c()({title:"\u9009\u62E9\u6570\u636E\u5B57\u6BB5",placement:"right",width:1e3,bodyStyle:{padding:"16px 24px",backgroundColor:"#f9f9f9"},footer:(0,n.jsxs)("div",{children:[(0,n.jsx)(J.ZP,{type:"primary",style:{marginRight:15},onClick:ve,children:"\u786E\u5B9A"}),(0,n.jsx)(J.ZP,{type:"default",onClick:m,children:"\u53D6\u6D88"})]}),open:r},u),{},{children:(0,n.jsxs)("div",{className:"habit-column-setting-body",children:[(0,n.jsxs)("div",{className:"habit-column-setting-left",children:[(0,n.jsx)("div",{className:"habit-column-setting-left-head",children:(0,n.jsx)(an,{placeholder:"\u641C\u7D22\u6570\u636E\u5B57\u6BB5",allowClear:!0,style:{width:200},onSearch:de})}),(0,n.jsx)("div",{className:"habit-column-setting-left-cont",children:(0,n.jsx)(tn,{max:a,sortColumns:C,dataSource:j,filterTitle:P,onChange:xe})})]}),(0,n.jsxs)("div",{className:"habit-column-setting-right",children:[(0,n.jsxs)("div",{className:"habit-column-setting-right-head",children:[(0,n.jsxs)("span",{className:"habit-column-setting-checkbox-label",children:["\u5DF2\u9009\uFF08",C.length," ",a?"/".concat(a):null,"\uFF09\u9879"]}),(0,n.jsx)("a",{className:"habit-column-setting-right-a",onClick:U,children:"\u6E05\u7A7A"}),(0,n.jsx)("a",{className:"habit-column-setting-right-a",onClick:ce,children:"\u6062\u590D\u9ED8\u8BA4"})]}),(0,n.jsx)("div",{className:"habit-column-setting-right-alert",children:"\u62D6\u52A8\u4EE5\u4E0B\u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F"}),(0,n.jsx)(We,{dataSource:C,onSortEnd:function(N){return f(W(N))}})]})]})}))})},sn=d(75736),ln=d(75445),un=d(53911),dn=d(55457),cn=d(79131),vn=d(21503),hn=Ne.Z.Search,fn=ln.Z.useToken,gn=function(e){var t=e.popoverProps,r=e.buttonProps,a=e.searchProps,o=e.className,s=e.value,l=e.style,u=e.onChange,m=e.options,S=m===void 0?[]:m,b=e.buttonText,C=e.showSearch,f=C===void 0?!0:C,T=(0,v.useState)(!1),p=I()(T,2),j=p[0],h=p[1],x=(0,v.useState)(""),y=I()(x,2),P=y[0],D=y[1],F=(0,v.useMemo)(function(){return S.filter(function(w){return w.label.includes(P)})},[P,S]),Q=(0,v.useState)(!1),G=I()(Q,2),L=G[0],$=G[1],E=fn(),Z=E.token,B={color:Z.colorTextQuaternary,fontSize:Z.fontSizeIcon};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(je.Z,c()(c()({open:j,onOpenChange:h,placement:"bottom",trigger:"click",overlayStyle:{width:250}},t),{},{content:(0,n.jsxs)(n.Fragment,{children:[!!f&&(0,n.jsx)(hn,c()(c()({placeholder:"\u540D\u79F0\u641C\u7D22",className:"habit-multiple-select-search",allowClear:!0,size:"small"},a),{},{value:P,onChange:function(k){return D(k.target.value)}})),(0,n.jsx)(oe.Z.Group,{value:s,onChange:u,children:(0,n.jsx)(un.Z,{gutter:[0,10],children:F.map(function(w){return(0,n.jsx)(dn.Z,{span:24,children:(0,n.jsx)(oe.Z,{value:w.value,children:w.label})},w.value)})})}),!F.length&&(0,n.jsx)(cn.Z,{description:!1})]}),children:(0,n.jsx)(J.ZP,c()(c()({className:"habit-multiple-select-button ".concat(o),style:l},r),{},{onMouseEnter:function(){return $(!0)},onMouseLeave:function(){return $(!1)},children:(0,n.jsxs)("div",{className:"habit-multiple-select-button-content",children:[(0,n.jsx)("span",{children:b}),s!=null&&s.length?L?(0,n.jsx)(sn.Z,{className:"habit-multiple-select-icon",style:B,onClick:function(k){k.stopPropagation(),u==null||u([])}}):(0,n.jsx)(vn.Z,{className:"habit-multiple-select-icon",count:s==null?void 0:s.length,showZero:!0,size:"small",color:Z.colorPrimary}):(0,n.jsx)(Ce.Z,{className:"habit-multiple-select-icon",style:B})]})}))}))})},mn=d(65854),me=d.n(mn),pn=d(25359),Oe=d.n(pn),Sn=d(49811),xn=d.n(Sn),yn=d(48411),bn=d(46996),X=d(87966),pe=d(41485),Cn=d(40202),jn=function i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"children",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"treeKey",a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:[];return e.forEach(function(o){o[r]&&a.push(o[r]),Array.isArray(o[t])&&i(o[t],t,r,a)}),a},Dn=function(e,t,r){var a=[t.id,r.id].map(function(m){return m.toString().split("-")}),o=I()(a,2),s=o[0],l=o[1];if(s.length===l.length&&s.length===1){var u=le({array:e,fromIndex:parseInt(s[0]),toIndex:parseInt(l[0])});return{data:u,status:!0}}return{data:e,status:!1}},se=function(e,t,r){return e.reduce(function(a,o){return Array.isArray(a)?a[Number(o)]:a[r][Number(o)]},t)},ie=function(e,t,r,a){var o=[t.id,r.id].map(function(C){return C.toString().split("-")}),s=I()(o,2),l=s[0],u=s[1],m=l.pop(),S=u.pop();if(l.length!==u.length||!l.length||l.join(",")!==u.join(","))return{data:e,status:!1};var b=se(l,e,a);return b[a]=le({array:b[a],fromIndex:parseInt(m),toIndex:parseInt(S)}),{data:e,status:!0}},kn=d(93525),ne=d.n(kn),Nn=function(e,t){for(var r=!1,a=0;a<e.length;a++){var o=e[a],s=t[a];if(o!==s)if(typeof s=="undefined"||o>s){r=!0;break}else{r=!1;break}}return r?"up":"down"},Pe=function(e,t,r){var a=ne()(t),o=parseInt(a.pop());if(!a.length)e.splice(o,1);else{var s=se(a,e,r);s[r].splice(o,1)}},Ke=function(e,t,r,a,o){var s=ne()(t),l=parseInt(s.pop());if(o==="down"&&(l+=1),!s.length)e.splice(l,0,a);else{var u=se(s,e,r);u[r].splice(l,0,a)}},Fe=function(e,t,r,a){var o=ne()(e),s=se(t,e,a),l=Nn(t,r);return l==="up"?(Pe(o,t,a),Ke(o,r,a,s,l)):(Ke(o,r,a,s,l),Pe(o,t,a)),o},En=function(e,t,r,a){var o=ie(e,t,r,a);if(o.status)return o;var s=ie(e,t,r,a);if(s.status)return s;var l=[t.id,r.id].map(function(b){return b.toString().split("-")}),u=I()(l,2),m=u[0],S=u[1];return{data:Fe(e,m,S,a),status:!0}},An=function(e,t,r,a){var o=ie(e,t,r,a);if(o.status)return o;var s=ne()(e),l=[t.id,r.id].map(function(b){return b.toString().split("-")}),u=I()(l,2),m=u[0],S=u[1];return m.length!==S.length?{data:s,status:!1}:{data:Fe(s,m,S,a),status:!0}},In=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"children",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"treeKey",a=function o(s,l,u){var m=u!==void 0?"".concat(u,"-").concat(l):String(l);s[r]=m;var S=s[t];Array.isArray(S)&&s[t].forEach(function(b,C){o(b,C,m)})};return e.forEach(function(o,s){a(o,s)}),e},Tn=["DragHandle","dragSortKey"],Be=(0,v.createContext)({handle:null}),wn=function(e){var t=(0,pe.nB)({id:e.id}),r=t.attributes,a=t.listeners,o=t.setNodeRef,s=t.transform,l=t.transition,u=c()({transform:Cn.ux.Transform.toString(s),transition:l},e==null?void 0:e.style),m=e.DragHandle,S=e.dragSortKey,b=fe()(e,Tn);if(S){var C=[];return v.Children.forEach(b.children,function(f,T){if(f.key===S){var p,j;C.push((0,n.jsx)(Be.Provider,{value:{handle:(0,n.jsx)(m,c()(c()({rowdata:f==null||(p=f.props)===null||p===void 0?void 0:p.record,index:f==null||(j=f.props)===null||j===void 0?void 0:j.index},a),r))},children:f},f.key||T));return}C.push(f)}),(0,n.jsx)("tr",c()(c()({},b),{},{ref:o,style:u,children:C}))}return(0,n.jsx)("tr",c()(c()(c()({},b),{},{ref:o,style:u},r),a))},On=v.memo(function(i){var e=Object.assign({},(me()(i),i)),t=(0,v.useContext)(Be),r=t.handle;return r?(0,n.jsx)("td",c()(c()({},e),{},{children:(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[r," ",e.children]})})):(0,n.jsx)("td",c()({},e))}),Pn=function(e){return(0,n.jsx)("tbody",c()({},e))};function Kn(i){var e=i.dataSource,t=e===void 0?[]:e,r=i.onDragSortEnd,a=i.DragHandle,o=i.dragSortKey,s=i.sortType,l=i.childrenColumnName,u=i.treeKeyName,m=(0,X.Dy)((0,X.VT)(X.we),(0,X.VT)(X.MA));function S(p){var j,h=p.active,x=p.over;if(!(!(x!=null&&(j=x.id)!==null&&j!==void 0&&j.toString())||h.id===(x==null?void 0:x.id))){var y=Dn(t,h,x);if(y.status){r==null||r(y.data,y.status);return}s==="freeSort"?y=En(t,h,x,l):s==="groupSort"?y=An(t,h,x,l):s==="treeSort"&&(y=ie(t,h,x,l)),r==null||r(y.data,y.status)}}var b=(0,ge.J)(function(p){return(0,n.jsx)(pe.Fo,{items:jn(t,l,u),strategy:pe.qw,children:(0,n.jsx)(Pn,c()({},p))})}),C=(0,ge.J)(function(p){var j,h=Object.assign({},(me()(p),p)),x=Ze(t,l,function(y){var P;return y[(P=i.rowKey)!==null&&P!==void 0?P:"index"]===h["data-row-key"]});return(0,n.jsx)(wn,c()({id:x[u],dragSortKey:o,DragHandle:a},h),x[(j=i.rowKey)!==null&&j!==void 0?j:"index"])}),f=i.components||{};if(o){var T;f.body=c()(c()({},((T=i.components)===null||T===void 0?void 0:T.body)||{}),{},{wrapper:b,row:C,cell:On})}return{DndContext:function(j){return(0,n.jsx)(X.LB,{sensors:m,collisionDetection:X.pE,onDragEnd:S,children:j.children})},components:f}}var Fn=d(7906),Bn=["dataSource","defaultData","onDataSourceChange","onLoad","rowKey","dragSortKey","onDragSortEnd","dragSortHandlerRender","sortType","childrenColumnName","treeKeyName"],Mn=function(e){var t,r=e.dataSource,a=e.defaultData,o=e.onDataSourceChange,s=e.onLoad,l=e.rowKey,u=e.dragSortKey,m=e.onDragSortEnd,S=e.dragSortHandlerRender,b=e.sortType,C=b===void 0?"default":b,f=e.childrenColumnName,T=f===void 0?"children":f,p=e.treeKeyName,j=p===void 0?"treeKey":p,h=fe()(e,Bn),x=(0,bn.Z)(function(){return a||[]},{value:r,onChange:o}),y=I()(x,2),P=y[0],D=y[1],F=function(){var E=xn()(Oe()().mark(function Z(B){return Oe()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return D(B),k.abrupt("return",s==null?void 0:s(B));case 2:case"end":return k.stop()}},Z)}));return function(B){return E.apply(this,arguments)}}(),Q=(0,v.useMemo)(function(){return function(E){var Z=Object.assign({},(me()(E),E)),B=(0,n.jsx)(Fn.Z,c()(c()({},Z),{},{className:"habit-drag-sort-table-icon"})),w=S?S(E==null?void 0:E.rowdata,E==null?void 0:E.index,Z):B;return(0,n.jsx)(n.Fragment,{children:w})}},[]),G=Kn({dataSource:P==null?void 0:P.slice(),dragSortKey:u,onDragSortEnd:m,components:e.components,rowKey:l,DragHandle:Q,sortType:C,childrenColumnName:T,treeKeyName:j}),L=G.components,$=G.DndContext;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(yn.Z,c()(c()({},h),{},{columns:(t=h.columns)===null||t===void 0?void 0:t.map(function(E){return(E.dataIndex===u||E.key===u)&&(E.render||(E.render=function(){return null})),E}),rowKey:l,onLoad:F,dataSource:In(P),onDataSourceChange:o,components:L,tableViewRender:function(Z,B){return(0,n.jsx)($,{children:B})}}))})};function Me(i,e,t){var r=e<0?i.length+e:e;if(r>=0&&r<i.length){var a=t<0?i.length+t:t,o=i.splice(e,1),s=I()(o,1),l=s[0];i.splice(a,0,l)}}function le(i){var e=i.array,t=i.fromIndex,r=i.toIndex,a=ne()(e);return Me(a,t,r),a}var Ze=function i(e,t,r){if(!Array.isArray(e))return null;for(var a=0;a<e.length;a++){var o=e[a];if(r(o,a,e))return o;var s=o[t];if(Array.isArray(s)){var l=i(s,t,r);if(l)return l}}return null}}}]);
