(self.webpackChunk_ddbor_habit=self.webpackChunk_ddbor_habit||[]).push([[646],{59646:function(T,te,r){"use strict";r.r(te),r.d(te,{HabitColumnSetting:function(){return We},HabitRangePicker:function(){return ke},groupHabitColumns:function(){return fe},habitColumnsCopy:function(){return Y},habitSortColumns:function(){return z},sortGroupHabitColumns:function(){return ge}});var re=r(57213),u=r.n(re),R=r(54306),h=r.n(R),G=r(91747),V=r(12254),P=r(58179),ie=r(76106),je=r(89155),ve=r(7637),he=r(33970),a=r(85170),ye=r(74637),y=r.n(ye),e=r(43010),le=function(){return[{label:"\u4ECA\u65E5",value:[y()(),y()()]},{label:"\u6628\u65E5",value:[y()().subtract(1,"d"),y()().subtract(1,"d")]}]},ke=function(n){var t=n.value,d=n.popoverProps,C=n.buttonProps,v=n.presetsButtonProps,x=n.subtmitButtonProps,S=n.cancelButtonProps,p=n.presets,I=n.startDatePickerProps,W=n.endDatePickerProps,U=n.format,O=U===void 0?"YYYY-MM-DD":U,k=n.compared,B=n.onChange,w=(0,a.useState)(["",""]),K=h()(w,2),i=K[0],Z=K[1],D=(0,a.useState)(t),$=h()(D,2),f=$[0],A=$[1],J=(0,a.useState)(["",""]),L=h()(J,2),M=L[0],X=L[1],ue=(0,a.useState)(!1),ae=h()(ue,2),ee=ae[0],q=ae[1],E=(0,a.useMemo)(function(){return typeof k=="boolean"},[k]),ce=(0,a.useState)(""),se=h()(ce,2),l=se[0],s=se[1],j=(0,a.useState)(!1),g=h()(j,2),b=g[0],N=g[1];(0,a.useEffect)(function(){N(E?k:null)},[k,E]);var Q=(0,a.useMemo)(function(){return E&&!k},[E,k]),_=(0,a.useMemo)(function(){return E&&!b},[E,b]),oe=(0,a.useMemo)(function(){return ee?180:0},[ee]),H=(0,a.useMemo)(function(){var o,c;if(E){var F,de;return[((F=le().find(function(ne){return y()(ne.value[0]).isSame(t[0],"d")}))===null||F===void 0?void 0:F.label)||i[0],Q?"":((de=le().find(function(ne){return y()(ne.value[0]).isSame(t[1],"d")}))===null||de===void 0?void 0:de.label)||i[1]]}if(l)return[l,""];var Se=(o=p||[])===null||o===void 0||(c=o.concat(le()).find(function(ne){return y()(ne.value[0]).isSame(t[0],"d")&&y()(ne.value[1]).isSame(t[1],"d")}))===null||c===void 0?void 0:c.label;return[Se||i[0],Se?"":i[1]]},[t,p,Q,E,i,l]),Ce=(0,a.useMemo)(function(){return{textAlign:H[1]?"center":"left"}},[H]),Ke=(0,a.useCallback)(function(o){return o?_?o>y()().endOf("d"):f[1]&&o>f[1]:!1},[f[1],_]),Qe=(0,a.useCallback)(function(o){return o&&(f[0]&&o<f[0]||o>y()().endOf("d"))},[f[0]]);(0,a.useEffect)(function(){A(t);var o=[y()(t[0]).format(O),y()(t[1]).format(O)];Z(o),X(o)},[t]);var Ve=function(c,F){A([c,f[1]]),X([F,M[1]])},ze=function(c,F){A([f[0],c]),X([M[0],F])},Ue=function(c){q(c)},$e=function(){q(!1),B==null||B(f,M,b),s(null)},Je=function(c){A(c.value);var F=[y()(c.value[0]).format(O),y()(c.value[1]).format(O)];X(F),q(!1),B==null||B(c.value,F,b),s(c==null?void 0:c.label)},Le=(0,a.useCallback)(function(){return p==null?void 0:p.map(function(o,c){return typeof o.label=="string"?(0,e.jsx)("div",{className:"habit-range-picker-popover-presets-item",children:(0,e.jsx)(P.ZP,u()(u()({type:"link",size:"small",style:{padding:0,textAlign:"left",width:"100%"},onClick:function(){return Je(o)}},v),{},{children:o.label}))},c):o.label})},[p]);return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(ie.Z,u()(u()({trigger:"click",placement:"bottom",open:ee,getPopupContainer:function(c){return c},overlayInnerStyle:{padding:0}},d),{},{onOpenChange:Ue,content:(0,e.jsxs)("div",{className:"habit-range-picker-popover-content",children:[(0,e.jsxs)("div",{className:"habit-range-picker-popover-head",children:[(0,e.jsxs)("div",{className:"habit-range-picker-popover-head-title",children:[(0,e.jsx)("div",{children:"\u9009\u62E9\u65E5\u671F:"}),E&&(0,e.jsxs)("div",{className:"habit-range-picker-popover-head-switch",children:[(0,e.jsx)("span",{children:"\u5BF9\u6BD4"}),(0,e.jsx)(je.Z,{size:"small",checked:!!b,onChange:function(c){return N(c)}})]})]}),(0,e.jsxs)("div",{className:"habit-range-picker-popover-date",children:[(0,e.jsx)(ve.Z,u()({showToday:!1,allowClear:!1,size:"small",value:f[0],disabledDate:Ke,onChange:Ve},I)),(0,e.jsx)("span",{className:"habit-range-picker-popover-date-separator",children:"-"}),(0,e.jsx)(ve.Z,u()(u()({showToday:!1,allowClear:!1,size:"small",placement:"bottomRight",value:f[1],disabledDate:Qe,onChange:ze},W),{},{disabled:_}))]})]}),(0,e.jsx)(he.Z,{style:{margin:0}}),p&&p.length&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"habit-range-picker-popover-presets",children:[(0,e.jsx)("div",{className:"habit-range-picker-popover-presets-title",children:"\u5FEB\u6377\u65E5\u671F:"}),(0,e.jsx)("div",{className:"habit-range-picker-popover-presets-list",children:Le()})]}),(0,e.jsx)(he.Z,{style:{margin:0}})]}),(0,e.jsxs)("div",{className:"habit-range-picker-popover-footer",children:[(0,e.jsx)(P.ZP,u()(u()({type:"primary",size:"small",style:{marginRight:"8px"}},x),{},{onClick:function(){return $e()},children:"\u786E\u5B9A"})),(0,e.jsx)(P.ZP,u()(u()({size:"small"},S),{},{onClick:function(){return q(!1)},children:"\u53D6\u6D88"}))]})]}),children:(0,e.jsx)("div",{className:"habit-range-picker",children:(0,e.jsx)(P.ZP,u()(u()({},C),{},{htmlType:"reset",onClick:function(){return q(!ee)},children:(0,e.jsxs)("div",{className:"habit-range-picker-button",children:[(0,e.jsx)(G.Z,{style:{color:"#999"}}),(0,e.jsxs)("div",{className:"habit-range-picker-button-text",children:[(0,e.jsx)("span",{className:"habit-range-picker-button-text-item",style:Ce,children:H[0]}),H[1]&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{className:"habit-range-picker-button-text-separator",children:E?"\u5BF9\u6BD4":"-"}),(0,e.jsx)("span",{className:"habit-range-picker-button-text-item",style:Ce,children:H[1]})]})]}),(0,e.jsx)(V.Z,{style:{color:"#999",transform:"rotate(".concat(oe,"deg)"),transition:"all 0.3s"}})]})}))})}))})},Ne=r(12342),Ae=r.n(Ne),Ee=r(72657),Pe=r(26994),pe=r(19537),Oe=r(24213),Be=r(80312),fe=function(n){return n.reduce(function(t,d){var C=d.properties.groupName,v=d.properties.groupOrder;return t[C]||(t[C]={groupName:C,groupOrder:v,columns:[]}),t[C].columns.push(d),t},{})},ge=function(n){return Object.values(fe(n)).sort(function(t,d){return t.groupOrder-d.groupOrder})},me=function(n){return typeof n.order=="number"?n.order:1/0},z=function(n){return n.filter(function(t){return t.show}).sort(function(t,d){return me(t)-me(d)})},Y=function(n){return n.map(function(t){return u()({},t)})},we=(0,pe.W8)(function(m){var n=m.value;return(0,e.jsx)("div",{className:"habit-column-setting-drag-item",style:{backgroundImage:'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAAAt0lEQVR4Ae3BQQ3EMAxE0d8MDRMKEUtGFMlESig0RtoiaA697ntXVU3bzUNSrrVuXlTVtN08JOWw3UAAYbs5sN1AAGG7Bx8NSQlsYEtKDiQlsIEtKfnjqqppu3lIyrXWzYuqmrabh6QcthsIIGw3B7YbCCBs9+CjISmBDWxJyYGkBDawJSV/XFU1bTcPSbnWunlRVdN285CUw3YDAYTt5sB2AwGE7R58NCQlsIEtKTmQlMAGtqT8AT13ZKKS1qIVAAAAAElFTkSuQmCC")'},children:(0,e.jsx)(e.Fragment,{children:n==null?void 0:n.title})})}),De=(0,pe.JN)(function(m){var n=m.children;return(0,e.jsx)("div",{className:"habit-column-setting-drag-box",children:n})}),Fe=function(n){var t=n.dataSource,d=n.onSortEnd,C=(0,Oe.J)(function(v){var x=v.oldIndex,S=v.newIndex;if(x!==S){var p=(0,Be.q)({array:Y(t),fromIndex:x,toIndex:S});p.forEach(function(I,W){I.order=W}),d==null||d(p)}});return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(De,{lockAxis:"y",lockToContainerEdges:!0,onSortEnd:C,children:t.map(function(v,x){return(0,e.jsx)(we,{index:x,value:v},v.key)})})})},xe=r(84947),Te=r(3786),Re=r(87356),Ie={color:"#ccc",cursor:"pointer",fontSize:"14px",marginLeft:"2px",verticalAlign:"middle"},be=function(n){return n.every(function(t){return t.show})},Ze=function(n){return n.some(function(t){return t.show})&&!be(n)},Me=function(n,t){return!t||typeof n!="string"?!1:n.includes(t)},Ge=function(n){var t=n.dataSource,d=n.filterTitle,C=n.max,v=C===void 0?1/0:C,x=n.sortColumns,S=x===void 0?[]:x,p=n.onChange,I=(0,a.useState)([]),W=h()(I,2),U=W[0],O=W[1],k=(0,a.useMemo)(function(){return S.length>=v},[v,S]);(0,a.useEffect)(function(){O(ge(Y(t)))},[t]);var B=function(K,i){var Z=K.target.checked,D=Y(t),$=S.length;i.forEach(function(f){if(!(Z&&$>=v||f!=null&&f.disable)){var A=D.findIndex(function(J){return J.key===f.key});D[A].show=Z,Z?$++:delete D[A].order}}),p==null||p(D)};return(0,e.jsx)(e.Fragment,{children:U.map(function(w,K){return(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"habit-column-setting-left-cont-title",children:(0,e.jsx)(xe.Z,{indeterminate:Ze(w.columns),checked:be(w.columns),onChange:function(Z){return B(Z,w.columns)},children:(0,e.jsx)("span",{className:"habit-column-setting-checkbox-label",children:w.groupName})})}),(0,e.jsx)("div",{className:"habit-column-setting-checkbox-list clearfix",children:w.columns.map(function(i){return(0,e.jsxs)("div",{className:"habit-column-setting-checkbox-item ".concat(Me(i.title,d)?"habit-column-setting-checkbox-item-active":""),children:[(0,e.jsx)(xe.Z,{checked:i.show,disabled:i.disable||k&&!i.show,onChange:function(D){return B(D,[i])},children:(0,e.jsx)("span",{className:"habit-column-setting-checkbox-label",children:i==null?void 0:i.title})}),i.description&&(0,e.jsx)(Te.Z,{title:i.description,children:(0,e.jsx)(Re.Z,{style:Ie})})]},i.key)})})]},K.toString())})})},Ye=["columns","open","max","onOk","persistenceKey","persistenceType"],He=Ee.Z.Search,We=function(n){var t=n.columns,d=n.open,C=n.max,v=n.onOk,x=n.persistenceKey,S=n.persistenceType,p=Ae()(n,Ye),I=p.onClose,W=(0,a.useState)([]),U=h()(W,2),O=U[0],k=U[1],B=(0,a.useState)([]),w=h()(B,2),K=w[0],i=w[1],Z=(0,a.useState)(""),D=h()(Z,2),$=D[0],f=D[1],A=(0,a.useRef)([]),J=(0,a.useRef)([]),L=(0,a.useRef)(!0),M=(0,a.useMemo)(function(){return!x||!S||typeof window=="undefined"},[x,S]),X=(0,a.useCallback)(function(l){if(M)return l;var s=window[S];try{var j=s==null?void 0:s.getItem(x);if(j){var g=JSON.parse(j),b=Y(l);return b.forEach(function(N){var Q,_,oe,H;N.show=(Q=g==null||(_=g[N.key])===null||_===void 0?void 0:_.show)!==null&&Q!==void 0?Q:N.show,N.order=(oe=g==null||(H=g[N.key])===null||H===void 0?void 0:H.order)!==null&&oe!==void 0?oe:N.order}),b}}catch(N){console.warn(N)}return l},[x,S,M]),ue=(0,a.useCallback)(function(l){if(!M){var s=window[S];try{var j=l.reduce(function(g,b){return g[b.key]={show:b.show,order:b.order},g},{});s==null||s.setItem(x,JSON.stringify(j))}catch(g){console.warn(g)}}},[x,S,M]),ae=function(s,j){return s.map(function(g){var b=j.find(function(Q){return Q.key===g.key}),N=u()(u()({},g),{},{show:!!b});return b&&(N.order=b.order),N})};(0,a.useEffect)(function(){if(d){var l=t;L.current&&(l=X(l),J.current=l,L.current=!1),A.current=l,k(z(Y(A.current))),i(A.current)}},[d,t]),(0,a.useEffect)(function(){if(!d&&L.current&&!M){var l=X(t);v==null||v(ae(l,z(Y(l))))}},[L.current,M,d,t]);var ee=function(s){f(s)},q=function(s){k(z(s)),i(s)},E=function(){k(z(Y(J.current))),i(J.current)},ce=function(){var s=Y(A.current);s.forEach(function(j){j.disable||(j.show=!1,delete j.order)}),k(z(s)),i(s)},se=function(s){var j=ae(A.current,O);ue(j),v==null||v(j),I==null||I(s)};return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(Pe.Z,u()(u()({title:"\u9009\u62E9\u6570\u636E\u5B57\u6BB5",placement:"right",width:1e3,bodyStyle:{padding:"16px 24px",backgroundColor:"#f9f9f9"},footer:(0,e.jsxs)("div",{children:[(0,e.jsx)(P.ZP,{type:"primary",style:{marginRight:15},onClick:se,children:"\u786E\u5B9A"}),(0,e.jsx)(P.ZP,{type:"default",onClick:I,children:"\u53D6\u6D88"})]}),open:d},p),{},{children:(0,e.jsxs)("div",{className:"habit-column-setting-body",children:[(0,e.jsxs)("div",{className:"habit-column-setting-left",children:[(0,e.jsx)("div",{className:"habit-column-setting-left-head",children:(0,e.jsx)(He,{placeholder:"\u641C\u7D22\u6570\u636E\u5B57\u6BB5",allowClear:!0,style:{width:200},onSearch:ee})}),(0,e.jsx)("div",{className:"habit-column-setting-left-cont",children:(0,e.jsx)(Ge,{max:C,sortColumns:O,dataSource:K,filterTitle:$,onChange:q})})]}),(0,e.jsxs)("div",{className:"habit-column-setting-right",children:[(0,e.jsxs)("div",{className:"habit-column-setting-right-head",children:[(0,e.jsxs)("span",{className:"habit-column-setting-checkbox-label",children:["\u5DF2\u9009\uFF08",O.length," ",C?"/".concat(C):null,"\uFF09\u9879"]}),(0,e.jsx)("a",{className:"habit-column-setting-right-a",onClick:ce,children:"\u6E05\u7A7A"}),(0,e.jsx)("a",{className:"habit-column-setting-right-a",onClick:E,children:"\u6062\u590D\u9ED8\u8BA4"})]}),(0,e.jsx)("div",{className:"habit-column-setting-right-alert",children:"\u62D6\u52A8\u4EE5\u4E0B\u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F"}),(0,e.jsx)(Fe,{dataSource:O,onSortEnd:function(s){return k(z(s))}})]})]})}))})}},12342:function(T,te,r){var re=r(20006);function u(R,h){if(R==null)return{};var G=re(R,h),V,P;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(R);for(P=0;P<ie.length;P++)V=ie[P],!(h.indexOf(V)>=0)&&Object.prototype.propertyIsEnumerable.call(R,V)&&(G[V]=R[V])}return G}T.exports=u,T.exports.__esModule=!0,T.exports.default=T.exports},20006:function(T){function te(r,re){if(r==null)return{};var u={},R=Object.keys(r),h,G;for(G=0;G<R.length;G++)h=R[G],!(re.indexOf(h)>=0)&&(u[h]=r[h]);return u}T.exports=te,T.exports.__esModule=!0,T.exports.default=T.exports}}]);