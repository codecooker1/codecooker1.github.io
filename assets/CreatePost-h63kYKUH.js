import{_ as b,o as d,c as l,a as m,u as h,r as n,d as a,n as u,m as g,v as k,j as y,g as p,k as x,t as S,p as C,h as w}from"./index-omQJ9jrG.js";const T={},P={class:"loader"},I=m('<div class="bar1" data-v-a7006477></div><div class="bar2" data-v-a7006477></div><div class="bar3" data-v-a7006477></div><div class="bar4" data-v-a7006477></div><div class="bar5" data-v-a7006477></div><div class="bar6" data-v-a7006477></div><div class="bar7" data-v-a7006477></div><div class="bar8" data-v-a7006477></div><div class="bar9" data-v-a7006477></div><div class="bar10" data-v-a7006477></div><div class="bar11" data-v-a7006477></div><div class="bar12" data-v-a7006477></div>',12),$=[I];function N(t,s){return d(),l("div",P,$)}const V=b(T,[["render",N],["__scopeId","data-v-a7006477"]]),_=t=>(C("data-v-67d8fb74"),t=t(),w(),t),B={id:"create-post-modal"},j=_(()=>a("h2",null,"Create a Post",-1)),D=_(()=>a("label",{for:"message",class:"block mb-2 text-sm font-medium text-white"},null,-1)),M={class:"sbutton",type:"submit",name:"submit"},O={key:0,class:"text-red-500"},q={__name:"CreatePost",emits:["close"],setup(t){const s=h(),o=n(""),r=n(null),c=n(!1);async function f(){c.value=!0,s.setCsrfToken(),console.log(`csrf from before post ${s.csrfToken}`);const e=await(await fetch("https://itter.pythonanywhere.com/api/create/post",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRFToken":s.csrfToken},body:JSON.stringify({content:o.value})})).json();e.error?(console.log(e.error),r.value=e.error):(console.log("success"),r.value=null,o.value=""),c.value=!1}return(i,e)=>(d(),l("div",B,[a("div",{class:"create-post-background",onClick:e[2]||(e[2]=v=>i.$emit("close"))},[a("div",{class:"create-post",onClick:e[1]||(e[1]=u(()=>{},["stop"]))},[j,a("form",{onSubmit:u(f,["prevent"])},[D,g(a("textarea",{"onUpdate:modelValue":e[0]||(e[0]=v=>o.value=v),placeholder:"What's on your mind?",class:"block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500",required:""},null,512),[[k,o.value]]),a("button",M,[c.value?(d(),y(V,{key:0})):p("",!0),x(" Post")])],32),r.value?(d(),l("p",O,S(r.value),1)):p("",!0)])])]))}},E=b(q,[["__scopeId","data-v-67d8fb74"]]);export{E as default};
