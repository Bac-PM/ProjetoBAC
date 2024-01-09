"use strict";(self.webpackChunkmy_project_1=self.webpackChunkmy_project_1||[]).push([[4046],{84046:(k,w,s)=>{s.r(w),s.d(w,{ProfilePage:()=>oe});var e=s(74081),d=s(27279),I=s(51926),A=s(73354),y=s(27875),T=s(74758),O=s(48102),u=s(93415),g=s(10701),C=s(32370),R=s(23298),_=s(74577),z=s(12881),q=s(28040),D=s(63738),i=s(87006),ee=s(59082),K=s(98264),Z=s(92191),se=s(71563),ae=s(51943),N=s(364),S=s(61020),b=s(40464),Q=s(72450),te=s(47853),X=s(66333),Y=s(38178),ne=s(8291),je=s(15816),we=s(97442),Ie=s(13576),Ae=s(87830),ye=s(47184),Te=s(59461),Ce=s(49204),Re=s(75719),Se=s(74919),Ue=s(29206),Be=s(98934),We=s(43433),Ke=s(64797),Ze=s(85811),be=s(8175);const re=te.Ry().shape(ne.s),oe=()=>{const{changeLocale:a,localeNames:l}=(0,X.M)(),{setUserDisplayName:c}=(0,i.L7)(),{formatMessage:t}=(0,S.Z)(),{trackUsage:r}=(0,i.rS)(),f=(0,i.lm)(),{lockApp:o,unlockApp:x}=(0,i.o1)(),{notifyStatus:L}=(0,I.G)(),{currentTheme:H,themes:p,onChangeTheme:h}=(0,X.P)(),{get:J,put:ce}=(0,i.kY)();(0,i.go)();const{isLoading:me,data:v,refetch:ue}=(0,b.useQuery)("user",async()=>{const{data:n}=await J("/admin/users/me");return n.data},{onSuccess(){L(t({id:"Settings.profile.form.notify.data.loaded",defaultMessage:"Your profile data has been loaded"}))},onError(){f({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),{isLoading:_e,data:ge}=(0,b.useQuery)(["providers","isSSOLocked"],async()=>{const{data:{data:n}}=await J("/admin/providers/isSSOLocked");return n},{enabled:window.strapi.isEE&&window.strapi.features.isEnabled("sso"),onError(){f({type:"warning",message:{id:"Settings.permissions.users.sso.provider.error"}})}}),fe=me||_e,V=(0,b.useMutation)(async n=>{const{confirmPassword:M,currentTheme:E,...P}=n;let m=P;if((B=>"password"in B)(m)&&m.password===""){const{password:B,currentPassword:W,...$}=m;m=$}const{data:j}=await ce("/admin/users/me",m);return{...j.data,currentTheme:E}},{async onSuccess(n){await ue();const{email:M,firstname:E,lastname:P,username:m,preferedLanguage:U}=n;i.I8.setUserInfo({email:M,firstname:E,lastname:P,username:m,preferedLanguage:U});const j=n.username||(0,Y.g)(n.firstname??"",n.lastname);c(j),n.preferedLanguage&&a(n.preferedLanguage),h(n.currentTheme),r("didChangeMode",{newMode:n.currentTheme}),f({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})},async onSettled(){x()}}),{isLoading:pe}=V,he=async(n,{setErrors:M})=>{o();const E=n.username;V.mutate({...n,username:E},{onError(P){const m=P?.response?.data;return m?.data?M(m.data):f({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};if(fe||!v)return(0,e.jsxs)(A.o,{"aria-busy":"true",children:[(0,e.jsx)(N.q,{title:t({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),(0,e.jsx)(y.T,{title:t({id:"Settings.profile.form.section.profile.page.title",defaultMessage:"Profile page"})}),(0,e.jsx)(T.D,{children:(0,e.jsx)(i.dO,{})})]});const Ee=ge?.isSSOLocked??!1,{email:Pe,firstname:Me,lastname:Oe,username:De,preferedLanguage:xe}=v,Le={email:Pe,firstname:Me,lastname:Oe,username:De,preferedLanguage:xe,currentTheme:H,confirmPassword:"",password:""};return(0,e.jsxs)(A.o,{"aria-busy":pe,children:[(0,e.jsx)(N.q,{title:t({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),(0,e.jsx)(se.J9,{onSubmit:he,initialValues:Le,validateOnChange:!1,validationSchema:re,enableReinitialize:!0,children:({errors:n,values:{email:M,firstname:E,lastname:P,username:m,preferedLanguage:U,currentTheme:j,...B},handleChange:W,isSubmitting:$,dirty:ve})=>(0,e.jsxs)(i.l0,{children:[(0,e.jsx)(y.T,{title:v.username||(0,Y.g)(v.firstname??"",v.lastname),primaryAction:(0,e.jsx)(O.z,{startIcon:(0,e.jsx)(ee.Z,{}),loading:$,type:"submit",disabled:!ve,children:t({id:"global.save",defaultMessage:"Save"})})}),(0,e.jsx)(u.x,{paddingBottom:10,children:(0,e.jsx)(T.D,{children:(0,e.jsxs)(g.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,e.jsx)(le,{errors:n,onChange:W,values:{firstname:E,lastname:P,username:m,email:M}}),!Ee&&(0,e.jsx)(ie,{errors:n,onChange:W,values:B}),(0,e.jsx)(de,{allApplicationThemes:p,onChange:W,values:{preferedLanguage:U,currentTheme:j},localeNames:l})]})})})]})})]})},ie=({errors:a,onChange:l,values:c})=>{const{formatMessage:t}=(0,S.Z)(),[r,f]=d.useState(!1),[o,x]=d.useState(!1),[L,H]=d.useState(!1);return(0,e.jsx)(u.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(g.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(C.Z,{variant:"delta",as:"h2",children:t({id:"global.change-password",defaultMessage:"Change password"})}),(0,e.jsx)(R.r,{gap:5,children:(0,e.jsx)(_.P,{s:12,col:6,children:(0,e.jsx)(z.o,{error:a.currentPassword?t({id:a.currentPassword,defaultMessage:a.currentPassword}):"",onChange:l,value:c.currentPassword,label:t({id:"Auth.form.currentPassword.label",defaultMessage:"Current Password"}),name:"currentPassword",type:r?"text":"password",endAction:(0,e.jsx)(F,{onClick:p=>{p.stopPropagation(),f(h=>!h)},label:t(r?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"}),children:r?(0,e.jsx)(K.Z,{}):(0,e.jsx)(Z.Z,{})})})})}),(0,e.jsxs)(R.r,{gap:5,children:[(0,e.jsx)(_.P,{s:12,col:6,children:(0,e.jsx)(G,{error:a.password?t({id:a.password,defaultMessage:a.password}):"",onChange:l,value:c.password,label:t({id:"global.password",defaultMessage:"Password"}),name:"password",type:o?"text":"password",autoComplete:"new-password",endAction:(0,e.jsx)(F,{onClick:p=>{p.stopPropagation(),x(h=>!h)},label:t(o?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"}),children:o?(0,e.jsx)(K.Z,{}):(0,e.jsx)(Z.Z,{})})})}),(0,e.jsx)(_.P,{s:12,col:6,children:(0,e.jsx)(G,{error:a.confirmPassword?t({id:a.confirmPassword,defaultMessage:a.confirmPassword}):"",onChange:l,value:c.confirmPassword,label:t({id:"Auth.form.confirmPassword.label",defaultMessage:"Confirm Password"}),name:"confirmPassword",type:L?"text":"password",autoComplete:"new-password",endAction:(0,e.jsx)(F,{onClick:p=>{p.stopPropagation(),H(h=>!h)},label:t(L?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"}),children:L?(0,e.jsx)(K.Z,{}):(0,e.jsx)(Z.Z,{})})})})]})]})})},G=(0,Q.ZP)(z.o)`
  ::-ms-reveal {
    display: none;
  }
`,F=(0,Q.ZP)(q.E)`
  svg {
    height: ${(0,i.Q1)(16)};
    width: ${(0,i.Q1)(16)};
    path {
      fill: ${({theme:a})=>a.colors.neutral600};
    }
  }
`,de=({onChange:a,values:l,localeNames:c,allApplicationThemes:t={}})=>{const{formatMessage:r}=(0,S.Z)(),f=Object.keys(t).filter(o=>t[o]);return(0,e.jsx)(u.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(g.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsxs)(g.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(C.Z,{variant:"delta",as:"h2",children:r({id:"Settings.profile.form.section.experience.title",defaultMessage:"Experience"})}),(0,e.jsx)(C.Z,{children:r({id:"Settings.profile.form.section.experience.interfaceLanguageHelp",defaultMessage:"Preference changes will apply only to you. More information is available {here}."},{here:(0,e.jsx)(u.x,{as:"a",color:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales",children:r({id:"Settings.profile.form.section.experience.here",defaultMessage:"here"})})})})]}),(0,e.jsxs)(R.r,{gap:5,children:[(0,e.jsx)(_.P,{s:12,col:6,children:(0,e.jsx)(D.q4,{label:r({id:"Settings.profile.form.section.experience.interfaceLanguage",defaultMessage:"Interface language"}),placeholder:r({id:"global.select",defaultMessage:"Select"}),hint:r({id:"Settings.profile.form.section.experience.interfaceLanguage.hint",defaultMessage:"This will only display your own interface in the chosen language."}),onClear:()=>{a({target:{name:"preferedLanguage",value:null}})},clearLabel:r({id:"Settings.profile.form.section.experience.clear.select",defaultMessage:"Clear the interface language selected"}),value:l.preferedLanguage,onChange:o=>{a({target:{name:"preferedLanguage",value:o}})},children:Object.entries(c).map(([o,x])=>(0,e.jsx)(D.ag,{value:o,children:x},o))})}),(0,e.jsx)(_.P,{s:12,col:6,children:(0,e.jsxs)(D.q4,{label:r({id:"Settings.profile.form.section.experience.mode.label",defaultMessage:"Interface mode"}),placeholder:r({id:"components.Select.placeholder",defaultMessage:"Select"}),hint:r({id:"Settings.profile.form.section.experience.mode.hint",defaultMessage:"Displays your interface in the chosen mode."}),value:l.currentTheme,onChange:o=>{a({target:{name:"currentTheme",value:o}})},children:[(0,e.jsx)(D.ag,{value:"system",children:r({id:"Settings.profile.form.section.experience.mode.option-system-label",defaultMessage:"Use system settings"})}),f.map(o=>(0,e.jsx)(D.ag,{value:o,children:r({id:"Settings.profile.form.section.experience.mode.option-label",defaultMessage:"{name} mode"},{name:r({id:o,defaultMessage:ae(o)})})},o))]})})]})]})})},le=({errors:a,onChange:l,values:c})=>{const{formatMessage:t}=(0,S.Z)();return(0,e.jsx)(u.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(g.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(C.Z,{variant:"delta",as:"h2",children:t({id:"global.profile",defaultMessage:"Profile"})}),(0,e.jsxs)(R.r,{gap:5,children:[(0,e.jsx)(_.P,{s:12,col:6,children:(0,e.jsx)(i.jm,{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},error:a.firstname,onChange:l,value:c.firstname,type:"text",name:"firstname",required:!0})}),(0,e.jsx)(_.P,{s:12,col:6,children:(0,e.jsx)(i.jm,{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},error:a.lastname,onChange:l,value:c.lastname,type:"text",name:"lastname"})}),(0,e.jsx)(_.P,{s:12,col:6,children:(0,e.jsx)(i.jm,{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},error:a.email,onChange:l,value:c.email,type:"email",name:"email",required:!0})}),(0,e.jsx)(_.P,{s:12,col:6,children:(0,e.jsx)(i.jm,{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},error:a.username,onChange:l,value:c.username,type:"text",name:"username"})})]})]})})}},8291:(k,w,s)=>{s.d(w,{a:()=>T,s:()=>A});var e=s(47853),d=s(87006);const I={firstname:e.Z_().trim().required(d.I0.required),lastname:e.Z_(),email:e.Z_().email(d.I0.email).lowercase().required(d.I0.required),username:e.Z_().nullable(),password:e.Z_().min(8,d.I0.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:e.Z_().min(8,d.I0.minLength).oneOf([e.iH("password"),null],"components.Input.error.password.noMatch").when("password",(O,u)=>O?u.required(d.I0.required):u)},A={...I,currentPassword:e.Z_().when(["password","confirmPassword"],(O,u,g)=>O||u?g.required(d.I0.required):g),preferedLanguage:e.Z_().nullable()},y={roles:e.IX().min(1,d.I0.required).required(d.I0.required)},T=e.Ry().shape({...I,isActive:e.Xg(),...y})}}]);
