import{_ as d,c,d as t,n as p,m as i,v as r,z as u,o as m,p as _,h as f}from"./index-CZWbstI6.js";const v={data(){return{isActive:!1,title:"",content:"",tags:""}},methods:{closeModal(){this.isActive=!1},createPost(){console.log("Creating post...")}}},l=n=>(_("data-v-f3524bd6"),n=n(),f(),n),x={class:"modal-content"},h={class:"form-holder"},b={class:"form-box"},g=l(()=>t("span",{class:"title"},"Create Post",-1)),I={class:"textInputWrapper"},C=l(()=>t("label",{for:"title"},"Title",-1)),P={class:"textInputWrapper"},M=l(()=>t("label",{for:"content"},"Content",-1)),k={class:"textInputWrapper"},E=l(()=>t("label",{for:"tags"},"Tags",-1)),S=l(()=>t("button",{class:"sbutton",type:"submit"},"Create Post",-1));function V(n,e,q,w,o,a){return m(),c("div",{class:u(["modal",{"is-active":o.isActive}])},[t("div",{class:"modal-background",onClick:e[0]||(e[0]=(...s)=>a.closeModal&&a.closeModal(...s))}),t("div",x,[t("div",h,[t("div",b,[g,t("form",{onSubmit:e[4]||(e[4]=p((...s)=>a.createPost&&a.createPost(...s),["prevent"])),class:"form"},[t("div",I,[C,i(t("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>o.title=s),placeholder:"Enter title",type:"text",id:"title",name:"title",class:"textInput",required:""},null,512),[[r,o.title]])]),t("div",P,[M,i(t("textarea",{"onUpdate:modelValue":e[2]||(e[2]=s=>o.content=s),placeholder:"Enter content",id:"content",name:"content",class:"textInput",required:""},null,512),[[r,o.content]])]),t("div",k,[E,i(t("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>o.tags=s),placeholder:"Enter tags (comma separated)",type:"text",id:"tags",name:"tags",class:"textInput",required:""},null,512),[[r,o.tags]])]),S],32)])])])],2)}const A=d(v,[["render",V],["__scopeId","data-v-f3524bd6"]]);export{A as default};
