(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={List:"ListContacts_List__395Pq",Item:"ListContacts_Item__1wBUV",Text:"ListContacts_Text__3AbSU",Span:"ListContacts_Span__3b5cY",Button:"ListContacts_Button__1_A7x"}},20:function(t,e,n){t.exports={Label:"Filter_Label__3JV0F",Input:"Filter_Input__29nwe"}},31:function(t,e,n){t.exports={Container:"Container_Container__1Eugz"}},64:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var c={};n.r(c),n.d(c,"fetchContactsRequest",(function(){return _})),n.d(c,"fetchContactsSuccess",(function(){return v})),n.d(c,"fetchContactsError",(function(){return g})),n.d(c,"addContactRequest",(function(){return L})),n.d(c,"addContactSuccess",(function(){return N})),n.d(c,"addContactError",(function(){return y})),n.d(c,"deleteContactRequest",(function(){return A})),n.d(c,"deleteContactSuccess",(function(){return S})),n.d(c,"deleteContactError",(function(){return F})),n.d(c,"filterContact",(function(){return I}));var a={};n.r(a),n.d(a,"fetchContacts",(function(){return Y})),n.d(a,"addContact",(function(){return G})),n.d(a,"deleteContact",(function(){return K}));var r={};n.r(r),n.d(r,"getContacts",(function(){return W})),n.d(r,"getLoading",(function(){return X})),n.d(r,"getError",(function(){return tt})),n.d(r,"getFilter",(function(){return et})),n.d(r,"getVisibleContacts",(function(){return nt}));var o,u,s,i=n(0),b=n.n(i),l=n(9),d=n.n(l),f=n(6),j=n(15),O=n(2),h=n(8),m=n(30),p=n.n(m),C=n(3),x=n(4),_=Object(O.b)("contacts/fetchContactsRequest"),v=Object(O.b)("contacts/fetchContactsSuccess"),g=Object(O.b)("contacts/fetchContactsError"),L=Object(O.b)("contacts/addContactRequest"),N=Object(O.b)("contacts/addContactSuccess"),y=Object(O.b)("contacts/addContactError"),A=Object(O.b)("contacts/deleteContactRequest"),S=Object(O.b)("contacts/deleteContactSuccess"),F=Object(O.b)("contacts/deleteContactError"),I=Object(O.b)("contacts/filter"),k=Object(O.c)([],(o={},Object(C.a)(o,v,(function(t,e){return e.payload})),Object(C.a)(o,N,(function(t,e){var n=e.payload;return[].concat(Object(j.a)(t),[n])})),Object(C.a)(o,S,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),o)),w=Object(O.c)(!1,(u={},Object(C.a)(u,_,(function(){return!0})),Object(C.a)(u,v,(function(){return!1})),Object(C.a)(u,g,(function(){return!1})),Object(C.a)(u,L,(function(){return!0})),Object(C.a)(u,N,(function(){return!1})),Object(C.a)(u,y,(function(){return!1})),Object(C.a)(u,A,(function(){return!0})),Object(C.a)(u,S,(function(){return!1})),Object(C.a)(u,F,(function(){return!1})),u)),q=Object(O.c)("",Object(C.a)({},I,(function(t,e){return e.payload}))),z=Object(O.c)(null,(s={},Object(C.a)(s,g,(function(t,e){return e.payload})),Object(C.a)(s,y,(function(t,e){return e.payload})),Object(C.a)(s,F,(function(t,e){return e.payload})),Object(C.a)(s,_,(function(){return null})),Object(C.a)(s,L,(function(){return null})),Object(C.a)(s,A,(function(){return null})),s)),B=Object(x.b)({items:k,filter:q,isLoading:w,error:z}),E=[].concat(Object(j.a)(Object(O.d)({serializableCheck:{ignoredActions:[h.a,h.f,h.b,h.c,h.d,h.e]}})),[p.a]),R=Object(O.a)({reducer:{contacts:B},middleware:E,devTools:!1}),Z=n(31),J=n.n(Z),M=n(1);var T=function(t){var e=t.children;return Object(M.jsx)("div",{className:J.a.Container,children:e})},V=n(21),D=n(19),P=n.n(D),U=n(32),$=n(12),H=n.n($);H.a.defaults.baseURL="http://localhost:3000";var Y=function(){return function(){var t=Object(U.a)(P.a.mark((function t(e){var n,c;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(_()),t.prev=1,t.next=4,H.a.get("/contacts");case 4:n=t.sent,c=n.data,e(v(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(g(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},G=function(t,e){return function(n){var c={name:t,number:e};n(L()),H.a.post("/contacts",c).then((function(t){var e=t.data;return n(N(e))})).catch((function(t){return n(y(t))}))}},K=function(t){return function(e){e(A()),H.a.delete("contacts/".concat(t)).then((function(){return e(S(t))})).catch((function(t){return e(F(t))}))}},Q=n(13),W=function(t){return t.contacts.items},X=function(t){return t.contacts.isLoading},tt=function(t){return t.contacts.error},et=function(t){return t.contacts.filter},nt=Object(Q.a)([W,et],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),ct=n(7),at=n.n(ct);var rt=function(){var t=Object(f.b)(),e=Object(i.useState)(""),n=Object(V.a)(e,2),c=n[0],r=n[1],o=Object(i.useState)(""),u=Object(V.a)(o,2),s=u[0],b=u[1],l=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":r(c);break;case"number":b(c);break;default:return}},d=function(){r(""),b("")};return Object(M.jsxs)("form",{className:at.a.Form,onSubmit:function(e){e.preventDefault(),t(a.addContact(c,s)),d()},children:[Object(M.jsxs)("label",{className:at.a.Label,children:["Name",Object(M.jsx)("input",{className:at.a.Input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:c,onChange:l,placeholder:"Ivan Ivanov"})]}),Object(M.jsxs)("label",{className:at.a.Label,children:["Number",Object(M.jsx)("input",{className:at.a.Input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:l,value:s,placeholder:"111-11-11"})]}),Object(M.jsx)("button",{className:at.a.Button,type:"submit",children:"Add contact"})]})},ot=n(20),ut=n.n(ot),st=function(){var t=Object(f.b)(),e=Object(f.c)(r.getFilter);return Object(M.jsxs)("label",{className:ut.a.Label,children:["Find contacts by name",Object(M.jsx)("input",{type:"text",name:"filter",className:ut.a.Input,value:e,onChange:function(e){return t(c.filterContact(e.target.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})},it=n(10),bt=n.n(it),lt=function(){var t=Object(f.b)(),e=Object(f.c)(r.getVisibleContacts);return Object(i.useEffect)((function(){return t(a.fetchContacts())}),[t]),Object(M.jsx)("ul",{className:bt.a.List,children:e.map((function(e){var n=e.id,c=e.name,r=e.number;return Object(M.jsxs)("li",{className:bt.a.Item,children:[Object(M.jsxs)("p",{className:bt.a.Text,children:[c,": ",Object(M.jsx)("span",{className:bt.a.Span,children:r})]}),Object(M.jsx)("button",{className:bt.a.Button,type:"button",onClick:function(){return t(a.deleteContact(n))},title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",children:"Delete"})]},n)}))})},dt=n(33);n(63),n(64);var ft=function(){return Object(M.jsxs)(T,{children:[Object(M.jsx)("h1",{children:"Phonebook"}),Object(M.jsx)(rt,{}),Object(M.jsx)("h2",{children:"Contacts"}),Object(M.jsx)(st,{}),Object(M.jsx)(lt,{}),Object(M.jsx)(dt.a,{})]})};n(65),n(66);d.a.render(Object(M.jsx)(b.a.StrictMode,{children:Object(M.jsx)(f.a,{store:R,children:Object(M.jsx)(ft,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={Form:"FormContacts_Form__10vMm",Label:"FormContacts_Label__tkbP9",Input:"FormContacts_Input__3HsDb",Button:"FormContacts_Button__1hmNt"}}},[[67,1,2]]]);
//# sourceMappingURL=main.ff7f1c15.chunk.js.map