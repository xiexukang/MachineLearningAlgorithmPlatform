(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e48c52a0"],{9743:function(r,e,t){"use strict";var s=t("ce34"),o=t.n(s);o.a},ce34:function(r,e,t){},d5c2:function(r,e,t){"use strict";t.r(e);var s=function(){var r=this,e=r.$createElement,s=r._self._c||e;return s("div",{staticClass:"my-login-page"},[s("el-row",[s("el-col",{attrs:{span:24,align:"center"}},[s("div",{staticClass:"container h-100"},[s("div",{staticClass:"row justify-content-md-center h-100"},[s("div",{staticClass:"card-wrapper"},[s("div",{staticClass:"brand"},[s("img",{attrs:{src:t("aca7"),alt:"bootstrap 4 login page"}})]),r._v(" "),s("div",{staticClass:"card fat"},[s("div",{staticClass:"card-body"},[s("h2",{staticClass:"card-title"},[r._v("注册")]),r._v(" "),s("el-form",{ref:"formRegister",attrs:{"label-position":"left",model:r.formRegister,rules:r.rules}},[s("el-form-item",{attrs:{label:"用户名",prop:"username"}},[s("el-input",{attrs:{clearable:"","prefix-icon":"el-icon-user-solid"},model:{value:r.formRegister.username,callback:function(e){r.$set(r.formRegister,"username",e)},expression:"formRegister.username"}})],1),r._v(" "),s("el-form-item",{attrs:{label:"密码",prop:"password"}},[s("el-input",{attrs:{"show-password":"","prefix-icon":"el-icon-lock"},model:{value:r.formRegister.password,callback:function(e){r.$set(r.formRegister,"password",e)},expression:"formRegister.password"}})],1),r._v(" "),s("el-form-item",{attrs:{label:"确认密码",prop:"checkPassword"}},[s("el-input",{attrs:{"show-password":"","prefix-icon":"el-icon-lock"},model:{value:r.formRegister.checkPassword,callback:function(e){r.$set(r.formRegister,"checkPassword",e)},expression:"formRegister.checkPassword"}})],1),r._v(" "),s("el-form-item",[s("el-button",{staticStyle:{width:"100%","font-weight":"bold"},attrs:{type:"primary",loading:r.loading},on:{click:r.register}},[r._v("注    册\n                                        ")])],1),r._v(" "),s("el-form-item",[r._v("\n                                        已经有账户了？\n                                        "),s("router-link",{attrs:{to:"/login"}},[s("el-button",{attrs:{type:""}},[r._v("\n                                                登 录\n                                                "),s("i",{staticClass:"el-icon-arrow-right el-icon--right"})])],1)],1)],1)],1)]),r._v(" "),s("div",{staticClass:"footer"},[r._v("Copyright © 2019 — RKS")])])])])])],1)],1)},o=[],a=(t("7f7f"),{data:function(){var r=this,e=function(r,e,t){if(!e)return t(new Error("用户名不能为空！"));t()},t=function(r,e,t){return e?e.length<6?t(new Error("密码不能小于6位数！")):void t():t(new Error("密码不能为空！"))},s=function(e,t,s){return t?t!==r.formRegister.password?s(new Error("密码不匹配！")):t.length<6?s(new Error("密码不能小于6位数！")):void s():s(new Error("密码不能为空！"))};return{formRegister:{username:"",password:"",checkPassword:""},rules:{username:[{validator:e,trigger:"blur"}],password:[{validator:t,trigger:"blur"}],checkPassword:[{validator:s,trigger:"blur"}]},loading:!1}},methods:{register:function(){var r=this,e=this.formRegister,t={name:e.name,username:e.username,password:e.password};this.$refs["formRegister"].validate(function(e){if(!e)return r.$message.error("error submit!!"),!1;r.loading=!0,r.$store.dispatch("user/Register",t).then(function(){r.loading=!1,r.$router.push({path:"/"})}).catch(function(e){r.loading=!1})})}}}),i=a,n=(t("9743"),t("2877")),l=Object(n["a"])(i,s,o,!1,null,"4ce6ca64",null);e["default"]=l.exports}}]);