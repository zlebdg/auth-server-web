(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{iwq7:function(e,t,a){"use strict";var r=a("g09b"),s=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("jCWc");var l=r(a("kPKH"));a("14J3");var n=r(a("BMrR"));a("+L6B");var u=r(a("2/Rp"));a("5NDa");var o=r(a("5rEg"));a("Pwec");var d=r(a("CtXQ"));a("miYZ");var i=r(a("tsqr")),f=r(a("2Taf")),c=r(a("vZ4D")),m=r(a("l4Ni")),g=r(a("ujKo")),p=r(a("MhPg"));a("y8nQ");var h,y,E,v=r(a("Vl3Y")),w=s(a("q1tI")),M=a("Y2fQ"),S=r(a("WxbV")),k=a("2gLi"),O=r(a("wY1l")),I=r(a("3a4m")),P=a("HZnN"),b=(h=v.default.create(),h((E=function(e){function t(){var e,a;(0,f.default)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return a=(0,m.default)(this,(e=(0,g.default)(t)).call.apply(e,[this].concat(s))),a.handleOk=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||(console.log("Received values of form: ",t),(0,k.userLogin)(t.username,t.password).then(function(){(0,k.currentUser)().then(function(e){if(null!=e&&200==e.code){var t=JSON.parse(e.data);t.authenticated&&"anonymousUser"!==t.username&&(sessionStorage.setItem("currentUser",e.data),i.default.success((0,M.formatMessage)({id:"Login Success"})),sessionStorage.setItem("antd-pro-authority",JSON.stringify(t.authorities)),(0,P.reloadAuthorized)(),I.default.push("/"))}})}))})},a}return(0,p.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){null==sessionStorage.getItem("autoLogin")&&(0,k.currentUser)().then(function(e){if(console.log(e),null!=e&&200==e.code){var t=JSON.parse(e.data);t.authenticated&&"anonymousUser"!==t.username&&(sessionStorage.setItem("currentUser",e.data),setTimeout(function(){i.default.success((0,M.formatMessage)({id:"Auto Login Success"})),sessionStorage.setItem("autoLogin",1),console.log(JSON.stringify(t.authorities)),sessionStorage.setItem("antd-pro-authority",JSON.stringify(t.authorities)),(0,P.reloadAuthorized)(),I.default.push("/")},200))}}).catch(function(e){i.default.error((0,M.formatMessage)({id:"Bad credentials"}))})}},{key:"render",value:function(){var e=this.props,t=(e.loading,e.form),a=(e.dispatch,t.getFieldDecorator);return w.default.createElement(n.default,{justify:"space-around",type:"flex"},w.default.createElement(l.default,{xs:16,sm:12,md:8,lg:6,xl:4},w.default.createElement(v.default,null,w.default.createElement(v.default.Item,null,a("username",{rules:[{required:!0,message:(0,M.formatMessage)({id:"user.login.usernameOrEmail.errorMessage"})}]})(w.default.createElement(o.default,{name:"username",suffix:w.default.createElement(d.default,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),onPressEnter:this.handleOk,placeholder:(0,M.formatMessage)({id:"user.login.usernameOrEmail"})}))),w.default.createElement(v.default.Item,null,a("password",{rules:[{required:!0,message:(0,M.formatMessage)({id:"user.login.password.errorMessage"})}]})(w.default.createElement(o.default.Password,{type:"password",autoComplete:"false",allowClear:!0,suffix:w.default.createElement(d.default,{type:"eye-invisible",style:{opacity:.5}}),onPressEnter:this.handleOk,placeholder:(0,M.formatMessage)({id:"user.login.password"})}))),w.default.createElement(n.default,null,w.default.createElement(u.default,{type:"primary",className:S.default.button,onClick:this.handleOk},w.default.createElement(M.FormattedMessage,{id:"user.login.signIn"}))),w.default.createElement(n.default,null,w.default.createElement(l.default,{span:12,style:{textAlign:"left"}},w.default.createElement(O.default,{to:"/user/reset"},w.default.createElement(u.default,{type:"link",style:{padding:"0"}},w.default.createElement(M.FormattedMessage,{id:"user.register.forgetPassword"})))),w.default.createElement(l.default,{span:12,style:{textAlign:"right"}},w.default.createElement(O.default,{to:"/user/register"},w.default.createElement(u.default,{type:"link",style:{padding:"0"}},w.default.createElement(M.FormattedMessage,{id:"user.login.toRegister"}),">>")))),w.default.createElement(n.default,{justify:"space-between",type:"flex"},w.default.createElement("span",null,w.default.createElement(M.FormattedMessage,{id:"user.login.username.forTest"}),": test"),w.default.createElement("span",null,w.default.createElement(M.FormattedMessage,{id:"user.login.Password"}),": 123456")))))}}]),t}(w.PureComponent),y=E))||y),x=b;t.default=x}}]);