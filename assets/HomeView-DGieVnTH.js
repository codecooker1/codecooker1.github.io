import{_ as h,o as n,c as a,a as V,r as d,b as Z,d as e,e as s,t as $,f as y,g as C,p as A,h as M,i as j,j as T,w as c,k as f,u as I,l as L,m as F,v as H,n as N,F as B,q as E}from"./index-DyWrf654.js";import{c as R,n as D}from"./index-B_OgwVUv.js";import q from"./CreatePost-BLWcM7dT.js";const G=["src"],O={__name:"ProfileIcon",props:["picUrl"],setup(o){const t=o;return(r,l)=>(n(),a("img",{src:t.picUrl,width:"42",height:"42",alt:"profile_pic"},null,8,G))}},W=h(O,[["__scopeId","data-v-df9a41f0"]]),X={},z={title:"Like",class:"heart-container"},J=V('<input id="Give-It-An-Id" class="checkbox" type="checkbox" data-v-d730ac81><div class="svg-container" data-v-d730ac81><svg xmlns="http://www.w3.org/2000/svg" class="svg-outline" viewBox="0 0 24 24" data-v-d730ac81><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" data-v-d730ac81></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="svg-filled" viewBox="0 0 24 24" data-v-d730ac81><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" data-v-d730ac81></path></svg><svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="svg-celebrate" data-v-d730ac81><polygon points="10,10 20,20" data-v-d730ac81></polygon><polygon points="10,50 20,50" data-v-d730ac81></polygon><polygon points="20,80 30,70" data-v-d730ac81></polygon><polygon points="90,10 80,20" data-v-d730ac81></polygon><polygon points="90,50 80,50" data-v-d730ac81></polygon><polygon points="80,80 70,70" data-v-d730ac81></polygon></svg></div>',2),K=[J];function Q(o,t){return n(),a("div",z,K)}const Y=h(X,[["render",Q],["__scopeId","data-v-d730ac81"]]),S=o=>(A("data-v-cf956aa6"),o=o(),M(),o),ee={class:"poster-info"},te={class:"info"},oe={class:"handle"},se={class:"main-post"},ne=S(()=>e("br",null,null,-1)),ae=S(()=>e("br",null,null,-1)),le={key:0,class:"media-gallery"},ce=["src"],re=S(()=>e("div",{class:"h-2"},null,-1)),ie={class:"action-bar"},de={class:"action-btn"},ue={__name:"SinglePost",props:["post"],setup(o){const t=d("default_name"),r=d("default_handle"),l=d(""),v=d(""),i=d(""),u=d(0),_=o;async function k(){console.log(_.post),t.value=_.post.user.first_name+" "+_.post.user.last_name,r.value=_.post.user.username,l.value=_.post.user.profile_image,v.value=_.post.content,i.value=_.post.image,u.value=_.post.likes}return Z(async()=>{k()}),(b,P)=>(n(),a("article",null,[e("div",ee,[s(W,{picUrl:l.value},null,8,["picUrl"]),e("div",te,[e("p",null,$(t.value),1),e("p",oe,"@"+$(r.value),1)])]),e("div",se,[y(b.$slots,"default",{},()=>[ne,e("div",null,$(v.value),1),ae])]),i.value?(n(),a("div",le,[e("img",{src:i.value,alt:"Unable to load Image"},null,8,ce)])):C("",!0),re,e("div",ie,[e("div",de,[s(Y),e("p",null,$(u.value),1)])])]))}},_e=h(ue,[["__scopeId","data-v-cf956aa6"]]),pe=o=>(A("data-v-8ec19c3e"),o=o(),M(),o),he={class:"transition duration-75 text-gray-400 group-hover:text-white"},ve=pe(()=>e("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 22 21"},[e("path",{d:"M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"}),e("path",{d:"M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"})],-1)),fe={class:"ms-5 text-2xl btn-text"},me={__name:"SidebarButton",props:["link"],setup(o){return(t,r)=>{const l=j("router-link");return n(),T(l,{to:o.link,class:"flex items-center p-2 rounded-3xl hover:bg-gray-700 group"},{default:c(()=>[e("div",he,[y(t.$slots,"icon",{},()=>[ve],!0)]),e("span",fe,[y(t.$slots,"default",{},()=>[f("Dashboards")],!0)])]),_:3},8,["to"])}}},g=h(me,[["__scopeId","data-v-8ec19c3e"]]),ge={},we={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},$e=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-width":"2.3",d:"m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"},null,-1),xe=[$e];function ke(o,t){return n(),a("svg",we,xe)}const be=h(ge,[["render",ke]]),ye={},Ce={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},Ie=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.3",d:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},null,-1),Se=[Ie];function Pe(o,t){return n(),a("svg",Ce,Se)}const Be=h(ye,[["render",Pe]]),Ze={},Ae={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},Me=e("path",{"fill-rule":"evenodd",d:"M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z","clip-rule":"evenodd"},null,-1),Te=[Me];function Ue(o,t){return n(),a("svg",Ae,Te)}const Ve=h(Ze,[["render",Ue]]),je={},Le={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},Fe=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.3",d:"m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"},null,-1),He=[Fe];function Ne(o,t){return n(),a("svg",Le,He)}const Ee=h(je,[["render",Ne]]),Re={},De={class:"w-[46px] h-[46px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"46",height:"46",fill:"none",viewBox:"0 0 24 24"},qe=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.3",d:"m10.827 5.465-.435-2.324m.435 2.324a5.338 5.338 0 0 1 6.033 4.333l.331 1.769c.44 2.345 2.383 2.588 2.6 3.761.11.586.22 1.171-.31 1.271l-12.7 2.377c-.529.099-.639-.488-.749-1.074C5.813 16.73 7.538 15.8 7.1 13.455c-.219-1.169.218 1.162-.33-1.769a5.338 5.338 0 0 1 4.058-6.221Zm-7.046 4.41c.143-1.877.822-3.461 2.086-4.856m2.646 13.633a3.472 3.472 0 0 0 6.728-.777l.09-.5-6.818 1.277Z"},null,-1),Ge=[qe];function Oe(o,t){return n(),a("svg",De,Ge)}const We=h(Re,[["render",Oe]]),Xe={},ze={class:"w-[36px] h-[36px] text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},Je=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 12h4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},null,-1),Ke=[Je];function Qe(o,t){return n(),a("svg",ze,Ke)}const Ye=h(Xe,[["render",Qe]]),et={},tt={class:"w-[46px] h-[46px] text-gray-100","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"46",height:"46",fill:"none",viewBox:"0 0 24 24"},ot=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z"},null,-1),st=[ot];function nt(o,t){return n(),a("svg",tt,st)}const U=h(et,[["render",nt]]),at={class:"sidebar"},lt={class:"items"},ct={class:"icon-panel"},rt={class:"ico"},it=e("div",{class:"flex-spacer"},null,-1),dt={__name:"SidebarView",setup(o){const t=I(),r=L(),l=async()=>{try{await t.logout(r)}catch(v){console.error(v)}};return(v,i)=>(n(),a("aside",at,[e("div",lt,[e("div",ct,[e("ul",rt,[e("li",null,[s(g,{link:{name:"home"}},{icon:c(()=>[s(Ve)]),default:c(()=>[f(" Home ")]),_:1})]),e("li",null,[s(g,{link:{name:"explore"}},{icon:c(()=>[s(be)]),default:c(()=>[f(" Explore ")]),_:1})]),e("li",null,[s(g,{link:{name:"notifications"}},{icon:c(()=>[s(We)]),default:c(()=>[f(" Notifications ")]),_:1})]),e("li",null,[s(g,{link:{name:"profile"}},{icon:c(()=>[s(Be)]),default:c(()=>[f(" Profile ")]),_:1})]),e("li",null,[s(g,{link:{name:"pricing"}},{icon:c(()=>[s(Ee)]),default:c(()=>[f(" Pro ")]),_:1})]),e("li",null,[s(g,{link:"",onClick:l},{icon:c(()=>[s(U)]),default:c(()=>[f(" Create Post ")]),_:1})]),e("li",null,[s(g,{link:"",onClick:l},{icon:c(()=>[s(Ye)]),default:c(()=>[f(" Logout/Login ")]),_:1})])])])]),it]))}},ut={class:"userbar"},_t=e("label",{for:"message",class:"block mb-2 text-sm font-medium text-white"},"What's on your mind?",-1),pt=e("label",{for:"pi"},[e("i",{class:"fa fa-cloud-upload"}),f(" Upload Image")],-1),ht=e("button",{type:"submit",name:"submit"}," Create Post ",-1),vt={key:0,class:"text-red-500"},ft=e("div",{class:"flex-spacer"},null,-1),mt={__name:"UserSidebar",setup(o){const t=d(null),r=I(),l=d(""),v=d(!1),i=d(null),u=d(null),_=d("");async function k(m){console.log("uploading file");const p=await R(m);console.log(`file: ${p}`),console.log(`usernamr: ${r.user.username}`);const{data:w,error:x}=await i.value.storage.from("ItterMedia").upload(`/${r.user.username}/${D()}.webp`,p,{contentType:"image/webp"});x?(console.error("Error uploading file:",x),x.value=x):(console.log("File uploaded successfully:",w),_.value=await i.value.storage.from("ItterMedia").getPublicUrl(w.path).data.publicUrl,console.log("Public URL:",_.value))}async function b(){v.value=!0,r.setCsrfToken(),u.value&&await k(u.value),console.log(`csrf from before post ${r.csrfToken}`);const p=await(await fetch("https://itter.pythonanywhere.com/api/create/post",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRFToken":r.csrfToken},body:JSON.stringify({content:l.value})})).json();p.error?(console.log(p.error),t.value=p.error):(console.log("success"),t.value=null,l.value="")}async function P(m){u.value=m.target.files[0]}return(m,p)=>(n(),a("aside",ut,[e("form",{class:"max-w-sm mx-auto",onSubmit:N(b,["prevent"]),method:"post"},[_t,F(e("textarea",{id:"message ",rows:"4","onUpdate:modelValue":p[0]||(p[0]=w=>m.content=w),class:"block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500",placeholder:"What's on your mind...",name:"message",required:""},null,512),[[H,m.content]]),pt,e("input",{style:{padding:"0px"},onChange:p[1]||(p[1]=w=>P(w)),placeholder:"profile_image",id:"pi",type:"file",name:"profile_image",accept:"image/*",class:"textInput",capture:""},null,32),ht],32),t.value?(n(),a("p",vt,$(t.value),1)):C("",!0),ft]))}},gt={class:"structure"},wt={class:"usersidebar-wrapper"},$t={class:"feedarea"},xt=e("div",{class:"h-2"},null,-1),kt={class:"sidebar-wrapper"},It={__name:"HomeView",setup(o){const t=d([]),r=I(),l=d(!1);return Z(async()=>{const i=await(await fetch("https://itter.pythonanywhere.com/api/feed/",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json","X-CSRFToken":r.csrfToken,"Accept-Encoding":"gzip, deflate, br"}})).json();t.value=i.posts,console.log(t)}),(v,i)=>(n(),a(B,null,[e("div",gt,[e("div",wt,[s(mt)]),e("main",$t,[xt,(n(!0),a(B,null,E(t.value,u=>(n(),a("div",{class:"post",key:u.ipost_id},[s(_e,{post:u},null,8,["post"])]))),128)),e("button",{class:"create-post-button",onClick:i[0]||(i[0]=u=>l.value=!l.value)},[s(U)])]),e("div",kt,[s(dt)])]),l.value?(n(),T(q,{key:0,onClose:i[1]||(i[1]=u=>l.value=!1)})):C("",!0)],64))}};export{It as default};
