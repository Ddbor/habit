(self.webpackChunk_ddbor_habit=self.webpackChunk_ddbor_habit||[]).push([[646],{59646:function(T,te,r){"use strict";r.r(te),r.d(te,{HabitColumnSetting:function(){return He},HabitRangePicker:function(){return ye},groupHabitColumns:function(){return fe},habitColumnsCopy:function(){return Y},habitSortColumns:function(){return z},sortGroupHabitColumns:function(){return ge}});var re=r(57213),c=r.n(re),R=r(54306),h=r.n(R),G=r(91747),W=r(12254),E=r(58179),ie=r(76106),Se=r(89155),ve=r(7637),he=r(33970),a=r(85170),je=r(74637),j=r.n(je),e=r(43010),le=function(){return[{label:"\u4ECA\u65E5",value:[j()(),j()()]},{label:"\u6628\u65E5",value:[j()().subtract(1,"d"),j()().subtract(1,"d")]}]},ye=function(n){var t=n.value,d=n.popoverProps,b=n.buttonProps,v=n.presetsButtonProps,x=n.subtmitButtonProps,C=n.cancelButtonProps,p=n.presets,I=n.startDatePickerProps,Q=n.endDatePickerProps,U=n.format,P=U===void 0?"YYYY-MM-DD":U,y=n.compared,O=n.onChange,B=(0,a.useState)(["",""]),V=h()(B,2),i=V[0],Z=V[1],w=(0,a.useState)(t),$=h()(w,2),f=$[0],A=$[1],J=(0,a.useState)(["",""]),L=h()(J,2),M=L[0],X=L[1],ue=(0,a.useState)(!1),ae=h()(ue,2),q=ae[0],_=ae[1],H=(0,a.useMemo)(function(){return typeof y=="boolean"},[y]),ce=(0,a.useState)(""),se=h()(ce,2),l=se[0],s=se[1],S=(0,a.useState)(!1),g=h()(S,2),k=g[0],N=g[1];(0,a.useEffect)(function(){N(H?y:null)},[y,q]);var D=(0,a.useMemo)(function(){return H&&!y},[H,y]),oe=(0,a.useMemo)(function(){return q?180:0},[q]),K=(0,a.useMemo)(function(){var o,u;if(H){var F,de;return[((F=le().find(function(ne){return j()(ne.value[0]).isSame(t[0],"d")}))===null||F===void 0?void 0:F.label)||i[0],D?"":((de=le().find(function(ne){return j()(ne.value[0]).isSame(t[1],"d")}))===null||de===void 0?void 0:de.label)||i[1]]}if(l)return[l,""];var Ce=(o=p||[])===null||o===void 0||(u=o.concat(le()).find(function(ne){return j()(ne.value[0]).isSame(t[0],"d")&&j()(ne.value[1]).isSame(t[1],"d")}))===null||u===void 0?void 0:u.label;return[Ce||i[0],Ce?"":i[1]]},[t,p,D,H,i,l]),ee=(0,a.useMemo)(function(){return{textAlign:K[1]?"center":"left"}},[K]),Ke=(0,a.useCallback)(function(o){return o?D?o>j()().endOf("d"):f[1]&&o>f[1]:!1},[f[1],D]),Qe=(0,a.useCallback)(function(o){return o&&(f[0]&&o<f[0]||o>j()().endOf("d"))},[f[0]]);(0,a.useEffect)(function(){A(t);var o=[j()(t[0]).format(P),j()(t[1]).format(P)];Z(o),X(o)},[t]);var Ve=function(u,F){A([u,f[1]]),X([F,M[1]])},We=function(u,F){A([f[0],u]),X([M[0],F])},ze=function(u){_(u)},Ue=function(){_(!1),O==null||O(f,M,k),s(null)},$e=function(u){A(u.value);var F=[j()(u.value[0]).format(P),j()(u.value[1]).format(P)];X(F),_(!1),O==null||O(u.value,F,k),s(u==null?void 0:u.label)},Je=(0,a.useCallback)(function(){return p==null?void 0:p.map(function(o,u){return typeof o.label=="string"?(0,e.jsx)("div",{className:"habit-range-picker-popover-presets-item",children:(0,e.jsx)(E.ZP,c()(c()({type:"link",size:"small",style:{padding:0,textAlign:"left",width:"100%"},onClick:function(){return $e(o)}},v),{},{children:o.label}))},u):o.label})},[p]);return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(ie.Z,c()(c()({trigger:"click",placement:"bottom",open:q,getPopupContainer:function(u){return u},overlayInnerStyle:{padding:0}},d),{},{onOpenChange:ze,content:(0,e.jsxs)("div",{className:"habit-range-picker-popover-content",children:[(0,e.jsxs)("div",{className:"habit-range-picker-popover-head",children:[(0,e.jsxs)("div",{className:"habit-range-picker-popover-head-title",children:[(0,e.jsx)("div",{children:"\u9009\u62E9\u65E5\u671F:"}),H&&(0,e.jsxs)("div",{className:"habit-range-picker-popover-head-switch",children:[(0,e.jsx)("span",{children:"\u5BF9\u6BD4"}),(0,e.jsx)(Se.Z,{size:"small",checked:!!k,onChange:function(u){return N(u)}})]})]}),(0,e.jsxs)("div",{className:"habit-range-picker-popover-date",children:[(0,e.jsx)(ve.Z,c()({showToday:!1,allowClear:!1,size:"small",value:f[0],disabledDate:Ke,onChange:Ve},I)),(0,e.jsx)("span",{className:"habit-range-picker-popover-date-separator",children:"-"}),(0,e.jsx)(ve.Z,c()({showToday:!1,allowClear:!1,size:"small",placement:"bottomRight",value:f[1],disabledDate:Qe,onChange:We,disabled:D},Q))]})]}),(0,e.jsx)(he.Z,{style:{margin:0}}),p&&p.length&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"habit-range-picker-popover-presets",children:[(0,e.jsx)("div",{className:"habit-range-picker-popover-presets-title",children:"\u5FEB\u6377\u65E5\u671F:"}),(0,e.jsx)("div",{className:"habit-range-picker-popover-presets-list",children:Je()})]}),(0,e.jsx)(he.Z,{style:{margin:0}})]}),(0,e.jsxs)("div",{className:"habit-range-picker-popover-footer",children:[(0,e.jsx)(E.ZP,c()(c()({type:"primary",size:"small",style:{marginRight:"8px"}},x),{},{onClick:function(){return Ue()},children:"\u786E\u5B9A"})),(0,e.jsx)(E.ZP,c()(c()({size:"small"},C),{},{onClick:function(){return _(!1)},children:"\u53D6\u6D88"}))]})]}),children:(0,e.jsx)("div",{className:"habit-range-picker",children:(0,e.jsx)(E.ZP,c()(c()({},b),{},{htmlType:"reset",onClick:function(){return _(!q)},children:(0,e.jsxs)("div",{className:"habit-range-picker-button",children:[(0,e.jsx)(G.Z,{style:{color:"#999"}}),(0,e.jsxs)("div",{className:"habit-range-picker-button-text",children:[(0,e.jsx)("span",{className:"habit-range-picker-button-text-item",style:ee,children:K[0]}),K[1]&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{className:"habit-range-picker-button-text-separator",children:H?"\u5BF9\u6BD4":"-"}),(0,e.jsx)("span",{className:"habit-range-picker-button-text-item",style:ee,children:K[1]})]})]}),(0,e.jsx)(W.Z,{style:{color:"#999",transform:"rotate(".concat(oe,"deg)"),transition:"all 0.3s"}})]})}))})}))})},ke=r(12342),Ne=r.n(ke),Ae=r(72657),Ee=r(26994),pe=r(19537),Pe=r(24213),Oe=r(80312),fe=function(n){return n.reduce(function(t,d){var b=d.properties.groupName,v=d.properties.groupOrder;return t[b]||(t[b]={groupName:b,groupOrder:v,columns:[]}),t[b].columns.push(d),t},{})},ge=function(n){return Object.values(fe(n)).sort(function(t,d){return t.groupOrder-d.groupOrder})},me=function(n){return typeof n.order=="number"?n.order:1/0},z=function(n){return n.filter(function(t){return t.show}).sort(function(t,d){return me(t)-me(d)})},Y=function(n){return n.map(function(t){return c()({},t)})},Be=(0,pe.W8)(function(m){var n=m.value;return(0,e.jsx)("div",{className:"habit-column-setting-drag-item",style:{backgroundImage:'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAAAt0lEQVR4Ae3BQQ3EMAxE0d8MDRMKEUtGFMlESig0RtoiaA697ntXVU3bzUNSrrVuXlTVtN08JOWw3UAAYbs5sN1AAGG7Bx8NSQlsYEtKDiQlsIEtKfnjqqppu3lIyrXWzYuqmrabh6QcthsIIGw3B7YbCCBs9+CjISmBDWxJyYGkBDawJSV/XFU1bTcPSbnWunlRVdN285CUw3YDAYTt5sB2AwGE7R58NCQlsIEtKTmQlMAGtqT8AT13ZKKS1qIVAAAAAElFTkSuQmCC")'},children:(0,e.jsx)(e.Fragment,{children:n==null?void 0:n.title})})}),we=(0,pe.JN)(function(m){var n=m.children;return(0,e.jsx)("div",{className:"habit-column-setting-drag-box",children:n})}),De=function(n){var t=n.dataSource,d=n.onSortEnd,b=(0,Pe.J)(function(v){var x=v.oldIndex,C=v.newIndex;if(x!==C){var p=(0,Oe.q)({array:Y(t),fromIndex:x,toIndex:C});p.forEach(function(I,Q){I.order=Q}),d==null||d(p)}});return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(we,{lockAxis:"y",lockToContainerEdges:!0,onSortEnd:b,children:t.map(function(v,x){return(0,e.jsx)(Be,{index:x,value:v},v.key)})})})},xe=r(84947),Fe=r(3786),Te=r(87356),Re={color:"#ccc",cursor:"pointer",fontSize:"14px",marginLeft:"2px",verticalAlign:"middle"},be=function(n){return n.every(function(t){return t.show})},Ie=function(n){return n.some(function(t){return t.show})&&!be(n)},Ze=function(n,t){return!t||typeof n!="string"?!1:n.includes(t)},Me=function(n){var t=n.dataSource,d=n.filterTitle,b=n.max,v=b===void 0?1/0:b,x=n.sortColumns,C=x===void 0?[]:x,p=n.onChange,I=(0,a.useState)([]),Q=h()(I,2),U=Q[0],P=Q[1],y=(0,a.useMemo)(function(){return C.length>=v},[v,C]);(0,a.useEffect)(function(){P(ge(Y(t)))},[t]);var O=function(V,i){var Z=V.target.checked,w=Y(t),$=C.length;i.forEach(function(f){if(!(Z&&$>=v||f!=null&&f.disable)){var A=w.findIndex(function(J){return J.key===f.key});w[A].show=Z,Z?$++:delete w[A].order}}),p==null||p(w)};return(0,e.jsx)(e.Fragment,{children:U.map(function(B,V){return(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"habit-column-setting-left-cont-title",children:(0,e.jsx)(xe.Z,{indeterminate:Ie(B.columns),checked:be(B.columns),onChange:function(Z){return O(Z,B.columns)},children:(0,e.jsx)("span",{className:"habit-column-setting-checkbox-label",children:B.groupName})})}),(0,e.jsx)("div",{className:"habit-column-setting-checkbox-list clearfix",children:B.columns.map(function(i){return(0,e.jsxs)("div",{className:"habit-column-setting-checkbox-item ".concat(Ze(i.title,d)?"habit-column-setting-checkbox-item-active":""),children:[(0,e.jsx)(xe.Z,{checked:i.show,disabled:i.disable||y&&!i.show,onChange:function(w){return O(w,[i])},children:(0,e.jsx)("span",{className:"habit-column-setting-checkbox-label",children:i==null?void 0:i.title})}),i.description&&(0,e.jsx)(Fe.Z,{title:i.description,children:(0,e.jsx)(Te.Z,{style:Re})})]},i.key)})})]},V.toString())})})},Ge=["columns","open","max","onOk","persistenceKey","persistenceType"],Ye=Ae.Z.Search,He=function(n){var t=n.columns,d=n.open,b=n.max,v=n.onOk,x=n.persistenceKey,C=n.persistenceType,p=Ne()(n,Ge),I=p.onClose,Q=(0,a.useState)([]),U=h()(Q,2),P=U[0],y=U[1],O=(0,a.useState)([]),B=h()(O,2),V=B[0],i=B[1],Z=(0,a.useState)(""),w=h()(Z,2),$=w[0],f=w[1],A=(0,a.useRef)([]),J=(0,a.useRef)([]),L=(0,a.useRef)(!0),M=(0,a.useMemo)(function(){return!x||!C||typeof window=="undefined"},[x,C]),X=(0,a.useCallback)(function(l){if(M)return l;var s=window[C];try{var S=s==null?void 0:s.getItem(x);if(S){var g=JSON.parse(S),k=Y(l);return k.forEach(function(N){var D,oe,K,ee;N.show=(D=g==null||(oe=g[N.key])===null||oe===void 0?void 0:oe.show)!==null&&D!==void 0?D:N.show,N.order=(K=g==null||(ee=g[N.key])===null||ee===void 0?void 0:ee.order)!==null&&K!==void 0?K:N.order}),k}}catch(N){console.warn(N)}return l},[x,C,M]),ue=(0,a.useCallback)(function(l){if(!M){var s=window[C];try{var S=l.reduce(function(g,k){return g[k.key]={show:k.show,order:k.order},g},{});s==null||s.setItem(x,JSON.stringify(S))}catch(g){console.warn(g)}}},[x,C,M]),ae=function(s,S){return s.map(function(g){var k=S.find(function(D){return D.key===g.key}),N=c()(c()({},g),{},{show:!!k});return k&&(N.order=k.order),N})};(0,a.useEffect)(function(){if(d){var l=t;L.current&&(l=X(l),J.current=l,L.current=!1),A.current=l,y(z(Y(A.current))),i(A.current)}},[d,t]),(0,a.useEffect)(function(){if(!d&&L.current&&!M){var l=X(t);v==null||v(ae(l,z(Y(l))))}},[L.current,M,d,t]);var q=function(s){f(s)},_=function(s){y(z(s)),i(s)},H=function(){y(z(Y(J.current))),i(J.current)},ce=function(){var s=Y(A.current);s.forEach(function(S){S.disable||(S.show=!1,delete S.order)}),y(z(s)),i(s)},se=function(s){var S=ae(A.current,P);ue(S),v==null||v(S),I==null||I(s)};return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(Ee.Z,c()(c()({title:"\u9009\u62E9\u6570\u636E\u5B57\u6BB5",placement:"right",width:1e3,bodyStyle:{padding:"16px 24px",backgroundColor:"#f9f9f9"},footer:(0,e.jsxs)("div",{children:[(0,e.jsx)(E.ZP,{type:"primary",style:{marginRight:15},onClick:se,children:"\u786E\u5B9A"}),(0,e.jsx)(E.ZP,{type:"default",onClick:I,children:"\u53D6\u6D88"})]}),open:d},p),{},{children:(0,e.jsxs)("div",{className:"habit-column-setting-body",children:[(0,e.jsxs)("div",{className:"habit-column-setting-left",children:[(0,e.jsx)("div",{className:"habit-column-setting-left-head",children:(0,e.jsx)(Ye,{placeholder:"\u641C\u7D22\u6570\u636E\u5B57\u6BB5",allowClear:!0,style:{width:200},onSearch:q})}),(0,e.jsx)("div",{className:"habit-column-setting-left-cont",children:(0,e.jsx)(Me,{max:b,sortColumns:P,dataSource:V,filterTitle:$,onChange:_})})]}),(0,e.jsxs)("div",{className:"habit-column-setting-right",children:[(0,e.jsxs)("div",{className:"habit-column-setting-right-head",children:[(0,e.jsxs)("span",{className:"habit-column-setting-checkbox-label",children:["\u5DF2\u9009\uFF08",P.length," ",b?"/".concat(b):null,"\uFF09\u9879"]}),(0,e.jsx)("a",{className:"habit-column-setting-right-a",onClick:ce,children:"\u6E05\u7A7A"}),(0,e.jsx)("a",{className:"habit-column-setting-right-a",onClick:H,children:"\u6062\u590D\u9ED8\u8BA4"})]}),(0,e.jsx)("div",{className:"habit-column-setting-right-alert",children:"\u62D6\u52A8\u4EE5\u4E0B\u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F"}),(0,e.jsx)(De,{dataSource:P,onSortEnd:function(s){return y(z(s))}})]})]})}))})}},12342:function(T,te,r){var re=r(20006);function c(R,h){if(R==null)return{};var G=re(R,h),W,E;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(R);for(E=0;E<ie.length;E++)W=ie[E],!(h.indexOf(W)>=0)&&Object.prototype.propertyIsEnumerable.call(R,W)&&(G[W]=R[W])}return G}T.exports=c,T.exports.__esModule=!0,T.exports.default=T.exports},20006:function(T){function te(r,re){if(r==null)return{};var c={},R=Object.keys(r),h,G;for(G=0;G<R.length;G++)h=R[G],!(re.indexOf(h)>=0)&&(c[h]=r[h]);return c}T.exports=te,T.exports.__esModule=!0,T.exports.default=T.exports}}]);
