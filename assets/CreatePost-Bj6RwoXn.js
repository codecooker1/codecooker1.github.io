import{_ as y,o as u,c as b,a as x,u as S,r as l,b as M,d as a,n as g,m as j,v as P,k as _,j as U,g as h,t as $,p as F,h as J}from"./index-C1dD9ML2.js";import{a as N,c as T,n as V}from"./index-CcUwy51l.js";const Y={},R={class:"loader"},B=x('<div class="bar1" data-v-7d1c0d64></div><div class="bar2" data-v-7d1c0d64></div><div class="bar3" data-v-7d1c0d64></div><div class="bar4" data-v-7d1c0d64></div><div class="bar5" data-v-7d1c0d64></div><div class="bar6" data-v-7d1c0d64></div><div class="bar7" data-v-7d1c0d64></div><div class="bar8" data-v-7d1c0d64></div><div class="bar9" data-v-7d1c0d64></div><div class="bar10" data-v-7d1c0d64></div><div class="bar11" data-v-7d1c0d64></div><div class="bar12" data-v-7d1c0d64></div>',12),L=[B];function O(d,c){return u(),b("div",R,L)}const X=y(Y,[["render",O],["__scopeId","data-v-7d1c0d64"]]),f=d=>(F("data-v-7d64b803"),d=d(),J(),d),z={id:"create-post-modal"},D=f(()=>a("h2",{class:"title"},"Create a Post",-1)),E=f(()=>a("label",{for:"message",class:"block mb-2 text-sm font-medium text-white"},null,-1)),W={for:"pi-c"},Z=f(()=>a("span",null,"Upload Image",-1)),q={class:"sbutton",type:"submit",name:"submit"},G={key:0,class:"text-red-500"},A={__name:"CreatePost",emits:["close"],setup(d){const c=S(),r=l(""),i=l(null),v=l(!1),p=l(null),t=l(null),m=l("");M(()=>{p.value=N("https://jzydvbxwyynlezjnqbbd.supabase.co/","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6eWR2Ynh3eXlubGV6am5xYmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwNDY3MjEsImV4cCI6MjA0MDYyMjcyMX0.kY7-gqw6RK42QZZ46WrNw9YLD3qmK9Ct9G-9NuHuW8w")});async function I(o){console.log("uploading file");const e=await T(o);console.log(`file: ${e}`),console.log(`usernamr: ${c.user.username}`);const{data:s,error:n}=await p.value.storage.from("ItterMedia").upload(`/${c.user.username}/${V()}.webp`,e,{contentType:"image/webp"});n?(console.error("Error uploading file:",n),n.value=n):(console.log("File uploaded successfully:",s),m.value=await p.value.storage.from("ItterMedia").getPublicUrl(s.path).data.publicUrl,console.log("Public URL:",m.value))}async function w(){v.value=!0,c.setCsrfToken(),t.value!==null?await I(t.value):console.log("no file selected");const e=await(await fetch("https://itter.pythonanywhere.com/api/create/post",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRFToken":c.csrfToken},body:JSON.stringify({content:r.value,media_url:m.value})})).json();e.error?(console.log(e.error),i.value=e.error):(console.log("success"),i.value=null,r.value=""),v.value=!1}async function k(o){t.value=o.target.files[0];var e=null;if(t.value){if(!t.value.type.startsWith("image/")){i.value="Please select a Proper image.",t.value=null;return}e=URL.createObjectURL(t.value)}else e=null;console.log(`file: ${t.value}
link: ${e}`)}function C(){document.getElementById("pi-c").click()}return(o,e)=>(u(),b("div",z,[a("div",{class:"create-post-background",onClick:e[3]||(e[3]=s=>o.$emit("close"))},[a("div",{class:"create-post",onClick:e[2]||(e[2]=g(()=>{},["stop"]))},[D,a("form",{onSubmit:g(w,["prevent"])},[E,j(a("textarea",{"onUpdate:modelValue":e[0]||(e[0]=s=>r.value=s),placeholder:"What's on your mind?",class:"block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500",rows:"5",required:""},null,512),[[P,r.value]]),a("label",W,[a("i",{class:"fa fa-cloud-upload",onClick:C}),_(),Z,a("input",{style:{padding:"0px"},onChange:e[1]||(e[1]=s=>k(s)),placeholder:"profile_image",id:"pi-c",type:"file",name:"profile_image",accept:"image/*",class:"textInput",capture:""},null,32)]),a("button",q,[v.value?(u(),U(X,{key:0})):h("",!0),_(" Post ")])],32),i.value?(u(),b("p",G,$(i.value),1)):h("",!0)])])]))}},H=y(A,[["__scopeId","data-v-7d64b803"]]);export{H as default};
