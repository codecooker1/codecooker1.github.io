import{_ as h,o as n,c,a as L,r as u,u as C,b as M,d as e,e as s,t as w,f as B,g as b,p as U,h as j,i as F,j as T,w as r,k as g,l as N,m as H,v as E,n as R,q as P,F as A,s as q}from"./index-CexEgAel.js";import{c as O,n as D}from"./index-jP6xUWJ8.js";import{I as X,C as G}from"./CreatePost-_J8vrzSw.js";const J=["src"],W={__name:"ProfileIcon",props:["picUrl"],setup(o){const t=o;return(a,i)=>(n(),c("img",{src:t.picUrl,width:"42",height:"42",alt:"profile_pic"},null,8,J))}},z=h(W,[["__scopeId","data-v-df9a41f0"]]),K={},Q={title:"Like",class:"heart-container"},Y=L('<input id="Give-It-An-Id" class="checkbox" type="checkbox" data-v-d730ac81><div class="svg-container" data-v-d730ac81><svg xmlns="http://www.w3.org/2000/svg" class="svg-outline" viewBox="0 0 24 24" data-v-d730ac81><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" data-v-d730ac81></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="svg-filled" viewBox="0 0 24 24" data-v-d730ac81><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" data-v-d730ac81></path></svg><svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="svg-celebrate" data-v-d730ac81><polygon points="10,10 20,20" data-v-d730ac81></polygon><polygon points="10,50 20,50" data-v-d730ac81></polygon><polygon points="20,80 30,70" data-v-d730ac81></polygon><polygon points="90,10 80,20" data-v-d730ac81></polygon><polygon points="90,50 80,50" data-v-d730ac81></polygon><polygon points="80,80 70,70" data-v-d730ac81></polygon></svg></div>',2),ee=[Y];function te(o,t){return n(),c("div",Q,ee)}const oe=h(K,[["render",te],["__scopeId","data-v-d730ac81"]]),Z=o=>(U("data-v-2cfed940"),o=o(),j(),o),se={class:"poster-info"},ne={class:"info"},ae={class:"handle"},le={class:"main-post"},ce=Z(()=>e("br",null,null,-1)),ie=Z(()=>e("br",null,null,-1)),re={key:0,class:"media-gallery"},de=["src"],ue=Z(()=>e("div",{class:"h-2"},null,-1)),_e={class:"action-bar"},pe={class:"action-btn"},he={__name:"SinglePost",props:["post_id"],setup(o){const t=u("default_name"),a=u("default_handle"),i=u(""),v=u(""),d=u(""),_=u(0),k=C(),f=o;async function I(){console.log(f.post_id);const l=(await fetch(`https://itter.pythonanywhere.com/api/get/post/${f.post_id}`)).json();t.value=l.user.first_name+" "+f.post.user.last_name,a.value=l.user.username,i.value=l.user.profile_image,v.value=l.content,d.value=l.image,_.value=l.likes}M(async()=>{I()});async function S(){console.log(f.post.post_id);const l=await(await fetch(`https://itter.pythonanywhere.com/api/like/post/${f.post_id}`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRFToken":k.csrfToken},body:JSON.stringify({post_id:f.post_id})})).json();console.log(l)}return(x,l)=>(n(),c("article",null,[e("div",se,[s(z,{picUrl:i.value},null,8,["picUrl"]),e("div",ne,[e("p",null,w(t.value),1),e("p",ae,"@"+w(a.value),1)])]),e("div",le,[B(x.$slots,"default",{},()=>[ce,e("div",null,w(v.value),1),ie])]),d.value?(n(),c("div",re,[e("img",{src:d.value,alt:"Unable to load Image"},null,8,de)])):b("",!0),ue,e("div",_e,[e("div",pe,[s(oe,{onClick:S}),e("p",null,w(_.value),1)])])]))}},ve=h(he,[["__scopeId","data-v-2cfed940"]]),ge=o=>(U("data-v-8ec19c3e"),o=o(),j(),o),fe={class:"transition duration-75 text-gray-400 group-hover:text-white"},me=ge(()=>e("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 22 21"},[e("path",{d:"M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"}),e("path",{d:"M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"})],-1)),we={class:"ms-5 text-2xl btn-text"},$e={__name:"SidebarButton",props:["link"],setup(o){return(t,a)=>{const i=F("router-link");return n(),T(i,{to:o.link,class:"flex items-center p-2 rounded-3xl hover:bg-gray-700 group"},{default:r(()=>[e("div",fe,[B(t.$slots,"icon",{},()=>[me],!0)]),e("span",we,[B(t.$slots,"default",{},()=>[g("Dashboards")],!0)])]),_:3},8,["to"])}}},m=h($e,[["__scopeId","data-v-8ec19c3e"]]),xe={},ke={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},ye=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-width":"2.3",d:"m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"},null,-1),be=[ye];function Ce(o,t){return n(),c("svg",ke,be)}const Ie=h(xe,[["render",Ce]]),Se={},Pe={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},Be=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.3",d:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},null,-1),Te=[Be];function Ze(o,t){return n(),c("svg",Pe,Te)}const Ae=h(Se,[["render",Ze]]),Me={},Ue={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},je=e("path",{"fill-rule":"evenodd",d:"M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z","clip-rule":"evenodd"},null,-1),Ve=[je];function Le(o,t){return n(),c("svg",Ue,Ve)}const Fe=h(Me,[["render",Le]]),Ne={},He={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},Ee=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.3",d:"m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"},null,-1),Re=[Ee];function qe(o,t){return n(),c("svg",He,Re)}const Oe=h(Ne,[["render",qe]]),De={},Xe={class:"w-[46px] h-[46px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"46",height:"46",fill:"none",viewBox:"0 0 24 24"},Ge=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.3",d:"m10.827 5.465-.435-2.324m.435 2.324a5.338 5.338 0 0 1 6.033 4.333l.331 1.769c.44 2.345 2.383 2.588 2.6 3.761.11.586.22 1.171-.31 1.271l-12.7 2.377c-.529.099-.639-.488-.749-1.074C5.813 16.73 7.538 15.8 7.1 13.455c-.219-1.169.218 1.162-.33-1.769a5.338 5.338 0 0 1 4.058-6.221Zm-7.046 4.41c.143-1.877.822-3.461 2.086-4.856m2.646 13.633a3.472 3.472 0 0 0 6.728-.777l.09-.5-6.818 1.277Z"},null,-1),Je=[Ge];function We(o,t){return n(),c("svg",Xe,Je)}const ze=h(De,[["render",We]]),Ke={},Qe={class:"w-[36px] h-[36px] text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},Ye=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 12h4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},null,-1),et=[Ye];function tt(o,t){return n(),c("svg",Qe,et)}const ot=h(Ke,[["render",tt]]),st={},nt={class:"w-[46px] h-[46px] text-gray-100","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"46",height:"46",fill:"none",viewBox:"0 0 24 24"},at=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z"},null,-1),lt=[at];function ct(o,t){return n(),c("svg",nt,lt)}const V=h(st,[["render",ct]]),it={class:"sidebar"},rt={class:"items"},dt={class:"icon-panel"},ut={class:"ico"},_t=e("div",{class:"flex-spacer"},null,-1),pt={__name:"SidebarView",setup(o){const t=C(),a=N(),i=async()=>{try{await t.logout(a)}catch(v){console.error(v)}};return(v,d)=>(n(),c("aside",it,[e("div",rt,[e("div",dt,[e("ul",ut,[e("li",null,[s(m,{link:{name:"home"}},{icon:r(()=>[s(Fe)]),default:r(()=>[g(" Home ")]),_:1})]),e("li",null,[s(m,{link:{name:"explore"}},{icon:r(()=>[s(Ie)]),default:r(()=>[g(" Explore ")]),_:1})]),e("li",null,[s(m,{link:{name:"notifications"}},{icon:r(()=>[s(ze)]),default:r(()=>[g(" Notifications ")]),_:1})]),e("li",null,[s(m,{link:{name:"profile"}},{icon:r(()=>[s(Ae)]),default:r(()=>[g(" Profile ")]),_:1})]),e("li",null,[s(m,{link:{name:"pricing"}},{icon:r(()=>[s(Oe)]),default:r(()=>[g(" Pro ")]),_:1})]),e("li",null,[s(m,{link:"",onClick:i},{icon:r(()=>[s(V)]),default:r(()=>[g(" Create Post ")]),_:1})]),e("li",null,[s(m,{link:"",onClick:i},{icon:r(()=>[s(ot)]),default:r(()=>[g(" Logout/Login ")]),_:1})])])])]),_t]))}},ht={class:"userbar"},vt=e("label",{for:"message",class:"block mb-2 text-sm font-medium text-white"},"What's on your mind?",-1),gt=e("i",{class:"fa fa-cloud-upload"},null,-1),ft={class:"sbutton",type:"submit",name:"submit"},mt={key:0,class:"text-red-500"},wt=e("div",{class:"flex-spacer"},null,-1),$t={class:"user"},xt={class:"user-image"},kt=["src"],yt={class:"user-info"},bt={__name:"UserSidebar",setup(o){const t=u(null),a=C(),i=u(""),v=u(!1),d=u(null),_=u(null),k=u("");async function f(l){console.log("uploading file");const p=await O(l);console.log(`file: ${p}`),console.log(`usernamr: ${a.user.username}`);const{data:$,error:y}=await d.value.storage.from("ItterMedia").upload(`/${a.user.username}/${D()}.webp`,p,{contentType:"image/webp"});y?(console.error("Error uploading file:",y),y.value=y):(console.log("File uploaded successfully:",$),k.value=await d.value.storage.from("ItterMedia").getPublicUrl($.path).data.publicUrl,console.log("Public URL:",k.value))}async function I(){v.value=!0,a.setCsrfToken(),_.value&&await f(_.value),console.log(`csrf from before post ${a.csrfToken}`);const p=await(await fetch("https://itter.pythonanywhere.com/api/create/post",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRFToken":a.csrfToken},body:JSON.stringify({content:i.value})})).json();p.error?(console.log(p.error),t.value=p.error):(console.log("success"),t.value=null,i.value="")}async function S(l){_.value=l.target.files[0]}function x(){document.getElementById("pi").click()}return(l,p)=>(n(),c("aside",ht,[e("form",{class:"mx-auto",onSubmit:R(I,["prevent"]),method:"post"},[vt,H(e("textarea",{id:"message ",rows:"4","onUpdate:modelValue":p[0]||(p[0]=$=>l.content=$),class:"block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500",placeholder:"What's on your mind...",name:"message",required:""},null,512),[[E,l.content]]),e("label",{for:"pi",onClick:x},[gt,g(" Upload Image "),e("input",{style:{padding:"0px"},onChange:p[1]||(p[1]=$=>S($)),placeholder:"profile_image",id:"pi",type:"file",name:"profile_image",accept:"image/*",class:"textInput",capture:""},null,32)]),e("button",ft,[v.value?(n(),T(X,{key:0})):b("",!0),g(" Create Post ")])],32),t.value?(n(),c("p",mt,w(t.value),1)):b("",!0),wt,e("div",$t,[e("div",xt,[e("img",{src:P(a).user.profile_image,alt:"User Profile Image"},null,8,kt)]),e("div",yt,[e("h2",null,w(P(a).user.username),1),e("p",null,w(P(a).user.email),1)])])]))}},Ct={class:"structure"},It={class:"usersidebar-wrapper"},St={class:"feedarea"},Pt=e("div",{class:"h-2"},null,-1),Bt={class:"sidebar-wrapper"},Mt={__name:"HomeView",setup(o){const t=u([]),a=C(),i=u(!1);return M(async()=>{const d=await(await fetch("https://itter.pythonanywhere.com/api/feed/",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json","X-CSRFToken":a.csrfToken,"Accept-Encoding":"gzip, deflate, br"}})).json();t.value=d.posts,console.log(t)}),(v,d)=>(n(),c(A,null,[e("div",Ct,[e("div",It,[s(bt)]),e("main",St,[Pt,(n(!0),c(A,null,q(t.value,_=>(n(),c("div",{class:"post",key:_.post_id},[s(ve,{post_id:_.post_id},null,8,["post_id"])]))),128)),e("button",{class:"create-post-button",onClick:d[0]||(d[0]=_=>i.value=!i.value)},[s(V)])]),e("div",Bt,[s(pt)])]),i.value?(n(),T(G,{key:0,onClose:d[1]||(d[1]=_=>i.value=!1)})):b("",!0)],64))}};export{Mt as default};
