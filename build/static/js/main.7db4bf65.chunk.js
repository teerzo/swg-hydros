(this["webpackJsonpswg-hydros"]=this["webpackJsonpswg-hydros"]||[]).push([[0],{39:function(e,c,s){},40:function(e,c,s){},42:function(e,c,s){},43:function(e,c,s){},44:function(e,c,s){},45:function(e,c,s){},46:function(e,c,s){},47:function(e,c,s){"use strict";s.r(c);var t=s(1),n=s(0),a=s.n(n),j=s(16),l=s.n(j),r=s(29),i=s(9),b=s(27),d=Object(i.c)({}),u=Object(i.d)(d,Object(i.a)(b.a)),o=(s(39),s(11)),O=s(3),h=s(8),x=s.n(h);s(12),s(40);s(42);var g=s(20),m=s(13),p=s(7);s(43),s(44);s(45);function v(e){var c=x()("route-hydros"),s=Object(n.useState)({a:0,b:0,c:0,d:0,e:0}),a=Object(p.a)(s,2),j=a[0],l=a[1],r=Object(n.useState)({a:0,b:0,c:0,d:0,e:0}),i=Object(p.a)(r,2),b=i[0],d=i[1],u=Object(n.useState)(0),o=Object(p.a)(u,2),O=o[0],h=o[1],v=Object(n.useState)(0),N=Object(p.a)(v,2),f=N[0],y=N[1],C=Object(n.useState)(0),S=Object(p.a)(C,2),E=S[0],F=S[1],I=Object(n.useState)(0),z=Object(p.a)(I,2),T=z[0],w=z[1],B=Object(n.useState)(0),M=Object(p.a)(B,2),A=M[0],D=M[1],k=Object(n.useState)(83),J=Object(p.a)(k,2),L=J[0],P=J[1];function _(e){var c=e.target,s=c.name,t=c.value;console.log("handleChange",s,t),l((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(g.a)({},s,t))}))}function H(e){var c=e.target;c.name,c.value}function V(){console.log("calculate",j);var e=0,c=0,s=0,t=0;j.a>0&&(e+=Number(j.a),c+=1),j.b>0&&(e+=Number(j.b),c+=1),j.c>0&&(e+=Number(j.c),c+=1),j.d>0&&(e+=Number(j.d),c+=1),j.e>0&&(e+=Number(j.e),c+=1),c>0&&(t=e/5),h(e),y(t),e<L&&(s=L-e,console.log("missing",s)),D(s);var n=(0===c?s/5:s/(5-c)).toFixed(2);console.log("split",n),console.log("_missing",s),console.log("_count",c);var a={a:0,b:0,c:0,d:0,e:0};0==j.a&&(a.a=n),0==j.b&&(a.b=n),0==j.c&&(a.c=n),0==j.d&&(a.d=n),0==j.e&&(a.e=n),d(a),w((e+s)/5),F(e+s)}return Object(n.useEffect)((function(){V()}),[]),Object(n.useEffect)((function(){V()}),[j,L]),Object(t.jsx)("div",{className:c,children:Object(t.jsx)("div",{className:"overlay full-height",children:Object(t.jsxs)("div",{className:"flex-column full-height",children:[Object(t.jsxs)("div",{className:"grid",children:[Object(t.jsx)("div",{className:"group",children:Object(t.jsx)("h3",{children:" Hydro Calculator "})}),Object(t.jsxs)("div",{className:"group",children:[Object(t.jsx)("label",{children:" Target "}),Object(t.jsx)("input",{type:"number",name:"target",value:L,onChange:function(e){var c=e.target,s=c.name,t=c.value;console.log("handleChange",s,t),P(t)}})]}),Object(t.jsx)("div",{className:"group"}),Object(t.jsx)("div",{className:"group"}),Object(t.jsx)("div",{className:"group"})]}),Object(t.jsxs)("div",{className:"grid",children:[Object(t.jsxs)("div",{className:"group",children:[Object(t.jsx)("h3",{children:" Input "}),Object(t.jsx)("p",{children:" Your hydros "})]}),Object(t.jsxs)("div",{className:"group",children:[Object(t.jsx)("label",{children:" Enzyme A "}),Object(t.jsx)("input",{type:"number",name:"a",value:j.a,onChange:_})]}),Object(t.jsxs)("div",{className:"group",children:[Object(t.jsx)("label",{children:" Enzyme B "}),Object(t.jsx)("input",{type:"number",name:"b",value:j.b,onChange:_})]}),Object(t.jsxs)("div",{className:"group",children:[Object(t.jsx)("label",{children:" Enzyme C "}),Object(t.jsx)("input",{type:"number",name:"c",value:j.c,onChange:_})]}),Object(t.jsxs)("div",{className:"group",children:[Object(t.jsx)("label",{children:" Enzyme D "}),Object(t.jsx)("input",{type:"number",name:"d",value:j.d,onChange:_})]}),Object(t.jsxs)("div",{className:"group",children:[Object(t.jsx)("label",{children:" Enzyme E "}),Object(t.jsx)("input",{type:"number",name:"e",value:j.e,onChange:_})]})]}),Object(t.jsxs)("div",{className:"grid",children:[Object(t.jsx)("div",{className:"group",children:Object(t.jsx)("h3",{children:" Input total "})}),Object(t.jsxs)("div",{className:"group",children:[Object(t.jsx)("p",{children:" Input total: "}),Object(t.jsxs)("p",{className:O>=L?"green":"red",children:[" ",Object(t.jsxs)("b",{children:[" ",O.toFixed(2)," "]})," "]})]}),Object(t.jsxs)("div",{className:"group",children:[Object(t.jsx)("p",{children:" Input total %: "}),Object(t.jsxs)("p",{className:O>=L?"green":"red",children:["  ",Object(t.jsxs)("b",{children:[" ",f.toFixed(2),"% "]})]})]})]}),Object(t.jsxs)("div",{className:"grid",children:[Object(t.jsx)("div",{className:"group",children:Object(t.jsx)("h3",{children:" Missing "})}),Object(t.jsxs)("div",{className:"group",children:[Object(t.jsx)("p",{children:" Missing total"}),Object(t.jsxs)("p",{children:[" ",A.toFixed(2)," "]})]})]}),Object(t.jsxs)("div",{className:"grid",children:[Object(t.jsxs)("div",{className:"group",children:[Object(t.jsx)("h3",{children:" Suggested "}),Object(t.jsx)("p",{children:" Missing hydros "})]}),Object(t.jsxs)("div",{className:"group",children:[Object(t.jsx)("label",{children:" Suggest A "}),Object(t.jsx)("input",{className:b.a>0?"red":"",type:"number",name:"a",value:b.a,onChange:H})]}),Object(t.jsxs)("div",{className:"group",children:[Object(t.jsx)("label",{children:" Suggest B "}),Object(t.jsx)("input",{className:b.b>0?"red":"",type:"number",name:"b",value:b.b,onChange:H})]}),Object(t.jsxs)("div",{className:"group",children:[Object(t.jsx)("label",{children:" Suggest C "}),Object(t.jsx)("input",{className:b.c>0?"red":"",type:"number",name:"c",value:b.c,onChange:H})]}),Object(t.jsxs)("div",{className:"group",children:[Object(t.jsx)("label",{children:" Suggest D "}),Object(t.jsx)("input",{className:b.d>0?"red":"",type:"number",name:"d",value:b.d,onChange:H})]}),Object(t.jsxs)("div",{className:"group",children:[Object(t.jsx)("label",{children:" Suggest E "}),Object(t.jsx)("input",{className:b.e>0?"red":"",type:"number",name:"e",value:b.e,onChange:H})]})]}),Object(t.jsx)("br",{}),Object(t.jsxs)("div",{className:"grid",children:[Object(t.jsx)("div",{className:"group",children:Object(t.jsx)("h2",{children:" Output "})}),Object(t.jsxs)("div",{className:"group",children:[Object(t.jsx)("p",{children:" Total Value"}),Object(t.jsxs)("p",{className:O>=L?"green":"orange",children:[" ",Object(t.jsxs)("b",{children:[" ",E.toFixed(2)," "]})," "]})]}),Object(t.jsxs)("div",{className:"group",children:[Object(t.jsx)("p",{children:" Total %"}),Object(t.jsxs)("p",{className:O>=L?"green":"orange",children:["  ",Object(t.jsxs)("b",{children:[" ",T.toFixed(2),"% "]})]})]})]})]})})})}var N=s(28),f=Object(N.a)();function y(){return Object(t.jsx)(o.a,{history:f,children:Object(t.jsx)("div",{className:"container",children:Object(t.jsxs)(O.d,{children:[Object(t.jsx)(O.b,{path:"/hydros",children:Object(t.jsx)(v,{})}),Object(t.jsx)(O.a,{to:"/hydros"})]})})})}s(46);function C(){return Object(t.jsx)("div",{className:"App",children:Object(t.jsx)(y,{})})}var S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,48)).then((function(c){var s=c.getCLS,t=c.getFID,n=c.getFCP,a=c.getLCP,j=c.getTTFB;s(e),t(e),n(e),a(e),j(e)}))};l.a.render(Object(t.jsx)(a.a.StrictMode,{children:Object(t.jsx)(r.a,{store:u,children:Object(t.jsx)(C,{})})}),document.getElementById("root")),S()}},[[47,1,2]]]);
//# sourceMappingURL=main.7db4bf65.chunk.js.map