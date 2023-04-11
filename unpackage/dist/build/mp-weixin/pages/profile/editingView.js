"use strict";const e=require("../../common/vendor.js"),o=require("../../uni_modules/uni-id-pages/common/store.js");require("../../uni_modules/uni-id-pages/config.js"),e.Ls.importObject("uni-id-co");const a={data:()=>({dynamicFormData:{name:o.store.userInfo.nickname,gender:o.store.userInfo.gender,school:o.store.userInfo.comment,birthday:"",phone:o.store.userInfo.phone,email:o.store.userInfo.email},dynamicRules:{name:{rules:[{required:!0,errorMessage:"姓名不能为空"},{format:"string",errorMessage:"请正确填写姓名"}]},phone:{rules:[{required:!0,errorMessage:"手机号不能为空"},{format:"string",errorMessage:"请正确填写手机号"}]},email:{rules:[{format:"email",errorMessage:"请正确填写邮箱"}]}},sexs:[{text:"男",value:1},{text:"女",value:2}],schools:[{text:"计算机学院",value:"计算机学院"},{text:"新闻与传播学院",value:"新闻与传播学院"}]}),methods:{logout(){o.mutations.logout()},submit(e){o.mutations.updateUserInfo({nickname:this.dynamicFormData.name,gender:this.dynamicFormData.gender})},updatePhone(){e.index.navigateTo({url:"/uni_modules/uni-id-pages/pages/userinfo/bind-mobile/bind-mobile"})}}};if(!Array){(e.resolveComponent("uni-easyinput")+e.resolveComponent("uni-forms-item")+e.resolveComponent("hpy-form-select")+e.resolveComponent("uni-forms"))()}Math||((()=>"../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js")+(()=>"../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js")+(()=>"../../uni_modules/hpy-form-select/components/hpy-form-select/hpy-form-select.js")+(()=>"../../uni_modules/uni-forms/components/uni-forms/uni-forms.js"))();const n=e._export_sfc(a,[["render",function(o,a,n,r,m,t){return{a:e.o((e=>m.dynamicFormData.name=e)),b:e.p({inputBorder:!1,clearSize:20,styles:{backgroundColor:"#f5f5f5"},clearable:!1,modelValue:m.dynamicFormData.name}),c:e.p({label:"姓名",name:"name"}),d:e.o((e=>m.dynamicFormData.gender=e)),e:e.p({dataList:m.sexs,text:"text",name:"value","hide-border":!0,modelValue:m.dynamicFormData.gender}),f:e.p({label:"性别",name:"gender"}),g:e.o((e=>m.dynamicFormData.school=e)),h:e.p({dataList:m.schools,text:"text",name:"value","hide-border":!0,modelValue:m.dynamicFormData.school}),i:e.p({label:"学院",name:"school"}),j:e.o((e=>m.dynamicFormData.birthday=e)),k:e.p({mode:"date",start:"1900-01-01",end:"2010-12-31","hide-border":!0,modelValue:m.dynamicFormData.birthday}),l:e.p({label:"生日",name:"birthday"}),m:e.t(m.dynamicFormData.phone),n:e.o((e=>t.updatePhone())),o:e.p({label:"手机号",name:"phone"}),p:e.o((e=>m.dynamicFormData.email=e)),q:e.p({inputBorder:!1,styles:{backgroundColor:"#f5f5f5"},clearable:!1,modelValue:m.dynamicFormData.email}),r:e.p({label:"邮箱",name:"email"}),s:e.sr("dynamicForm","19e7f49e-0"),t:e.p({rules:m.dynamicRules,model:m.dynamicFormData,"label-position":"top"}),v:e.o((e=>t.submit("dynamicForm"))),w:e.o((e=>t.logout()))}}]]);wx.createPage(n);