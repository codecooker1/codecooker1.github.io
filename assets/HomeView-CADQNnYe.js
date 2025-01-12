import{_ as h,o as n,c as a,a as b,r as u,b as x,d as C,e as t,f as s,t as g,g as w,h as $,p as S,i as B,j as I,k as A,w as r,l as p,u as Z,m as V,n as P,v as M,q as j,s as k,F as T,x as N}from"./index-CMbJC-Lf.js";const U=["src"],H={__name:"ProfileIcon",props:["picUrl"],setup(o){const e=o;return(c,l)=>(n(),a("img",{src:e.picUrl,width:"42",height:"42",alt:"profile_pic"},null,8,U))}},F=h(H,[["__scopeId","data-v-0ca8b76a"]]),L={},R={title:"Like",class:"heart-container"},E=b('<input id="Give-It-An-Id" class="checkbox" type="checkbox" data-v-d730ac81><div class="svg-container" data-v-d730ac81><svg xmlns="http://www.w3.org/2000/svg" class="svg-outline" viewBox="0 0 24 24" data-v-d730ac81><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" data-v-d730ac81></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="svg-filled" viewBox="0 0 24 24" data-v-d730ac81><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" data-v-d730ac81></path></svg><svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="svg-celebrate" data-v-d730ac81><polygon points="10,10 20,20" data-v-d730ac81></polygon><polygon points="10,50 20,50" data-v-d730ac81></polygon><polygon points="20,80 30,70" data-v-d730ac81></polygon><polygon points="90,10 80,20" data-v-d730ac81></polygon><polygon points="90,50 80,50" data-v-d730ac81></polygon><polygon points="80,80 70,70" data-v-d730ac81></polygon></svg></div>',2),D=[E];function q(o,e){return n(),a("div",R,D)}const G=h(L,[["render",q],["__scopeId","data-v-d730ac81"]]),m=o=>(S("data-v-f9dd8056"),o=o(),B(),o),O={class:"poster-info"},W={class:"info"},X={class:"handle"},z={class:"main-post"},J=m(()=>t("br",null,null,-1)),K=m(()=>t("br",null,null,-1)),Q={key:0,class:"media-gallery"},Y=["src"],tt={class:"action-bar"},et={class:"action-btn"},ot=m(()=>t("p",null,"123",-1)),st=m(()=>t("p",null,"Repost",-1)),nt=m(()=>t("p",null,"Share",-1)),at=m(()=>t("p",null,"Comment",-1)),ct={__name:"SinglePost",props:["post"],setup(o){const e=u("default_name"),c=u("default_handle"),l=u(""),d=u(""),i=u(""),_=o;async function f(){console.log(_.post),e.value=_.post.user.first_name+" "+_.post.user.last_name,c.value=_.post.user.username,l.value=_.post.user.profile_image,d.value=_.post.content,i.value=_.post.image}return x(async()=>{f()}),C(()=>{console.log("activated"),f()}),(y,de)=>(n(),a("article",null,[t("div",O,[s(F,{picUrl:l.value},null,8,["picUrl"]),t("div",W,[t("p",null,g(e.value),1),t("p",X,"@"+g(c.value),1)])]),t("div",z,[w(y.$slots,"default",{},()=>[J,t("div",null,g(d.value),1),K],!0)]),i.value?(n(),a("div",Q,[t("image",{src:i.value},null,8,Y)])):$("",!0),t("div",tt,[t("div",et,[s(G),ot]),st,nt,at])]))}},rt=h(ct,[["__scopeId","data-v-f9dd8056"]]),lt={class:"transition duration-75 text-gray-400 group-hover:text-white"},it=t("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 22 21"},[t("path",{d:"M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"}),t("path",{d:"M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"})],-1),dt={class:"ms-5 text-2xl btn-text"},v={__name:"SidebarButton",props:["link"],setup(o){return(e,c)=>{const l=I("router-link");return n(),A(l,{to:o.link,class:"flex items-center p-2 rounded-3xl hover:bg-gray-700 group"},{default:r(()=>[t("div",lt,[w(e.$slots,"icon",{},()=>[it])]),t("span",dt,[w(e.$slots,"default",{},()=>[p("Dashboards")])])]),_:3},8,["to"])}}},_t={},ht={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},ut=t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-width":"2.3",d:"m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"},null,-1),pt=[ut];function vt(o,e){return n(),a("svg",ht,pt)}const mt=h(_t,[["render",vt]]),gt={},wt={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},ft=t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.3",d:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},null,-1),xt=[ft];function $t(o,e){return n(),a("svg",wt,xt)}const kt=h(gt,[["render",$t]]),yt={},bt={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},Ct=t("path",{"fill-rule":"evenodd",d:"M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z","clip-rule":"evenodd"},null,-1),St=[Ct];function Bt(o,e){return n(),a("svg",bt,St)}const It=h(yt,[["render",Bt]]),At={},Zt={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},Vt=t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.3",d:"m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"},null,-1),Pt=[Vt];function Mt(o,e){return n(),a("svg",Zt,Pt)}const jt=h(At,[["render",Mt]]),Tt={},Nt={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},Ut=t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.3",d:"m10.827 5.465-.435-2.324m.435 2.324a5.338 5.338 0 0 1 6.033 4.333l.331 1.769c.44 2.345 2.383 2.588 2.6 3.761.11.586.22 1.171-.31 1.271l-12.7 2.377c-.529.099-.639-.488-.749-1.074C5.813 16.73 7.538 15.8 7.1 13.455c-.219-1.169.218 1.162-.33-1.769a5.338 5.338 0 0 1 4.058-6.221Zm-7.046 4.41c.143-1.877.822-3.461 2.086-4.856m2.646 13.633a3.472 3.472 0 0 0 6.728-.777l.09-.5-6.818 1.277Z"},null,-1),Ht=[Ut];function Ft(o,e){return n(),a("svg",Nt,Ht)}const Lt=h(Tt,[["render",Ft]]),Rt={},Et={class:"w-6 h-6 text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},Dt=t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"},null,-1),qt=[Dt];function Gt(o,e){return n(),a("svg",Et,qt)}const Ot=h(Rt,[["render",Gt]]),Wt={class:"sidebar"},Xt={class:"items"},zt={class:"icon-panel"},Jt={class:"ico"},Kt=t("div",{class:"flex-spacer"},null,-1),Qt={__name:"SidebarView",setup(o){const e=Z(),c=V(),l=async()=>{try{await e.logout(c)}catch(d){console.error(d)}};return(d,i)=>(n(),a("aside",Wt,[t("div",Xt,[t("div",zt,[t("ul",Jt,[t("li",null,[s(v,{link:{name:"home"}},{icon:r(()=>[s(It)]),default:r(()=>[p(" Home ")]),_:1})]),t("li",null,[s(v,{link:{name:"explore"}},{icon:r(()=>[s(mt)]),default:r(()=>[p(" Explore ")]),_:1})]),t("li",null,[s(v,{link:{name:"notifications"}},{icon:r(()=>[s(Lt)]),default:r(()=>[p(" Notifications ")]),_:1})]),t("li",null,[s(v,{link:{name:"profile"}},{icon:r(()=>[s(kt)]),default:r(()=>[p(" Profile ")]),_:1})]),t("li",null,[s(v,{link:{name:"pricing"}},{icon:r(()=>[s(jt)]),default:r(()=>[p(" Pro ")]),_:1}),s(v,{link:"",onClick:l},{icon:r(()=>[s(Ot)]),default:r(()=>[p(" Logout ")]),_:1})])])])]),Kt]))}},Yt={class:"userbar"},te=t("label",{for:"message",class:"block mb-2 text-sm font-medium text-white"},"What's on your mind?",-1),ee=t("button",{type:"submit",name:"submit"}," Create Post ",-1),oe={key:0},se=t("div",{class:"flex-spacer"},null,-1),ne={__name:"UserSidebar",setup(o){const e=u(""),c=u(null);async function l(){const i=await(await fetch("https://itter.pythonanywhere.com/api/create/post",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRFToken":k()},body:JSON.stringify({content:e.value})})).json();i.error?(console.log(i.error),c.value=i.error):(console.log("success"),c.value=null,e.value="")}return(d,i)=>(n(),a("aside",Yt,[t("form",{class:"max-w-sm mx-auto",onSubmit:j(l,["prevent"]),method:"post"},[te,P(t("textarea",{id:"message ",rows:"4","onUpdate:modelValue":i[0]||(i[0]=_=>e.value=_),class:"block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500",placeholder:"What's on your mind...",name:"message",required:""},null,512),[[M,e.value]]),ee],32),c.value?(n(),a("p",oe,g(c.value),1)):$("",!0),se]))}},ae={class:"structure"},ce={class:"usersidebar-wrapper"},re={class:"feedarea"},le=t("div",{class:"h-2"},null,-1),ie={class:"sidebar-wrapper"},he={__name:"HomeView",setup(o){const e=u([]);return x(async()=>{const l=await(await fetch("https://itter.pythonanywhere.com/api/feed/",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json","X-CSRFToken":k(),"Accept-Encoding":"gzip, deflate, br"}})).json();e.value=l.posts,console.log(e)}),(c,l)=>(n(),a("div",ae,[t("div",ce,[s(ne)]),t("main",re,[le,(n(!0),a(T,null,N(e.value,d=>(n(),a("div",{class:"post",key:d.ipost_id},[s(rt,{post:d},null,8,["post"])]))),128))]),t("div",ie,[s(Qt)])]))}};export{he as default};
