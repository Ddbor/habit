(self.webpackChunk_ddbor_habit=self.webpackChunk_ddbor_habit||[]).push([[841],{8841:function(H,ae,r){"use strict";r.r(ae),r.d(ae,{HabitColumnSetting:function(){return $e},HabitMultipleSelect:function(){return nt},HabitRangePicker:function(){return Be},groupHabitColumns:function(){return ye},habitColumnsCopy:function(){return W},habitSortColumns:function(){return q},sortGroupHabitColumns:function(){return ke}});var oe=r(57213),s=r.n(oe),G=r(54306),d=r.n(G),Q=r(58172),U=r(2514),F=r(60670),se=r(76795),Ee=r(62006),be=r(97578),Se=r(64230),a=r(85170),Oe=r(74637),y=r.n(Oe),e=r(43010),fe=function(){return[{label:"\u4ECA\u65E5",value:[y()(),y()()]},{label:"\u6628\u65E5",value:[y()().subtract(1,"d"),y()().subtract(1,"d")]}]},Be=function(t){var n=t.value,v=t.popoverProps,b=t.buttonProps,f=t.presetsButtonProps,u=t.subtmitButtonProps,S=t.cancelButtonProps,h=t.presets,E=t.startDatePickerProps,I=t.endDatePickerProps,K=t.format,O=K===void 0?"YYYY-MM-DD":K,C=t.compared,B=t.onChange,Z=(0,a.useState)(["",""]),z=d()(Z,2),i=z[0],A=z[1],D=(0,a.useState)(n),Y=d()(D,2),c=Y[0],k=Y[1],_=(0,a.useState)(["",""]),J=d()(_,2),L=J[0],V=J[1],te=(0,a.useState)(!1),N=d()(te,2),M=N[0],X=N[1],j=(0,a.useMemo)(function(){return typeof C=="boolean"},[C]),me=(0,a.useState)(""),de=d()(me,2),ne=de[0],ve=de[1],ge=(0,a.useState)(!1),he=d()(ge,2),$=he[0],pe=he[1];(0,a.useEffect)(function(){pe(j?C:null)},[C,j]);var m=(0,a.useMemo)(function(){return j&&!C},[j,C]),l=(0,a.useMemo)(function(){return j&&!$},[j,$]),P=(0,a.useMemo)(function(){return M?180:0},[M]),g=(0,a.useMemo)(function(){var o,p;if(j){var R,xe;return[((R=fe().find(function(re){return y()(re.value[0]).isSame(n[0],"d")}))===null||R===void 0?void 0:R.label)||i[0],m?"":((xe=fe().find(function(re){return y()(re.value[0]).isSame(n[1],"d")}))===null||xe===void 0?void 0:xe.label)||i[1]]}if(ne)return[ne,""];var Ae=(o=h||[])===null||o===void 0||(p=o.concat(fe()).find(function(re){return y()(re.value[0]).isSame(n[0],"d")&&y()(re.value[1]).isSame(n[1],"d")}))===null||p===void 0?void 0:p.label;return[Ae||i[0],Ae?"":i[1]]},[n,h,m,j,i,ne]),T=(0,a.useMemo)(function(){return{textAlign:g[1]?"center":"left"}},[g]),w=(0,a.useCallback)(function(o){return o?l?o>y()().endOf("d"):$?o>y()().endOf("d")||c[1]&&o.isSame(c[1],"d"):c[1]&&o>c[1]:!1},[c[1],l]),ee=(0,a.useCallback)(function(o){return o?$?o>y()().endOf("d")||c[0]&&o.isSame(c[0],"d"):c[0]&&o<c[0]||o>y()().endOf("d"):!1},[c[0]]);(0,a.useEffect)(function(){k(n);var o=[y()(n[0]).format(O),y()(n[1]).format(O)];A(o),V(o)},[n]);var ie=function(p,R){k([p,c[1]]),V([R,L[1]])},le=function(p,R){k([c[0],p]),V([L[0],R])},ue=function(p){X(p)},rt=function(){X(!1),B==null||B(c,L,$),ve(null)},at=function(p){k(p.value);var R=[y()(p.value[0]).format(O),y()(p.value[1]).format(O)];V(R),X(!1),B==null||B(p.value,R,$),ve(p==null?void 0:p.label)},ot=(0,a.useCallback)(function(){return h==null?void 0:h.map(function(o,p){return typeof o.label=="string"?(0,e.jsx)("div",{className:"habit-range-picker-popover-presets-item",children:(0,e.jsx)(F.ZP,s()(s()({type:"link",size:"small",style:{padding:0,textAlign:"left",width:"100%"},onClick:function(){return at(o)}},f),{},{children:o.label}))},p):o.label})},[h]);return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(se.Z,s()(s()({trigger:"click",placement:"bottom",open:M,getPopupContainer:function(p){return p},overlayInnerStyle:{padding:0}},v),{},{onOpenChange:ue,content:(0,e.jsxs)("div",{className:"habit-range-picker-popover-content",children:[(0,e.jsxs)("div",{className:"habit-range-picker-popover-head",children:[(0,e.jsxs)("div",{className:"habit-range-picker-popover-head-title",children:[(0,e.jsx)("div",{children:"\u9009\u62E9\u65E5\u671F:"}),j&&(0,e.jsxs)("div",{className:"habit-range-picker-popover-head-switch",children:[(0,e.jsx)("span",{children:"\u5BF9\u6BD4"}),(0,e.jsx)(Ee.Z,{size:"small",checked:!!$,onChange:function(p){return pe(p)}})]})]}),(0,e.jsxs)("div",{className:"habit-range-picker-popover-date",children:[(0,e.jsx)(be.Z,s()({showToday:!1,allowClear:!1,size:"small",value:c[0],disabledDate:w,onChange:ie},E)),(0,e.jsx)("span",{className:"habit-range-picker-popover-date-separator",children:"-"}),(0,e.jsx)(be.Z,s()(s()({showToday:!1,allowClear:!1,size:"small",placement:"bottomRight",value:c[1],disabledDate:ee,onChange:le},I),{},{disabled:l}))]})]}),(0,e.jsx)(Se.Z,{style:{margin:0}}),h&&h.length&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"habit-range-picker-popover-presets",children:[(0,e.jsx)("div",{className:"habit-range-picker-popover-presets-title",children:"\u5FEB\u6377\u65E5\u671F:"}),(0,e.jsx)("div",{className:"habit-range-picker-popover-presets-list",children:ot()})]}),(0,e.jsx)(Se.Z,{style:{margin:0}})]}),(0,e.jsxs)("div",{className:"habit-range-picker-popover-footer",children:[(0,e.jsx)(F.ZP,s()(s()({type:"primary",size:"small",style:{marginRight:"8px"}},u),{},{onClick:function(){return rt()},children:"\u786E\u5B9A"})),(0,e.jsx)(F.ZP,s()(s()({size:"small"},S),{},{onClick:function(){return X(!1)},children:"\u53D6\u6D88"}))]})]}),children:(0,e.jsx)("div",{className:"habit-range-picker",children:(0,e.jsx)(F.ZP,s()(s()({},b),{},{htmlType:"reset",onClick:function(){return X(!M)},children:(0,e.jsxs)("div",{className:"habit-range-picker-button",children:[(0,e.jsx)(Q.Z,{style:{color:"#999"}}),(0,e.jsxs)("div",{className:"habit-range-picker-button-text",children:[(0,e.jsx)("span",{className:"habit-range-picker-button-text-item",style:T,children:g[0]}),g[1]&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{className:"habit-range-picker-button-text-separator",children:j?"\u5BF9\u6BD4":"-"}),(0,e.jsx)("span",{className:"habit-range-picker-button-text-item",style:T,children:g[1]})]})]}),(0,e.jsx)(U.Z,{style:{color:"#999",transform:"rotate(".concat(P,"deg)"),transition:"all 0.3s"}})]})}))})}))})},Ze=r(12342),De=r.n(Ze),Ce=r(35041),Te=r(3124),je=r(19537),we=r(12852),Fe=r(69189),ye=function(t){return t.reduce(function(n,v){var b=v.properties.groupName,f=v.properties.groupOrder;return n[b]||(n[b]={groupName:b,groupOrder:f,columns:[]}),n[b].columns.push(v),n},{})},ke=function(t){return Object.values(ye(t)).sort(function(n,v){return n.groupOrder-v.groupOrder})},Ne=function(t){return typeof t.order=="number"?t.order:1/0},q=function(t){return t.filter(function(n){return n.show}).sort(function(n,v){return Ne(n)-Ne(v)})},W=function(t){return t.map(function(n){return s()({},n)})},Ie=(0,je.W8)(function(x){var t=x.value;return(0,e.jsx)("div",{className:"habit-column-setting-drag-item",style:{backgroundImage:'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAAAt0lEQVR4Ae3BQQ3EMAxE0d8MDRMKEUtGFMlESig0RtoiaA697ntXVU3bzUNSrrVuXlTVtN08JOWw3UAAYbs5sN1AAGG7Bx8NSQlsYEtKDiQlsIEtKfnjqqppu3lIyrXWzYuqmrabh6QcthsIIGw3B7YbCCBs9+CjISmBDWxJyYGkBDawJSV/XFU1bTcPSbnWunlRVdN285CUw3YDAYTt5sB2AwGE7R58NCQlsIEtKTmQlMAGtqT8AT13ZKKS1qIVAAAAAElFTkSuQmCC")'},children:(0,e.jsx)(e.Fragment,{children:t==null?void 0:t.title})})}),Me=(0,je.JN)(function(x){var t=x.children;return(0,e.jsx)("div",{className:"habit-column-setting-drag-box",children:t})}),Re=function(t){var n=t.dataSource,v=t.onSortEnd,b=(0,we.J)(function(f){var u=f.oldIndex,S=f.newIndex;if(u!==S){var h=(0,Fe.q)({array:W(n),fromIndex:u,toIndex:S});h.forEach(function(E,I){E.order=I}),v==null||v(h)}});return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(Me,{lockAxis:"y",lockToContainerEdges:!0,onSortEnd:b,children:n.map(function(f,u){return(0,e.jsx)(Ie,{index:u,value:f},f.key)})})})},ce=r(87862),He=r(17061),Ge=r(88440),ze={color:"#ccc",cursor:"pointer",fontSize:"14px",marginLeft:"2px",verticalAlign:"middle"},Pe=function(t){return t.every(function(n){return n.show})},Ye=function(t){return t.some(function(n){return n.show})&&!Pe(t)},Ve=function(t,n){return!n||typeof t!="string"?!1:t.includes(n)},Qe=function(t){var n=t.dataSource,v=t.filterTitle,b=t.max,f=b===void 0?1/0:b,u=t.sortColumns,S=u===void 0?[]:u,h=t.onChange,E=(0,a.useState)([]),I=d()(E,2),K=I[0],O=I[1],C=(0,a.useMemo)(function(){return S.length>=f},[f,S]);(0,a.useEffect)(function(){O(ke(W(n)))},[n]);var B=function(z,i){var A=z.target.checked,D=W(n),Y=S.length;i.forEach(function(c){if(!(A&&Y>=f||c!=null&&c.disable)){var k=D.findIndex(function(_){return _.key===c.key});D[k].show=A,A?Y++:delete D[k].order}}),h==null||h(D)};return(0,e.jsx)(e.Fragment,{children:K.map(function(Z,z){return(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"habit-column-setting-left-cont-title",children:(0,e.jsx)(ce.Z,{indeterminate:Ye(Z.columns),checked:Pe(Z.columns),onChange:function(A){return B(A,Z.columns)},children:(0,e.jsx)("span",{className:"habit-column-setting-checkbox-label",children:Z.groupName})})}),(0,e.jsx)("div",{className:"habit-column-setting-checkbox-list clearfix",children:Z.columns.map(function(i){return(0,e.jsxs)("div",{className:"habit-column-setting-checkbox-item ".concat(Ve(i.title,v)?"habit-column-setting-checkbox-item-active":""),children:[(0,e.jsx)(ce.Z,{checked:i.show,disabled:i.disable||C&&!i.show,onChange:function(D){return B(D,[i])},children:(0,e.jsx)("span",{className:"habit-column-setting-checkbox-label",children:i==null?void 0:i.title})}),i.description&&(0,e.jsx)(He.Z,{title:i.description,children:(0,e.jsx)(Ge.Z,{style:ze})})]},i.key)})})]},z.toString())})})},We=["columns","open","max","onOk","persistenceKey","persistenceType"],Ke=Ce.Z.Search,$e=function(t){var n=t.columns,v=t.open,b=t.max,f=t.onOk,u=t.persistenceKey,S=t.persistenceType,h=De()(t,We),E=h.onClose,I=(0,a.useState)([]),K=d()(I,2),O=K[0],C=K[1],B=(0,a.useState)([]),Z=d()(B,2),z=Z[0],i=Z[1],A=(0,a.useState)(""),D=d()(A,2),Y=D[0],c=D[1],k=(0,a.useRef)([]),_=(0,a.useState)([]),J=d()(_,2),L=J[0],V=J[1],te=(0,a.useState)(!0),N=d()(te,2),M=N[0],X=N[1],j=(0,a.useMemo)(function(){return!u||!S||typeof window=="undefined"},[u,S]),me=(0,a.useCallback)(function(m){if(j)return m;var l=window[S];try{var P=l==null?void 0:l.getItem(u);if(P){var g=JSON.parse(P),T=W(m);return T.forEach(function(w){var ee,ie,le,ue;w.show=(ee=g==null||(ie=g[w.key])===null||ie===void 0?void 0:ie.show)!==null&&ee!==void 0?ee:w.show,w.order=(le=g==null||(ue=g[w.key])===null||ue===void 0?void 0:ue.order)!==null&&le!==void 0?le:w.order}),T}}catch(w){console.warn(w)}return m},[u,S,j]),de=(0,a.useCallback)(function(m){if(!j){var l=window[S];try{var P=m.reduce(function(g,T){return g[T.key]={show:T.show,order:T.order},g},{});l==null||l.setItem(u,JSON.stringify(P))}catch(g){console.warn(g)}}},[u,S,j]),ne=function(l,P){return l.map(function(g){var T=P.find(function(ee){return ee.key===g.key}),w=s()(s()({},g),{},{show:!!T});return T&&(w.order=T.order),w})};(0,a.useEffect)(function(){if(v){var m=n;k.current=m,X(!1),C(q(W(k.current))),i(k.current)}},[v,n]),(0,a.useEffect)(function(){if(!v&&M&&!j){var m=me(n);V(m),X(!1),f==null||f(ne(m,q(W(m))))}},[M,j,v,n]);var ve=function(l){c(l)},ge=function(l){C(q(l)),i(l)},he=function(){C(q(W(L))),i(L)},$=function(){var l=W(k.current);l.forEach(function(P){P.disable||(P.show=!1,delete P.order)}),C(q(l)),i(l)},pe=function(l){var P=ne(k.current,O);de(P),f==null||f(P),E==null||E(l)};return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(Te.Z,s()(s()({title:"\u9009\u62E9\u6570\u636E\u5B57\u6BB5",placement:"right",width:1e3,bodyStyle:{padding:"16px 24px",backgroundColor:"#f9f9f9"},footer:(0,e.jsxs)("div",{children:[(0,e.jsx)(F.ZP,{type:"primary",style:{marginRight:15},onClick:pe,children:"\u786E\u5B9A"}),(0,e.jsx)(F.ZP,{type:"default",onClick:E,children:"\u53D6\u6D88"})]}),open:v},h),{},{children:(0,e.jsxs)("div",{className:"habit-column-setting-body",children:[(0,e.jsxs)("div",{className:"habit-column-setting-left",children:[(0,e.jsx)("div",{className:"habit-column-setting-left-head",children:(0,e.jsx)(Ke,{placeholder:"\u641C\u7D22\u6570\u636E\u5B57\u6BB5",allowClear:!0,style:{width:200},onSearch:ve})}),(0,e.jsx)("div",{className:"habit-column-setting-left-cont",children:(0,e.jsx)(Qe,{max:b,sortColumns:O,dataSource:z,filterTitle:Y,onChange:ge})})]}),(0,e.jsxs)("div",{className:"habit-column-setting-right",children:[(0,e.jsxs)("div",{className:"habit-column-setting-right-head",children:[(0,e.jsxs)("span",{className:"habit-column-setting-checkbox-label",children:["\u5DF2\u9009\uFF08",O.length," ",b?"/".concat(b):null,"\uFF09\u9879"]}),(0,e.jsx)("a",{className:"habit-column-setting-right-a",onClick:$,children:"\u6E05\u7A7A"}),(0,e.jsx)("a",{className:"habit-column-setting-right-a",onClick:he,children:"\u6062\u590D\u9ED8\u8BA4"})]}),(0,e.jsx)("div",{className:"habit-column-setting-right-alert",children:"\u62D6\u52A8\u4EE5\u4E0B\u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F"}),(0,e.jsx)(Re,{dataSource:O,onSortEnd:function(l){return C(q(l))}})]})]})}))})},Ue=r(62417),Je=r(78685),Le=r(32269),Xe=r(45288),qe=r(55269),_e=r(28878),et=Ce.Z.Search,tt=Je.Z.useToken,nt=function(t){var n=t.popoverProps,v=t.buttonProps,b=t.searchProps,f=t.className,u=t.value,S=t.style,h=t.onChange,E=t.options,I=E===void 0?[]:E,K=t.buttonText,O=(0,a.useState)(!1),C=d()(O,2),B=C[0],Z=C[1],z=(0,a.useState)(""),i=d()(z,2),A=i[0],D=i[1],Y=(0,a.useMemo)(function(){return I.filter(function(N){return N.label.includes(A)})},[A,I]),c=(0,a.useState)(!1),k=d()(c,2),_=k[0],J=k[1],L=tt(),V=L.token,te={color:V.colorTextQuaternary,fontSize:V.fontSizeIcon};return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(se.Z,s()(s()({open:B,onOpenChange:Z,placement:"bottom",trigger:"click",overlayStyle:{width:250}},n),{},{content:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(et,s()(s()({placeholder:"\u540D\u79F0\u641C\u7D22",className:"habit-multiple-select-search",allowClear:!0,size:"small"},b),{},{value:A,onChange:function(M){return D(M.target.value)}})),(0,e.jsx)(ce.Z.Group,{value:u,onChange:h,children:(0,e.jsx)(Le.Z,{gutter:[0,10],children:Y.map(function(N){return(0,e.jsx)(Xe.Z,{span:24,children:(0,e.jsx)(ce.Z,{value:N.value,children:N.label})},N.value)})})}),!Y.length&&(0,e.jsx)(qe.Z,{description:!1})]}),children:(0,e.jsx)(F.ZP,s()(s()({className:"habit-multiple-select-button ".concat(f),style:S},v),{},{onMouseEnter:function(){return J(!0)},onMouseLeave:function(){return J(!1)},children:(0,e.jsxs)("div",{className:"habit-multiple-select-button-content",children:[(0,e.jsx)("span",{children:K}),u!=null&&u.length?_?(0,e.jsx)(Ue.Z,{className:"habit-multiple-select-icon",style:te,onClick:function(M){M.stopPropagation(),h==null||h([])}}):(0,e.jsx)(_e.Z,{className:"habit-multiple-select-icon",count:u==null?void 0:u.length,showZero:!0,size:"small",color:V.colorPrimary}):(0,e.jsx)(U.Z,{className:"habit-multiple-select-icon",style:te})]})}))}))})}},12342:function(H,ae,r){var oe=r(20006);function s(G,d){if(G==null)return{};var Q=oe(G,d),U,F;if(Object.getOwnPropertySymbols){var se=Object.getOwnPropertySymbols(G);for(F=0;F<se.length;F++)U=se[F],!(d.indexOf(U)>=0)&&Object.prototype.propertyIsEnumerable.call(G,U)&&(Q[U]=G[U])}return Q}H.exports=s,H.exports.__esModule=!0,H.exports.default=H.exports},20006:function(H){function ae(r,oe){if(r==null)return{};var s={},G=Object.keys(r),d,Q;for(Q=0;Q<G.length;Q++)d=G[Q],!(oe.indexOf(d)>=0)&&(s[d]=r[d]);return s}H.exports=ae,H.exports.__esModule=!0,H.exports.default=H.exports}}]);
