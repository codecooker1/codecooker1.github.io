import{r,u as v,b as h,c as d,d as e,n as f,m as u,v as c,t as w,g as b,o as p,l as x}from"./index-CQhGeQuW.js";const y={class:"form-holder"},g={class:"form-box"},S=e("span",{class:"title"},"Register",-1),V={class:"textInputWrapper"},I=e("label",{for:"email"},"E-mail",-1),k={class:"textInputWrapper"},B=e("label",{for:"password"},"Password",-1),E=e("button",{class:"sbutton",type:"submit"},"Login",-1),M={key:0},D={__name:"SigninView",setup(U){const t=r(""),o=r(""),n=r(""),l=v(),m=x(),_=async()=>{try{await l.login(t.value,o.value,m)}catch(i){console.error(i)}};return h(async()=>{await l.fetchUser()}),(i,s)=>(p(),d("div",y,[e("div",g,[S,e("form",{onSubmit:f(_,["prevent"]),class:"form"},[e("div",V,[I,u(e("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>t.value=a),placeholder:"E-mail",type:"email",id:"email",name:"email",class:"textInput",required:""},null,512),[[c,t.value]])]),e("div",k,[B,u(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>o.value=a),placeholder:"Password",id:"password",type:"password",name:"password",class:"textInput",required:""},null,512),[[c,o.value]])]),E],32),n.value?(p(),d("p",M,w(n.value),1)):b("",!0)])]))}};export{D as default};
