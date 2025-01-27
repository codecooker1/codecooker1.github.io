import{_,o as n,c as i,a as F,r,i as P,u as k,b as B,d as e,e as l,t as w,f as M,g as C,p as U,h as T,j as N,k as V,w as u,l as g,m as J,n as E,v as H,q as R,F as L,s as X}from"./index-JY-erecz.js";import{c as Y,a as q,n as O}from"./index-DSjVgXEk.js";import{I as z,C as D}from"./CreatePost-CyS-f0X1.js";const G=["src"],W={__name:"ProfileIcon",props:["picUrl"],setup(t){const s=t;return(a,c)=>(n(),i("img",{src:s.picUrl,width:"42",height:"42",alt:"profile_pic"},null,8,G))}},K=_(W,[["__scopeId","data-v-df9a41f0"]]),Q={},ee={title:"Like",class:"heart-container"},te=F('<input id="Give-It-An-Id" class="checkbox" type="checkbox" data-v-d730ac81><div class="svg-container" data-v-d730ac81><svg xmlns="http://www.w3.org/2000/svg" class="svg-outline" viewBox="0 0 24 24" data-v-d730ac81><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" data-v-d730ac81></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="svg-filled" viewBox="0 0 24 24" data-v-d730ac81><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" data-v-d730ac81></path></svg><svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="svg-celebrate" data-v-d730ac81><polygon points="10,10 20,20" data-v-d730ac81></polygon><polygon points="10,50 20,50" data-v-d730ac81></polygon><polygon points="20,80 30,70" data-v-d730ac81></polygon><polygon points="90,10 80,20" data-v-d730ac81></polygon><polygon points="90,50 80,50" data-v-d730ac81></polygon><polygon points="80,80 70,70" data-v-d730ac81></polygon></svg></div>',2),se=[te];function oe(t,s){return n(),i("div",ee,se)}const ne=_(Q,[["render",oe],["__scopeId","data-v-d730ac81"]]),A=t=>(U("data-v-90984e81"),t=t(),T(),t),ae={class:"poster-info"},le={class:"info"},ce={class:"handle"},ie={class:"main-post"},re=A(()=>e("br",null,null,-1)),de=A(()=>e("br",null,null,-1)),ue={key:0,class:"media-gallery"},_e=["src"],pe=A(()=>e("div",{class:"h-2"},null,-1)),he={class:"action-bar"},ve={class:"action-btn"},me={__name:"SinglePost",props:["post_id"],setup(t){const s=r("default_name"),a=r("default_handle"),c=r(""),p=r(""),v=r(""),d=r(0),h=P("hostname"),S=k(),f=t;async function j(){console.log(f.post_id);const o=await(await fetch(`${h}/api/post/detail/${f.post_id}`)).json();s.value=o.user.first_name+" "+o.user.last_name,a.value=o.user.username,c.value=o.user.profile_image,p.value=o.content,v.value=o.image,d.value=o.likes}B(async()=>{j(),setInterval(y,5e4)});async function Z(){console.log(f.post_id);const o=await(await fetch(`${h}/api/like/post/`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRFToken":S.csrfToken},body:JSON.stringify({post_id:f.post_id})})).json();console.log(o),y()}async function y(){const o=await(await fetch(`${h}/api/post/detail/${f.post_id}`)).json();d.value=o.likes}return(m,o)=>(n(),i("article",null,[e("div",ae,[l(K,{picUrl:c.value},null,8,["picUrl"]),e("div",le,[e("p",null,w(s.value),1),e("p",ce,"@"+w(a.value),1)])]),e("div",ie,[M(m.$slots,"default",{},()=>[re,e("div",null,w(p.value),1),de])]),v.value?(n(),i("div",ue,[e("img",{src:v.value,alt:"Unable to load Image"},null,8,_e)])):C("",!0),pe,e("div",he,[e("div",ve,[l(ne,{onClick:Z}),e("p",null,w(d.value),1)])])]))}},ge=_(me,[["__scopeId","data-v-90984e81"]]),fe=t=>(U("data-v-8ec19c3e"),t=t(),T(),t),we={class:"transition duration-75 text-gray-400 group-hover:text-white"},$e=fe(()=>e("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 22 21"},[e("path",{d:"M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"}),e("path",{d:"M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"})],-1)),xe={class:"ms-5 text-2xl btn-text"},ke={__name:"SidebarButton",props:["link"],setup(t){return(s,a)=>{const c=N("router-link");return n(),V(c,{to:t.link,class:"flex items-center p-2 rounded-3xl hover:bg-gray-700 group"},{default:u(()=>[e("div",we,[M(s.$slots,"icon",{},()=>[$e],!0)]),e("span",xe,[M(s.$slots,"default",{},()=>[g("Dashboards")],!0)])]),_:3},8,["to"])}}},x=_(ke,[["__scopeId","data-v-8ec19c3e"]]),be={},ye={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},Ie=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-width":"2.3",d:"m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"},null,-1),Ce=[Ie];function Se(t,s){return n(),i("svg",ye,Ce)}const je=_(be,[["render",Se]]),Ze={},Me={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},Pe=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.3",d:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},null,-1),Be=[Pe];function Ue(t,s){return n(),i("svg",Me,Be)}const Te=_(Ze,[["render",Ue]]),Ve={},Ae={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},Le=e("path",{"fill-rule":"evenodd",d:"M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z","clip-rule":"evenodd"},null,-1),Fe=[Le];function Ne(t,s){return n(),i("svg",Ae,Fe)}const Je=_(Ve,[["render",Ne]]),Ee={},He={class:"w-[36px] h-[36px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},Re=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.3",d:"m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"},null,-1),Xe=[Re];function Ye(t,s){return n(),i("svg",He,Xe)}const qe=_(Ee,[["render",Ye]]),Oe={},ze={class:"w-[46px] h-[46px]","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"46",height:"46",fill:"none",viewBox:"0 0 24 24"},De=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.3",d:"m10.827 5.465-.435-2.324m.435 2.324a5.338 5.338 0 0 1 6.033 4.333l.331 1.769c.44 2.345 2.383 2.588 2.6 3.761.11.586.22 1.171-.31 1.271l-12.7 2.377c-.529.099-.639-.488-.749-1.074C5.813 16.73 7.538 15.8 7.1 13.455c-.219-1.169.218 1.162-.33-1.769a5.338 5.338 0 0 1 4.058-6.221Zm-7.046 4.41c.143-1.877.822-3.461 2.086-4.856m2.646 13.633a3.472 3.472 0 0 0 6.728-.777l.09-.5-6.818 1.277Z"},null,-1),Ge=[De];function We(t,s){return n(),i("svg",ze,Ge)}const Ke=_(Oe,[["render",We]]),Qe={},et={class:"w-[36px] h-[36px] text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},tt=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 12h4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},null,-1),st=[tt];function ot(t,s){return n(),i("svg",et,st)}const nt=_(Qe,[["render",ot]]),at={class:"sidebar"},lt={class:"items"},ct={class:"icon-panel"},it={class:"ico"},rt=e("div",{class:"flex-spacer"},null,-1),dt={__name:"SidebarView",setup(t){const s=k(),a=J(),c=async()=>{try{await s.logout(a)}catch(p){console.error(p)}};return(p,v)=>(n(),i("aside",at,[e("div",lt,[e("div",ct,[e("ul",it,[e("li",null,[l(x,{link:{name:"home"}},{icon:u(()=>[l(Je)]),default:u(()=>[g(" Home ")]),_:1})]),e("li",null,[l(x,{link:{name:"explore"}},{icon:u(()=>[l(je)]),default:u(()=>[g(" Explore ")]),_:1})]),e("li",null,[l(x,{link:{name:"notifications"}},{icon:u(()=>[l(Ke)]),default:u(()=>[g(" Notifications ")]),_:1})]),e("li",null,[l(x,{link:{name:"profile"}},{icon:u(()=>[l(Te)]),default:u(()=>[g(" Profile ")]),_:1})]),e("li",null,[l(x,{link:{name:"pricing"}},{icon:u(()=>[l(qe)]),default:u(()=>[g(" Pro ")]),_:1})]),e("li",null,[l(x,{link:"",onClick:c},{icon:u(()=>[l(nt)]),default:u(()=>[g(" Logout/Login ")]),_:1})])])])]),rt]))}},b=t=>(U("data-v-c191caaa"),t=t(),T(),t),ut={class:"userbar"},_t=b(()=>e("label",{for:"message",class:"block mb-2 text-sm font-medium text-white"},"What's on your mind?",-1)),pt=b(()=>e("i",{class:"fa fa-cloud-upload"},null,-1)),ht=b(()=>e("br",null,null,-1)),vt=b(()=>e("br",null,null,-1)),mt={class:"sbutton",type:"submit",name:"submit"},gt={key:0,class:"text-red-500"},ft=b(()=>e("div",{class:"flex-spacer"},null,-1)),wt={class:"user"},$t={class:"user-image"},xt=["src"],kt={class:"user-info"},bt={__name:"UserSidebar",setup(t){const s=r(null),a=r(k()),c=r(""),p=r(!1),v=r(null),d=r(null),h=r(""),S=P("hostname");async function f(m){console.log("uploading file");const o=await q(m);console.log(`file: ${o}`),console.log(`usernamr: ${a.value.user.username}`);const{data:$,error:I}=await v.value.storage.from("ItterMedia").upload(`/${a.value.user.username}/${O()}.webp`,o,{contentType:"image/webp"});I?(console.error("Error uploading file:",I),I.value=I):(console.log("File uploaded successfully:",$),h.value=await v.value.storage.from("ItterMedia").getPublicUrl($.path).data.publicUrl,console.log("Public URL:",h.value))}async function j(){p.value=!0,a.value.setCsrfToken(),d.value&&await f(d.value),console.log(`csrf from before post ${a.value.csrfToken}`);const o=await(await fetch(`${S}/api/create/post`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRFToken":a.value.csrfToken},body:JSON.stringify({content:c.value})})).json();o.error?(console.log(o.error),s.value=o.error):(console.log("success"),s.value=null,c.value=""),p.value=!1}async function Z(m){d.value=m.target.files[0]}function y(){document.getElementById("pi").click()}return B(async()=>{a.value=k(),a.value.fetchUser(),v.value=Y("https://jzydvbxwyynlezjnqbbd.supabase.co/","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6eWR2Ynh3eXlubGV6am5xYmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwNDY3MjEsImV4cCI6MjA0MDYyMjcyMX0.kY7-gqw6RK42QZZ46WrNw9YLD3qmK9Ct9G-9NuHuW8w")}),(m,o)=>(n(),i("aside",ut,[e("form",{class:"mx-auto",onSubmit:R(j,["prevent"]),method:"post"},[_t,E(e("textarea",{id:"message ",rows:"4","onUpdate:modelValue":o[0]||(o[0]=$=>c.value=$),class:"block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500",placeholder:"What's on your mind...",name:"message",required:""},null,512),[[H,c.value]]),e("label",{for:"pi",onClick:y},[pt,g(" Upload Image "),e("input",{style:{padding:"0px"},onChange:o[1]||(o[1]=$=>Z($)),placeholder:"profile_image",id:"pi",type:"file",name:"profile_image",accept:"image/*",class:"textInput",capture:""},null,32)]),ht,vt,e("button",mt,[p.value?(n(),V(z,{key:0})):C("",!0),g(" Create Post ")])],32),s.value?(n(),i("p",gt,w(s.value),1)):C("",!0),ft,e("div",wt,[e("div",$t,[e("img",{src:a.value.user.profile_image,alt:"User Profile Image"},null,8,xt)]),e("div",kt,[e("h2",null,w(a.value.user.username),1),e("p",null,w(a.value.user.email),1)])])]))}},yt=_(bt,[["__scopeId","data-v-c191caaa"]]),It={},Ct={class:"w-[46px] h-[46px] text-gray-100","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"46",height:"46",fill:"none",viewBox:"0 0 24 24"},St=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z"},null,-1),jt=[St];function Zt(t,s){return n(),i("svg",Ct,jt)}const Mt=_(It,[["render",Zt]]),Pt={class:"structure"},Bt={class:"usersidebar-wrapper"},Ut={class:"feedarea"},Tt=e("div",{class:"h-2"},null,-1),Vt={class:"sidebar-wrapper"},Nt={__name:"HomeView",setup(t){const s=r([]),a=k(),c=r(!1),p=P("hostname");return B(async()=>{const d=await(await fetch(`${p}/api/feed/`,{method:"GET",credentials:"include",headers:{"Content-Type":"application/json","X-CSRFToken":a.csrfToken,"Accept-Encoding":"gzip, deflate, br"}})).json();s.value=d.posts,console.log(s)}),(v,d)=>(n(),i(L,null,[e("div",Pt,[e("div",Bt,[l(yt)]),e("main",Ut,[Tt,(n(!0),i(L,null,X(s.value,h=>(n(),i("div",{class:"post",key:h.post_id},[l(ge,{post_id:h.post_id},null,8,["post_id"])]))),128)),e("button",{class:"create-post-button",onClick:d[0]||(d[0]=h=>c.value=!c.value)},[l(Mt)])]),e("div",Vt,[l(dt)])]),c.value?(n(),V(D,{key:0,onClose:d[1]||(d[1]=h=>c.value=!1)})):C("",!0)],64))}};export{Nt as default};
