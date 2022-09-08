"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[789],{5789:function(a,b,c){c.d(b,{Z:function(){return g}});var d=c(5893),e=c(9008),f=c.n(e);function g(a){var b=a.title,c=a.children;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:b?b+" - Lapaas":"Lapaas"}),(0,d.jsx)("meta",{name:"description",content:"Ecommerce Website"}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,d.jsx)("main",{children:c})]})}c(1664),c(7294),c(1008)},1008:function(a,b,c){c.d(b,{Z:function(){return q}});var d=c(5893),e=c(7294),f=c(1799),g=c(9396),h=function(a){var b=a.formData,c=a.setFormData;return(0,d.jsxs)("div",{className:"",children:[(0,d.jsx)("label",{htmlFor:"email",className:"text-sm text-gray-600",children:"Site Name"}),(0,d.jsx)("input",{type:"text",placeholder:"Lapaas",className:"w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4",value:b.name,onChange:function(a){return c((0,g.Z)((0,f.Z)({},b),{name:a.target.value}))}}),(0,d.jsx)("label",{className:"text-sm text-gray-600",htmlFor:"file_input",children:"Upload Your Logo"}),(0,d.jsx)("input",{className:"border-none text-sm w-full bg-gray-200 file:border-none file:bg-gray-800 file:text-white block file:p-2 rounded-md","aria-describedby":"file_input_help",id:"file_input",type:"file"}),(0,d.jsx)("p",{className:"text-xs text-right text-gray-600 mt-1",id:"file_input_help",children:"SVG, PNG, JPG or GIF (MAX. 800x400px)."})]})},i=c(9335),j=function(a){var b=a.formData,c=a.setFormData,h=(0,e.useState)("html");return h[0],h[1],(0,d.jsxs)("div",{className:"",children:[(0,d.jsxs)(i.Select,{size:"lg",color:"gray",label:"Select Category",value:b.category,onChange:function(a){return c((0,g.Z)((0,f.Z)({},b),{category:a}))},children:[(0,d.jsx)(i.Option,{value:"Kirana",children:"Kirana"}),(0,d.jsx)(i.Option,{value:"Hotel",children:"Hotel"}),(0,d.jsx)(i.Option,{value:"Fashion",children:"Fashion"}),(0,d.jsx)(i.Option,{value:"Grossery",children:"Grossery"})]}),(0,d.jsxs)("div",{className:"mt-5 flex flex-col",children:[(0,d.jsx)(i.Radio,{color:"gray",id:"html",name:"type",label:"Business To Business",defaultChecked:!0,value:"Business To Business",onChange:function(a){return c((0,g.Z)((0,f.Z)({},b),{site_type:a.target.value}))}}),(0,d.jsx)(i.Radio,{color:"gray",id:"react",name:"type",label:"Business To Consumer",value:"Business To Consumer",onChange:function(a){return c((0,g.Z)((0,f.Z)({},b),{site_type:a.target.value}))}}),(0,d.jsx)(i.Radio,{color:"gray",id:"java",name:"type",label:"Direct To Consumer",value:"Direct To Consumer",onChange:function(a){return c((0,g.Z)((0,f.Z)({},b),{site_type:a.target.value}))}})]})]})},k=function(a){var b=a.formData,c=a.setFormData;return(0,d.jsxs)("div",{className:"",children:[(0,d.jsx)("label",{htmlFor:"email",className:"text-sm text-gray-600",children:"Username"}),(0,d.jsx)("input",{type:"text",placeholder:"Username",className:"w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4",value:b.username,onChange:function(a){return c((0,g.Z)((0,f.Z)({},b),{username:a.target.value}))}}),(0,d.jsx)("input",{type:"text",placeholder:"Email...",className:"w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4",value:b.email,onChange:function(a){return c((0,g.Z)((0,f.Z)({},b),{email:a.target.value}))}}),(0,d.jsx)("input",{type:"text",placeholder:"Password...",className:"w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",value:b.password,onChange:function(a){return c((0,g.Z)((0,f.Z)({},b),{password:a.target.value}))}})]})},l=c(9583),m=c(9669),n=c.n(m),o=c(2920);c(993);var p=c(1163),q=function(){(0,p.useRouter)();var a=(0,e.useState)(0),b=a[0],c=a[1],f=(0,e.useState)({name:"",category:"",email:"",password:"",confirmPassword:"",firstName:"",lastName:"",username:"",nationality:"",site_type:""}),g=f[0],i=f[1],m=function(a,b){n().post("http://13.126.160.113:3333/graphql",{query:'\n        mutation {\n          userCreate(data: {\n              name: "'.concat(g.username,'",\n              phone: "9142627909",\n              email: "').concat(g.email,'",\n              username: "').concat(g.username,'",\n              password: "').concat(g.password,'",\n          }) {\n              id\n              role_id\n              name\n              phone\n              email\n              username\n              status\n              created_at\n              updated_at\n          }\n      }\n          ')}).then(function(a){a.data.errors?o.Am.error("Error : Something went wrong!",{position:o.Am.POSITION.TOP_RIGHT}):(o.Am.success("Your account has created successfully !",{position:o.Am.POSITION.TOP_RIGHT}),q(),setTimeout(function(){return location.replace("http://13.126.160.113:82/")},2e3))}).catch(function(a){return b?b(a):null})},q=function(a,b){n()({url:"http://13.126.160.113:3333/graphql",method:"post",data:{query:'\n        mutation {\n          settingUpdateOrCreate(data:{site_name: "'.concat(g.name,'", site_category: "').concat(g.category,'", site_type: "').concat(g.site_type,'"}) {site_name, site_category, site_type}}\n          ')}}).then(function(a){console.log(a)}).catch(function(a){b&&b(a)})},r=["What would you like to name your site?","Choose Your Category","Signup",];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.Ix,{}),(0,d.jsx)("div",{className:"bg h-screen w-screen flex flex-col justify-center items-center ",children:(0,d.jsxs)("div",{className:"form-container w-11/12 md:w-2/5 h-3/5 md:h-3/4 bg-white rounded-md shadow-2xl flex flex-col p-8 md:p-12",children:[(0,d.jsx)("div",{className:"bg-gray-300 rounded-md w-full h-2",children:(0,d.jsx)("div",{className:"rounded-md w-1/3 h-2 bg-green-500",style:{width:0===b?"33.3%":1==b?"66.6%":"100%"}})}),(0,d.jsx)("div",{className:"text-2xl font-semibold mt-10 mb-4",children:(0,d.jsx)("h1",{children:r[b]})}),(0,d.jsx)("div",{className:"body",children:0===b?(0,d.jsx)(h,{formData:g,setFormData:i}):1===b?(0,d.jsx)(j,{formData:g,setFormData:i}):(0,d.jsx)(k,{formData:g,setFormData:i})}),(0,d.jsxs)("div",{className:"flex justify-between mt-5",children:[(0,d.jsxs)("button",{className:"flex items-center gap-1 cursor-pointer",disabled:0==b,onClick:function(){c(function(a){return a-1})},children:[(0,d.jsx)(l._HU,{}),(0,d.jsx)("span",{children:"Prev"})]}),(0,d.jsxs)("div",{className:"flex justify-between gap-5",children:[(0,d.jsx)("button",{className:"cursor-pointer text-black bg-gray-50 border-0 py-2 px-3 focus:outline-none hover:bg-gray-100 rounded ",disabled:2==b,onClick:function(){c(function(a){return a+1})},children:"Skip"}),(0,d.jsx)("button",{className:"text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-base",onClick:function(){b===r.length-1?(m(),console.log(g)):c(function(a){return a+1})},children:b===r.length-1?"Submit":"Next"})]})]})]})})]})}}}])