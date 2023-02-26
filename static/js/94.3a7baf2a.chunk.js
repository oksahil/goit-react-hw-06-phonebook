(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[94],{528:function(e,n,t){"use strict";t.d(n,{eO:function(){return r},rs:function(){return a},uo:function(){return o},zK:function(){return s}});var r=function(e){return e.phones},a=function(e){return e.phones.filter((function(e){return e.home}))},o=function(e){return e.phones.filter((function(e){return e.work}))},s=function(e){return e.filter}},94:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return F}});var r=t(791),a=t(434),o=t(942),s=t(413),c=t(439),i=t(7),l=t.n(i),u="button_btn__r1lcq",m=t(184),h=function(e){var n=e.children,t=e.onClick,r=e.type;return(0,m.jsx)("button",{onClick:t,className:u,type:r,children:n})},d=h;h.defaultProps={type:"button"},h.prototypes={onClick:l().func,type:l().oneOf(["submit","button","reset"]),children:l().element.isRequired};var f={name:"",number:"",home:!1,work:!1},p="myPhoneForm_labelText__Hcazb",x="myPhoneForm_formInput__FxZfl",b=function(e){var n=e.onSubmit,t=(0,r.useState)((0,s.Z)({},f)),a=(0,c.Z)(t,2),i=a[0],l=a[1],u=function(e){var n=e.target,t=n.name,r=n.value,a=n.type,c=n.checked,i="checkbox"===a?c:r;l((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,o.Z)({},t,i))}))},h=i.name,b=i.number,y=i.home,v=i.work;return(0,m.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),n((0,s.Z)({},i))&&l((0,s.Z)({},f))},children:[(0,m.jsxs)("div",{className:x,children:[(0,m.jsx)("label",{className:p,children:"Name:"}),(0,m.jsx)("input",{onChange:u,type:"text",name:"name",value:h,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)("div",{className:x,children:[(0,m.jsx)("label",{className:p,children:"Number:"}),(0,m.jsx)("input",{onChange:u,type:"tel",name:"number",value:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsxs)("div",{className:x,children:[(0,m.jsx)("label",{className:p,children:"Home:"}),(0,m.jsx)("input",{onChange:u,type:"checkbox",name:"home",checked:y,title:"HomePhone"}),(0,m.jsx)("label",{className:p,children:"Work:"}),(0,m.jsx)("input",{onChange:u,type:"checkbox",name:"work",checked:v,title:"WorkPhone"})]}),(0,m.jsx)(d,{type:"submit",children:"Add contact"})]})},y="contactsList_textItem__qlHuq",v=function(e){var n=e.contacts,t=e.removeContact,r=n.map((function(e){var n=e.id,r=e.name,a=e.number;return(0,m.jsxs)("li",{className:y,children:[r,"       ",a,(0,m.jsx)(d,{onClick:function(){return t(n)},type:"button",children:"delete"})]},n)}));return(0,m.jsx)("ul",{children:r})},_=v;v.defaultPrors={contacts:[]};var j="myPhoneFilter_labelText__+v0CO",k="myPhoneFilter_formInput__8OkR1",C=function(e){var n=e.handleChange,t=e.filter;return(0,m.jsxs)("div",{className:k,children:[(0,m.jsx)("label",{className:j,children:"Find contacts by name"}),(0,m.jsx)("input",{onChange:n,type:"text",name:"filter",value:t})]})},g="message_title__MgS1b",N=function(e){var n=e.message;return(0,m.jsx)("h3",{className:g,children:n})},w=t(984),P=t(262),O=t(528),Z="myPhone_title__0V57h",S="myPhone_titlePage__2NwgJ",T="myPhone_wrapper__OfZJq",L="myPhone_block__tSoc6",q=function(){var e=(0,a.v9)(O.eO),n=(0,a.v9)(O.zK),t=(0,a.I0)();(0,r.useEffect)((function(){localStorage.setItem("my-phonebook",JSON.stringify(e))}),[e]);var o=function(){if(!n)return e;var t=n.toLowerCase();return e.filter((function(e){var n=e.name,r=e.number;return n.toLowerCase().includes(t)||r.toLowerCase().includes(t)}))}();console.log(o);var c=Boolean(o.length);return(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{className:S,children:"Contacts of worcers of caffe Expresso"}),(0,m.jsxs)("div",{className:T,children:[(0,m.jsxs)("div",{className:L,children:[(0,m.jsx)("h3",{className:Z,children:"PhoneBook"}),(0,m.jsx)(b,{onSubmit:function(e){var n=e.name,r=e.number,a=e.home,c=e.work;if(function(e,n){var t=e.toLowerCase(),r=n.toLowerCase(),a=o.find((function(e){var n=e.name,a=e.number;return n.toLowerCase()===t||a.toLowerCase()===r}));return Boolean(a)}(n,r))return alert("".concat(n," is already ixist")),!1;var i,l=(i={name:n,number:r,home:a,work:c},{type:P.dW,payload:(0,s.Z)({id:(0,w.x0)()},i)});t(l)}})]}),(0,m.jsxs)("div",{className:L,children:[(0,m.jsx)("h3",{className:Z,children:"Contacts"}),(0,m.jsx)(C,{handleChange:function(e){var n,r=e.target;t((n=r.value,{type:P.YA,payload:n}))}}),c&&(0,m.jsx)(_,{removeContact:function(e){var n,r=(n=e,{type:P.uq,payload:n});t(r)},contacts:o}),!c&&(0,m.jsx)(N,{message:"No person in contacts list"})]})]})]})},F=function(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(q,{})})}},888:function(e,n,t){"use strict";var r=t(47);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,o,s){if(s!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:a};return t.PropTypes=t,t}},7:function(e,n,t){e.exports=t(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=94.3a7baf2a.chunk.js.map