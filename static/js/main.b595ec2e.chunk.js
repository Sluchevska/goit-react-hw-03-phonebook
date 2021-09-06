(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{18:function(n,t,e){},23:function(n,t,e){},25:function(n,t,e){"use strict";e.r(t);var a,r,i,c,o,s,d,b=e(1),u=e.n(b),l=e(9),h=e.n(l),p=(e(18),e(12)),j=e(4),m=e(5),x=e(7),f=e(6),g=e(10),O=e(2),v=e(3),C=v.a.label(a||(a=Object(O.a)(["\nfont-weight: 700;\nfont-style: italic;\nfont-size: 17px;\nmargin-right:5px;\n"]))),y=v.a.input(r||(r=Object(O.a)(["\nmargin-right: 5px;\npadding: 5px;\n\nborder-radius: 5px;\nbox-shadow: 1px 2px 3px rgb(85, 42, 85);\n"]))),w=v.a.button(i||(i=Object(O.a)(["\npadding: 5px;\nborder-radius: 5px;\nbox-shadow: 3px 2px 3px rgb(85, 42, 85);\nfont-size: 14px;\nfont-weight:700;\n  \n"]))),S=e(0),k=function(n){Object(x.a)(e,n);var t=Object(f.a)(e);function e(){var n;Object(j.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=t.call.apply(t,[this].concat(r))).state={name:"",number:""},n.handleChange=function(t){n.setState(Object(g.a)({},t.currentTarget.name,t.currentTarget.value))},n.handleSubmit=function(t){t.preventDefault(),n.props.onSubmit(n.state),n.reset()},n.reset=function(){n.setState({name:"",number:""})},n}return Object(m.a)(e,[{key:"render",value:function(){return Object(S.jsx)("div",{children:Object(S.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(S.jsx)(C,{children:"Name"}),Object(S.jsx)(y,{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(S.jsx)(C,{children:"Number"}),Object(S.jsx)(y,{type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(S.jsx)(w,{type:"submit",children:"Add contact"})]})})}}]),e}(b.Component),A=v.a.span(c||(c=Object(O.a)(["\nfont-weight: 500;\nfont-style: italic;\nfont-size: 17px;\n"]))),z=v.a.button(o||(o=Object(O.a)(["\npadding: 5px;\nborder-radius: 5px;\nbox-shadow: 3px 2px 3px rgb(85, 42, 85);\nfont-size: 14px;\nfont-weight:700;\n  \n"]))),L=v.a.li(s||(s=Object(O.a)(["\n\nlist-style:none;\ndisplay: grid;\ngrid-template-columns: 1fr 1fr 1fr;\nalign-items: center;\nmargin-bottom:5px;\n\n"]))),T=v.a.ul(d||(d=Object(O.a)(["\nmargin-top: 40px;\npadding-right:40px;\n"])));var F,J,R,Z=function(n){var t=n.contacts,e=n.onRemove;return Object(S.jsx)(T,{children:t.map((function(n){var t=n.id,a=n.name,r=n.number;return Object(S.jsxs)(L,{name:a,number:r,children:[Object(S.jsxs)(A,{children:[a,": "]}),Object(S.jsxs)(A,{children:[r," "]}),Object(S.jsxs)(z,{type:"button",onClick:function(){return e(t)},children:[" ","Delete contact"]})]},t)}))})},q=function(n){var t=n.value,e=n.onChange;return Object(S.jsxs)("label",{children:[Object(S.jsx)(C,{children:"Find contact by name"}),Object(S.jsx)(y,{type:"text",value:t,onChange:e})]})},B=v.a.div(F||(F=Object(O.a)(["\nmargin: 20px;\n\n background: linear-gradient(45deg, rgb(240, 160, 199), rgb(87, 66, 100));\npadding: 10px;\nwidth: 700px;\nbox-shadow: 5px 6px 9px rgb(85, 42, 85);\n border-radius: 5px;\n text-align: center;\n\n\n\n"]))),D=v.a.h1(J||(J=Object(O.a)(["\nfont-style: italic;\n\n\n\n"]))),E=v.a.h2(R||(R=Object(O.a)(["\nfont-style: italic;\nmargin-top:46px;\n\n\n\n"]))),M=(e(23),e(24).v4),N=function(n){Object(x.a)(e,n);var t=Object(f.a)(e);function e(){var n;Object(j.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.addContact=function(t){var e=t.name,a=t.number,r=n.state.contacts.find((function(n){return n.name.toLowerCase()===e.toLowerCase()})),i=n.state.contacts.find((function(n){return n.number===a}));if(r)alert("".concat(e," is already in contacts"));else if(i)alert("This number ".concat(a," is already in contacts"));else{var c={id:M(),name:e,number:a};n.setState((function(n){return{contacts:[c].concat(Object(p.a)(n.contacts))}}))}},n.changeFilter=function(t){n.setState({filter:t.currentTarget.value})},n.getVisibleContacts=function(){var t=n.state,e=t.filter,a=t.contacts,r=e.toLowerCase();return a.filter((function(n){return n.name.toLowerCase().includes(r)}))},n.deleteContact=function(t){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==t}))}}))},n}return Object(m.a)(e,[{key:"render",value:function(){var n=this.state.filter;return Object(S.jsxs)(B,{children:[Object(S.jsx)(D,{children:"Phonebook"}),Object(S.jsx)(k,{onSubmit:this.addContact}),Object(S.jsx)(E,{children:"Contacts"}),Object(S.jsx)(q,{value:n,onChange:this.changeFilter}),Object(S.jsx)(Z,{contacts:this.getVisibleContacts(),onRemove:this.deleteContact})]})}}]),e}(u.a.Component);h.a.render(Object(S.jsx)(u.a.StrictMode,{children:Object(S.jsx)(N,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.b595ec2e.chunk.js.map