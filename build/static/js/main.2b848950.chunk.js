(this.webpackJsonpskinx=this.webpackJsonpskinx||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(12),c=a.n(i),r=(a(52),a(53),a(101)),l=a(79),o=a(108),d=a(103),h=a(104),j=a(105),u=a(2),p=Object(r.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function m(){var e=p();return Object(u.jsx)("div",{className:e.root,children:Object(u.jsx)(d.a,{position:"static",children:Object(u.jsx)(h.a,{children:Object(u.jsx)(j.a,{variant:"h6",className:e.title,children:"Skinx"})})})})}var x=a(107),b=a(109),g=a(39),O=a(40),f=a(42),v=a(41),y=a(23),w=a.n(y),k=a(106),N=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(g.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={files:null,disease_type:null,username:null,password:null,disease:null,token:null,age:0,arr1:["actinic_keratoses","basal_cell_carcinoma","benign_keratosis_like_lesions ","dermatofibroma","melanocytic_nevi","melanoma","vascular_lesions"],arr2:["Actinic Keratoses","Basal Cell Carcinoma","Benign Keratosis Like Lesions ","Dermatofibroma","Melanocytic Nevi","Melanoma","Vascular Lesions"]},e.usernameHandler=function(t){e.setState({username:t.target.value})},e.passwordHandler=function(t){e.setState({password:t.target.value})},e.handleFile=function(t){e.setState({files:t.target.files[0]})},e.handleLogin=function(){var t=new FormData;t.append("grant_type","password"),t.append("username",e.state.username),t.append("password",e.state.username),w()({method:"post",url:"http://3.128.170.254:5000/token",data:t,headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.setState({token:t.data.access_token}),console.log(t.data.access_token)})).catch((function(e){console.log(e)}))},e.handleUpload=function(){var t=new FormData;t.append("file",e.state.files),w()({method:"post",url:"http://3.128.170.254:5000/skinx?disease=".concat(e.state.disease_type),data:t,headers:{Authorization:"Bearer ".concat(e.state.token)}}).then((function(t){e.setState({disease:t.data.disease}),console.log(t.data.disease)})).catch((function(e){console.log(e)}))},e.handleDisease=function(t){e.setState({disease_type:t.target.value}),console.log(e.state.disease_type)},e}return Object(O.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"text",name:"username",placeholder:"username",value:this.state.username,onChange:this.usernameHandler}),Object(u.jsx)("input",{type:"password",name:"password",placeholder:"password",value:this.state.password,onChange:this.passwordHandler}),Object(u.jsx)("button",{onClick:function(t){return e.handleLogin(t)},children:"Login"}),Object(u.jsx)("input",{type:"file",onChange:this.handleFile}),Object(u.jsxs)("select",{onChange:function(t){return e.handleDisease(t)},value:this.state.disease_type,children:[Object(u.jsx)("option",{disabled:!0,hidden:!0,value:""}),this.state.arr1.map((function(t,a){return Object(u.jsx)("option",{value:t,children:e.state.arr2[a]})}))]}),this.state.disease?Object(u.jsxs)("div",{children:["the disease is ",this.state.disease]}):Object(u.jsx)("div",{children:"click on predict to predict"}),Object(u.jsx)(k.a,{style:{width:"80%"},className:"mt-2 mb-4",variant:"outlined",color:"primary",onClick:function(t){return e.handleUpload(t)},children:"Predict"})]})}}]),a}(n.a.Component),_=Object(r.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function C(){var e=_();return Object(u.jsxs)("span",{children:[Object(u.jsx)(m,{}),Object(u.jsxs)(x.a,{maxWidth:"lg",children:[Object(u.jsx)(j.a,{className:"pt-4",align:"left",variant:"h5",gutterBottom:!0,children:"AI for good"}),Object(u.jsx)("div",{className:e.root,children:Object(u.jsxs)(o.a,{container:!0,spacing:2,children:[Object(u.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(u.jsxs)(l.a,{align:"center",className:e.paper,children:[Object(u.jsx)(j.a,{className:"py-2",align:"left",variant:"p",children:"Choose an Image"}),Object(u.jsx)(N,{}),Object(u.jsxs)("div",{className:"ml-4",children:[Object(u.jsxs)("div",{className:"ml-4",children:[Object(u.jsx)(b.a,{style:{width:"82%"},className:"mt-2 ml-4 ",severity:"error",children:"Image not uploaded Try Again!"}),Object(u.jsx)(b.a,{style:{width:"82%"},className:"mt-2 ml-4 ",severity:"success",children:"Image uploaded successfully!"})]})," "]})]})}),Object(u.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(u.jsxs)(l.a,{className:e.paper,children:[Object(u.jsx)(j.a,{align:"left",variant:"h5",gutterBottom:!0,children:"Original Image"}),Object(u.jsx)("img",{alt:"150",src:"https://via.placeholder.com/150"}),Object(u.jsx)(b.a,{className:"mt-2",severity:"success",children:"Some other options are shown aside!"})]})}),Object(u.jsx)(o.a,{item:!0,xs:12,sm:12,children:Object(u.jsxs)(l.a,{className:e.paper,children:[Object(u.jsx)(j.a,{className:"pt-2",align:"left",variant:"h5",gutterBottom:!0,children:"Some Other Examples"}),Object(u.jsx)(o.a,{container:!0,spacing:2,children:["1","2","3","4","5","6"].map((function(e,t){return Object(u.jsx)(o.a,{item:!0,xs:6,sm:6,children:Object(u.jsx)("img",{alt:t,src:"https://via.placeholder.com/150?text=".concat(e)})})}))})]})})]})})]})]})}a(77);var S=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(C,{})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,111)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),i(e),c(e)}))};c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),B()}},[[78,1,2]]]);
//# sourceMappingURL=main.2b848950.chunk.js.map