(this["webpackJsonpcra-githubcardapp"]=this["webpackJsonpcra-githubcardapp"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(17),i=n.n(c),s=(n(26),n(20)),u=n(3),o=n(4),l=n(6),j=n(5),b=(n(27),n(8)),p=n.n(b),d=n(18),h=n(19),f=n.n(h),O=n(0),m=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={userName:""},e.handleSubmit=function(){var t=Object(d.a)(p.a.mark((function t(n){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,f.a.get("https://api.github.com/users/".concat(e.state.userName));case 3:r=t.sent,e.props.onSubmit(r.data),e.setState({userName:""});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("input",{type:"text",value:this.state.userName,onChange:function(t){return e.setState({userName:t.target.value})},placeholder:"GitHub username",required:!0}),Object(O.jsx)("button",{children:"Add card"})]})}}]),n}(a.a.Component),v=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props;return console.log(e),Object(O.jsxs)("div",{className:"github-profile",children:[Object(O.jsx)("img",{src:e.avatar_url}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("div",{className:"name",children:e.name}),Object(O.jsx)("div",{className:"location",children:e.location})]})]})}}]),n}(a.a.Component),x=n(21),g=function(e){return Object(O.jsx)("div",{children:e.profiles.map((function(e){return Object(O.jsx)(v,Object(x.a)({},e),e.id)}))})},N=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={profiles:[]},e.addNewProfile=function(t){e.setState((function(e){return{profiles:[].concat(Object(s.a)(e.profiles),[t])}}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"header",children:this.props.title}),Object(O.jsx)(m,{onSubmit:this.addNewProfile}),Object(O.jsx)(g,{profiles:this.state.profiles})]})}}]),n}(a.a.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(N,{title:"The GitHub Cards App"})}),document.getElementById("root")),y()}},[[48,1,2]]]);
//# sourceMappingURL=main.8083ffba.chunk.js.map