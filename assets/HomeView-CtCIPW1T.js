import{_,o as n,c,a as P,r as h,b,d as e,e as s,t as f,f as g,g as w,p as y,h as C,i as A,j as S,w as r,k as v,u as x,l as V,m as M,v as T,n as j,F as k,q as L}from"./index-C-ixnGnq.js";import U from"./CreatePost-DeiFitrD.js";const H=["src"],N={__name:"ProfileIcon",props:["picUrl"],setup(o){const t=o;return(i,a)=>(n(),c("img",{src:t.picUrl,width:"42",height:"42",alt:"profile_pic"},null,8,H))}},E=_(N,[["__scopeId","data-v-df9a41f0"]]),F={},D={title:"Like",class:"heart-container"},R=P('<input id="Give-It-An-Id" class="checkbox" type="checkbox" data-v-d730ac81><div class="svg-container" data-v-d730ac81><svg xmlns="http://www.w3.org/2000/svg" class="svg-outline" viewBox="0 0 24 24" data-v-d730ac81><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" data-v-d730ac81></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="svg-filled" viewBox="0 0 24 24" data-v-d730ac81><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" data-v-d730ac81></path></svg><svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="svg-celebrate" data-v-d730ac81><polygon points="10,10 20,20" data-v-d730ac81></polygon><polygon points="10,50 20,50" data-v-d730ac81></polygon><polygon points="20,80 30,70" data-v-d730ac81></polygon><polygon points="90,10 80,20" data-v-d730ac81></polygon><polygon points="90,50 80,50" data-v-d730ac81></polygon><polygon points="80,80 70,70" data-v-d730ac81></polygon></svg></div>',2),q=[R];function G(o,t){return n(),c("div",D,q)}const O=_(F,[["render",G],["__scopeId","data-v-d730ac81"]]),$=o=>(y("data-v-9ef6341d"),o=o(),C(),o),W={class:"poster-info"},X={class:"info"},z={class:"handle"},J={class:"main-post"},K=$(()=>e("br",null,null,-1)),Q=$(()=>e("br",null,null,-1)),Y={key:0,class:"media-gallery"},ee=["src"],te=$(()=>e("div",{class:"h-2"},null,-1)),oe={class:"action-bar"},se={class:"action-btn"},ne={__name:"SinglePost",props:["post"],setup(o){const t=h("default_name"),i=h("default_handle"),a=h(""),p=h(""),d=h(""),l=h(0),u=o;async function B(){console.log(u.post),t.value=u.post.user.first_name+" "+u.post.user.last_name,i.value=u.post.user.username,a.value=u.post.user.profile_image,p.value=u.post.content,d.value=u.post.image,l.value=u.post.likes}return b(async()=>{B()}),(Z,vt)=>(n(),c("article",null,[e("div",W,[s(E,{picUrl:a.value},null,8,["picUrl"]),e("div",X,[e("p",null,f(t.value),1),e("p",z,"@"+f(i.value),1)])]),e("div",J,[g(Z.$slots,"default",{},()=>[K,e("div",null,f(p.value),1),Q])]),d.value?(n(),c("div",Y,[e("img",{src:d.value,alt:"Unable to load Image"},null,8,ee)])):w("",!0),te,e("div",oe,[e("div",se,[s(O),e("p",null,f(l.value),1)])])]))}},ae=_(ne,[["__scopeId","data-v-9ef6341d"]]),ce=o=>(y("data-v-8ec19c3e"),o=o(),C(),o),re={class:"transition duration-75 text-gray-400 group-hover:text-white"},le=ce(()=>e("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 22 21"},[e("path",{d:"M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"}),e("path",{d:"M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"})],-1)),ie={class:"ms-5 text-2xl btn-text"},de={__name:"SidebarButton",props:["link"],setup(o){return(t,i)=>{const a=A("router-link");return n(),S(a,{to:o.link,class:"flex items-center p-2 rounded-3xl hover:bg-gray-700 group"},{default:r(()=>[e("div",re,[g(t.$slots,"icon",{},()=>[le],!0)]),e("span",ie,[g(t.$slots,"default",{},()=>[v("Dashboards")],!0)])]),_:3},8,["to"])}}},m=_(de,[["__scopeId","data-v-8ec19c3e"]]),_e={},ue={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},he=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-width":"2.3",d:"m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"},null,-1),pe=[he];function ve(o,t){return n(),c("svg",ue,pe)}const me=_(_e,[["render",ve]]),fe={},ge={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},we=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.3",d:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},null,-1),xe=[we];function $e(o,t){return n(),c("svg",ge,xe)}const ke=_(fe,[["render",$e]]),be={},ye={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},Ce=e("path",{"fill-rule":"evenodd",d:"M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z","clip-rule":"evenodd"},null,-1),Se=[Ce];function Ie(o,t){return n(),c("svg",ye,Se)}const Be=_(be,[["render",Ie]]),Ze={},Pe={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},Ae=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.3",d:"m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"},null,-1),Ve=[Ae];function Me(o,t){return n(),c("svg",Pe,Ve)}const Te=_(Ze,[["render",Me]]),je={},Le={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},Ue=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.3",d:"m10.827 5.465-.435-2.324m.435 2.324a5.338 5.338 0 0 1 6.033 4.333l.331 1.769c.44 2.345 2.383 2.588 2.6 3.761.11.586.22 1.171-.31 1.271l-12.7 2.377c-.529.099-.639-.488-.749-1.074C5.813 16.73 7.538 15.8 7.1 13.455c-.219-1.169.218 1.162-.33-1.769a5.338 5.338 0 0 1 4.058-6.221Zm-7.046 4.41c.143-1.877.822-3.461 2.086-4.856m2.646 13.633a3.472 3.472 0 0 0 6.728-.777l.09-.5-6.818 1.277Z"},null,-1),He=[Ue];function Ne(o,t){return n(),c("svg",Le,He)}const Ee=_(je,[["render",Ne]]),Fe={},De={class:"w-[36px] h-[36px] text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},Re=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 12h4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},null,-1),qe=[Re];function Ge(o,t){return n(),c("svg",De,qe)}const Oe=_(Fe,[["render",Ge]]),We={},Xe={class:"w-[36px] h-[36px] text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},ze=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z"},null,-1),Je=[ze];function Ke(o,t){return n(),c("svg",Xe,Je)}const I=_(We,[["render",Ke]]),Qe={class:"sidebar"},Ye={class:"items"},et={class:"icon-panel"},tt={class:"ico"},ot=e("div",{class:"flex-spacer"},null,-1),st={__name:"SidebarView",setup(o){const t=x(),i=V(),a=async()=>{try{await t.logout(i)}catch(p){console.error(p)}};return(p,d)=>(n(),c("aside",Qe,[e("div",Ye,[e("div",et,[e("ul",tt,[e("li",null,[s(m,{link:{name:"home"}},{icon:r(()=>[s(Be)]),default:r(()=>[v(" Home ")]),_:1})]),e("li",null,[s(m,{link:{name:"explore"}},{icon:r(()=>[s(me)]),default:r(()=>[v(" Explore ")]),_:1})]),e("li",null,[s(m,{link:{name:"notifications"}},{icon:r(()=>[s(Ee)]),default:r(()=>[v(" Notifications ")]),_:1})]),e("li",null,[s(m,{link:{name:"profile"}},{icon:r(()=>[s(ke)]),default:r(()=>[v(" Profile ")]),_:1})]),e("li",null,[s(m,{link:{name:"pricing"}},{icon:r(()=>[s(Te)]),default:r(()=>[v(" Pro ")]),_:1})]),e("li",null,[s(m,{link:"",onClick:a},{icon:r(()=>[s(I)]),default:r(()=>[v(" Create Post ")]),_:1})]),e("li",null,[s(m,{link:"",onClick:a},{icon:r(()=>[s(Oe)]),default:r(()=>[v(" Logout/Login ")]),_:1})])])])]),ot]))}},nt={class:"userbar"},at=e("label",{for:"message",class:"block mb-2 text-sm font-medium text-white"},"What's on your mind?",-1),ct=e("button",{type:"submit",name:"submit"}," Create Post ",-1),rt={key:0},lt=e("div",{class:"flex-spacer"},null,-1),it={__name:"UserSidebar",setup(o){const t=h(""),i=h(null),a=x();async function p(){a.setCsrfToken(),console.log(`csrf from before post ${a.csrfToken}`);const l=await(await fetch("https://itter.pythonanywhere.com/api/create/post",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRFToken":a.csrfToken},body:JSON.stringify({content:t.value})})).json();l.error?(console.log(l.error),i.value=l.error):(console.log("success"),i.value=null,t.value="")}return(d,l)=>(n(),c("aside",nt,[e("form",{class:"max-w-sm mx-auto",onSubmit:j(p,["prevent"]),method:"post"},[at,M(e("textarea",{id:"message ",rows:"4","onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),class:"block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500",placeholder:"What's on your mind...",name:"message",required:""},null,512),[[T,t.value]]),ct],32),i.value?(n(),c("p",rt,f(i.value),1)):w("",!0),lt]))}},dt={class:"structure"},_t={class:"usersidebar-wrapper"},ut={class:"feedarea"},ht=e("div",{class:"h-2"},null,-1),pt={class:"sidebar-wrapper"},gt={__name:"HomeView",setup(o){const t=h([]),i=x(),a=h(!1);return b(async()=>{const d=await(await fetch("https://itter.pythonanywhere.com/api/feed/",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json","X-CSRFToken":i.csrfToken,"Accept-Encoding":"gzip, deflate, br"}})).json();t.value=d.posts,console.log(t)}),(p,d)=>(n(),c(k,null,[e("div",dt,[e("div",_t,[s(it)]),e("main",ut,[ht,(n(!0),c(k,null,L(t.value,l=>(n(),c("div",{class:"post",key:l.ipost_id},[s(ae,{post:l},null,8,["post"])]))),128)),e("button",{class:"create-post-button",onClick:d[0]||(d[0]=l=>a.value=!a.value)},[s(I)])]),e("div",pt,[s(st)])]),a.value?(n(),S(U,{key:0,onClose:d[1]||(d[1]=l=>a.value=!1)})):w("",!0)],64))}};export{gt as default};
