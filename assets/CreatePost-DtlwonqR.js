import{_ as I,o as u,c as b,d as S,e as j,r as l,a as M,b as a,y as _,v as P,x as $,q as h,n as U,j as y,t as F,k as J,l as N,i as T}from"./index-CuUFbPYt.js";import{c as O,a as V,n as Y}from"./index-DVI9koYg.js";const R={},z={class:"loader"},B=S('<div class="bar1" data-v-7a60e003></div><div class="bar2" data-v-7a60e003></div><div class="bar3" data-v-7a60e003></div><div class="bar4" data-v-7a60e003></div><div class="bar5" data-v-7a60e003></div><div class="bar6" data-v-7a60e003></div><div class="bar7" data-v-7a60e003></div><div class="bar8" data-v-7a60e003></div><div class="bar9" data-v-7a60e003></div><div class="bar10" data-v-7a60e003></div><div class="bar11" data-v-7a60e003></div><div class="bar12" data-v-7a60e003></div>',12),L=[B];function X(i,g){return u(),b("div",z,L)}const q=I(R,[["render",X],["__scopeId","data-v-7a60e003"]]),f=i=>(J("data-v-3111c000"),i=i(),N(),i),D={id:"create-post-modal"},E=f(()=>a("h2",{class:"title"},"Create a Post",-1)),W=f(()=>a("label",{for:"message",class:"block mb-2 text-sm font-medium text-white"},null,-1)),Z={for:"pi-c"},G=f(()=>a("span",null,"Upload Image",-1)),A={class:"sbutton",type:"submit",name:"submit"},K={key:0,class:"text-red-500"},Q={__name:"CreatePost",emits:["close"],setup(i){const g=T("hostname"),n=j(),c=l(""),r=l(null),v=l(!1),p=l(null),t=l(null),m=l("");M(()=>{p.value=O("https://jzydvbxwyynlezjnqbbd.supabase.co/","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6eWR2Ynh3eXlubGV6am5xYmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwNDY3MjEsImV4cCI6MjA0MDYyMjcyMX0.kY7-gqw6RK42QZZ46WrNw9YLD3qmK9Ct9G-9NuHuW8w")});async function w(o){console.log("uploading file");const e=await V(o);console.log(`file: ${e}`),console.log(`usernamr: ${n.user.username}`);const{data:s,error:d}=await p.value.storage.from("ItterMedia").upload(`/${n.user.username}/${Y()}.webp`,e,{contentType:"image/webp"});d?(console.error("Error uploading file:",d),d.value=d):(console.log("File uploaded successfully:",s),m.value=await p.value.storage.from("ItterMedia").getPublicUrl(s.path).data.publicUrl,console.log("Public URL:",m.value))}async function k(){v.value=!0,n.setCsrfToken(),t.value!==null?await w(t.value):console.log("no file selected");const e=await(await fetch(`${g}/api/create/post`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRFToken":n.csrfToken},body:JSON.stringify({content:c.value,media_url:m.value})})).json();e.error?(console.log(e.error),r.value=e.error):(console.log("success"),r.value=null,c.value=""),v.value=!1}async function C(o){t.value=o.target.files[0];var e=null;if(t.value){if(!t.value.type.startsWith("image/")){r.value="Please select a Proper image.",t.value=null;return}e=URL.createObjectURL(t.value)}else e=null;console.log(`file: ${t.value}
link: ${e}`)}function x(){document.getElementById("pi-c").click()}return(o,e)=>(u(),b("div",D,[a("div",{class:"create-post-background",onClick:e[3]||(e[3]=s=>o.$emit("close"))},[a("div",{class:"create-post",onClick:e[2]||(e[2]=_(()=>{},["stop"]))},[E,a("form",{onSubmit:_(k,["prevent"])},[W,P(a("textarea",{"onUpdate:modelValue":e[0]||(e[0]=s=>c.value=s),placeholder:"What's on your mind?",class:"block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500",rows:"5",required:""},null,512),[[$,c.value]]),a("label",Z,[a("i",{class:"fa fa-cloud-upload",onClick:x}),h(),G,a("input",{style:{padding:"0px"},onChange:e[1]||(e[1]=s=>C(s)),placeholder:"profile_image",id:"pi-c",type:"file",name:"profile_image",accept:"image/*",class:"textInput",capture:""},null,32)]),a("button",A,[v.value?(u(),U(q,{key:0})):y("",!0),h(" Post ")])],32),r.value?(u(),b("p",K,F(r.value),1)):y("",!0)])])]))}},H=I(Q,[["__scopeId","data-v-3111c000"]]),te=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));export{H as C,q as I,te as a};
