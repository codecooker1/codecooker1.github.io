import{_ as b,o as l,c as u,a as g,u as y,r as i,b as I,d as a,n as v,m as k,v as C,j as w,g as m,k as f,t as x,p as S,h as j}from"./index-Cj_HOKnB.js";import{c as M}from"./index-4T7ZrXX-.js";const J={},N={class:"loader"},T=g('<div class="bar1" data-v-a7006477></div><div class="bar2" data-v-a7006477></div><div class="bar3" data-v-a7006477></div><div class="bar4" data-v-a7006477></div><div class="bar5" data-v-a7006477></div><div class="bar6" data-v-a7006477></div><div class="bar7" data-v-a7006477></div><div class="bar8" data-v-a7006477></div><div class="bar9" data-v-a7006477></div><div class="bar10" data-v-a7006477></div><div class="bar11" data-v-a7006477></div><div class="bar12" data-v-a7006477></div>',12),V=[T];function Y(s,t){return l(),u("div",N,V)}const P=b(J,[["render",Y],["__scopeId","data-v-a7006477"]]),p=s=>(S("data-v-d223a167"),s=s(),j(),s),X={id:"create-post-modal"},$=p(()=>a("h2",null,"Create a Post",-1)),q=p(()=>a("label",{for:"message",class:"block mb-2 text-sm font-medium text-white"},null,-1)),z=p(()=>a("label",{for:"pi"},[a("i",{class:"fa fa-cloud-upload"}),f(" Upload Image")],-1)),B={class:"sbutton",type:"submit",name:"submit"},D={key:0,class:"text-red-500"},O={__name:"CreatePost",emits:["close"],setup(s){const t=y(),o=i(""),r=i(null),n=i(!1),_=i(null);I(()=>{_.value=M("https://jzydvbxwyynlezjnqbbd.supabase.co/","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6eWR2Ynh3eXlubGV6am5xYmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwNDY3MjEsImV4cCI6MjA0MDYyMjcyMX0.kY7-gqw6RK42QZZ46WrNw9YLD3qmK9Ct9G-9NuHuW8w")});async function h(){n.value=!0,t.setCsrfToken(),console.log(`csrf from before post ${t.csrfToken}`);const e=await(await fetch("https://itter.pythonanywhere.com/api/create/post",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRFToken":t.csrfToken},body:JSON.stringify({content:o.value})})).json();e.error?(console.log(e.error),r.value=e.error):(console.log("success"),r.value=null,o.value=""),n.value=!1}return(c,e)=>(l(),u("div",X,[a("div",{class:"create-post-background",onClick:e[3]||(e[3]=d=>c.$emit("close"))},[a("div",{class:"create-post",onClick:e[2]||(e[2]=v(()=>{},["stop"]))},[$,a("form",{onSubmit:v(h,["prevent"])},[q,k(a("textarea",{"onUpdate:modelValue":e[0]||(e[0]=d=>o.value=d),placeholder:"What's on your mind?",class:"block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500",required:""},null,512),[[C,o.value]]),z,a("input",{style:{padding:"0px"},onChange:e[1]||(e[1]=d=>c.handleFileUpload(d)),placeholder:"profile_image",id:"pi",type:"file",name:"profile_image",accept:"image/*",class:"textInput",required:"",capture:""},null,32),a("button",B,[n.value?(l(),w(P,{key:0})):m("",!0),f(" Post ")])],32),r.value?(l(),u("p",D,x(r.value),1)):m("",!0)])])]))}},F=b(O,[["__scopeId","data-v-d223a167"]]);export{F as default};
