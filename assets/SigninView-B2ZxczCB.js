import{r,u as w,b as f,c as u,d as e,n as x,m as c,v as d,t as g,g as b,k as p,e as y,w as V,i as k,o as m,l as S}from"./index-Bek3DcxR.js";const I={class:"form-holder"},N={class:"form-box"},B=e("span",{class:"title"},"Register",-1),C={class:"textInputWrapper"},D=e("label",{for:"email"},"E-mail",-1),E={class:"textInputWrapper"},M=e("label",{for:"password"},"Password",-1),R=e("button",{class:"sbutton",type:"submit"},"Login",-1),U={key:0},T={__name:"SigninView",setup(q){const s=r(""),o=r(""),n=r(""),l=w(),_=S(),v=async()=>{try{await l.login(s.value,o.value,_)}catch(i){console.error(i)}};return f(async()=>{await l.fetchUser()}),(i,t)=>{const h=k("router-link");return m(),u("div",I,[e("div",N,[B,e("form",{onSubmit:x(v,["prevent"]),class:"form"},[e("div",C,[D,c(e("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>s.value=a),placeholder:"E-mail",type:"email",id:"email",name:"email",class:"textInput",required:""},null,512),[[d,s.value]])]),e("div",E,[M,c(e("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>o.value=a),placeholder:"Password",id:"password",type:"password",name:"password",class:"textInput",required:""},null,512),[[d,o.value]])]),R],32),n.value?(m(),u("p",U,g(n.value),1)):b("",!0),e("p",null,[p("Don't have an account? "),y(h,{to:{name:"signup"}},{default:V(()=>[p("Register")]),_:1})])])])}}};export{T as default};
