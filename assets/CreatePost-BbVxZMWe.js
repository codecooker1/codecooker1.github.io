import{_ as h,o as n,c as m,a as C,u as x,r as o,b as S,d as a,n as _,m as M,v as j,j as J,g,k as y,t as N,p as P,h as U}from"./index-CHP-CpBA.js";import{a as V,c as Y,n as F}from"./index-CFrSDLsp.js";const T={},X={class:"loader"},$=C('<div class="bar1" data-v-7d1c0d64></div><div class="bar2" data-v-7d1c0d64></div><div class="bar3" data-v-7d1c0d64></div><div class="bar4" data-v-7d1c0d64></div><div class="bar5" data-v-7d1c0d64></div><div class="bar6" data-v-7d1c0d64></div><div class="bar7" data-v-7d1c0d64></div><div class="bar8" data-v-7d1c0d64></div><div class="bar9" data-v-7d1c0d64></div><div class="bar10" data-v-7d1c0d64></div><div class="bar11" data-v-7d1c0d64></div><div class="bar12" data-v-7d1c0d64></div>',12),z=[$];function B(d,l){return n(),m("div",X,z)}const D=h(T,[["render",B],["__scopeId","data-v-7d1c0d64"]]),b=d=>(P("data-v-d04477e9"),d=d(),U(),d),O={id:"create-post-modal"},R=b(()=>a("h2",{class:"title"},"Create a Post",-1)),Z=b(()=>a("label",{for:"message",class:"block mb-2 text-sm font-medium text-white"},null,-1)),q=b(()=>a("label",{for:"pi"},[a("i",{class:"fa fa-cloud-upload"}),y(" Upload Image")],-1)),E={class:"sbutton",type:"submit",name:"submit"},L={key:0,class:"text-red-500"},W={__name:"CreatePost",emits:["close"],setup(d){const l=x(),r=o(""),c=o(null),u=o(!1),f=o(null),p=o(null),v=o("");S(()=>{f.value=V("https://jzydvbxwyynlezjnqbbd.supabase.co/","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6eWR2Ynh3eXlubGV6am5xYmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwNDY3MjEsImV4cCI6MjA0MDYyMjcyMX0.kY7-gqw6RK42QZZ46WrNw9YLD3qmK9Ct9G-9NuHuW8w")});async function I(t){const e=await Y(t);console.log(l.user.username);const{data:s,error:i}=await f.value.storage.from("ItterMedia").upload(`/${l.user.username}`,""+F(),e);i?(console.error("Error uploading file:",i),i.value=i):(console.log("File uploaded successfully:",s),v.value=await this.supabase.storage.from("profilepics").getPublicUrl(s.path).data.publicUrl,console.log("Public URL:",v.value))}async function w(){u.value=!0,l.setCsrfToken(),p.value!==null&&await I(p.value);const e=await(await fetch("https://itter.pythonanywhere.com/api/create/post",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRFToken":l.csrfToken},body:JSON.stringify({content:r.value,media_url:v.value})})).json();e.error?(console.log(e.error),c.value=e.error):(console.log("success"),c.value=null,r.value=""),u.value=!1}async function k(t){p.value=t.target.files[0]}return(t,e)=>(n(),m("div",O,[a("div",{class:"create-post-background",onClick:e[3]||(e[3]=s=>t.$emit("close"))},[a("div",{class:"create-post",onClick:e[2]||(e[2]=_(()=>{},["stop"]))},[R,a("form",{onSubmit:_(w,["prevent"])},[Z,M(a("textarea",{"onUpdate:modelValue":e[0]||(e[0]=s=>r.value=s),placeholder:"What's on your mind?",class:"block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500",rows:"5",required:""},null,512),[[j,r.value]]),q,a("input",{style:{padding:"0px"},onChange:e[1]||(e[1]=s=>k(s)),placeholder:"profile_image",id:"pi",type:"file",name:"profile_image",accept:"image/*",class:"textInput",capture:""},null,32),a("button",E,[u.value?(n(),J(D,{key:0})):g("",!0),y(" Post ")])],32),c.value?(n(),m("p",L,N(c.value),1)):g("",!0)])])]))}},K=h(W,[["__scopeId","data-v-d04477e9"]]);export{K as default};
