(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{iwq7:function(e,t,a){"use strict";var l=a("g09b"),s=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("jCWc");var r=l(a("kPKH"));a("14J3");var u=l(a("BMrR"));a("+L6B");var n=l(a("2/Rp"));a("5NDa");var o=l(a("5rEg"));a("Pwec");var d=l(a("CtXQ"));a("miYZ");var i=l(a("tsqr")),f=l(a("2Taf")),c=l(a("vZ4D")),m=l(a("l4Ni")),g=l(a("ujKo")),p=l(a("MhPg"));a("y8nQ");var h,y,E,v=l(a("Vl3Y")),w=s(a("q1tI")),M=a("Y2fQ"),k=l(a("Mbp2")),b=a("2gLi"),N=l(a("wY1l")),S=l(a("3a4m")),O=a("HZnN"),I=(h=v.default.create(),h((E=function(e){function t(){var e,a;(0,f.default)(this,t);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return a=(0,m.default)(this,(e=(0,g.default)(t)).call.apply(e,[this].concat(s))),a.handleOk=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||(console.log("Received values of form: ",t),(0,b.userLogin)(t.username,t.password).then(function(e){if(null!=e&&200==e.code){var t=JSON.parse(e.data);t.authenticated&&"anonymousUser"!==t.username&&(sessionStorage.setItem("currentUser",e.data),i.default.success((0,M.formatMessage)({id:"Login Success"})),sessionStorage.setItem("antd-pro-authority",JSON.stringify(t.authorities)),(0,O.reloadAuthorized)(),S.default.push("/welcome"))}}))})},a.oauth=function(e){sessionStorage.removeItem("oauthCallback"),window.location="/oauth/login/".concat(e)},a}return(0,p.default)(t,e),(0,c.default)(t,[{key:"componentWillMount",value:function(){null==sessionStorage.getItem("autoLogin")&&(0,b.currentUser)().then(function(e){if(console.log(e),null!=e&&200==e.code){var t=JSON.parse(e.data);t.authenticated&&"anonymousUser"!==t.username&&(sessionStorage.setItem("currentUser",e.data),setTimeout(function(){i.default.success((0,M.formatMessage)({id:"user.login.welcome"})),sessionStorage.setItem("autoLogin",1),console.log(JSON.stringify(t.authorities)),sessionStorage.setItem("antd-pro-authority",JSON.stringify(t.authorities)),(0,O.reloadAuthorized)(),S.default.push("/welcome")},200))}}).catch(function(e){i.default.error((0,M.formatMessage)({id:"Bad credentials"}))})}},{key:"render",value:function(){var e=this.props.form,t=e.getFieldDecorator;return w.default.createElement(u.default,{justify:"space-around",type:"flex",className:k.default.main},w.default.createElement(r.default,{xs:16,sm:12,md:8,lg:6,xl:4},w.default.createElement(v.default,null,w.default.createElement(v.default.Item,null,t("username",{rules:[{required:!0,message:(0,M.formatMessage)({id:"user.login.usernameOrEmail.errorMessage"})}]})(w.default.createElement(o.default,{name:"username",suffix:w.default.createElement(d.default,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),onPressEnter:this.handleOk,placeholder:(0,M.formatMessage)({id:"user.login.usernameOrEmail"})}))),w.default.createElement(v.default.Item,null,t("password",{rules:[{required:!0,message:(0,M.formatMessage)({id:"user.login.password.errorMessage"})}]})(w.default.createElement(o.default.Password,{type:"password",autoComplete:"false",allowClear:!0,suffix:w.default.createElement(d.default,{type:"eye-invisible",style:{opacity:.5}}),onPressEnter:this.handleOk,placeholder:(0,M.formatMessage)({id:"user.login.password"})}))),w.default.createElement(u.default,null,w.default.createElement(n.default,{type:"primary",className:k.default.button,onClick:this.handleOk},w.default.createElement(M.FormattedMessage,{id:"user.login.signIn"}))),w.default.createElement(u.default,null,w.default.createElement(r.default,{span:12,style:{textAlign:"left"}},w.default.createElement(N.default,{to:"/user/reset"},w.default.createElement(n.default,{type:"link",style:{padding:"0"}},w.default.createElement(M.FormattedMessage,{id:"user.register.forgetPassword"})))),w.default.createElement(r.default,{span:12,style:{textAlign:"right"}},w.default.createElement(N.default,{to:"/user/register"},w.default.createElement(n.default,{type:"link",style:{padding:"0"}},w.default.createElement(M.FormattedMessage,{id:"user.login.toRegister"}),">>")))),w.default.createElement(u.default,{justify:"space-between",type:"flex"},w.default.createElement("span",null,w.default.createElement(M.FormattedMessage,{id:"user.login.username.forTest"}),": test"),w.default.createElement("span",null,w.default.createElement(M.FormattedMessage,{id:"user.login.Password"}),": 123456")),w.default.createElement("div",{className:k.default.other},w.default.createElement(M.FormattedMessage,{id:"user.login.oauth"}),w.default.createElement(d.default,{key:"oauth.github",type:"github",className:k.default.icon,theme:"outlined",onClick:this.oauth.bind(this,"github")}),w.default.createElement(d.default,{key:"oauth.alipay",type:"alipay-circle",className:k.default.icon,theme:"outlined",onClick:this.oauth.bind(this,"alipay")})))))}}]),t}(w.PureComponent),y=E))||y),P=I;t.default=P}}]);