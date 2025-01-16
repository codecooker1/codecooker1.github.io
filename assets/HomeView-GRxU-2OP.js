import{_ as i,o as n,c as a,a as I,r as p,b as x,d as e,e as s,t as f,f as g,g as $,p as k,h as b,i as B,j as Z,w as c,k as v,u as w,l as A,m as P,v as V,n as M,F as T,q as j}from"./index-BSeTsan6.js";const L=["src"],H={__name:"ProfileIcon",props:["picUrl"],setup(o){const t=o;return(l,r)=>(n(),a("img",{src:t.picUrl,width:"42",height:"42",alt:"profile_pic"},null,8,L))}},N=i(H,[["__scopeId","data-v-df9a41f0"]]),U={},E={title:"Like",class:"heart-container"},F=I('<input id="Give-It-An-Id" class="checkbox" type="checkbox" data-v-d730ac81><div class="svg-container" data-v-d730ac81><svg xmlns="http://www.w3.org/2000/svg" class="svg-outline" viewBox="0 0 24 24" data-v-d730ac81><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" data-v-d730ac81></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="svg-filled" viewBox="0 0 24 24" data-v-d730ac81><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" data-v-d730ac81></path></svg><svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="svg-celebrate" data-v-d730ac81><polygon points="10,10 20,20" data-v-d730ac81></polygon><polygon points="10,50 20,50" data-v-d730ac81></polygon><polygon points="20,80 30,70" data-v-d730ac81></polygon><polygon points="90,10 80,20" data-v-d730ac81></polygon><polygon points="90,50 80,50" data-v-d730ac81></polygon><polygon points="80,80 70,70" data-v-d730ac81></polygon></svg></div>',2),D=[F];function R(o,t){return n(),a("div",E,D)}const q=i(U,[["render",R],["__scopeId","data-v-d730ac81"]]),y=o=>(k("data-v-f7d1b57c"),o=o(),b(),o),G={class:"poster-info"},O={class:"info"},W={class:"handle"},X={class:"main-post"},z=y(()=>e("br",null,null,-1)),J=y(()=>e("br",null,null,-1)),K={key:0,class:"media-gallery"},Q=["src"],Y={class:"action-bar"},ee={class:"action-btn"},te={__name:"SinglePost",props:["post"],setup(o){const t=p("default_name"),l=p("default_handle"),r=p(""),d=p(""),u=p(""),h=p(0),_=o;async function C(){console.log(_.post),t.value=_.post.user.first_name+" "+_.post.user.last_name,l.value=_.post.user.username,r.value=_.post.user.profile_image,d.value=_.post.content,u.value=_.post.image,h.value=_.post.likes}return x(async()=>{C()}),(S,ht)=>(n(),a("article",null,[e("div",G,[s(N,{picUrl:r.value},null,8,["picUrl"]),e("div",O,[e("p",null,f(t.value),1),e("p",W,"@"+f(l.value),1)])]),e("div",X,[g(S.$slots,"default",{},()=>[z,e("div",null,f(d.value),1),J])]),u.value?(n(),a("div",K,[e("image",{src:u.value},null,8,Q)])):$("",!0),e("div",Y,[e("div",ee,[s(q),e("p",null,f(h.value),1)])])]))}},oe=i(te,[["__scopeId","data-v-f7d1b57c"]]),se=o=>(k("data-v-8ec19c3e"),o=o(),b(),o),ne={class:"transition duration-75 text-gray-400 group-hover:text-white"},ae=se(()=>e("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 22 21"},[e("path",{d:"M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"}),e("path",{d:"M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"})],-1)),ce={class:"ms-5 text-2xl btn-text"},re={__name:"SidebarButton",props:["link"],setup(o){return(t,l)=>{const r=B("router-link");return n(),Z(r,{to:o.link,class:"flex items-center p-2 rounded-3xl hover:bg-gray-700 group"},{default:c(()=>[e("div",ne,[g(t.$slots,"icon",{},()=>[ae],!0)]),e("span",ce,[g(t.$slots,"default",{},()=>[v("Dashboards")],!0)])]),_:3},8,["to"])}}},m=i(re,[["__scopeId","data-v-8ec19c3e"]]),le={},ie={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},de=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-width":"2.3",d:"m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"},null,-1),_e=[de];function ue(o,t){return n(),a("svg",ie,_e)}const he=i(le,[["render",ue]]),pe={},ve={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},me=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.3",d:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},null,-1),fe=[me];function ge(o,t){return n(),a("svg",ve,fe)}const we=i(pe,[["render",ge]]),xe={},$e={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},ke=e("path",{"fill-rule":"evenodd",d:"M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z","clip-rule":"evenodd"},null,-1),be=[ke];function ye(o,t){return n(),a("svg",$e,be)}const Ce=i(xe,[["render",ye]]),Se={},Ie={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},Be=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.3",d:"m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"},null,-1),Ze=[Be];function Ae(o,t){return n(),a("svg",Ie,Ze)}const Pe=i(Se,[["render",Ae]]),Ve={},Me={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},Te=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.3",d:"m10.827 5.465-.435-2.324m.435 2.324a5.338 5.338 0 0 1 6.033 4.333l.331 1.769c.44 2.345 2.383 2.588 2.6 3.761.11.586.22 1.171-.31 1.271l-12.7 2.377c-.529.099-.639-.488-.749-1.074C5.813 16.73 7.538 15.8 7.1 13.455c-.219-1.169.218 1.162-.33-1.769a5.338 5.338 0 0 1 4.058-6.221Zm-7.046 4.41c.143-1.877.822-3.461 2.086-4.856m2.646 13.633a3.472 3.472 0 0 0 6.728-.777l.09-.5-6.818 1.277Z"},null,-1),je=[Te];function Le(o,t){return n(),a("svg",Me,je)}const He=i(Ve,[["render",Le]]),Ne={},Ue={class:"w-[36px] h-[36px] text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},Ee=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 12h4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},null,-1),Fe=[Ee];function De(o,t){return n(),a("svg",Ue,Fe)}const Re=i(Ne,[["render",De]]),qe={},Ge={class:"w-[36px] h-[36px] text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},Oe=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z"},null,-1),We=[Oe];function Xe(o,t){return n(),a("svg",Ge,We)}const ze=i(qe,[["render",Xe]]),Je={class:"sidebar"},Ke={class:"items"},Qe={class:"icon-panel"},Ye={class:"ico"},et=e("div",{class:"flex-spacer"},null,-1),tt={__name:"SidebarView",setup(o){const t=w(),l=A(),r=async()=>{try{await t.logout(l)}catch(d){console.error(d)}};return(d,u)=>(n(),a("aside",Je,[e("div",Ke,[e("div",Qe,[e("ul",Ye,[e("li",null,[s(m,{link:{name:"home"}},{icon:c(()=>[s(Ce)]),default:c(()=>[v(" Home ")]),_:1})]),e("li",null,[s(m,{link:{name:"explore"}},{icon:c(()=>[s(he)]),default:c(()=>[v(" Explore ")]),_:1})]),e("li",null,[s(m,{link:{name:"notifications"}},{icon:c(()=>[s(He)]),default:c(()=>[v(" Notifications ")]),_:1})]),e("li",null,[s(m,{link:{name:"profile"}},{icon:c(()=>[s(we)]),default:c(()=>[v(" Profile ")]),_:1})]),e("li",null,[s(m,{link:{name:"pricing"}},{icon:c(()=>[s(Pe)]),default:c(()=>[v(" Pro ")]),_:1})]),e("li",null,[s(m,{link:"",onClick:r},{icon:c(()=>[s(ze)]),default:c(()=>[v(" Create Post ")]),_:1})]),e("li",null,[s(m,{link:"",onClick:r},{icon:c(()=>[s(Re)]),default:c(()=>[v(" Logout/Login ")]),_:1})])])])]),et]))}},ot={class:"userbar"},st=e("label",{for:"message",class:"block mb-2 text-sm font-medium text-white"},"What's on your mind?",-1),nt=e("button",{type:"submit",name:"submit"}," Create Post ",-1),at={key:0},ct=e("div",{class:"flex-spacer"},null,-1),rt={__name:"UserSidebar",setup(o){const t=p(""),l=p(null),r=w();async function d(){r.setCsrfToken(),console.log(`csrf from before post ${r.csrfToken}`);const h=await(await fetch("https://itter.pythonanywhere.com/api/create/post",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRFToken":r.csrfToken},body:JSON.stringify({content:t.value})})).json();h.error?(console.log(h.error),l.value=h.error):(console.log("success"),l.value=null,t.value="")}return(u,h)=>(n(),a("aside",ot,[e("form",{class:"max-w-sm mx-auto",onSubmit:M(d,["prevent"]),method:"post"},[st,P(e("textarea",{id:"message ",rows:"4","onUpdate:modelValue":h[0]||(h[0]=_=>t.value=_),class:"block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500",placeholder:"What's on your mind...",name:"message",required:""},null,512),[[V,t.value]]),nt],32),l.value?(n(),a("p",at,f(l.value),1)):$("",!0),ct]))}},lt={class:"structure"},it={class:"usersidebar-wrapper"},dt={class:"feedarea"},_t=e("div",{class:"h-2"},null,-1),ut={class:"sidebar-wrapper"},vt={__name:"HomeView",setup(o){const t=p([]),l=w();return x(async()=>{const d=await(await fetch("https://itter.pythonanywhere.com/api/feed/",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json","X-CSRFToken":l.csrfToken,"Accept-Encoding":"gzip, deflate, br"}})).json();t.value=d.posts,console.log(t)}),(r,d)=>(n(),a("div",lt,[e("div",it,[s(rt)]),e("main",dt,[_t,(n(!0),a(T,null,j(t.value,u=>(n(),a("div",{class:"post",key:u.ipost_id},[s(oe,{post:u},null,8,["post"])]))),128))]),e("div",ut,[s(tt)])]))}};export{vt as default};
