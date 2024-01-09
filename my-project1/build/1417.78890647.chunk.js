"use strict";(self.webpackChunkmy_project_1=self.webpackChunkmy_project_1||[]).push([[1417],{79211:(I,p,e)=>{e.d(p,{F:()=>T});var t=e(74081),a=e(27279),P=e(93415),D=e(48102),g=e(87006),L=e(57121),c=e(70627),f=e(61020);const T=({displayedFilters:u})=>{const[C,R]=(0,a.useState)(!1),{formatMessage:A}=(0,f.Z)(),v=(0,a.useRef)(),M=()=>{R(j=>!j)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(P.x,{paddingTop:1,paddingBottom:1,children:[(0,t.jsx)(D.z,{variant:"tertiary",ref:v,startIcon:(0,t.jsx)(L.Z,{}),onClick:M,size:"S",children:A({id:"app.utils.filters",defaultMessage:"Filters"})}),C&&(0,t.jsx)(g.J5,{displayedFilters:u,isVisible:C,onToggle:M,source:v})]}),(0,t.jsx)(g.W$,{filtersSchema:u})]})};T.propTypes={displayedFilters:c.arrayOf(c.shape({name:c.string.isRequired,metadatas:c.shape({label:c.string}),fieldSchema:c.shape({type:c.string})})).isRequired}},91417:(I,p,e)=>{e.r(p),e.d(p,{default:()=>me});var t=e(74081),a=e(87006),P=e(59461),D=e(38178),g=e(10701),L=e(32370),c=e(77970),f=e(93415),T=e(23298),u=e(28502),C=e(5938),R=e(6918),A=e(15244),v=e(86967),M=e(93153),j=e(50086),H=e(4987),J=e(8295),X=e(61121),G=e(27997),N=e(74758),k=e(73354),w=e(27875),q=e(37472),U=e(61020),ee=e(79211),b=e(40464),te=e(51447),se=e(11266),ae=e(89486),ne=e(82298),i=e(70627),ie=e(33866),oe=e(98264),ue=e(27279),Ee=e(64797),ge=e(85811),ce=e(66333),pe=e(15816),Me=e(97442),De=e(13576),Oe=e(87830),Pe=e(47184),Le=e(364),fe=e(71563),ye=e(49204),Te=e(47853),Ce=e(75719),he=e(74919),Re=e(29206),Ae=e(98934),ve=e(43433),Ue=e(8175);const re=({canReadAuditLogs:s,canReadUsers:l})=>{const{get:m}=(0,a.kY)(),{search:o}=(0,te.TH)(),_=(0,a.lm)(),[{query:d}]=(0,a.Kx)(),n={keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:O=>_({type:"warning",message:O.message})},{users:r,isError:E,isLoading:y}=(0,se.u)({},{...n,enabled:l,staleTime:2*(1e3*60)}),{data:h,isLoading:W,isError:K}=(0,b.useQuery)(["auditLogs",o],async()=>{const{data:O}=await m("/admin/audit-logs",{params:d});return O},{...n,enabled:s});return{auditLogs:h,users:r,isLoading:y||W,hasError:K||E}},V=()=>{const{formatDate:s}=(0,U.Z)();return m=>{const o=(0,ie.Z)(m),_=s(o,{dateStyle:"long"}),d=s(o,{timeStyle:"medium",hourCycle:"h24"});return`${_}, ${d}`}},Q={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},S=s=>Q[s]||s,x=({actionLabel:s,actionName:l})=>(0,t.jsxs)(g.k,{direction:"column",alignItems:"baseline",gap:1,children:[(0,t.jsx)(L.Z,{textColor:"neutral600",variant:"sigma",children:s}),(0,t.jsx)(L.Z,{textColor:"neutral600",children:l})]});x.propTypes={actionLabel:i.string.isRequired,actionName:i.string.isRequired};const F=({status:s,data:l,formattedDate:m})=>{const{formatMessage:o}=(0,U.Z)();if(s==="loading")return(0,t.jsx)(g.k,{padding:7,justifyContent:"center",alignItems:"center",children:(0,t.jsx)(c.a,{children:"Loading content..."})});const{action:_,user:d,payload:n}=l;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.x,{marginBottom:3,children:(0,t.jsx)(L.Z,{variant:"delta",id:"title",children:o({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"})})}),(0,t.jsxs)(T.r,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0,children:[(0,t.jsx)(x,{actionLabel:o({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:o({id:`Settings.permissions.auditLogs.${_}`,defaultMessage:S(_)},{model:n?.model})}),(0,t.jsx)(x,{actionLabel:o({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:m}),(0,t.jsx)(x,{actionLabel:o({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:d?.displayName||"-"}),(0,t.jsx)(x,{actionLabel:o({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:d?.id.toString()||"-"})]}),(0,t.jsx)(u.V,{value:JSON.stringify(n,null,2),disabled:!0,label:o({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})})]})};F.defaultProps={data:{}},F.propTypes={status:i.oneOf(["idle","loading","error","success"]).isRequired,data:i.shape({action:i.string,date:i.string,payload:i.object,user:i.object}),formattedDate:i.string.isRequired};const Y=({handleClose:s,logId:l})=>{const{get:m}=(0,a.kY)(),o=(0,a.lm)(),_=async y=>{const{data:h}=await m(`/admin/audit-logs/${y}`);if(!h)throw new Error("Audit log not found");return h},{data:d,status:n}=(0,b.useQuery)(["audit-log",l],()=>_(l),{onError(){o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),s()}}),r=V(),E=d?r(d.date):"";return(0,t.jsxs)(C.P,{onClose:s,labelledBy:"title",children:[(0,t.jsx)(R.x,{children:(0,t.jsx)(ae.O,{label:E,id:"title",children:(0,t.jsx)(ne.$,{isCurrent:!0,children:E})})}),(0,t.jsx)(A.f,{children:(0,t.jsx)(F,{status:n,data:d,formattedDate:E})})]})};Y.propTypes={handleClose:i.func.isRequired,logId:i.string.isRequired};const Z=({pagination:s})=>(0,t.jsx)(f.x,{paddingTop:4,children:(0,t.jsxs)(g.k,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,t.jsx)(a.v4,{}),(0,t.jsx)(a.tU,{pagination:s})]})});Z.defaultProps={pagination:{pageCount:0,pageSize:50,total:0}},Z.propTypes={pagination:i.shape({page:i.number,pageCount:i.number,pageSize:i.number,total:i.number})};const $=({headers:s,rows:l,onOpenModal:m})=>{const{formatMessage:o}=(0,U.Z)(),_=V(),d=({type:n,value:r,model:E})=>n==="date"?_(r):n==="action"?o({id:`Settings.permissions.auditLogs.${r}`,defaultMessage:S(r)},{model:E}):r||"-";return(0,t.jsx)(v.p,{children:l.map(n=>(0,t.jsxs)(M.Tr,{...(0,a.X7)({fn:()=>m(n.id)}),children:[s.map(({key:r,name:E,cellFormatter:y})=>(0,t.jsx)(j.Td,{children:(0,t.jsx)(L.Z,{textColor:"neutral800",children:d({type:r,value:y?y(n[E]):n[E],model:n.payload?.model})})},r)),(0,t.jsx)(j.Td,{...a.UW,children:(0,t.jsx)(g.k,{justifyContent:"end",children:(0,t.jsx)(H.h,{onClick:()=>m(n.id),"aria-label":o({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${n.action} action`}),noBorder:!0,icon:(0,t.jsx)(oe.Z,{})})})})]},n.id))})};$.defaultProps={rows:[]},$.propTypes={headers:i.array.isRequired,rows:i.array,onOpenModal:i.func.isRequired};const B=({value:s,options:l,onChange:m})=>{const{formatMessage:o}=(0,U.Z)(),_=o({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return(0,t.jsx)(J.hQ,{"aria-label":_,value:s,onChange:m,children:l.map(({label:d,customValue:n})=>(0,t.jsx)(X.O,{value:n,children:d},n))})};B.defaultProps={value:null},B.propTypes={value:i.string,options:i.arrayOf(i.shape({label:i.string.isRequired,customValue:i.string.isRequired}).isRequired).isRequired,onChange:i.func.isRequired};const z=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],de=({formatMessage:s,users:l,canReadUsers:m})=>{const o=Object.keys(Q).map(d=>({label:s({id:`Settings.permissions.auditLogs.${d}`,defaultMessage:S(d)},{model:void 0}),customValue:d})),_=[{name:"action",metadatas:{customOperators:z,label:s({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),customInput:B,options:o},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:s({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}}];if(m&&l){const d=r=>r.username?r.username:r.firstname&&r.lastname?s({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:r.firstname,lastname:r.lastname}):r.email,n=l.map(r=>({label:d(r),customValue:r.id.toString()}));return[..._,{name:"user",metadatas:{customOperators:z,label:s({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:n,customInput:B},fieldSchema:{type:"relation",mainField:{name:"id"}}}]}return _},le=[{name:"action",key:"action",metadatas:{label:{id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"},sortable:!0}},{name:"date",key:"date",metadatas:{label:{id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"},sortable:!0}},{key:"user",name:"user",metadatas:{label:{id:"Settings.permissions.auditLogs.user",defaultMessage:"User"},sortable:!1},cellFormatter:s=>s?s.displayName:""}],_e=()=>{const{formatMessage:s}=(0,U.Z)(),l=(0,P.v9)(D.s),{allowedActions:{canRead:m,canReadUsers:o}}=(0,a.ss)({...l.settings.auditLogs,readUsers:l.settings.users.read}),[{query:_},d]=(0,a.Kx)(),{auditLogs:n,users:r,isLoading:E,hasError:y}=re({canReadAuditLogs:m,canReadUsers:o});(0,a.go)();const h=de({formatMessage:s,users:r,canReadUsers:o}),W=s({id:"global.auditLogs",defaultMessage:"Audit Logs"}),K=le.map(O=>({...O,metadatas:{...O.metadatas,label:s(O.metadatas.label)}}));return y?(0,t.jsx)(G.A,{children:(0,t.jsx)(N.D,{children:(0,t.jsx)(f.x,{paddingTop:8,children:(0,t.jsx)(a.Hn,{})})})}):(0,t.jsxs)(k.o,{"aria-busy":E,children:[(0,t.jsx)(a.SL,{name:W}),(0,t.jsx)(w.T,{title:W,subtitle:s({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),(0,t.jsx)(q.Z,{startActions:(0,t.jsx)(ee.F,{displayedFilters:h})}),(0,t.jsxs)(N.D,{canRead:m,children:[(0,t.jsx)(a.tM,{contentType:"Audit logs",headers:K,rows:n?.results||[],withBulkActions:!0,isLoading:E,children:(0,t.jsx)($,{headers:K,rows:n?.results||[],onOpenModal:O=>d({id:O})})}),(0,t.jsx)(Z,{pagination:n?.pagination})]}),_?.id&&(0,t.jsx)(Y,{handleClose:()=>d({id:null},"remove"),logId:_.id})]})},me=()=>{const s=(0,P.v9)(D.s);return(0,t.jsx)(a.O4,{permissions:s.settings.auditLogs.main,children:(0,t.jsx)(_e,{})})}},11266:(I,p,e)=>{e.d(p,{u:()=>D});var t=e(27279),a=e(87006),P=e(40464);function D(g={},L={}){const{id:c="",...f}=g,{get:T}=(0,a.kY)(),{data:u,isError:C,isLoading:R,refetch:A}=(0,P.useQuery)(["users",c,f],async()=>{const{data:{data:M}}=await T(`/admin/users/${c}`,{params:f});return M},L);return{users:t.useMemo(()=>{let M=[];return u&&("results"in u?Array.isArray(u.results)&&(M=u.results):M=[u]),M},[u]),pagination:t.useMemo(()=>(u&&"pagination"in u)??null,[u]),isLoading:R,isError:C,refetch:A}}},61121:(I,p,e)=>{e.d(p,{O:()=>a});var t=e(8295);const a=t.Wx},37472:(I,p,e)=>{e.d(p,{Z:()=>P});var t=e(74081),a=e(10701);const P=({startActions:D,endActions:g})=>!D&&!g?null:(0,t.jsxs)(a.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,t.jsx)(a.k,{gap:2,wrap:"wrap",children:D}),(0,t.jsx)(a.k,{gap:2,shrink:0,wrap:"wrap",children:g})]})}}]);
