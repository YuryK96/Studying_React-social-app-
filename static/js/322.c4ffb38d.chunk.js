"use strict";(self.webpackChunksocial_network_pet_project_=self.webpackChunksocial_network_pet_project_||[]).push([[322],{4322:function(e,t,r){r.r(t),r.d(t,{default:function(){return K}});var n=r(1413),o=r(885),i=r(2791),a=r(6945),s=r(5290),l=r(7317),c=r(4554),u=r(8096),d=r(890),f=r(4280),h=r(5523),v=r(9174),p=r(6151),j=r(8086),x=r(3400),m=r(3158),g=r(184),Z=function(e){var t,r,o,i,a,Z=e.profile,b=e.isOwner,y=e.savePhoto,k=e.OutFromEditMode,w=e.updateProfile,M=e.userId,O=(0,m.i)(),P=(0,s.cI)({mode:"onBlur"}),W=P.register,C=P.formState,z=C.errors,A=C.isValid,_=P.handleSubmit,L=P.reset,V=P.setError,H=P.clearErrors;P.control;return(0,g.jsxs)(c.Z,{display:"flex",children:[(0,g.jsx)(u.Z,{children:(0,g.jsxs)("form",{onSubmit:_((function(e){var t={aboutMe:e.aboutMe,fullName:e.name,lookingForAJob:e.lookingForAJob,lookingForAJobDescription:e.lookingForAJobDescription,userId:M,photos:{large:null,small:null},contacts:{facebook:e.facebook,github:e.github,instagram:e.instagram,mainLink:e.mainLink,twitter:e.twitter,vk:e.vk,website:e.website,youtube:e.youtube}};w(t,M,V),L(),k()})),children:[(0,g.jsxs)(c.Z,{display:"flex",marginLeft:1,justifyContent:O.width>560?"start":"center",flexWrap:"wrap",children:[(0,g.jsxs)(c.Z,{sx:{textAlign:"center",margin:1,minWidth:200,maxWidth:200},children:[(0,g.jsx)(d.Z,{fontWeight:500,children:Z.fullName}),(0,g.jsx)(c.Z,{component:"img",borderRadius:3,width:"100%",src:Z.photos.large||"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"})," ",b&&(0,g.jsxs)(x.Z,{component:"label",children:[(0,g.jsx)(j.Z,{}),(0,g.jsx)("input",{hidden:!0,type:"file",onChange:function(e){return function(e){var t,r;null!==(t=e.target)&&void 0!==t&&null!==(r=t.files)&&void 0!==r&&r.length&&y(e.target.files[0])}(e)}})]}),(0,g.jsx)(c.Z,{margin:1,children:(0,g.jsx)(f.Z,(0,n.Z)({label:"Name",size:"small",onFocus:function(){H()}},W("name",{value:Z.fullName,required:"need to fill form",minLength:{value:1,message:"need more symbols"}})))}),(null===z||void 0===z?void 0:z.name)&&(0,g.jsx)(d.Z,{sx:{color:"red",margin:1},children:(null===z||void 0===z||null===(t=z.name)||void 0===t?void 0:t.message)||"Error!"})||(0,g.jsx)(d.Z,{sx:{color:"red",margin:1},children:null===z||void 0===z||null===(r=z.server)||void 0===r?void 0:r.message}),(0,g.jsxs)(c.Z,{margin:1,children:[(0,g.jsx)(f.Z,(0,n.Z)({label:"About Me",multiline:!0,minRows:3,size:"small",onFocus:function(){H()}},W("aboutMe",{required:"need to fill form",value:Z.aboutMe,minLength:{value:1,message:"need more symbols"}}))),(null===z||void 0===z?void 0:z.aboutMe)&&(0,g.jsx)(d.Z,{sx:{color:"red",margin:1},children:(null===z||void 0===z||null===(o=z.aboutMe)||void 0===o?void 0:o.message)||"Error!"})||(0,g.jsx)(d.Z,{sx:{color:"red",margin:1},children:null===z||void 0===z||null===(i=z.server)||void 0===i?void 0:i.message})]})]}),(0,g.jsxs)(c.Z,{children:[(0,g.jsxs)(d.Z,{fontWeight:500,padding:1,children:[" ","Contacts:"]}),Object.entries(Z.contacts).map((function(e,t){var r,o=e[0];return(0,g.jsxs)(c.Z,{margin:1,children:[(0,g.jsx)(f.Z,(0,n.Z)({size:"small",label:e[0],type:"url",onFocus:function(){H()}},W(e[0],{value:e[1]}))),(null===z||void 0===z?void 0:z[o])&&(0,g.jsx)(d.Z,{sx:{color:"red",margin:1},children:(null===z||void 0===z||null===(r=z[o])||void 0===r?void 0:r.message)||"Error!"})]},t)}))]}),(0,g.jsx)(c.Z,{children:(0,g.jsxs)(c.Z,{m:1,children:[(0,g.jsx)(d.Z,{fontWeight:500,children:" Work:"}),(0,g.jsx)(h.Z,{label:"Are you looking for a job?",control:(0,g.jsx)(v.Z,(0,n.Z)((0,n.Z)({},W("lookingForAJob")),{},{defaultChecked:Z.lookingForAJob}))}),(0,g.jsxs)(c.Z,{m:1,children:[(0,g.jsx)(f.Z,(0,n.Z)({label:"Dream job describtion",multiline:!0,minRows:2,onFocus:function(){H()},type:"text"},W("lookingForAJobDescription",{required:"need to fill form",value:Z.lookingForAJobDescription,minLength:{value:1,message:"need more symbols"}}))),(null===z||void 0===z?void 0:z.lookingForAJobDescription)&&(0,g.jsx)(d.Z,{sx:{color:"red",margin:1},children:(null===z||void 0===z||null===(a=z.lookingForAJobDescription)||void 0===a?void 0:a.message)||"Error!"})]})]})})]}),(0,g.jsx)(c.Z,{marginBottom:1,display:"flex",justifyContent:"center",children:(0,g.jsx)(p.Z,{disabled:!A,variant:"outlined",type:"submit",children:"Edit"})})]})}),(0,g.jsx)(c.Z,{children:(0,g.jsx)(x.Z,{onClick:k,children:(0,g.jsx)(l.Z,{})})})]})},b=function(e){var t=e.status,r=e.updateStatus,n=(0,i.useState)(!1),a=(0,o.Z)(n,2),s=a[0],l=a[1],u=(0,i.useState)(t),h=(0,o.Z)(u,2),v=h[0],p=h[1];(0,i.useEffect)((function(){p(t)}),[t]);return(0,g.jsxs)(c.Z,{display:"flex",justifyContent:"center",children:[!s&&(0,g.jsx)(c.Z,{children:(0,g.jsx)(d.Z,{borderBottom:"1px solid gray",minWidth:100,role:"span",onDoubleClick:function(){l(!0)},children:t||"------"})}),s&&(0,g.jsxs)(c.Z,{children:[" ",(0,g.jsx)(f.Z,{autoFocus:!0,onBlur:function(){l(!1),r(v)},onChange:function(e){p(e.currentTarget.value)},value:v,size:"small"})]})]})},y=r(1286),k=r(5403),w=r(2093),M=r(5758),O=r(1880),P=r(1164),W=r(4668),C=r(4586),z=r(6776),A=r(3854),_=function(e){var t=e.profile,r=e.isOwner,n=e.goToEditMode,o=e.status,i=e.updateStatus,a=(0,m.i)();return(0,g.jsxs)(c.Z,{sx:{display:"flex",justifyContent:a.width<460?"center":"start",gap:5,marginLeft:"3%",paddingTop:1,flexWrap:"wrap"},children:[(0,g.jsxs)(c.Z,{sx:{textAlign:"center",minWidth:150,maxWidth:150},children:[(0,g.jsx)(d.Z,{fontWeight:500,children:t.fullName}),(0,g.jsx)(c.Z,{component:"img",borderRadius:3,width:"100%",src:t.photos.large||"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"}),(0,g.jsx)(c.Z,{children:(0,g.jsx)(b,{status:o,updateStatus:i})}),(0,g.jsxs)(c.Z,{display:"flex",justifyContent:"center",marginTop:1,marginBottom:1,flexWrap:"wrap",children:[t.contacts.facebook&&(0,g.jsxs)("a",{target:"_blank",href:t.contacts.facebook,children:[" ",(0,g.jsx)(w.Z,{})]}),t.contacts.github&&(0,g.jsxs)("a",{target:"_blank",href:t.contacts.github,children:[" ",(0,g.jsx)(M.Z,{})]})," ",t.contacts.instagram&&(0,g.jsxs)("a",{target:"_blank",href:t.contacts.instagram,children:[" ",(0,g.jsx)(O.Z,{})]})," ",t.contacts.mainLink&&(0,g.jsxs)("a",{target:"_blank",href:t.contacts.mainLink,children:[" ",(0,g.jsx)(P.Z,{})]})," ",t.contacts.twitter&&(0,g.jsxs)("a",{target:"_blank",href:t.contacts.twitter,children:[" ",(0,g.jsx)(W.Z,{})]})," ",t.contacts.vk&&(0,g.jsxs)("a",{target:"_blank",href:t.contacts.vk,children:[" ",(0,g.jsx)(C.Z,{})]})," ",t.contacts.website&&(0,g.jsxs)("a",{target:"_blank",href:t.contacts.website,children:[" ",(0,g.jsx)(z.Z,{})]})," ",t.contacts.youtube&&(0,g.jsxs)("a",{target:"_blank",href:t.contacts.youtube,children:[" ",(0,g.jsx)(A.Z,{})]})]})]}),(0,g.jsxs)(c.Z,{maxWidth:200,children:[(0,g.jsx)(d.Z,{textAlign:"center",fontWeight:500,children:"About Me:"}),(0,g.jsx)(d.Z,{color:"rgba(49, 47, 48, 0.8)",children:t.aboutMe})]}),(0,g.jsxs)(c.Z,{maxWidth:200,children:[" ",(0,g.jsxs)(c.Z,{display:"flex",justifyContent:"center",children:[(0,g.jsx)(k.Z,{color:t.lookingForAJob?"success":"error"}),(0,g.jsx)(d.Z,{textAlign:"center",fontWeight:500,children:"\xa0Work:"})]}),(0,g.jsx)(d.Z,{color:"rgba(49, 47, 48, 0.8)",children:t.lookingForAJobDescription})]}),r&&(0,g.jsx)(c.Z,{children:(0,g.jsx)(x.Z,{onClick:n,children:(0,g.jsx)(y.Z,{})})})]})},L=function(e){var t=e.profile,r=e.status,n=e.updateStatus,s=e.isOwner,l=e.savePhoto,u=e.updateProfile,d=e.userId,f=(0,i.useState)(!1),h=(0,o.Z)(f,2),v=h[0],p=h[1];return t?(0,g.jsx)(c.Z,{sx:{background:" rgb(232, 231, 231)",borderRadius:10},children:v?(0,g.jsx)(Z,{OutFromEditMode:function(){p(!1)},profile:t,isOwner:s,updateProfile:u,userId:d,savePhoto:l}):(0,g.jsx)(_,{profile:t,status:r,updateStatus:n,isOwner:s,goToEditMode:function(){p(!0)}})}):(0,g.jsx)(a.Z,{})},V=r(8687),H=function(e){return e.profilePage.userProfile},D=function(e){return e.profilePage.status},F=function(e){return e.profilePage.myPostData},S=r(6871),I=r(7437),E=r(4294),J=r(7781),T=r(2932),N=r(6459),R={},B=r(3044),q=function(e){var t=e.countLikes,r=e.value,n=(0,m.i)();return(0,g.jsxs)(c.Z,{sx:{display:"flex",justifyContent:n.width>450?"space-between":"center",alignItems:"center",flexWrap:"wrap",margin:2,marginLeft:3,maxWidth:500},children:[(0,g.jsxs)(c.Z,{width:110,children:[(0,g.jsxs)(c.Z,{m:"auto",width:80,height:80,display:"flex",children:[(0,g.jsx)(B.Z,{sx:{width:"100%",height:"100%"},src:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",alt:""})," "]}),(0,g.jsxs)(c.Z,{m:1,display:"flex",justifyContent:"center",textAlign:"center",children:[(0,g.jsx)(d.Z,{children:" likes: "})," ",(0,g.jsx)(d.Z,{color:"green",children:t})]})," "]}),(0,g.jsx)(d.Z,{textAlign:"center",className:R.post,children:r})]})},U=r(1841),G=i.memo((function(e){var t;(0,N.Z)(e);var r=(0,V.v9)(F),o=(0,V.I0)(),i=(0,s.cI)(),a=i.register,l=i.formState,u=l.errors,h=(l.isValid,i.handleSubmit),v=i.reset,j=r.map((function(e,t){return(0,g.jsx)(q,{value:e.value,countLikes:e.countLikes},t)}));return(0,g.jsxs)(c.Z,{children:[(0,g.jsx)("form",{onSubmit:h((function(e){var t;t=e.newPostText,o(E.Nw.onAddPost(t)),v()})),children:(0,g.jsx)(c.Z,{children:(0,g.jsxs)(c.Z,{maxWidth:270,display:"flex",justifyContent:"center",flexDirection:"column",padding:3,children:[(0,g.jsx)(f.Z,(0,n.Z)({label:"New Comment",multiline:!0,minRows:3},a("newPostText",{required:"need to text something",maxLength:{value:20,message:"need less 20 symbols"}}))),(0,g.jsx)(d.Z,{color:"red",children:null===u||void 0===u||null===(t=u.newPostText)||void 0===t?void 0:t.message})," ",(0,g.jsx)(p.Z,{endIcon:(0,g.jsx)(U.Z,{}),variant:"outlined",type:"submit",children:"Comment"})]})})}),j]})}));var K=(0,J.qC)((function(e){return function(t){var r=(0,S.TH)(),o=(0,S.s0)(),i=(0,S.UO)();return(0,g.jsx)(e,(0,n.Z)((0,n.Z)({},t),{},{router:{location:r,navigate:o,params:i}}))}}),T.e)((function(e){var t=e.router,r=(0,V.I0)(),n=(0,V.v9)(H),o=(0,V.v9)(D),a=(0,V.v9)(I.n5),s=function(){var e=t.params.userId;e||(e=a),function(e){r((0,E.av)(e))}(e),function(e){r((0,E.lR)(e))}(e)};return(0,i.useEffect)((function(){s()}),[t.params.userId]),(0,g.jsxs)(c.Z,{children:[(0,g.jsx)(L,{isOwner:!t.params.userId,profile:n,status:o,updateStatus:function(e){r((0,E.Nf)(e))},savePhoto:function(e){r((0,E.Ju)(e))},updateProfile:function(e,t,n){r((0,E.ck)(e,t,n))},userId:a}),(0,g.jsx)(G,{})]})}))},8086:function(e,t,r){var n=r(4836);t.Z=void 0;var o=n(r(5649)),i=r(184),a=(0,o.default)((0,i.jsx)("path",{d:"M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z"}),"AddAPhoto");t.Z=a},4586:function(e,t,r){var n=r(4836);t.Z=void 0;var o=n(r(5649)),i=r(184),a=(0,o.default)((0,i.jsx)("path",{d:"M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"}),"Contacts");t.Z=a},1286:function(e,t,r){var n=r(4836);t.Z=void 0;var o=n(r(5649)),i=r(184),a=(0,o.default)((0,i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=a},2093:function(e,t,r){var n=r(4836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,r&&r.set(e,n)}(r(2791));var o=n(r(5649)),i=r(184);function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}var s=(0,o.default)((0,i.jsx)("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook");t.Z=s},5758:function(e,t,r){var n=r(4836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,r&&r.set(e,n)}(r(2791));var o=n(r(5649)),i=r(184);function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}var s=(0,o.default)((0,i.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");t.Z=s},1880:function(e,t,r){var n=r(4836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,r&&r.set(e,n)}(r(2791));var o=n(r(5649)),i=r(184);function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}var s=(0,o.default)((0,i.jsx)("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram");t.Z=s},7317:function(e,t,r){var n=r(4836);t.Z=void 0;var o=n(r(5649)),i=r(184),a=(0,o.default)((0,i.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");t.Z=a},1164:function(e,t,r){var n=r(4836);t.Z=void 0;var o=n(r(5649)),i=r(184),a=(0,o.default)((0,i.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");t.Z=a},1841:function(e,t,r){var n=r(4836);t.Z=void 0;var o=n(r(5649)),i=r(184),a=(0,o.default)((0,i.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97c1.31.61 2.75.97 4.29.97 5.52 0 10-4.48 10-10S17.52 2 12 2zm4 11h-3v3h-2v-3H8v-2h3V8h2v3h3v2z"}),"MapsUgc");t.Z=a},5403:function(e,t,r){var n=r(4836);t.Z=void 0;var o=n(r(5649)),i=r(184),a=(0,o.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=a},4668:function(e,t,r){var n=r(4836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,r&&r.set(e,n)}(r(2791));var o=n(r(5649)),i=r(184);function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}var s=(0,o.default)((0,i.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter");t.Z=s},6776:function(e,t,r){var n=r(4836);t.Z=void 0;var o=n(r(5649)),i=r(184),a=(0,o.default)((0,i.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"}),"Web");t.Z=a},3854:function(e,t,r){var n=r(4836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,r&&r.set(e,n)}(r(2791));var o=n(r(5649)),i=r(184);function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}var s=(0,o.default)((0,i.jsx)("path",{d:"M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"}),"YouTube");t.Z=s}}]);
//# sourceMappingURL=322.c4ffb38d.chunk.js.map