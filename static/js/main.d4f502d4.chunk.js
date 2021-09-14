(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{25:function(t,n,e){},27:function(t,n,e){"use strict";e.r(n);var a,r,c,i,o,s,u,l=e(1),d=e.n(l),b=e(10),h=e.n(b),p=e(15),j=e(4),m=e(5),x=e(6),f=e(8),g=e(7),O=e(11),v=e(12),C=e(13),y=e(2),w=e(3),S=w.a.label(a||(a=Object(y.a)(["\nfont-weight: 700;\nfont-style: italic;\nfont-size: 17px;\nmargin-right:5px;\n"]))),k=w.a.input(r||(r=Object(y.a)(["\nmargin-right: 5px;\npadding: 5px;\n\nborder-radius: 5px;\nbox-shadow: 1px 2px 3px rgb(85, 42, 85);\n"]))),A=w.a.button(c||(c=Object(y.a)(["\npadding: 5px;\nborder-radius: 5px;\nbox-shadow: 3px 2px 3px rgb(85, 42, 85);\nfont-size: 14px;\nfont-weight:700;\n  \n"]))),z=e(0),B=function(t){Object(f.a)(e,t);var n=Object(g.a)(e);function e(){var t;Object(j.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=n.call.apply(n,[this].concat(r))).state={name:"",number:""},t.handleChange=function(n){t.setState(Object(C.a)({},n.currentTarget.name,n.currentTarget.value))},t.handleSubmit=function(n){n.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(m.a)(e,[{key:"render",value:function(){return Object(z.jsx)("div",{children:Object(z.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(z.jsx)(S,{children:"Name"}),Object(z.jsx)(k,{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(z.jsx)(S,{children:"Number"}),Object(z.jsx)(k,{type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(z.jsx)(A,{type:"submit",children:"Add contact"})]})})}}]),e}(l.Component),J=w.a.span(i||(i=Object(y.a)(["\nfont-weight: 500;\nfont-style: italic;\nfont-size: 17px;\n"]))),T=w.a.button(o||(o=Object(y.a)(["\npadding: 5px;\nborder-radius: 5px;\nbox-shadow: 3px 2px 3px rgb(85, 42, 85);\nfont-size: 14px;\nfont-weight:700;\n  \n"]))),D=w.a.ul(s||(s=Object(y.a)(["\nmargin-top: 40px;\npadding-right:40px;\n"]))),L=w.a.li(u||(u=Object(y.a)(["\n\nlist-style:none;\ndisplay: grid;\ngrid-template-columns: 1fr 1fr 1fr;\nalign-items: center;\nmargin-bottom:5px;\n\n"])));var N,F,I,M=function(t){var n=t.contacts,e=t.onRemove;return Object(z.jsx)(D,{children:n.map((function(t){var n=t.id,a=t.name,r=t.number;return Object(z.jsxs)(L,{name:a,number:r,children:[Object(z.jsxs)(J,{children:[a,": "]}),Object(z.jsxs)(J,{children:[r," "]}),Object(z.jsxs)(T,{type:"button",onClick:function(){return e(n)},children:[" ","Delete contact"]})]},n)}))})},R=function(t){var n=t.value,e=t.onChange,a=t.onBlur;return Object(z.jsxs)("label",{children:[Object(z.jsx)(S,{children:"Find contact by name"}),Object(z.jsx)(k,{type:"text",value:n,onChange:e,onBlur:a})]})},Z=w.a.div(N||(N=Object(y.a)(["\nmargin: 20px;\n\n background: linear-gradient(45deg, rgb(240, 160, 199), rgb(87, 66, 100));\npadding: 10px;\nwidth: 700px;\nbox-shadow: 5px 6px 9px rgb(85, 42, 85);\n border-radius: 5px;\n text-align: center;\n\n\n\n"]))),q=w.a.h1(F||(F=Object(y.a)(["\nfont-style: italic;\n\n\n\n"]))),E=w.a.h2(I||(I=Object(y.a)(["\nfont-style: italic;\nmargin-top:46px;\n\n\n\n"]))),P=e(26).v4,V=Object(v.a)("contacts"),H=function(t){Object(f.a)(e,t);var n=Object(g.a)(e);function e(){var t;Object(j.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=n.call.apply(n,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},Object.defineProperty(Object(x.a)(t),V,{writable:!0,value:"contacts"}),t.addContact=function(n){var e=n.name,a=n.number,r=t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})),c=t.state.contacts.find((function(t){return t.number===a}));r&&alert("".concat(e," is already in contacts")),c&&alert("This number ".concat(a," is already in contacts"));var i={id:P(),name:e,number:a};!c&&!r&&t.setState((function(t){return{contacts:[i].concat(Object(p.a)(t.contacts))}}))},t.changeFilter=function(n){t.setState({filter:n.currentTarget.value})},t.handleBlur=function(n){t.setState({filter:""}),n.currentTarget.value=""},t.getVisibleContacts=function(){var n=t.state,e=n.filter,a=n.contacts,r=e.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t.deleteContact=function(n){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t}return Object(m.a)(e,[{key:"componentDidUpdate",value:function(t,n){this.state.contacts!==n.contacts&&localStorage.setItem(Object(O.a)(this,V)[V],JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"render",value:function(){var t=this.state.filter;return Object(z.jsxs)(Z,{children:[Object(z.jsx)(q,{children:"Phonebook"}),Object(z.jsx)(B,{onSubmit:this.addContact}),Object(z.jsx)(E,{children:"Contacts"}),Object(z.jsx)(R,{value:t,onChange:this.changeFilter,onBlur:this.handleBlur}),Object(z.jsx)(M,{contacts:this.getVisibleContacts(),onRemove:this.deleteContact})]})}}]),e}(d.a.Component);e(25);h.a.render(Object(z.jsx)(d.a.StrictMode,{children:Object(z.jsx)(H,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.d4f502d4.chunk.js.map